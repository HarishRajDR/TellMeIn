import { useState } from "react";

const Result = () => {
  const [isloading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);

  if (isloading) {
    return <h2>Loading...</h2>;
  } else {
    return <h2>Done Loading</h2>;
  }
};

export default Result;
