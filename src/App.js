import React from 'react'
// import Home from './pages/home/Home';
// import HomeInput from './pages/home/HomeInput';
// import HomeForm from './pages/home/HomeForm';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import HomeIcon from './pages/home/HomeIcon';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomeIcon />
      </ThemeProvider>
    </>
  );
}
// 모든 태그는 함수로 선언한다. 돔은 하나로 리턴한다.
// export로 외부로 내보내줌
export default App;
//여기까지 전체가 하나의 컴포넌트라고 함