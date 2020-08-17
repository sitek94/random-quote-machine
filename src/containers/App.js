import React, { useState } from 'react';
import { random } from 'lodash';


import themeColors from '../themeColors';
import QuoteBox from './QuoteBox';

export default function App() {
  const [themeColor, setThemeColor] = useState(themeColors[2]);

  // To change theme of the app I access CSS root variables 
  // Main colors in styles are based on these variables 
  const style = {
    '--primary': themeColor.main,
    '--primary-dark': themeColor.dark,
  };

  const changeThemeColor = () => {
    const randomNum = themeColors[random(0, themeColors.length - 1)];

    setThemeColor(randomNum);
  }

  return (
    <div className="App" style={style}>
      <QuoteBox onNewQuoteClick={changeThemeColor} />
    </div>
  );
}

