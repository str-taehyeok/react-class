import React from 'react';
// import Counter from './docs/day05/zustand/Counter';
// import Form from './docs/day05/form/Form';
// import HomeInput from './pages/home/HomeInput';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
// 모든 태그는 함수로 선언
// DOM은 하나로 선언
// export default로 외부로 
// 이게 하나의 component 

// 컴포넌트 규칙 : 앞글자가 대문자


// <Route path='/' element={}/>
// 패스에 들어오면 엘리멘트 보여줘
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  );
}

export default App;
