import {useState} from 'react';
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition';

import './VoiceToText.css';

const VoiceToText=()=>{
    const [playing,setPlaying]=useState(false);
    const {transcript,listening,resetTranscript,browserSupportsSpeechRecognition}=useSpeechRecognition();
    
    const changeHandler=()=>{};

    const startHandler=()=>{
        setPlaying(true);
        SpeechRecognition.startListening({continuous: true});
    };
    const stopHandler=()=>{
        setPlaying(false);
        SpeechRecognition.stopListening();
    };
    const resetHandler=()=>{
        resetTranscript();
    };

    if(!browserSupportsSpeechRecognition){
        return <span>瀏覽器不支援</span>;
    }

    return (
        <>
            <p className="text">麥克風: {listening?"開啟":"關閉"}</p>
            {playing?<button className="btn" onClick={stopHandler}>結束</button>:<button className="btn" onClick={startHandler}>開始</button>}
            <button className="btn" onClick={resetHandler}>重設</button>
            <div className="input-group">
                <label htmlFor="speech">文字區塊:</label>
                <textarea className="textarea-input" id="speech" rows="10" value={transcript} onChange={changeHandler}></textarea>
            </div>
        </>
    );
}

export default VoiceToText;