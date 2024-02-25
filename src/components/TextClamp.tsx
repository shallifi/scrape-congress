const TextClamp = ({ text, lines = 3 }) => {
  return (
    <div
      style={{
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitLineClamp: lines,
      }}
    >
      {text}
    </div>
  );
};

export default TextClamp;
