import React from "react";
import RiseLoader from "react-spinners/RiseLoader";

type LoaderProps = {
  color: string;
  size: number;
};
const Loader = (props: LoaderProps) => {
  const { color, size } = props;

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <RiseLoader color={color} size={size} aria-label='Loading Spinner' />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
