import React from "react";
import ModeToggle from "./layout/mode-toggle";

const NavbarActions = () => {
  return (
    <div className="items-center gap-2 flex">
      <div className="hidden lg:block">
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavbarActions;
