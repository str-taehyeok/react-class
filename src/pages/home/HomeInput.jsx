import React from 'react';
import S from './style';


const HomeInput = () => {

    // styledInput 만들어서 컴포넌트로 변경하기
    // width 200px, height 200px, border none,
    // styleButton 만들어서 컴포넌트로 변경하기
    // props로 backgrouncolor 받아서 적용시키기

    return (
        <div>
            <S.StyledInput type="text" placeholder='이름을 입력하세요'/>
            <S.StyledInput type="text" placeholder='비밀번호를 입력하세요'/>
            <S.StyledCheckButton backgroundColor={"blue"}>검증버튼😎</S.StyledCheckButton>
        </div>
    );
};

export default HomeInput;