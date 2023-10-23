import "./css/Sidebar.css";
import { useNavigate } from "react-router-dom";
import AsideHeader from "./img/aside_header.png";
import AsideUpper from "./img/aside_upper.png";
import AsideImg1 from "./img/aside_img1.png";
import AsideImg2 from "./img/aside_img2.png";
import AsideImg3 from "./img/aside_img3.png";

const Sidebar = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/MagicTest");
  };

  const navigateToCT = () => {
    navigate("/CaneTest");
  };

  const changePage = (page) => {
    if (page === "img1") {
    } else if (page === "img2") {
      navigateToMain();
    } else if (page === "img3") {
      navigateToCT();
    } else if (page === "upper") {
      window.scrollTo({ top: 0, behavior: "smooth" });
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

        <div className="upper">
          <img
            src={AsideUpper}
            className="asideUpper"
            alt="upper"
            onClick={() => {
              changePage("upper");
            }}
          />
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
