interface Props {
  text: string;
  classes?: string;
  onClick(): void;
}

const Button: React.FC<Props> = ({ text, classes='', onClick }): JSX.Element => {
  return (
    <button
      className={`btn ${classes}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
