interface Props {
  classes?: string;
  alt: string;
  src: string;
}

const Image: React.FC<Props> = ({ classes='', alt, src }): JSX.Element => {
  return (
    <img
      className={`img-fluid ${classes}`}
      alt={alt}
      src={src}
    />
  );
}

export default Image;
