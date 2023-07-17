type Prop = {
  loading: boolean;
  loadingfunct: any;
  measurement: number;
  unit: string;
};

// London Bus Height - 4.4m
// London Bus Length - 12m
// Football Pitch - 90m
// American Football Field - 109.73m
// Basketball Court - 28m
// Olympic Swimming Pool - 50m
// Tennis Court - 23.77m
// Eiffel Tower Height - 300
// Eiffel Tower Height to tip - 330m
// Empire State Building - 381m
// Empire State Building to tip - 443m
// Burj Khalifa - 828m
// Burj Khalifa to tip - 830m
// Seatle Space Needle - 158m
// Seatle Space Needle to tip - 184.4m
// CN tower - 553.3m
// Mount Everest - 8848m
// Mount Fuji - 3776m

const Result = (props: Prop) => {
  setTimeout(() => {
    props.loadingfunct(false);
  }, 2000);

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
        break;
    }

    return result;
  };

  if (props.loading) {
    return (
      <div className="flex items-center justify-center">
        <h2>Loading...</h2>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-2xl mb-10">
          {`${props.measurement || 0} ${
            props.unit
          } is approximately (or equal to)`}
        </h2>

        <div className="mt-2 flex flex-row flex-wrap justify-between gap-5">
          {objs.map((p) => {
            return (
              <h2
                className={`text-black font-bold text-2xl ${
                  p.colorClass || "bg-yellow-400"
                } px-5 py-3 rounded-md w-[25rem]`}
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
  }
};

export default Result;
