import React from 'react';
import "./about.scss";
export default function About() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="/assets/photograph1.png" alt="" className="a-img"/>
                </div>
            </div>

            <div className="a-right">
                <h1 className="a-title">
                    About Me
                </h1>
                <p className="a-sub">It is a long established fact that a reader will be
                    distracted by the readable content.</p>
                <p className="a-desc">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.</p>
                <div className="a-award">
                    <img src="/assets/award.png" alt="" className="a-award-img"/>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">International Design Awards 2022</h4>
                        <p className="a-award-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
