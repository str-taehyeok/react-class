import React, { useRef, useState } from 'react';

// 빨간색 버튼을 누르면 글자색 빨간색
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색을 입력하면 글자색을 없앤다.

const Color = () => {
    const [result, setResult] = useState("")
    const [color, setColor] = useState('')

    const inputRef = useRef();
    const textReset = () => {
        inputRef.current.value = "";
    }
    

    const changedRed = (e) => {
        setColor('red')
        console.log(e)
    }
    const changedBlue = () => {
        setColor('blue')
    }
    const viewResult = (e) => {
        if(e.target.value === "핑크색"){ setColor("") }
        setResult(e.target.value)
    }

    return (
        <div>
            <p style={{color}}>{result}</p>
            <input ref={inputRef} type="text" onChange={viewResult} placeholder='색깔을 입력하세요'/>
            <button onClick={changedRed}>빨간색</button>
            <button onClick={changedBlue}>파란색</button>
            <button onClick={textReset}>값 초기화</button>
        </div>
    );
};

export default Color;