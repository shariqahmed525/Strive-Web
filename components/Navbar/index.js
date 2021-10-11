import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  let togglerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        const checkWindowWidth = window.innerWidth > 786 ? 100 : 50;
        setScrolled(window.pageYOffset > checkWindowWidth);
      });
    }
  }, []);

  const _toggler = () => {
    togglerRef?.current?.classList?.toggle?.("nav-change");
  };

  return (
    <div className="navbar fixed left-0 right-0 top-0">
      <div className="container min-h-90 px-5 md:px-20 2xl:px-40 flex justify-between items-center">
        <a href="#" className="text-white font-normal text-2xl 2xl:text-3xl">
          Strive.
        </a>
        <div
          ref={togglerRef}
          onClick={_toggler}
          className="navbar-toggle cursor-pointer"
        >
          <span className="text-white bar-1"></span>
          <span className="text-white bar-2"></span>
          <span className="text-white bar-3"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
