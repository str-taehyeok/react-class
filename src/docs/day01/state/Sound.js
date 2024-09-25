import React, { useState } from 'react';

// 강아지 버튼과 고양이 버튼을 만들고
// 버튼을 눌렀을 때 각각 울음소리가 나오도록 구현하기
const Sound = () => {

    const [sound, setSound] = useState("")
    
    const dog = () => {
        setSound("멍멍")
    }
    const cat = () => {
        setSound("야옹")
    }

    return (
        <div>
            <button onClick={dog}>강아지</button>
            <p>{sound}</p>
            <button onClick={cat}>고양이</button>
        </div>
    );
};

export default Sound;