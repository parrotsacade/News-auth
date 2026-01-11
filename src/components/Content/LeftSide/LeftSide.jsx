
import Category from "../../LeftSide/Category";
import Card from "../../LeftSide/Card";

const LeftSide = () => {
  return (
    <>
      <div className=" h-screen overflow-x-scroll">
          <Category/>
          <Card/>
      </div>
    </>
  );
};

export default LeftSide;
