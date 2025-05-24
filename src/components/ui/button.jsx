import React from "react";
export const Button = React.forwardRef(({ className = "", children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`px-4 py-2 rounded font-semibold transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";
