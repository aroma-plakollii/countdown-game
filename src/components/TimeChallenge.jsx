import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimeChallenge = ({title, targetTime}) => {
    const timer = useRef();
    const dialog = useRef();
    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timeExpired, setTimeExpired] = useState(false);
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
    const activetTime = remainingTime > 0 && remainingTime < targetTime * 1000;

    if(remainingTime <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    const handleReset = () => {
        setRemainingTime(targetTime * 1000);
    }

    const handleStart = () => {
        // setTimerStarted(true);
        // timer.current = setTimeout(() => {
        //     setTimeExpired(true);
        //     dialog.current.open();
        // }, targetTime * 1000);
        timer.current = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
        }, 10);
    }

    const handleStop = () => {
        // clearTimeout(timer.current);
        clearInterval(timer.current);
        dialog.current.open();
    }

    return(
        <>
            <ResultModal ref={dialog} remainingTime={remainingTime} targetTime={targetTime} onReset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={activetTime ? handleStop : handleStart}>{activetTime ? 'Stop' : 'Start'} Challenge</button>
                </p>
                <p className={`${activetTime ? 'active' : ''}`}>
                    {activetTime ? 'Time is running...' : 'Timer Inactive'}
                </p>
            </section>
        </> 
    )
}

export default TimeChallenge;