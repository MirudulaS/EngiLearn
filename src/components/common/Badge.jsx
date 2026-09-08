export default function Badge(props) {
  const children = props.children;
  const variant = props.variant || "neutral";
  const difficulty = props.difficulty;
  const className = props.className || "";

  let badgeClass;

  if (difficulty) {
    badgeClass = `badge-difficulty-${difficulty}`;
  } else {
    badgeClass = `badge-${variant}`;
  }

  return (
    <span className={`badge ${badgeClass} ${className}`}>
      {children}
    </span>
  );
}