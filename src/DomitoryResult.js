import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../src/css/DomitoryResult.css";

import result_G from "./img/domitory_g.png";
import result_R from "./img/domitory_r.png";
import result_H from "./img/domitory_h.png";
import result_S from "./img/domitory_s.png";
import result_bg from "./img/result_bg.jpeg";

const DomitoryResult = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const domitory = location.state.domitory;

    //메인페이지이동
    //const MoveMainPage = () => {
    // navigate("/Login");
    //};

    const MoveDomitoryTestPage = () => {
        navigate("/DomitoryTest",{
            state: { domitory },
        });
    };

    const MoveMagicTestPage = () => {
        navigate("/MagicTest", {
            state: { domitory },
        });
    };
    console.log(domitory);
    // 이미지 alt 출력
    return (
        <div id="bodyBox">
            <div id="bodyInBox">
                <img src={result_bg} id="resultBg" alt="배경" />
                <div id="domitoryImgBox">
                    {domitory === "그리핀도르" && (
                        <img src={result_G} id="domitoryImg" alt="그리핀도르 이미지" />
                    )}
                    {domitory === "레번클로" && (
                        <img src={result_R} id="domitoryImg" alt="레번클로 이미지" />
                    )}
                    {domitory === "후플푸프" && (
                        <img src={result_H} id="domitoryImg" alt="후플푸프 이미지" />
                    )}
                    {domitory === "슬리데린" && (
                        <img src={result_S} id="domitoryImg" alt="슬리데린 이미지" />
                    )}
                </div>
                <div id="domitoryText">
                    {" "}
                    <span>당신의 기숙사는</span> <br></br>
                    {domitory}
                </div>
                <div id="btnBox">
                    <button id="againBtn" onClick={MoveDomitoryTestPage}>
                        Again
                    </button>
                    <button id="mainBtn" onClick={MoveMagicTestPage}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DomitoryResult;
