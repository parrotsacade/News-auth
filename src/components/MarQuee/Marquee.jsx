import Marquee from "react-fast-marquee";

function MarqueeText() {
  return (
    <>
      <div className="flex bg-slate-300 p-3 rounded-lg my-10">

        <button className="uppercase btn btn-secondary">breking news</button>
        <Marquee className="font-bold">
          Bangladesh fast bowler Mustafizur Rahman was on Saturday released by
          the Kolkata Knight Riders after the IPL team were 'advised' by BCCI to
          do so. Beggers can't be choosers!
        </Marquee>

      </div>
    </>
  );
}

export default MarqueeText;
