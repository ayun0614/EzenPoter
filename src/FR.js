import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../src/css/FR.css";
import st1 from "../src/img/st1.png";
import html2canvas from "html2canvas";
import g5 from "../src/img/g5.png";
import magicStick from "../src/img/지팡이.png";

import result_G from "./img/domitory_g.png";
import result_R from "./img/domitory_r.png";
import result_H from "./img/domitory_h.png";
import result_S from "./img/domitory_s.png";

import cane1 from "./img/f1.png";
import cane2 from "./img/f2.png";
import cane3 from "./img/f3.png";
import cane4 from "./img/f4.png";
import cane5 from "./img/f5.png";
import cane6 from "./img/f6.png";

const FR = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [cane, setCane] = useState(magicStick);
    const location = useLocation(); // useLocation 훅 사용
    let grade, selectedCard, domitory;

    console.log(selectedCard);

    if (location.state.grade == null) {
        grade = "";
    } else {
        grade = location.state.grade; // 결과 값을 가져옴
    }

    if (location.state.selectedCard == null) {
        selectedCard = "";
    } else {
        selectedCard = location.state.selectedCard; // 결과 값을 가져옴
        console.log("????");
        console.log(selectedCard);
    }

    if (location.state.domitory == null) {
        domitory = "";
    } else {
        domitory = location.state.domitory; // 결과 값을 가져옴
    }

    const groupRef = useRef(null);

    const handleGoToMainPage = () => {
        navigate("/Login"); // 이동할 경로 ("/main")를 설정하세요.
    };

    const fileUpload = (e) => {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            setImage(URL.createObjectURL(selectedImage));
        }
    };

    const saveImage = () => {
        if (groupRef.current) {
            // div 요소를 캡처합니다.
            html2canvas(groupRef.current, {backgroundColor:null}).then((canvas) => {
                    const imgData = canvas.toDataURL("image/png");

                    // 이미지를 파일로 저장합니다.
                    const a = document.createElement("a");
                    a.href = imgData;
                    a.download = "group_image.png";
                    a.click();
                }
            );
        }
    };

    console.log(cane);

    useEffect(() => {
        switch (selectedCard) {
            case 1:
                setCane(cane1);
                break;
            case 2:
                setCane(cane2);
                break;
            case 3:
                setCane(cane3);
                break;
            case 4:
                setCane(cane4);
                break;
            case 5:
                setCane(cane5);
                break;
            case 6:
                setCane(cane6);
                break;
            default:
        }
    }, [selectedCard]);

    return (
        <div className="item" id="itm">
            <div className="congratulations" id="congrats">
                Congratulations on Admission!
            </div>
            <div className="idcard" id="card">
                ID CARD
            </div>

            <div className="group" id="grp">
                <div className="rectangle" id="rec" >
                    <div id="bg1" ref={groupRef}>
                        <div id="pic4">
                            <label for="imageInput" id="customUploadButton">
                                +
                            </label>
                            <input
                                type="file"
                                id="imageInput"
                                item
                                accept="image/*"
                                onChange={fileUpload}
                            />
                            {image && (
                                <img
                                    src={image}
                                    alt="Uploaded"
                                    style={{ width: "100%", height: "100%" }}
                                />
                            )}
                        </div>

                        <div id="pic2">
                            {domitory === "그리핀도르" && (
                                <img src={result_G} id="domitoryImg" alt="그리핀도르 이미지" style={{ width: "90%", height: "90%" }} />
                            )}
                            {domitory === "레번클로" && (
                                <img src={result_R} id="domitoryImg" alt="레번클로 이미지" style={{ width: "90%", height: "90%" }} />
                            )}
                            {domitory === "후플푸프" && (
                                <img src={result_H} id="domitoryImg" alt="후플푸프 이미지" style={{ width: "90%", height: "90%" }} />
                            )}
                            {domitory === "슬리데린" && (
                                <img src={result_S} id="domitoryImg" alt="슬리데린 이미지" style={{ width: "90%", height: "90%" }} />
                            )}
                        </div>
                        <div id="pic3">
                            <img src={cane} className="magicStick" id="p3" alt=""></img>
                        </div>
                        <div>
                            <img src={g5} className="light" id="p2" alt=""></img>
                        </div>
                        <img
                            src={st1}
                            id="p1"
                            alt=""
                            style={{
                                width: "100%",
                                height: "110%",
                                objectfit: "fill",
                                position: "relative",
                                zIndex: "0",
                            }}
                        ></img>
                        <div id="mtext">
                            <div className="iden1">STUDENT</div>
                            <div className="iden2">
                                NAME:
                                <input
                                    type="text"
                                    id="nametext"
                                    placeholder="입력하세요"
                                ></input>
                            </div>
                            <div className="iden3">
                                BIRTH:
                                <input
                                    type="text"
                                    id="birthtext"
                                    placeholder="입력하세요"
                                ></input>
                            </div>
                            <div className="iden4">GRADE: {grade}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="op">
                <div>
                    <button className="save" onClick={saveImage}>
                        SAVE
                    </button>
                </div>
                <div>
                    <button className="main" onClick={handleGoToMainPage}>
                        MAIN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FR;
