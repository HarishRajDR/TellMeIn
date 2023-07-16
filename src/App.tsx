import { useState } from "react";
import DropDown from "./components/DropDown";
import Result from "./components/Result";

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

function App() {
  const [selectedUnit, setSelectedUnit] = useState(units[4]);
  const [value, setValue] = useState("");
  const [isloading, setloading] = useState(true);

  return (
    <div className="flex justify-center p-20 flex-col items-center gap-20 w-full">
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
          loading={isloading}
          loadingfunct={setloading}
          measurement={parseFloat(value)}
          unit={selectedUnit}
        />
      </div>
    </div>
  );
}

export default App;
