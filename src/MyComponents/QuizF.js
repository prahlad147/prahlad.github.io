
import { green, grey } from '@material-ui/core/colors';
import React, { useState } from 'react'
import QuizE from './QuizE';
import QuizzesC from './QuizzesC'
import './style.css';

const QuizF = () => {

    var timeLeft = 60;
    var elem = document.getElementById('Timer');

    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            // doSomething();
        } else {
            elem.innerHTML = timeLeft;
            timeLeft--;
        }
    }

    const explain = () => {
        return <QuizE />


        console.log("clicked button");
    }

    // const grey = grey;
    // const [bg, setbg] = useState(grey);

    // const bgChange = () => {
    //     const newBg = green;
    //     setbg(newBg);

    // }

    const [show, setShow] = useState(false);

    return (
        <>
            <center>
                <div className='widthm'>
                    <QuizzesC />


                    <div className='card widths mt-3 pt-3'>
                        <p style={{ textAlign: "left", marginLeft: "12px" }}>Questions 6/15</p>
                        <p style={{ textAlign: "left", marginLeft: "12px" }}><strong>Let's play a guessing game. Which of the following wasn't invented during WWII?</strong></p>

                        <center>
                            <div class="card mt-3 widths surveys3">
                                <div class="card-body widths">
                                    Electronic Computers
                                </div>
                            </div>
                            <div class="card mt-3 widths surveys3">
                                <div class="card-body widths">
                                    Radar Technology
                                </div>
                            </div>
                            <div class="card mt-3 widths surveys3">
                                <div class="card-body widths">
                                    The Atomic bomb
                                </div>
                            </div>
                            <div class="card mt-3 widths surveys3">
                                <div class="card-body widths">
                                    Pilotless drones
                                </div>
                            </div>

                            <div className='timer mt-3'>
                                <div id="Timer">

                                </div>
                            </div>

                            <div class="col mt-3">
                                <p style={{ textAlign: "center" }}> <button type="button" class="btn btn-danger back" onClick={() => setShow(true)}>View Explanation</button></p>
                            </div>
                        </center>
                    </div>
                    <br />

                    {
                        show ? <QuizE /> : null
                    }


                </div>
            </center>


        </>
    )
}

export default QuizF;
