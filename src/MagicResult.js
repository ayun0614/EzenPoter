import React from "react";

import { useNavigate, useLocation } from "react-router-dom";
import "../src/css/MagicResult.css";

import g1 from "./img/g1.png";
import g2 from "./img/g2.png";
import g3 from "./img/g3.png";
import g4 from "./img/g4.png";
import g5 from "./img/bg2.jpg";
// import bg2 from "./img/bg2.png";
// import { MagicTest } from "./MagicTest";
const MagicResult = () => {
    const navigate = useNavigate();
    const location = useLocation(); // useLocation 훅 사용
    const grade = location.state.grade; // 결과 값을 가져옴
    const domitory = location.state.domitory;

    //메인페이지이동
    // const handleGoToMainPage = () => {
    //   navigate("/Login"); // 이동할 경로 ("/main")를 설정하세요.
    // };
    const handleGoToMagicTestPage = () => {
        navigate("/MagicTest", {
            state: { grade, domitory },
        });
    };

    const handleTestComplete = () => {
        navigate("/CaneTest", {
            state: { grade, domitory },
        });
    };
    console.log(grade);
    return (
        <div id="out">
            <div id="outt">
                <img src={g5} id="p5" alt="배경" />
                <div id="pic">
                    {grade === "1" && <img src={g1} id="p1" alt="1학년 이미지" />}
                    {grade === "2" && <img src={g2} id="p1" alt="2학년 이미지" />}
                    {grade === "3" && <img src={g3} id="p1" alt="3학년 이미지" />}
                    {grade === "4" && <img src={g4} id="p1" alt="4학년 이미지" />}
                </div>
                <div id="grade">
                    {" "}
                    <span>당신의 마법 지식은</span> <br></br>
                    {grade} 학년{" "}
                </div>
                <div id="down">
                    <button id="b1" onClick={handleGoToMagicTestPage}>
                        Again
                    </button>
                    {/* <button id="b2" onClick={handleGoToMainPage}>
            Main
          </button> */}
                    <button id="b2" onClick={handleTestComplete}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MagicResult;
