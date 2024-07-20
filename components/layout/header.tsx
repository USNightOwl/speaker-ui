import React from "react";
import Logo from "../logo";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl p-1 md:p-4">
      <div className="flex items-center justify-between rounded-lg bg-neutral-50/50 p-2 md:p-4 dark:bg-neutral-950/30 backdrop-blur-md">
        <Logo />
        Hello
      </div>
    </header>
  );
};

export default Header;
