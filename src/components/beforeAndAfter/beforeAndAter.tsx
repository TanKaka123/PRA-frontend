import "./beforeAndAter.scss";
import "../../sass/component/tittle.scss";

import Slick_1 from "./slider_1";
import Slick_2 from "./slider_2";
import { SetStateAction, useRef, useState } from "react";


function BeforeAndAter() {
    const [slideIndex, setSlideIndex] = useState(0)

 
   

    const moveDot = (index: SetStateAction<number>) => {
        setSlideIndex(index)
    }

    
    return (
        <div>
            <h1 className="tittle"> <span >Before</span> and <span >After</span> </h1>
            <h2 className="des_BAA">image forest before & after in the world</h2>
            <hr/>  
            <div className="slide_list--items" onMouseDown={()=>{
                setSlideIndex(1-slideIndex);
            }}>
                <div className={slideIndex === 0 ? "slide active-anim" : "slide"}>
                    <Slick_1/>
                </div>
                <div className={slideIndex === 1 ? "slide active-anim" : "slide"}>
                    <Slick_2/>
                </div>   
             </div>         
                     
            <div className="container-dots">
                {Array.from({length: 2}).map((item, index) => (
                    <div onClick={() => moveDot(index )}
                        className={slideIndex === index  ? "dot active" : "dot"}  >
                    </div>
                ))}
            </div>
        </div>
    );
}   

export default BeforeAndAter;