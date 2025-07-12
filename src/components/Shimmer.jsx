import ShimmerCards from "./ShimmerCards.jsx";

const Shimmer = () => {
  const arr = new Array(12).fill(0);
  console.log("arr: ", arr);
  return (
    <>
      {arr.map((a, index) => <ShimmerCards key={index} />)}
    </>
  );
};

export default Shimmer;
