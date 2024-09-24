// 컨포넌트를 만들어서
// 여러분의 이름과, 나이 , 만나이(나이-1)를 화면 출력하기!
import React from "react";
export default function Jsx03(){
  const name ="김태혁";
  const age = 27;
  
  return(
    <React.Fragment>
      <h1>저의 이름은 {name},저의 나이는 {age} 만나이는 {age -2}입니다. </h1>
    </React.Fragment>
  )
}