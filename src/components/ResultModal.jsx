import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(({targetTime, remainingTime, onReset}, ref) => {
    const dialog = useRef();
    const userLost =  remainingTime <= 0;
    const userScore = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={dialog} className='result-modal' onClose={onReset}>
            {userLost ? (<h2>You lost</h2>) : 
                (<h2>Your score: {userScore}</h2>)}
            <p>The target time was <strong>{targetTime}</strong> seconds.</p>
            <p>You stopped the target time with <strong>{remainingTime / 1000} seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>, document.getElementById('modal')
    )
})

export default ResultModal;