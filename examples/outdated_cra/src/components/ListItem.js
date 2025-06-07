export function ListItem(props) {
  const { description, deadline } = props;
  return (
    <li>
      {description}, deadline: {deadline}
    </li>
  );
}
