import "./App.css";
import omelette from "../src/assets/image-omelette.jpeg";
import Hero from "./components/Hero/Hero";
import PreparationIngredient from "./components/Preparation/Preparation";
import Instructions from "./components/Instructions/Instructions";
import Nutrition from "./components/Nutrition/Nutrition";

function App() {
  return (
    <div className="App bg-[#F3E6D8] w-full h-full  grid place-items-center md:py-20 md:px-36 lg:px-52 xl:px-64">
      <div className="bg-white text-dark rounded-xl ">
        <div className='md:p-10 lg:px-20 xl:px-32'>
          <img
            src={omelette}
            alt="omelette"
            className="w-full md:rounded-xl "
          />
        </div>
        <div className="p-10 lg:px-20 xl:px-32">
          <Hero />
          <PreparationIngredient />
          <Instructions />
          <Nutrition />
        </div>
      </div>
    </div>
  );
}

export default App;
