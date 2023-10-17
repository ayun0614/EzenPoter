import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./css/CaneTest.css";
import g1 from "../src/img/c1.png";
import card1 from "../src/img/호랑이.png";
import card2 from "../src/img/부엉이.png";
import card3 from "../src/img/고양이.png";
import card4 from "../src/img/늑대.png";
import card5 from "../src/img/기린.png";
import card6 from "../src/img/곰.png";

const CaneTest = () => {
    const [cards, setCards] = useState([
        { id: 1, isFlipped: false, top: "0px", left: "600px", src: card1 },
        { id: 2, isFlipped: false, top: "0px", left: "750px", src: card2 },
        { id: 3, isFlipped: false, top: "0px", left: "900px", src: card3 },
        { id: 4, isFlipped: false, top: "400px", left: "270px", src: card4 },
        { id: 5, isFlipped: false, top: "400px", left: "420px", src: card5 },
        { id: 6, isFlipped: false, top: "400px", left: "570px", src: card6 },
    ]);

    // 너비 241, 높이 374
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedCardImg, setSelectedCardImg] = useState(g1);
    const navigate = useNavigate();
    const location = useLocation(); // useLocation 훅 사용
    const grade = location.state.grade; // 결과 값을 가져옴

    const handleCardClick = (id) => {
        setCards((prevCards) =>
            prevCards.map((card) => {
                if (card.id === id) {
                    setSelectedCardImg(card.src);

                    let tempCards = [...cards];

                    tempCards.filter((tempCard) => {
                        if (tempCard.id !== card.id) {
                            tempCard.isFlipped = false;
                            return tempCard;
                        } else {
                            tempCard.isFlipped = true;
                            return tempCard;
                        }
                    });
                    setCards(tempCards);

                    return {
                        ...card,
                    };
                } else if (card.isFlipped) {
                    // 선택된 카드 이외의 뒤집힌 카드는 뒤집은 상태를 유지
                    return {
                        ...card,
                        isFlipped: true,
                    };
                }
                return card;
            })
        );
        setSelectedCard(id);
    };
    //온클릭이벤트로 연결하면 될거같은데 어디가 뒤집은카드 다시 클릭인지모르겠음
    const handleTestComplete = () => {
        navigate("/FR", {
            state: { grade, selectedCard },
        });
    };
    console.log(grade);
    console.log(selectedCard);
    return (
        <div id="out">
            <div className="card-grid">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`card test ${card.isFlipped ? "cardRotate" : ""} ${card.id === selectedCard ? "clicked" : ""
                            }`}
                        onClick={() => handleCardClick(card.id)}
                        style={{ top: card.top, left: card.left }}
                    >
                        {/* 뒤집힌 카드만 이미지를 보여주고, 뒤집지 않은 카드는 숨깁니다. */}
                        <div className={`front ${card.isFlipped ? "white" : "hidden"}`}>
                            <img src={!card.isFlipped ? g1 : card.src} id="p1" alt="" />
                        </div>
                        <div className={`back ${card.isFlipped ? "black" : ""}`}>
                            {card.isFlipped ? "뒷면" : ""}
                        </div>
                    </div>
                ))}
            </div>
            {selectedCard !== null ? (
                <div
                    className={`card-large ${cards[selectedCard - 1].isFlipped ? "cardRotate" : ""
                        } ${cards[selectedCard - 1].isFlipped ? "show" : ""}`}
                    style={{
                        top: "100px", // Customize the position as needed
                        left: "100px", // Customize the position as needed
                    }}
                >
                    <div
                        className={`front ${cards[selectedCard - 1].isFlipped ? "white" : "hidden"
                            }`}
                    >
                        <img src={selectedCardImg} id="p1" alt="" />
                    </div>
                    <div
                        className={`back ${cards[selectedCard - 1].isFlipped ? "black" : ""
                            }`}
                    >
                        {cards[selectedCard - 1].isFlipped ? "큰 뒷면" : ""}
                    </div>
                </div>
            ) : (
                <div className={`card-large hidden`}></div>
            )}
        </div>
    );
};

export default CaneTest;
