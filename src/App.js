import useSound from "./useSound";
import BGM from "./sound/bgm.mp3";
import React from "react";
import "./css/App.css";
import { default as Login } from "./Login";
import { default as Sidebar } from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FR from "./FR.js";
import MagicTest from "./MagicTest.js";
import MagicResult from "./MagicResult.js";
import DomitoryTest from "./DomitoryTest.js";
import DomitoryResult from "./DomitoryResult.js";
import NotFound from "./NotFound11.js";
import CaneTest from "./CaneTest.js";
function App() {
    const BackgroundMusic = () => {
        useSound(BGM, 0.2);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/DomitoryTest/*" element={<DomitoryTest />} />
                    <Route path="/DomitoryResult/*" element={<DomitoryResult />} />
                    <Route path="/MagicTest/*" element={<MagicTest />} />
                    <Route path="/MagicResult/*" element={<MagicResult />} />
                    <Route path="/CaneTest/*" element={<CaneTest />} />
                    <Route path="/FR/*" element={<FR />} />
                    <Route path="*" element={<NotFound />} />{" "}
                </Routes>

                <Sidebar />
                <BackgroundMusic />
            </BrowserRouter>
        </div>
    );
}

export default App;
