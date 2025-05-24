import React from "react";

export const NavigationMenu = ({ className = "", children }) => (
  <nav className={className}>{children}</nav>
);

export const NavigationMenuList = ({ className = "", children }) => (
  <ul className={className}>{children}</ul>
);

export const NavigationMenuItem = ({ children }) => (
  <li>{children}</li>
);

export const NavigationMenuLink = ({ href, className = "", children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);
