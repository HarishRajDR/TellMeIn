type Prop = {
  loading: boolean;
  loadingfunct: any;
};

// London Bus Height
// Football Pitch
// Basketball Court
// Olympic Swimming Pool
// Tennis Court
// Eiffel Tower Height
// Empire State Building
// Burj Khalifa
// Seatle Space Needle
// CN tower
// Mount Everest
// Mount Fuji

const Result = (props: Prop) => {
  setTimeout(() => {
    props.loadingfunct(false);
  }, 2000);

  if (props.loading) {
    return (
      <div className="flex items-center justify-center">
        <h2>Loading...</h2>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center">
        <h2>Done Loading</h2>
      </div>
    );
  }
};

export default Result;
