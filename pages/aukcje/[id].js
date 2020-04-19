import React, { useEffect, useState } from "react";
import gsap, { Expo, Back } from "gsap";
import Timer from "../../components/Timer";
import PhotoSlider from "../../components/PhotoSlider";
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
        gsap.fromTo(
          ".carousel",
          { duration: 0.4, opacity: 0, x: -100 },
          { opacity: 1, x: 0 }
        );
      });
  }, []);

  return (
    <div className=' flex '>
      <div className='w-1/2 pr-6'>
        <div className='slider'>
          <PhotoSlider />
        </div>
      </div>
      <div className='w-1/2  p-4 '>
        <h3 className='text-purple-600  mb-2'>Live draw in</h3>
        <Timer date='2020-09-01T01:02:03' />
        <h1 className='h text-purple-600 text-lg font-semibold py-3'>
          {single.title}
        </h1>
        <p className='p'>{single.body}</p>
      </div>
    </div>
  );
};

export default Auction;
