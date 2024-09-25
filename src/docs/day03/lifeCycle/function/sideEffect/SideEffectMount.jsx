import React, { useEffect, useState } from 'react';


// https://jsonplaceholder.typicode.com/users
// fetch로 요청후 Side-Effect를 해결 후
// 화면에 user의 name만 li태그로 출력하기

const SideEffectMount = () => {

    const [userNames, setUserNames] = useState([]);

    useEffect(() => {
        const getUserName = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const datas = await response.json()
            return datas; // -> setUserNames가 수정하면서 상태를 바꿔줌 그래서 useEffect에 넣어야됨
    }

        getUserName().then(setUserNames);   
    },[]);
// {name} -> 비구조화
    return (
        <ul>
            {userNames.map(({name},i)=><li key={i}>{name}</li>)}  
        </ul>
    );
};

export default SideEffectMount;