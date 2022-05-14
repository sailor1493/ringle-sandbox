const CustomInput = ({ title, onContentChange }) => {
  return (
    <>
      <span>{title}</span>
      <input onChange={(e) => onContentChange(e)} />
    </>
  );
};

export default CustomInput;
