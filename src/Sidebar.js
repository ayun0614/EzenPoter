import "./css/Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";
import AsideHeader from "./img/aside_header.png";
import AsideImg1 from "./img/aside_img1.png";
import AsideImg2 from "./img/aside_img2.png";
import AsideImg3 from "./img/aside_img3.png";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let grade, domitory, selectedCard;

    console.log(location.pathname);

    if (location.pathname === "/Login" || location.pathname === "/") {
        grade = 0;
        domitory = 0;
        selectedCard = 0;
    } else {
        if (location.state.domitory == null) {
            domitory = "";
        } else {
            domitory = location.state.domitory;
        }

        if (location.state.grade == null) {
            grade = "";
        } else {
            grade = location.state.grade;
        }

        if (location.state.selectedCard == null) {
            selectedCard = "";
        } else {
            selectedCard = location.state.selectedCard;
        }
    }
    const navigateToDT = () => {
        navigate("/DomitoryTest", {
            state: { grade: grade, seletedCard: selectedCard },
        });
    };
    const navigateToMT = () => {
        navigate("/MagicTest", {
            state: { domitory: domitory, seletedCard: selectedCard },
        });
    };

    const navigateToCT = () => {
        navigate("/CaneTest", { state: { domitory: domitory, grade: grade } });
    };

    const changePage = (page) => {
        if (page === "img1") {
            navigateToDT();
        } else if (page === "img2") {
            navigateToMT();
        } else if (page === "img3") {
            navigateToCT();
        }
    };

    return (
        <aside>
            <section>
                <img src={AsideHeader} className="asideHeader" alt="imgHeader" />

                <div className="menu">
                    <img
                        src={AsideImg1}
                        className="asideImg"
                        alt="img1"
                        onClick={() => {
                            changePage("img1");
                        }}
                    />
                    <hr className="asideHr" />
                    <img
                        src={AsideImg2}
                        className="asideImg"
                        alt="img2"
                        onClick={() => {
                            changePage("img2");
                        }}
                    />
                    <hr className="asideHr" />
                    <img
                        src={AsideImg3}
                        className="asideImg"
                        alt="img3"
                        onClick={() => {
                            changePage("img3");
                        }}
                    />
                </div>
            </section>
        </aside>
    );
};

export default Sidebar;
