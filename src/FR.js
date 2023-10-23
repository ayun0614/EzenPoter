import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../src/css/FR.css";
import st1 from "../src/img/st1.png";
import html2canvas from "html2canvas";
import g5 from "../src/img/g5.png";
const FR = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const location = useLocation(); // useLocation 훅 사용
  const grade = location.state.grade; // 결과 값을 가져옴
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
      html2canvas(groupRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // 이미지를 파일로 저장합니다.
        const a = document.createElement("a");
        a.href = imgData;
        a.download = "group_image.png";
        a.click();
      });
    }
  };

  console.log(grade);
  return (
    <div class="item" id="itm">
      <div class="congratulations" id="congrats">
        Congratulations on Admission!
      </div>
      <div class="idcard" id="card">
        ID CARD
      </div>

      <div class="group" id="grp" ref={groupRef}>
        <div class="rectangle" id="rec">
          <div id="bg1">
            <div id="pic4">
              <label for="imageInput" id="customUploadButton">
                +
              </label>
              <input
                type="file"
                id="imageInput"
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
            <div id="pic2"></div>
            <div id="pic3"></div><div><img src={g5} class="light" id="p2" alt=""></img></div>
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
              <div class="iden1">STUDENT</div>
              <div class="iden2">NAME:</div>
              <div class="iden3">BIRTH:2020/02/20</div>
              <div class="iden4">grade: {grade} 학년</div>
            </div>
          </div>
        </div>
      </div>
      <div id="op">
        <button class="save" value="save" onClick={saveImage}>
          SAVE
        </button>
        <button class="main" value="main" onClick={handleGoToMainPage}>
          MAIN
        </button>
      </div>
    </div>
  );
};

export default FR;
