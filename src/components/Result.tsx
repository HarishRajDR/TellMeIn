type Prop = {
  measurement: number;
  unit: string;
  objects: Array<{ name: string; length: number; colorClass: string }>;
};

const Result = (props: Prop) => {
  // p: object measurement

  const measure = (p: number) => {
    let result = 0;

    const rounding = (p1: number) => {
      return Math.round((p1 + Number.EPSILON) * 10) / 10;
    };

    if (Number.isNaN(props.measurement / p)) {
      return "-";
    }

    switch (props.unit) {
      case "Meter":
        result = rounding(props.measurement / p);
        break;

      case "Millimetre":
        result = rounding(props.measurement / p / 1000);
        break;

      case "Centimeter":
        result = rounding(props.measurement / p / 100);
        break;

      case "Kilometre":
        result = rounding((props.measurement / p) * 1000);
        break;

      case "Yard":
        result = rounding(props.measurement / p / 1.094);
        break;

      case "Inch":
        result = rounding(props.measurement / p / 39.37);
        break;

      case "Foot":
        result = rounding(props.measurement / p / 3.281);
        break;

      case "Mile":
        result = rounding((props.measurement / p) * 1609);
        break;

      case "Nautical mile":
        result = rounding((props.measurement / p) * 1852);
        break;

      default:
        return "-";
    }

    return result;
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="sm:text-2xl text-base mb-10">
        {`${props.measurement || 0} ${
          props.unit
        } is approximately (or equal to)`}
      </h2>

      <div className="mt-2 flex flex-row flex-wrap justify-between items-center gap-5">
        {props.objects.map((p) => {
          return (
            <h2
              className={`text-black font-bold text-2xl ${
                p.colorClass || "bg-yellow-400"
              } px-5 py-3 rounded-md w-[calc(100vw/1.2)] lg:w-[25rem]`}
            >
              {`${measure(p.length)} `}
              <br />
              {`${p.name}`}
            </h2>
          );
        })}
      </div>
    </div>
  );
};
export default Result;
