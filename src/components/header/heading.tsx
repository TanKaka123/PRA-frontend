import "./heading.scss";
import "../../sass/component/button.scss";
import {PhoneIcon} from "../../icon/icon"

function heading() {
    return (
        <div>
            <div className="content-details ">
              <nav>
                <ul >
                  <li >
                    <img src="./Logo.png" alt=""  />
                  </li>
                  <li ><PhoneIcon/> 0398915723</li>
                </ul>
                <ul >
                  <li><a href="#">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#animal">Animal</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#follow" className="btn-primary">Admin</a></li>
                </ul>
              </nav>
          </div>
        </div>
    );
}

export default heading;