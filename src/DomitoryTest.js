import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/DomitoryTest.css";
import on1 from "./img/on1.png";
import on2 from "./img/on2.png";

const DomitoryTest = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [progressValue, setProgressValue] = useState(0);
    const [showProgressBar, setShowProgressBar] = useState(true);

    const questionList = [
        {
            q: ["Q1. 문이 잠겨있다면 나는"],
            a: [
                { type: "R", text: "열쇠를 찾는다" },
                { type: "S", text: "자물쇠를 딴다" },
                { type: "G", text: "문을 부순다" },
                { type: "H", text: "노크를 한다" },
            ],
        },

        {
            q: ["Q2. 의자 개수보다 인원이 더 많을 때"],
            a: [
                { type: "S", text: "부족한 만큼 사람을 없앤다" },
                { type: "G", text: "성적순으로 앉는다" },
                { type: "R", text: "의자를 더 구해온다" },
                { type: "H", text: "공평하게 모두 서있는다" },
            ],
        },

        {
            q: ["Q3. 친구가 살인을 저지르고 왔다"],
            a: [
                { type: "G", text: "왜 그랬는지 이유를 묻는다" },
                { type: "H", text: "공감하고 위로해 준다" },
                { type: "S", text: "같이 증거를 인멸한다" },
                { type: "R", text: "자수하라고 조언한다" },
            ],
        },

        {
            q: ["Q4. 웬 덩치 큰 사람이 돈을 내놓으라고 한다"],
            a: [
                { type: "H", text: "얼른 줘버리고 자리를 뜬다" },
                { type: "R", text: "일단 주고 신고한다" },
                { type: "G", text: "돈을 주고 훈계한다" },
                { type: "S", text: "선빵필승 도둑놈은 참을 수 없다" },
            ],
        },

        {
            q: ["Q5. 폐가 체험을 갔는데 출입금지 팻말이 있다"],
            a: [
                { type: "R", text: "가지 말라는 데엔 이유가 있다 돌아간다" },
                { type: "S", text: "가볍게 무시하고 들어간다" },
                { type: "G", text: "호기심을 참지 못하고 들어간다" },
                { type: "H", text: "겁먹어서 도망간다" },
            ],
        },
        {
            q: ["Q6. 길을 가다 지갑을 주웠다"],
            a: [
                { type: "R", text: "그냥 놔두고 간다" },
                { type: "H", text: "지나가는 사람들을 붙잡고 주인을 찾아준다" },
                { type: "S", text: "주운 놈이 임자다 가져간다" },
                { type: "G", text: "경찰에 맡긴다" },
            ],
        },
        {
            q: ["Q7. 앞자리에 앉은 친구가 컨닝하는 것을 발견했다"],
            a: [
                { type: "H", text: "컨닝한 친구에게 하지 말라고 설득한다" },
                { type: "G", text: "컨닝한 친구에게 자백하라고 말한다" },
                { type: "R", text: "즉시 선생님께 말씀 드린다" },
                { type: "S", text: "같이 컨닝한다" },
            ],
        },
        {
            q: ["Q8. 억울하게 상사한테 혼나게 된다면"],
            a: [
                { type: "S", text: "뭐라 하든 말든 귓등으로 흘린다" },
                { type: "G", text: "억울하다고 상황 설명을 한다" },
                { type: "R", text: "똑바로 쳐다 보며 맞받아친다" },
                { type: "H", text: "윗사람이니 그냥 참는다" },
            ],
        },
        {
            q: ["Q9. 앞에서 사람들이 싸우고 있을 때 나는"],
            a: [
                { type: "G", text: "왜 싸우는지 상황 중재를 해 본다" },
                { type: "H", text: "몸을 던져 싸움을 말린다" },
                { type: "T", text: "시끄러우니 나가서 싸웠으면 좋겠다" },
                { type: "S", text: "싸움 구경이 제일 즐겁다" },
            ],
        },
        {
            q: ["Q10. 가라앉는 배에서 친구와 탈출하려는데 보트가 1인용이다"],
            a: [
                { type: "R", text: "같이 살 수 있는 법을 찾는다" },
                { type: "H", text: "같이 타지 말자고 한다" },
                { type: "S", text: "무작정 먼저 타버린다" },
                { type: "G", text: "친구에게 타라고 양보한다" },
            ],
        },

        { q: ["테스트 결과"], a: [{ type: "", text: "" }] },
    ];
    const [DomitoryQ, setDomitoryList] = useState([
        { name: "G", count: 0 },
        { name: "H", count: 0 },
        { name: "R", count: 0 },
        { name: "S", count: 0 },
    ]);
    const isLastPage = page === questionList.length - 1; // 마지막페이지 계산


    const handleAnswerClick = (answerType) => {
        // 선택한 답변 유형에 따라 magiclist를 업데이트합니다.
        const updatedDomitoryQ = DomitoryQ.map((item) =>
            item.name === answerType ? { ...item, count: item.count + 1 } : item
        );
        setDomitoryList(updatedDomitoryQ);
        // 마지막일때 게이바 숨김
        if (page === questionList.length - 2) {
            navigate("/DomitoryResult", {
                state: { domitory: Math.max(setDomitoryList(updatedDomitoryQ)) },
            });
            setShowProgressBar(false);
        }
        // 다음 페이지로 이동합니다.
        if (page < questionList.length - 1) {
            setPage(page + 1);
        }
    };


    useEffect(() => {
        if (page === 0) {
            setProgressValue(0);
        } else {
            const increment = 1 / (questionList.length - 1);
            const newValue = progressValue + increment;
            setTimeout(() => {
                setProgressValue(newValue >= 1 ? 1 : newValue);
            }, 100); // 0.1초(100 밀리초) 지연 시간 설정
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, questionList.length]);

    //function calDomitory(score) {
    //for (const range of reusltDomitory) {
    // if (score >= range.minScore && score <= range.maxScore) {
    //    return range.domitory;
    //   }
    //  }
    //  return "N/A"; // 범위에 해당하는 등급이 없는 경우
    // }

    /*
    const end = 0;
     function calDomitory(score) {
         for (const range of reusltDomitory) {
         for (const i = 0; i > 5; i++) {
           if (end > score[i]) {
             end = score[i];
 
           }
           return score;
         }
     }
         return "N/A"; // 범위에 해당하는 등급이 없는 경우
       }
 
       const reusltDomitory = [
       { domitory: "그리핀도르", name: "G" },
       { domitory: "레번클로", name: "R" },
       { domitory: "후플푸프", name: "H" },
       { domitory: "슬리데린", name: "S" },
     ];
     */

    //학년 구별 점수
    //const reusltDomitory = [
    //{ domitory: "그리핀도르", minScore: 10, maxScore: 12 },
    //{ domitory: "레번클로", minScore: 8, maxScore: 10 },
    // { domitory: "후플푸프", minScore: 6, maxScore: 8 },
    // { domitory: "슬리데린", minScore: 0, maxScore: 6 },
    //];

    return (
        <div id="bodyDiv">
            <div id="headBox">
                <div id="questionBox">
                    <div id="frameImg">
                        <img src={on1} alt="" />
                    </div>
                    <div id="questionText">{questionList[page].q[0]}</div>
                    <div id="frameImg">
                        <img src={on2} alt="" />
                    </div>
                </div>
            </div>
            <div id="answerBox">
                {questionList[page].a.map((answer, idx) => (
                    <div
                        id="answer"
                        key={idx}
                        className={`answer ${isLastPage ? "last-question" : ""}`}
                        onClick={() => handleAnswerClick(answer.type)}
                    >
                        {answer.text}
                        {isLastPage && (
                            <div className="domitory">
                                당신의 기숙사는 <br></br>
                                {Math.max(setDomitoryList)}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div id="gaugeBarDiv">
                {showProgressBar && (
                    <progress id="progress" value={progressValue} max={1}></progress>
                )}

                {isLastPage && ( // 마지막 페이지인 경우 결과 표시
                    <div id="result"></div>
                )}
            </div>
        </div>
    );
};

export default DomitoryTest;