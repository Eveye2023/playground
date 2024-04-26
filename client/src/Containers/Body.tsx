import React, { ReactNode } from "react";

interface HeaderProps {
    children: ReactNode
}
function Body({children}: HeaderProps) {
    return (
      <div className="body">
        {children}
      </div>
    );
  }
  
  export default Body;