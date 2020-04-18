import Countdown from "react-countdown";

const Timer = (props) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      return (
        <div className='flex no-wrap'>
          <div className='timer-wrapper  '>
            <span className='timer-count'>{days}</span>
            <span className='timer-span'>days</span>
          </div>
          <div className='timer-wrapper  '>
            <span className='timer-count'>{hours}</span>
            <span className='timer-span'>hours</span>
          </div>
          <div className='timer-wrapper  '>
            <span className='timer-count'>{minutes}</span>
            <span className='timer-span'> minutes</span>
          </div>
          <div className='timer-wrapper  '>
            <span className='timer-count'>{seconds}</span>
            <span className='timer-span'>seconds</span>
          </div>
        </div>
      );
    }
  };

  return <Countdown date={props.date} renderer={renderer} />;
};

export default Timer;
