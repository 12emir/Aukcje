import React, { useEffect, useState } from "react";
import gsap, { Expo, Back } from "gsap";
import Timer from "../../components/Timer";

const Auction = () => {
  const [single, setSingle] = useState({});
  var tl = gsap.timeline();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`, { mode: "cors" })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setSingle(json);
      })
      .then(() => {
        gsap.from(".main-img", { duration: 0.4, opacity: 0, x: -100 });
      });
  }, []);

  return (
    <div className=' flex '>
      <div className='w-1/2 pr-6'>
        <img
          className='main-img rounded-lg shadow-2xl '
          src='/images/item.png'
        ></img>
      </div>
      <div className='w-1/2  p-4 '>
        <Timer date='2020-09-01T01:02:03' />
        <h1 className='h text-purple-500 text-xl'>{single.title}</h1>
        <p className='p'>{single.body}</p>
      </div>
    </div>
  );
};

export default Auction;
