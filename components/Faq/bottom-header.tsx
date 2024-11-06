import Button from "../UI/button";
import React from "react";

const BottomHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-20 mb-20 px-4 py-10 rounded-lg bg-custom-gradient w-full">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-white font-bold text-[36px] leading-[40px] tracking-[0.005em] font-inter mb-4">
          Explore our collection and find the perfect{" "}
          <span className="block">bike for you.</span>
        </h1>
        <Button label="Explore" variant="filled" />
      </div>
    </div>
  );
};

export default BottomHeader;
