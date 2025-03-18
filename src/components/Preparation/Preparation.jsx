import React from "react";

function Preparation() {
  return (
    <div className="text-left grid gap-5 mt-5">
      <div className="bg-[#FDF7FB] p-6 rounded-xl">
        <div>
          <h3 className="text-[#A9728B] font-bold text-xl pb-5">
            Preparation time
          </h3>
          <ul className="grid gap-3 list-disc pl-5">
            <li>
              <span className="font-bold">Total: </span>Approximately 10 minutes{" "}
            </li>
            <li>
              <span className="font-bold">Preparation: </span>5 minutes
            </li>
            <li>
              <span className="font-bold">Cooking: </span>5 minutes
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-[#714539] pb-5">Ingredients</h1>
        <ul className="grid gap-2 list-disc pl-7">
          <li>2-3 large eggs</li>
          <li>salts, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </div>
      <div className="w-full bg-black/25 mt-6 h-[2px]"></div>
    </div>
  );
}

export default Preparation;
