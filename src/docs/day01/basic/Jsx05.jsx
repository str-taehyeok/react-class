import React from 'react';
import PassComponent from './PassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';
import NotPassComponent from './NotPassComponent';

// 15분
// 19세 이하, age는 상수로 설정
// 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// age가 짝수라면 "당첨"

const Jsx05 = () => {

  const age = 10;
//   const [pass, notPass, lucky, unLucky] = ["입장 가능", "입장 불가", "당첨", "꽝"];
  const isAdult = age >= 19;
  const isEven = age % 2 === 0;

//   const passComponent = (<div>{pass}</div>)
//   const notPassComponent = (<div>{notPass}</div>)
//   const luckyComponent = (<div>{lucky}</div>)
//   const unLuckyComponent = (<div>{unLucky}</div>)

  const enter = isAdult ? <PassComponent /> : <NotPassComponent />;
  const win = isEven ? <LuckyComponent /> : <UnLuckyComponent />;

  return (
    <div>
      당신의 나이는 {age}이므로,
      {enter}
      {win}
    </div>
  );
};

export default Jsx05;