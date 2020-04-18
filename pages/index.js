import React, { useEffect, useState } from "react";
import Link from "next/link";
import gsap, { Expo, Back } from "gsap";
import ProgressiveImage from "react-progressive-image-loading";

export default function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .then(() => {
        var tl = gsap.timeline();
        tl.staggerFrom(
          ".item",
          1.2,
          { opacity: 0, y: 30, x: -40, delay: 0.1, ease: Expo.easeOut },
          "0.1"
        );
      });
  }, []);

  return (
    <div className='xl:p-4 p-1  min-h-screen	 grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6 lg:gap-6 gap-4 '>
      {data.map((item) => {
        return (
          <Link href='/aukcje/[id]' as={`/aukcje/${item.id}`} key={item.id}>
            <div className='item cursor-pointer relative  ' key={item.title}>
              <img
                className='rounded-lg shadow-xl transform hover:scale-105 duration-100'
                src='/images/item.png'
              ></img>
              <div
                style={{ top: "10px", left: "10px", padding: "2px 9px" }}
                className='absolute bg-white rounded-lg shadow-lg text-sm text-gray-600'
              >
                Play for $4
              </div>
              <div className='p-3 text-sm'>{item.title}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
