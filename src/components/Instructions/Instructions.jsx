import React from "react";

function Instructions() {
  return (
    <div>
      "
      <div className="text-left py-10">
        <h1 className="text-4xl font-bold text-[#714539] pb-5">Instructions</h1>
        <div>
          <ol className="grid gap-3 pl-5">
            <li className="relative pl-6 before:content-['1.'] before:absolute before:left-0 before:text-[#714539] before:font-bold">
              <span className="font-bold">Beat the egg</span>: In a bowl, beat
              the eggs with a pinch of salt and pepper until they are mixed. You
              can add a tablespoon of water or milk for a fluffier texture.
            </li>
            <li className="relative pl-6 before:content-['2.'] before:absolute before:left-0 before:text-[#714539] before:font-bold">
              <span className="font-bold">Heat the pan</span>: Place a non-stick
              frying pan over medium heat and add butter or oil.
            </li>
            <li className="relative pl-6 before:content-['3.'] before:absolute before:left-0 before:text-[#714539] before:font-bold">
              <span className="font-bold">Cook the omelette</span>: Once the
              butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure the eggs evenl coat the surface.
            </li>
            <li className="relative pl-6 before:content-['4.'] before:absolute before:left-0 before:text-[#714539] before:font-bold">
              <span className="font-bold">Add fillings (optional)</span>: When
              the eggs begin to set at the edges but are still slightly runny in
              the middle, sprinkle your chosen fillings over one half of the
              omelette.
            </li>
            <li className="relative pl-6 before:content-['5.'] before:absolute before:left-0 before:text-[#714539] before:font-bold">
              <span className="font-bold">Fold and serve</span>: As the omelette
              continues t0 cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minutes, then slide it onto a
              plate.
            </li>
            <li className="relative pl-6 before:content-['6 .'] before:absolute before:left-0 before:text-[#714539] before:font-bold">
              <span className="font-bold">Enjoy</span>: Serve hot, wih
              additional salt and pepper if needed.
            </li>
          </ol>
        </div>
      </div>
      <div className="w-full bg-black/25 mt-6 h-[2px]"></div>
    </div>
  );
}

export default Instructions;
