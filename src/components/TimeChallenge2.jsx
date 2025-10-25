import { useRef, useState } from "react";
import ResultModal2 from "./ResultModal2";

const TimeChallenge2 = ({title, targetTime}) => {
    const timer = useRef();
    const dialog = useRef();
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
    const actveTime = remainingTime > 0 && remainingTime < targetTime * 1000;

    if(remainingTime <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    const handleReset = () => {
        setRemainingTime(targetTime * 1000);
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 10);
        }, 10);
    }

    const handleStop = () => {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal2 ref={dialog} targetTime={targetTime} remainingTime={remainingTime} onReset={handleReset} />
            <section className={`challenge`}>
                <h2>{title}</h2>
                <p className="challenge-time ">{targetTime} second{targetTime > 1 && 's'}</p>
                <button onClick={actveTime ? handleStop : handleStart}>{actveTime ? 'Stop' : 'Start'} Challenge</button>
                <p className={`${actveTime && 'active'}`}>{actveTime ? 'Time is running...' : 'Time inactive'}</p>
            </section>
        </>
    )
}

export default TimeChallenge2;