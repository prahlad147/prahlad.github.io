import React from 'react';
import { Link, Switch, Route, Routes } from 'react-router-dom';
import './style.css';

const NavBar2 = () => {
    return (
        <>
            <div class="container dimension size mt-3">
                <div class="row row-cols-4">
                    <div class="col"><i style={{ fontSize: "32px" }} class="bi bi-play-btn logos"></i></div>
                    <div class="col"><i style={{ fontSize: "32px" }} class="bi bi-journal-text logos"></i></div>
                    <div class="col"><i style={{ fontSize: "32px" }} class="bi bi-lightbulb logos"></i></div>
                    <div class="col"><i style={{ fontSize: "32px" }} class="bi bi-bell logos"></i></div>
                    <hr style={{ color: "#8A0727" }} />
                </div>
            </div>


            <div class="container dimension size mb-1">
                <div class="row row-cols-4">
                    <div class="col linkd"><b><Link to="/lectures" className='linkd' style={{ color: "black" }}>LECTURES</Link></b></div>
                    <div class="col"><b><Link to="/notes">NOTES</Link></b></div>
                    <div class="col"><b><Link to="/quizzes">QUIZZES</Link></b></div>
                    <div class="col"><b><Link to="/notifications">NOTIFICATIONS</Link></b></div>
                </div>
            </div>
        </>
    )
}

export default NavBar2
