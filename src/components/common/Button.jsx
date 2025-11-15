import PropTypes from "prop-types";

export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "px-4 py-2 rounded-md font-semibold focus:outline-none transition";
  const map = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline: "border border-neutralDark text-neutralDark bg-transparent hover:bg-neutralLight"
  };
  return (
    <button className={`${base} ${map[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["primary","secondary","outline"]),
  className: PropTypes.string
};