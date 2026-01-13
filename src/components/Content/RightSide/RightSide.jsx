import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import img from "../../../../public/images/doremn-pic.webp";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const RightSide = () => {
  const { handleLoginGoogle, user,handleLoginGithub } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      <div className="h-screen overflow-x-auto space-y-5">
        Login With
        <div className="flex flex-col gap-2 ">
          <button onClick={()=>{handleLoginGoogle()}} className="btn btn-sm bg-gray-800 rounded-md text-white">
            Sign In Google
          </button>
          <button onClick={()=>{handleLoginGithub()}} className="btn btn-sm bg-gray-800 rounded-md text-white">

            Sign In Github
          </button>
        </div>
        <div>
          <div>Find us on</div>

          <div className="text-xl">
            <div className="flex items-center gap-2">
              <FaFacebook /> Facebook
            </div>
            <div className="flex items-center gap-2">
              <BsInstagram /> Instragram
            </div>
          </div>
        </div>
        <div>
          <h1>Q Zone</h1>
          <div>
            <img src={img} alt="img" />
            <h1 className="text-center text-black font-medium mt-1">
              Dorimone
            </h1>
          </div>
          <div>
            <img src={img} alt="img" />
            <h1 className="text-center text-black font-medium mt-1">
              Dorimone
            </h1>
          </div>
          <div>
            <img src={img} alt="img" />
            <h1 className="text-center text-black font-medium mt-1">
              Dorimone
            </h1>
          </div>
        </div>
        <div className="hero min-h-screen text-white ">
          <div
            className="hero-content text-center bg-black bg-opacity-90 "
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSide;
