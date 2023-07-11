import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return <div className="flex flex-col items-center gap-5">
    <ThreeCircles height={100} width={100} color="#333333" />
    <h1>Searching for a quote for you...</h1>
  </div>;
};

export default Loader;
