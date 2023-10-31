import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./css/CaneTest.css";
import g1 from "../src/img/c1.png";

import card1 from "../src/img/card1.png";
import card2 from "../src/img/card2.png";
import card3 from "../src/img/card3.png";
import card4 from "../src/img/card4.png";
import card5 from "../src/img/card5.png";
import card6 from "../src/img/card6.png";


const CaneTest = () => {
    const [cards, setCards] = useState([
        { id: 1, isFlipped: false, top: "30px", left: "500px", src: card1 },
        { id: 2, isFlipped: false, top: "30px", left: "600px", src: card2 },
        { id: 3, isFlipped: false, top: "30px", left: "700px", src: card3 },
        { id: 4, isFlipped: false, top: "370px", left: "170px", src: card4 },
        { id: 5, isFlipped: false, top: "370px", left: "270px", src: card5 },
        { id: 6, isFlipped: false, top: "370px", left: "370px", src: card6 },
    ]);
    
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedCardImg, setSelectedCardImg] = useState(g1);
    const [text,setText] = useState(null);
    const navigate = useNavigate();
    const location = useLocation(); // useLocation 훅 사용
    
    let grade, domitory;

    if(location.state?.grade == null){
        grade = 0;
    }else{
        grade = location.state?.grade; 
    }

    if(location.state?.domitory == null){
        domitory = 0;
    }else{
        domitory = location.state?.domitory; 
    }

    const handleCardClick = (id) => {
        // 이미 선택된 카드가 있으면 클릭 무시
        if (selectedCard !== null) {
            handleTestComplete();
        }

        setCards((prevCards) =>
            prevCards.map((card) => {
                if (card.id === id) {
                    setSelectedCardImg(card.src);
                    setSelectedCard(id);
                    setText("다음으로 이동하실려면 화면을 클릭해 주세요");

                    // 카드를 뒤집어 활성화 상태로 변경
                    return {
                        ...card,
                        isFlipped: true,
                    };
                } else {
                    // 다른 카드는 비활성화 상태로 유지
                    return {
                        ...card,
                        isFlipped: false,
                    };
                }
            })
        );
    };

    const handleTestComplete = () => {
        if(selectedCard!==null){
        navigate("/FR", {
            state: { grade, domitory, selectedCard },
        });
}
    };

    return (
        <div className="cane-test-main" id="out" onClick={handleTestComplete}>
            <div className="card-grid">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`card test ${card.isFlipped ? "cardRotate" : ""} ${card.id === selectedCard ? "clicked" : ""
                            }`}
                        onClick={() => handleCardClick(card.id)}
                        style={{ top: card.top, left: card.left}}
                    >
                        <div className={`front ${card.isFlipped ? "white" : "hidden"}`}>
                            <img
                                className="card-img"
                                src={!card.isFlipped ? g1 : card.src}
                                alt=""
                            />
                        </div>
                        <div className={`back ${card.isFlipped ? "black" : ""}`}>
                            {card.isFlipped ? "" : ""}
                        </div>
                    </div>
                ))}
            </div>
            {selectedCard !== null ? (
                <div
                    className={`card-large ${cards[selectedCard - 1].isFlipped ? "cardRotate" : ""
                        } ${cards[selectedCard - 1].isFlipped ? "show" : ""}`}
                    onClick={handleTestComplete}
                >
                    <div
                        className={`front ${cards[selectedCard - 1].isFlipped ? "white" : "hidden"
                            }`}
                    >
                        {/* <img style={{width:"241px", height:"374px;"}} src={selectedCardImg} alt="" /> */}
                        <img src={selectedCardImg} alt="" style={{width: "350px", marginTop: "-140px"}}/>
                    </div>
                    <div
                        className={`back ${cards[selectedCard - 1].isFlipped ? "black" : ""
                            }`}
                    >
                        {cards[selectedCard - 1].isFlipped ? "" : ""}
                    </div>
                </div>
            ) : (
                <div className={`card-large hidden`}></div>
            )}
<h4 className="clicked-text">{text}</h4>
        </div>
    );
};

export default CaneTest;
