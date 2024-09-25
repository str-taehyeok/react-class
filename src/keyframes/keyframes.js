import { keyframes  } from "styled-components";

export const fadeIn = keyframes`
  0%{
    opacity: 0;
    transform: translate(0, 10px);
  }

  100%{
    opacity: 1;
    transform: translate(1, 0);
  }
`