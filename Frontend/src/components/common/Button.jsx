import { Loader2 } from "lucide-react";

export default function Button(props) {

  const children = props.children;
  const variant = props.variant || "primary";
  const size = props.size || "md";
  const Icon = props.icon;
  const iconOnly = props.iconOnly || false;
  const loading = props.loading || false;
  const Component = props.as || "button";
  const className = props.className || "";

  let sizeClass = "";

  if (size === "sm") {
    sizeClass = "btn-sm";
  } else if (size === "lg") {
    sizeClass = "btn-lg";
  }

  let iconOnlyClass = "";

  if (iconOnly) {
    iconOnlyClass = "btn-icon";
  }

  return (
    <Component
      className={`btn btn-${variant} ${sizeClass} ${iconOnlyClass} ${className}`}
      disabled={loading || props.disabled}
    >
      {loading && (
        <Loader2 size={16} className="btn-spin" />
      )}

      {!loading && Icon && (
        <Icon size={16} />
      )}

      {!iconOnly && children}
    </Component>
  );
}