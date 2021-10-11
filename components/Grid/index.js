import React from "react";

const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 col-end-13 2xl:col-start-3 2xl:col-end-8 md:col-start-2 md:col-end-10">
        {children}
      </div>
    </div>
  );
};

export default Grid;
