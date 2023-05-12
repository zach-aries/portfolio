import Image from "next/image";

interface Props {
  name: string;
  alt: string;
}

const Icon = (props: Props) => {
  const { name, alt } = props;

  return <Image src={`tech-icons/${name}.png`} alt={alt} fill />;
};

export default Icon;
