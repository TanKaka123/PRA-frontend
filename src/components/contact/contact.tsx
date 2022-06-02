import BoxContact from "./boxContact";
import "./contact.scss"
import "../../sass/component/tittle.scss"

function contact() {
    return (
        <div>
            <h1 id="contact" className="tittle">Let's <span>Contact</span></h1>
            <h2 className="time_contact">Local time 12:37 PM</h2>
            <div className="list_box">
                <BoxContact type={"phone"}/>
                <BoxContact type={"mail"}/>
                <BoxContact type={"twitter"}/>
                <BoxContact type={"message"}/>
            </div>
        </div>
    );
}

export default contact;