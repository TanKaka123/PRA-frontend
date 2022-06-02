import { useState } from "react";
import {
  PhoneContactIcon,
  MailContactIcon,
  TwitterContactIcon,
  MessageContactIcon,
  SleepIconContact,
} from "../../icon/icon";
import "./boxContact.scss";


const IconBox=(props:{types:string})=>{
    switch(props.types){
        case "phone":
            return <PhoneContactIcon/>
        case "mail":
            return <MailContactIcon/>
        case "twitter":
            return <TwitterContactIcon/>
       default :
            return <MessageContactIcon/>
    }
}

function BoxContact(props: { type: string }) {
    const [hover,setHover]=useState(false);
  return (
  <div className="box_contain--contact" onMouseOver={()=>{setHover(true)}} onMouseOut={()=>{setHover(false)}} >
     
     <div className="">
        <IconBox types={props.type}/>
     </div> 
      <h1 className="">{props.type}</h1>
        <div className="sleep-icon">
      {
        hover?<SleepIconContact color="#FAFF04" /> : <SleepIconContact color="#1CFF32"/>
      }
    </div>

  </div>
  );
}

export default BoxContact;
