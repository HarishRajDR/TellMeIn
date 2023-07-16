import { useState } from "react";
import DropDown from "./components/DropDown";
import Result from "./components/Result";

const units = [
  "Kilometre",
  "Meter",
  "Centimeter",
  "Millimetre",
  "Micrometres",
  "Nanometre",
  "Mile",
  "Yard",
  "Foot",
  "Inch",
  "Nautical mile",
];

function App() {
  const [selectedUnit, setSelectedUnit] = useState(units[0]);
  const [value, setValue] = useState("");
  const [isloading, setloading] = useState(true);

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <div className="flex justify-center p-20 flex-col items-center gap-20 w-full">
      <h1 className="text-7xl font-bold">How Much in</h1>
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

        <button
          type="submit"
          className="rounded-md bg-indigo-600 text-2xl font-semibold text-white text-center py-4 px-10 mt-1"
          onClick={handleSubmit}
        >
          Go!
        </button>
      </form>
      <div className="w-full rounded-lg p-10 border-solid border-gray-500 border-2">
        <Result loading={isloading} loadingfunct={setloading} />
      </div>
    </div>
  );
}

export default App;
