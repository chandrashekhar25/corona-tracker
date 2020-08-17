import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alankey =
  "eb323e171d25e8fbcb18760bcecfb3942e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>News App</h1>
    </div>
  );
};

export default App;
