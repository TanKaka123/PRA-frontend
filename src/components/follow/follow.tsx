import "./follow.scss";
import {
    InstagramIcon,
    FacebookIcon,
    GithubIcon,
    LinkedinIcon
  } from "../../icon/icon";
function follow() {
  return (
    <div id="follow">
        <div className="desc--follow">
            <h1 className="">Follow me now. If you <span>Can</span></h1>
            <h2 className="">Niels.to appreciates to have friends and fans from so many walks of life around the world. Feel free to connect on social media with us.</h2>
        </div>
        <div className="container-follow">
            <div className="social">
            <a href="https://github.com/TanKaka123" target="_blank" className="twitter">
                <GithubIcon/>
            </a>
            <a href="https://www.facebook.com/hongtan1422002/" target="_blank" className="facebook">
                <FacebookIcon/>
            </a>
            <a href="https://www.instagram.com/hong_tan__/" target="_blank" className="instagram">
                <InstagramIcon/>
            </a>
            <a target="_blank "href="https://www.linkedin.com/in/nguyenhongtan/" className="linkdin">
                <LinkedinIcon/>
            </a>
            </div>
            <div className="profile"></div>
        </div>
    </div>
  );
}

export default follow;
