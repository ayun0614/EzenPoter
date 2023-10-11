import useSound from './useSound'
import BGM from './sound/bgm.mp3'
import React from 'react'
import "./css/App.css";
import {default as Login} from './Login';
import {default as Sidebar}  from './Sidebar';

function App() {
	const BackgroundMusic = () => {
		useSound(BGM, 0.2);
	}

	return <div className="App">
		<BackgroundMusic/>
		<Login/>
		<Sidebar/>

	</div>;
}

export default App;