import React from "react";

function Nutrition() {
  return (
    <div>
      <div className="text-left py-10">
        <h1 className="text-4xl font-bold text-[#714539] pb-5 ">Nutrition</h1>
        <p className="pb-5">
          The Table below shows nutritional values per serving without the
          addition fillings.
        </p>
        <div>
          <div className="border-b border-black/25 flex justify-between px-10 md:px-28 py-3">
            <p>Calories</p>
            <p className="text-[#714539] font-bold">277kcal</p>
          </div>
          <div className="border-b border-black/25 flex justify-between px-10 md:px-28 py-3">
            <p>Carbs</p>
            <p className="text-[#714539] font-bold">0g</p>
          </div>
          <div className="border-b border-black/25 flex justify-between px-10 md:px-28 py-3">
            <p>Protein</p>
            <p className="text-[#714539] font-bold">20g</p>
          </div>
          <div className="border-b border-black/25 flex justify-between px-10 md:px-28 py-3">
            <p>Fat</p>
            <p className="text-[#714539] font-bold">22g</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;
