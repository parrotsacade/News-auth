import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useEffect, useState } from "react";
import { BiBookmark, BiShare } from "react-icons/bi";

const MidSide = () => {
  const [news, setNews] = useState([]);
  const [slice, setSlice] = useState(200);
  console.log(news);
  useEffect(() => {
    fetch("/public/json/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <>
      <div className="space-y-4 h-screen overflow-x-scroll">
        {news.map((n) => (
          <>
            <div className="border-gray-300 p-2 border space-y-4">
              <div className="flex justify-between px-1 bg-gray-200 p-3 rounded-md">
                <div className="flex items-center gap-1">
                  <img
                    src={n.author.img}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />

                  <div>
                    <p>{n.author.name}</p>
                    <p>{n.author.published_date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <BiBookmark />
                  <BiShare />
                </div>
              </div>

              <div className=" px-[10%] font-bold">
                <h1>{n.title}</h1>
              </div>

              <div>
                <img src={n.image_url} alt="" />
              </div>

              <div className="text-lg">
                <h1>{n.details.slice(0, slice)}</h1>

                {slice === 200 ? (
                  <button
                    onClick={() => {
                      setSlice(n.details.length);
                    }}
                    className="underline text-blue-700"
                  >
                    Read More
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setSlice(200);
                    }}
                    className="underline text-blue-700"
                  >
                    Read Less
                  </button>
                )}
              </div>

              <div className="flex justify-between">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={2}
                  readOnly
                />
                <p>{n.total_view}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default MidSide;
