import "./Link.css";
import App from "../App";
// props = { href: string, name: string}
export function Link(props) {
  const href = props.href;
  const name = props.name;
  const handleClick = () => console.log("Hi");
  return (
    <p onClick={handleClick}>
      {/* <a href={href}>Single sign-on</a> to see activity within the{" "} */}
      <Paragraph onParagraphClick={handleClick} text="Click me" />
      <strong>{name}</strong> organization.
    </p>
  );
}

function Paragraph(props) {
  return <p onClick={props.onParagraphClick}>{props.text}</p>;
}
