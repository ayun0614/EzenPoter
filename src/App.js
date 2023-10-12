import useSound from "./useSound";
import BGM from "./sound/bgm.mp3";
import React from "react";
import "./css/App.css";
import { default as Login } from "./Login";
import { default as Sidebar } from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MagicTest from "./MagicTest.js";
import MagicResult from "./MagicResult.js";
import NotFound from "./NotFound11";

function App() {
	const BackgroundMusic = () => {
    	useSound(BGM, 0.2);
	};

return (
    <div className="App">
    	<BrowserRouter>
        	<BackgroundMusic />
        	
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/MagicTest/*" element={<MagicTest />} />
				<Route path="/MagicResult/*" element={<MagicResult />} />
				<Route path="*" element={<NotFound />} />{" "}
			</Routes>
        	<Sidebar />
    	</BrowserRouter>
    </div>);
}

export default App;
