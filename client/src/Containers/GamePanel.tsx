import React, { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}
function GamePanel({ children }: HeaderProps) {
  return <div className="game-panel">{children}</div>;
}

export default GamePanel;
