import React from "react";
import './display.css';

const Settings2 = () => {
    return(
        <div className="cardsw">
            <form action="" method="post">
                 <div className="ij">
                   <label>Name</label>  <input type="text" className="myname" id="name" placeholder="image_container" />
                 </div>

                 <div className="ij">
                   <label>W</label> <input type="number" className="w-myname" id="name" placeholder="width" />
                   <span>
                   <label>H</label> <input type="number" className="h-myname" id="name" placeholder="height" />
                   </span>
                 </div>

                 <div className="ij">
                   <label>X</label> <input type="number" className="x-myname" id="name" placeholder="x-direction" />
                   <span>
                   <label>Y</label> <input type="number" className="y-myname" id="name" placeholder="y-direction" />
                   </span>
                 </div>

                 <div className="ij">
                   <label>Angle</label> <input type="number" className="a-myname" id="name" placeholder="angle" />
                 </div>

                 <div className="ij">
                   <label>Opacity</label> <input type="number" className="o-myname" id="name" placeholder="opacity" />
                 </div>

                 <div className="ij">
                   <label>Rotate X</label> <input type="number" className="rx-myname" id="name"  />
                 </div>

                 <div className="ij">
                   <label>Rotate Y</label> <input type="number" className="ry-myname" id="name"  />
                 </div>

                 <div className="ij">
                   <label>Rotate Z</label> <input type="number" className="rz-myname" id="name"  />
                 </div>

                 <hr />

               <div className="form-group">
               <label>upload image</label> <input type="file" />
               </div>


                 <div className="ij">
                   <label>Type</label> 
                   <select className="type" >
                     <option> select a type</option>
                     <option> 1600 x 900  </option>
                     <option> 1080 x 1080 </option>
                     <option> 1080 x 1920 </option>
                   </select>
                 </div>

                 <div className="ij">
                   <label>Anchor X</label> 
                   <select className="anchor-x" >

                   </select>
                 </div>

                 <div className="ij">
                   <label>Anchor Y</label> <input type="number" className="myname" id="name"  />
                 </div>

                 <div className="ij">
                   <label>Effect</label> <input type="number" className="myname" id="name" placeholder="0px 0px 0px #000" />
                 </div>

                  <hr />

                  <div className="ij">
                   <label>Shadow</label> <input type="number" className="myname" id="name"  />
                 </div>

                 <div className="ij">
                   <label>Border Color</label> <input type="number" className="myname" id="name"  />
                 </div>
            </form>
        </div>
    )
}

export default Settings2 