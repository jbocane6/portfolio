import React from "react";
export const Card = ({ className = "", children }) => {
  return (
    <div
      className={`rounded-lg shadow-md bg-black ${className}`}
      style={{
        border: "1px solid",
        borderImage: "linear-gradient(90deg, #484848 0%, #1B1B1B00 100%) 1",
        width: "445px",
        height: "212px",
      }}
    >
      {children}
    </div>
  );
};
export const CardContent = ({ className = "", children }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};