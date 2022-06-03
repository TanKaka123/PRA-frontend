import React, { useState } from 'react';
import "../../sass/component/tittle.scss";
import AnimalJson from "./animal.json";
import "./animal.scss";
import Select from "./select";
import {More,Less,Search} from "../../icon/icon";

function Animal() {
    const [sliceIdx,setSliceIdx] = useState(3);
    const [seeMore,setSeeMore] = useState(true);
    const [textSearch,setTextSearch]=useState("");
    
    return (
        <div id="animal">
            <h1 className="tittle">Rare <span>Animal</span></h1>
            <div className="search-container">
          
                <input id="input"  type="text" placeholder="Search.." name="search"
                onKeyPress={(e)=>{
                    if(e.key === 'Enter'){
                        const input = document.getElementById('input') as HTMLInputElement | null;
                        if(input?.value!=undefined)
                        {
                            setTextSearch(input?.value);
                        }
                      }
                }}/>
                <button type="submit" onClick={()=>{
                    const input = document.getElementById('input') as HTMLInputElement | null;
                    if(input?.value!=undefined)
                    {
                        setTextSearch(input?.value);
                    }
                    
                }}><Search/></button>
            </div>
            <Select/>
            <div className="contain_animal--items">
            { 
                AnimalJson
                .filter((val)=>{return val.name.toLowerCase().includes(textSearch.toLowerCase())})
                .slice(0,sliceIdx)
                .map((val,key)=>{
                
                    return (
                        <div className="animal_item content--animal">
                              <div className="contents-overlay"></div>
                            <img src={"./animal/"+val.name+".png" } alt="animal" className="" />
                            <div className="contents-details fadeIn-bottom">
                                <h3>{val.classify}</h3>
                                <h3>{val.status}</h3>
                            </div>
                            <div className="border"></div>
                            <div className="desc_animal--items">
                                <h2 >{val.name}</h2>
                                <p >  {val.desc}</p>
                               <div >
                               <button><a href={val.url} target="_blank">
                                    See detail</a></button>
                               </div>
                                
                            </div>
                        </div>
                    );
                })               
            }</div>
            <div className="align-btn">
                { seeMore==true &&
                <button onClick={()=>{
                    if(sliceIdx+3<=AnimalJson.length)
                        setSliceIdx(sliceIdx+3);
                    if(sliceIdx+3==AnimalJson.length)
                        setSeeMore(false);
                }} className="btn--more">
                    See more 
                <More/></button>
                }
                { seeMore==false &&
                <button onClick={()=>{
                    if(sliceIdx-3>=0)
                        setSliceIdx(sliceIdx-3);
                    setSeeMore(true);
                }} className="btn--more">
                    See Less 
                <Less/></button>
                }
            </div>
           
        </div>
    );
}

export default Animal;