interface IInputError {
  isError: boolean;
  message: string;
}

const InputError: React.FC<IInputError> = ({ isError, message }) => {
  if (!isError) return null;
  return <div className="c-input-error-message">{message}</div>;
};

export default InputError;
