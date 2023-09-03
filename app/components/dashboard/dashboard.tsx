import React, { Component } from "react";
import Settings1 from "../design/settings1";
import Display  from "../design/display";
import Settings2 from "../design/settings2";
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends Component {
  render(): React.ReactNode {
    return(
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-2 text-center">
             <Settings1 />
          </div>
          <div className="col-lg-8 text-center self-top">
             <Display />
          </div>
          
          <div className="col-lg-2 text-center">
             <Settings2 />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;