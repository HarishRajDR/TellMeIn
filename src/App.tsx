import { useState } from "react";
import DropDown from "./components/DropDown";
import Result from "./components/Result";
import Footer from "./components/Footer";

const units = [
  "Millimetre",
  "Centimeter",
  "Meter",
  "Kilometre",
  "Yard",
  "Inch",
  "Foot",
  "Mile",
  "Nautical mile",
];

const objs = [
  {
    name: "London Bus Height",
    length: 4.38,
    colorClass: "bg-[#B92928] text-white",
  },
  {
    name: "London Bus Length",
    length: 12,
    colorClass: "bg-[#B92928] text-white",
  },
  {
    name: "Football Pitch",
    length: 90,
    colorClass: "bg-green-700 text-white",
  },
  {
    name: "American Football Field",
    length: 109.73,
    colorClass: "bg-[#003069] text-white",
  },
  {
    name: "Basketball Court",
    length: 28,
    colorClass: "bg-[#ee6730] text-white",
  },
  {
    name: "Olympic Swimming Pool",
    length: 50,
    colorClass: "bg-[#0e87cc] text-white",
  },
  {
    name: "Tennis Court",
    length: 23.77,
    colorClass: "bg-[#dfff4f] text-black",
  },
  {
    name: "Eiffel Tower Height",
    length: 330,
    colorClass: "bg-[#555555] text-white",
  },
  {
    name: "Empire State Building",
    length: 443,
    colorClass: "bg-[#BF0A30] text-white",
  },
  {
    name: "Burj Khalifa",
    length: 830,
    colorClass: "bg-green-900 text-white",
  },
  {
    name: "Mount Everest",
    length: 8848,
    colorClass: "bg-white text-black",
  },
  {
    name: "Mount Fuji",
    length: 3776,
    colorClass: "bg-[#f25477] text-white",
  },
];

function App() {
  const [selectedUnit, setSelectedUnit] = useState(units[4]);
  const [value, setValue] = useState("");

  return (
    <div className="flex justify-center p-20 flex-col items-center gap-10 w-full">
      <h1 className="text-7xl font-bold">Tell Me in...</h1>
      <form className="flex gap-2" onSubmit={(event) => event.preventDefault()}>
        <input
          type="number"
          min={0}
          step={"any"}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Enter your measurement"
          className=" w-full text-2xl outline-indigo-600 rounded-md py-2 pl-5 pr-10 mt-1"
        />

        <DropDown list={units} unit={selectedUnit} funct={setSelectedUnit} />
      </form>
      <div className="w-full rounded-lg p-10">
        <Result
          measurement={parseFloat(value)}
          unit={selectedUnit}
          objects={objs}
        />
      </div>
      <div className="absolute bottom-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
