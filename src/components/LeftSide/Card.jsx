import moment from "moment/moment";
import img1 from "../../../public/images/doremn-pic.webp";
import { BiCalendar } from "react-icons/bi";

const Card = () => {
  return (
    <>
      <section className="space-y-5">

        <div className="space-y-2">
          <img src={img1} className="rounded-xl" alt="" />
          <h1 className="font-bold text-lg">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h1>
          <p className="flex items-center gap-2 font-medium">
            <span className="flex items-center gap-1">
              Sports <BiCalendar />
            </span>{" "}
            <span>{moment().format("MMM Do YY")}</span>
          </p>
        </div>

        <div className="space-y-2">
          <img src={img1} className="rounded-xl" alt="" />
          <h1 className="font-bold text-lg">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h1>
          <p className="flex items-center gap-2 font-medium">
            <span className="flex items-center gap-1">
              Sports <BiCalendar />
            </span>{" "}
            <span>{moment().format("MMM Do YY")}</span>
          </p>
        </div>

        <div className="space-y-2">
          <img src={img1} className="rounded-xl" alt="" />
          <h1 className="font-bold text-lg">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h1>
          <p className="flex items-center gap-2 font-medium">
            <span className="flex items-center gap-1">
              Sports <BiCalendar />
            </span>{" "}
            <span>{moment().format("MMM Do YY")}</span>
          </p>
        </div>

      </section>
    </>
  );
};

export default Card;
