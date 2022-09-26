// LIBRARIES
import React from "react";

// MY COMPONENTS

interface HeaderDrawerProps {
  children?: React.ReactNode;
}

// FC
const HeaderDrawer = ({ children }: HeaderDrawerProps) => {
  return (
    <div className="drawer drawer-end">
      <input id="theme-drawer" type="checkbox" className="drawer-toggle" />
      <div
        // Page Content Here
        className="drawer-content"
      >
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="theme-drawer" className="drawer-overlay" />
        <div
          // Drawer Content Here
          className="menu w-80 gap-2 border-l-4 border-solid border-accent bg-base-100 p-3"
        >
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
            <li>Option 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HeaderDrawer;
