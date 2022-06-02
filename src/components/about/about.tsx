import "../../sass/component/tittle.scss";
import "./about.scss";
import Purpose from "./purpose";

function about() {
  return (
    <div>
      <h1 id="about" className="tittle">About</h1>
      <h2 className="contain--porfolio__about">
        <a href="https://nghongtan.netlify.app/" className="porfolio__about">
          Porfolio &#8594;
        </a>
      </h2>

      <img src="./Avatar.png" alt="avatar" className="img--me" />
      <h1 className="name--infor">Hi, I'm <span>Nguyen Hong Tan</span></h1>
      <h2 className="desc--infor">
        Student at University of Science - VNU, Web developer
      </h2>
      <Purpose/>
    </div>
  );
}

export default about;
