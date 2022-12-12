import React from "react";
import "./Home.css";
import PayDate from "./PayDate";
import Period from "./Period";
import Calender from "./Calender";
import Count from "./Count";
import Events from "./Events";
import Wishes from "./Wishes";
import News from "./News";
import Task from "./Task";

function Home() {
  return (
    <div className="Home">
      <div className="Home__mainCol">
        <div>
          <Period />
          <PayDate />
        </div>
        <div>
        </div>
        <div>
        <Count />

        </div>
      </div>
      <div className="Home__mainCol"></div>
      <div>
      </div>
      <div>
      </div>
    </div>
  );
}
export default Home;
