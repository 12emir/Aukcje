import ReactSwipe from "react-swipe";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const PhotoSlider = () => {
  let reactSwipeEl;

  return (
    <div className='relative '>
      <ReactSwipe
        className='carousel '
        swipeOptions={{
          continuous: true,
          auto: 3000,
          speed: 500,
        }}
        ref={(el) => (reactSwipeEl = el)}
      >
        <div>
          <img className='main-img rounded-lg  ' src='/images/04.jpg'></img>
        </div>
        <div>
          <img className='main-img rounded-lg ' src='/images/04.jpg'></img>
        </div>
        <div>
          <img className='main-img rounded-lg  ' src='/images/04.jpg'></img>
        </div>
      </ReactSwipe>
      <button className='btn-nav next' onClick={() => reactSwipeEl.next()}>
        <FaLongArrowAltRight />
      </button>
      <button className='btn-nav prev' onClick={() => reactSwipeEl.prev()}>
        <FaLongArrowAltLeft />
      </button>
    </div>
  );
};

export default PhotoSlider;
