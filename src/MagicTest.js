import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import "../src/css/MagicTest.css";
import "../src/css/MagicTest.css";
import on1 from "./img/on1.png";
import on2 from "./img/on2.png";

const MagicTest = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [progressValue, setProgressValue] = useState(0);
    const [showProgressBar, setShowProgressBar] = useState(true);
    const location = useLocation(); // useLocation 훅 사용
    const domitory = location.state?.domitory; // 결과 값을 가져옴

    const questionList = [
        {
            q: ["Q1. 물체 소환 주문"],
            a: [
                { type: "1", text: "아씨오" },
                { type: "0", text: "아센디오" },
                { type: "0", text: "알로호모라" },
                { type: "0", text: "디센디움" },
            ],
        },

        {
            q: ["Q2. 빛을 밝히는 주문"],
            a: [
                { type: "0", text: "랭록" },
                { type: "0", text: "이노 빌라스" },
                { type: "1", text: "루모스" },
                { type: "0", text: "잉고르지오" },
            ],
        },

        {
            q: ["Q3. 폴리주스 마법약 재료가 아닌 것은?"],
            a: [
                { type: "0", text: "풀잠자리의 날개" },
                { type: "1", text: "유니콘의 뿔" },
                { type: "0", text: "신체 일부" },
                { type: "0", text: "보름초" },
            ],
        },

        {
            q: ["Q4. 숨겨진 걸 보여주는 주문"],
            a: [
                { type: "0", text: "살비오 헥시아" },
                { type: "1", text: "리벨리오" },
                { type: "0", text: "실렌시오" },
                { type: "0", text: "윙가르디움 레비오우사" },
            ],
        },

        {
            q: ["Q5. 불로불사의 약 재료인 것은?"],
            a: [
                { type: "0", text: "맨드레이크" },
                { type: "0", text: "악어의 심장" },
                { type: "0", text: "수선화" },
                { type: "1", text: "인어의 눈물" },
            ],
        },
        {
            q: ["Q6. 스투페파이는 어떤 주문인가?"],
            a: [
                { type: "1", text: "기절 마법" },
                { type: "0", text: "침묵 마법" },
                { type: "0", text: "투명하게 만드는 마법" },
                { type: "0", text: "변신술 마법" },
            ],
        },
        {
            q: ["Q7. 퀴디치에 대한 것으로 틀린 것은?"],
            a: [
                { type: "0", text: "4개의 공을 사용한다" },
                { type: "0", text: "한 팀에 7명씩 경기를 뛴다" },
                { type: "1", text: "골대가 총 4개다 " },
                { type: "0", text: "수색꾼은 골든 스니치를 쫓는다" },
            ],
        },
        {
            q: ["Q8. 트리저위저드에 대한 설명으로 틀린 것은? "],
            a: [
                { type: "0", text: "총 세 개의 시험을 치른다" },
                { type: "1", text: "19세 미만은 참가할 수 없다" },
                { type: "0", text: "각 학교마다 대표 선수 한 명을 뽑는다" },
                { type: "0", text: "황금 알을 가져오는 1단계 시험이 있다" },
            ],
        },
        {
            q: ["Q9. 어둠의 마법이 아닌 것은?"],
            a: [
                { type: "0", text: "임페이로 임페리우스" },
                { type: "0", text: "크루시오 " },
                { type: "1", text: "프로테고 맥시마" },
                { type: "0", text: "아바다케다브라" },
            ],
        },
        {
            q: ["Q10. 노화마법약 재료가 아닌 것은?"],
            a: [
                { type: "1", text: "그리핀 발톱" },
                { type: "0", text: "레이열매의 씨" },
                { type: "0", text: "토끼뼈가루" },
                { type: "0", text: "할미꽃" },
            ],
        },
        {
            q: ["Q11. 집요정의 특징 중 아닌 것은?"],
            a: [
                { type: "0", text: "성별이 구분되어 있다" },
                { type: "0", text: "마법을 사용할 줄 안다" },
                { type: "1", text: "모자를 주면 해방된다" },
                { type: "0", text: "극존칭을 사용한다" },
            ],
        },
        {
            q: ["Q12. 불을 내뿜는 주문은? "],
            a: [
                { type: "0", text: "이노 빌라스" },
                { type: "1", text: "인센디오" },
                { type: "0", text: "라비포르스" },
                { type: "0", text: "피델리우스" },
            ],
        },

        { q: ["테스트 끝"], a: [{ type: "", text: "" }] },
    ];
    const [magiclist, setMagicList] = useState([
        { name: "1", count: 0 },
        { name: "0", count: 0 },
    ]);
    const isLastPage = page === questionList.length - 1; // 마지막페이지 계산

    const handleAnswerClick = (answerType) => {
        // 선택한 답변 유형에 따라 magiclist를 업데이트합니다.
        const updatedMagicList = magiclist.map((item) =>
            item.name === answerType ? { ...item, count: item.count + 1 } : item
        );
        setMagicList(updatedMagicList);
        // 마지막일때 게이바 숨김
        if (page === questionList.length - 2) {
            setShowProgressBar(false);
            navigate("/MagicResult", {
                state: { grade: calGrade(magiclist[0].count), domitory },
            });
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

    function calGrade(score) {
        for (const range of magicgrade) {
            if (score >= range.minScore && score <= range.maxScore) {
                return range.grade;
            }
        }
        return "N/A"; // 범위에 해당하는 등급이 없는 경우
    }
    //학년 구별 점수
    const magicgrade = [
        { grade: "4", minScore: 10, maxScore: 12 },
        { grade: "3", minScore: 8, maxScore: 10 },
        { grade: "2", minScore: 6, maxScore: 8 },
        { grade: "1", minScore: 0, maxScore: 6 },
    ];

    return (
        <div id="in">
            <div id="ini">
                <div id="m">
                    <div id="pic7">
                        <img src={on2} alt="" />
                    </div>
                    <div id="q11">{questionList[page].q[0]}</div>
                    <div id="pic7">
                        <img src={on1} alt="" />
                    </div>
                </div>
            </div>
            <div id="qq">
                {questionList[page].a.map((answer, idx) => (
                    <div
                        id="q1"
                        key={idx}
                        className={`answer ${isLastPage ? "last-question" : ""}`}
                        onClick={() => handleAnswerClick(answer.type)}
                    >
                        {answer.text}
                        {isLastPage && (
                            <div className="grade">
                                당신의 등급은 <br></br> {calGrade(magiclist[0].count)} 학년
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div id="g">
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

export default MagicTest;
