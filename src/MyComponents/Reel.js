import React from 'react';
import Video from "./Video/Video";
import './style.css';

// import Logo from "./icon.png";

import Vid1 from "../videos/vid1.mp4";
import Vid2 from "../videos/vid2.mp4";
import Vid3 from "../videos/vid3.mp4";

const Reel = () => {


    const data = [
        {
            channel: "aaa",
            song: "song-1",
            url: Vid1,
            likes: "32",
            comment: "2",
            shares: "23",
        },
        {
            channel: "bbb",
            song: "song-2",
            url: Vid2,
            likes: "3",
            comment: "22",
            shares: "23",
        },
        {
            channel: "ccc",
            song: "song-3",
            url: Vid3,
            likes: "89",
            comment: "23",
            shares: "29",
        },
    ];
    return (
        <>



            <center>

                <div class="container  widthm mt-5">

                    {/* <div className="logo">
          <img alt="logo" src={Logo} className="insta-logo" />
        </div>
        <h3>Reel</h3> */}
                    {/*  */}

                    <div className="video-container" id="video-container">
                        {/*  */}

                        {data.map((list, i) => (
                            <Video
                                key={i}
                                channel={list.channel}
                                song={list.song}
                                url={list.url}
                                likes={list.likes}
                                comment={list.comment}
                                shares={list.shares}
                            />
                        ))}

                        {/*  */}
                    </div>
                </div>

            </center>



















            {/* <div className='container  widths'>

                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <div class="ratio ratio-1x1">
                                <iframe src="https://www.youtube.com/embed/LXb3EKWsInQ" title="YouTube video" allowfullscreen></iframe>
                            </div>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <div class="ratio ratio-1x1">
                                <iframe src="https://www.youtube.com/embed/LXb3EKWsInQ" title="YouTube video" allowfullscreen></iframe>
                            </div>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">


                            <div class="ratio ratio-1x1">
                                <iframe src="https://www.youtube.com/embed/linlz7-Pnvw" title="YouTube video" allowfullscreen></iframe>
                            </div>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div> */}
        </>
    )
}

export default Reel;





