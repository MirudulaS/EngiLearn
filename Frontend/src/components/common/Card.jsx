export default function Card(props) {

  const children = props.children;
  const interactive = props.interactive || false;
  const className = props.className || "";

  const rest = {
    ...props
  };

  let interactiveClass = "";

  if (interactive) {
    interactiveClass = "card-interactive";
  }

  return (
    <div className={`card ${interactiveClass} ${className}`}>
      {children}
    </div>
  );
}