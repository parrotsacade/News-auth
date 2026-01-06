import LeftSide from "../components/Content/LeftSide/LeftSide";
import MidSide from "../components/Content/MidSide/MidSide";
import RightSide from "../components/Content/RightSide/RightSide";


const Home = () => {
  return (
    <>
       <section className="grid grid-cols-12">
               
               <div className="col-span-3">
                      <LeftSide/>
               </div>
               <div className=" col-span-6">
                      <MidSide/>
               </div>
               <div className="bg-blue-600 col-span-3">
                      <RightSide/>
               </div>

       </section>
    </>
  );
};

export default Home;
