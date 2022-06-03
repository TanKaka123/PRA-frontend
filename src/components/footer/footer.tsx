import "./footer.scss";
import {
  FacebookIcon,
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  Location,
  Mailbox,
  PhoneRing,
} from "../../icon/icon";

function footer() {
  return (
    <div className="contain_footer">
      <footer>
        <div className="top_header">
          <section>
            <span>
              <Location />
            </span>
            <span>353 Bis Nguyen Trai, District 1, Ho Chi Minh city</span>
          </section>
          <section>
            <span>
              <Mailbox />
            </span>
            <span>hongtan.dev@gmail.com</span>
          </section>
          <section>
            <span>
              <PhoneRing />
            </span>
            <span>0398915723</span>
          </section>
        </div>
        <span className="border-shape"></span>
        <div className="bottom_content">
          <section>
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <GithubIcon />
            </a>
            <a href="#">
              <LinkedinIcon />
            </a>
          </section>
        </div>
        <div className="copyright">
          Copyright © 2022 Rare-animal - All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default footer;
