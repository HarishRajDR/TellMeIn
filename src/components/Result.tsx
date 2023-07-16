type Prop = {
  loading: boolean;
  loadingfunct: any;
  measurement: number;
  unit: string;
};

// London Bus Height - 4.4m
// London Bus Length - 12m
// Football Pitch - 90m
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
    },
    {
      name: "London Bus Length",
      length: 12,
    },
    {
      name: "Football Pitch",
      length: 90,
    },
    {
      name: "Basketball Court",
      length: 28,
    },
    {
      name: "Olympic Swimming Pool",
      length: 50,
    },
    {
      name: "Tennis Court",
      length: 23.77,
    },
    {
      name: "Eiffel Tower Height",
      length: 330,
    },
    {
      name: "Empire State Building",
      length: 443,
    },
    {
      name: "Burj Khalifa",
      length: 830,
    },
    {
      name: "Mount Everest",
      length: 8848,
    },
    {
      name: "Mount Fuji",
      length: 3776,
    },
  ];

  if (props.loading) {
    return (
      <div className="flex items-center justify-center">
        <h2>Loading...</h2>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-2xl">
          {`${props.measurement || 0} ${props.unit} is equal to`}
        </h2>

        <div className="mt-2">
          {objs.map((p) => {
            return (
              <div className="flex flex-row justify-between gap-10">
                <h2 className="text-2xl">{p.length}</h2>
                <h2 className="text-2xl">{p.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Result;
