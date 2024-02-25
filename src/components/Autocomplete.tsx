import React, { useState, useEffect, useRef } from "react";

interface AutocompleteProps {
  options: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ options }) => {
  console.log({ options });
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [showOptions, setShowSuggestions] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    setInputValue(userInput);
    if (!userInput.trim()) {
      setShowSuggestions(false);
      return;
    }
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowSuggestions(true);
  };

  const handleOptionClick = (option: string) => {
    if (!selectedItems.includes(option)) {
      setSelectedItems([...selectedItems, option]);
    }
    setInputValue("");
    setFilteredOptions([]);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Logic for keyboard navigation goes here
  };

  const removeSelectedItem = (item: string) => {
    setSelectedItems(
      selectedItems.filter((selectedItem) => selectedItem !== item)
    );
  };

  return (
    <div className="relative w-full max-w-xl">
      <div className="flex flex-wrap gap-2 p-2 items-center border border-gray-300 rounded">
        {selectedItems.map((item) => (
          <div
            key={item}
            className="badge badge-primary cursor-pointer"
            onClick={() => removeSelectedItem(item)}
          >
            {item}{" "}
            <span className="ml-2" style={{ cursor: "pointer" }}>
              x
            </span>
          </div>
        ))}
        <input
          type="text"
          className="flex-1 p-1"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
          ref={inputRef}
          style={{ outline: "none", border: "none" }}
        />
      </div>
      {showOptions && inputValue && (
        <ul className="absolute z-10 w-full bg-white shadow-md max-h-60 overflow-auto mt-1">
          {filteredOptions.map((filteredOption) => (
            <li
              className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white"
              key={filteredOption}
              onClick={() => handleOptionClick(filteredOption)}
            >
              {filteredOption}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
