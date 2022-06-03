import { useState } from "react";
import { PurposeColor,PurposeGray} from "../../icon/icon";
import "./purpose.scss";

function Context(props:{text:string})
{
    const [hover,setHover] = useState(false);
    return (
        <li onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
        {hover?<PurposeColor/> :<PurposeGray/> }
        <p className={(hover?"color--primary":" ")} >    
            {props.text}
        </p>
      </li>
        
    );
}
function purpose() {
  return (
    <div>
      <ul className="purpose_contain">
        <Context text="There will be a small title here A couple of sentences of text" />
        <Context text="There will be a small title here A couple of sentences of"/>
        <Context text="There will be a small title here A couple of sentences of"/>
      </ul>
    </div>
  );
}

export default purpose;
