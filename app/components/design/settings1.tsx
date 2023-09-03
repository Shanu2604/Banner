import React from "react";
import './display.css';

const Settings1 = () => {
    return(
        <div className="card">
            <button className="btn">save template</button>
            <hr />
            <h5>Name</h5>
            <input type="text" className="form-control form-control-sm mb-2" placeholder="template name" />
            <hr />
            <div className="controls">
              <button><i className="fa-solid fa-undo text-right content-center justify-center"></i>undo</button>
              <button><i className="fa-solid fa-redo text-center content-center justify-center"></i>redo</button>
            </div>
            <hr />

            <hr />

                <div className="ij">
                   <label>Rotate Z</label> <input type="number" className="myname" id="name" placeholder="angle" />
                 </div>

                 <div className="ij">
                   <label>Rotate Z</label> <input type="number" className="myname" id="name" placeholder="angle" />
                 </div>

                 <div className="ij">
                   <label>Rotate Z</label> <input type="number" className="myname" id="name" placeholder="angle" />
                 </div>

                 <div className="ij">
                   <label>Rotate Z</label> <input type="number" className="myname" id="name" placeholder="angle" />
                 </div>
                 
                 <hr />
                 <hr />
        </div>
    )
}

export default Settings1  