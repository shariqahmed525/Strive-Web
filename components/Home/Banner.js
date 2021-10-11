import React from "react";

const Banner = () => {
  return (
    <div
      style={{ backgroundPosition: "left 50% bottom" }}
      className="bg-home-banner min-h-screen bg-no-repeat bg-cover"
    >
      <div className="w-full bg-black bg-opacity-20 min-h-screen flex flex-col justify-center items-center">
        <div className="container px-10 md:px-20 lg:px-40 2xl:px-52 grid grid-cols-1 xl:grid-cols-2 gap-2 lines-style-3">
          <h1 className="text-white text-5xl 2xl:text-7xl sm:text-6xl font-medium">
            We build creative experiences.
          </h1>
          <div className="line text-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
