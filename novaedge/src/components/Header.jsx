import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      {/* flex aur justify-between se logo left mein aur links right mein ho jayenge */}
      <header className="flex justify-between items-center px-10 py-4 bg-blue-500 shadow-sm">
        {/* Logo Section */}
        <h2 className="bg-amber-300 px-4 py-2 font-bold rounded text-xl">
          NovaEdge Digital Labs
        </h2>

        {/* Navigation Links - Yahan bhi flex chahiye taaki links line mein aayein */}
        <div className="flex gap-8 font-medium">
          <h3 className="cursor-pointer hover:text-amber-600">About</h3>
          <h3 className="cursor-pointer hover:text-amber-600">Services</h3>
          <h3 className="cursor-pointer hover:text-amber-600">Careers</h3>
          <h3 className="cursor-pointer hover:text-amber-600">Contact</h3>
        </div>
      </header>
    </div>
  );
};

export default Header;
