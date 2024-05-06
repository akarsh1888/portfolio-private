import React, { useEffect, useState, useRef } from "react";
import "./AutoIncrementCounter.css";

const AutoIncrementCounter: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);
    const [pause, setPause] = useState<boolean>(false);
    const intervalTimer = useRef<NodeJS.Timeout | null>(null);

    const toggleTimer = () => {
        if (pause) {
            if (intervalTimer.current) {
                clearInterval(intervalTimer.current);
            }
        } else {
            intervalTimer.current = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);
        }
        setPause((prevPause) => !prevPause);
    };

    const resetTimer = () => {
        if (intervalTimer.current) {
            clearInterval(intervalTimer.current);
        }
        setCounter(0);
        setPause(false);
    };

    useEffect(() => {
        return () => {
            // Cleanup interval timer on component unmount
            if (intervalTimer.current) {
                clearInterval(intervalTimer.current);
            }
        };
    }, []);

    return (
        <div className="App">
            <span className="title">Countdown Timer</span>

            <div className="labels">
                <p className="labels--label">Hours</p>
                <p className="labels--label">Minutes</p>
                <p className="labels--label">Seconds</p>
            </div>

            <div className="inputs">
            <input 
            type="number"
            className="inputs--time"
            maxLength={2}
            onInput={(e) => (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.slice(0, 2)}
            placeholder="00"
            />

            </div>

            <div>{counter}</div>
            <button onClick={toggleTimer}>{pause ? "Pause" : "Start"}</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default AutoIncrementCounter;
