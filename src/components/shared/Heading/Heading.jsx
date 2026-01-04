import moment from "moment/moment";
import logo from "../../../../public/images/logo.png";

export const Heading = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10 space-y-2">
        <img src={logo}  alt="logo" className="md:w-[30%] w-full " />

        <p>Journalism Without Fear or Favour</p>

        <p>{moment().format('LLLL')}</p>
      </div>
    </>
  );
};
