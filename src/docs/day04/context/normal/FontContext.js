import { createContext, useState } from "react";
// 초기값
// creatContext({})
export const FontSizeContext = createContext({
  state : {
    fontSize : "",
    color : "",
    width : "",
    height : ""
  },
  action : {
    setFontSize : () => {},
    setColor : () => {},
    setWidth : () => {},
    setHeight : () => {}
  }
})





// Provider제공
const FontSizeProvider = ({children}) => {
 
  const [fontSize, setFontSize] = useState("1rem")
  const [color, setColor] = useState("black");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  
  const value = {
      state : {
      fontSize,
      color,
      width,
      height 
    },
    action : {
      setFontSize ,
      setColor,
      setWidth,
      setHeight
    }
  }
  
  
  
  
  return (
    <FontSizeContext.Provider value={value}> 
      {children}
    </FontSizeContext.Provider>
  )
}

export default FontSizeProvider;
// Consumer사용
