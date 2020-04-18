import Link from "next/link";

const Button = (props) => (
  <div
    className={`${
      props.primary ? "bg-primary " : props.secondary ? "bg-secondary" : ""
    } ${props.style} text-white py-2 px-4 rounded-md `}
  >
    <Link href={props.url}>{props.name}</Link>
  </div>
);

export default Button;
