import "./beforeAndAter.scss";
import "../../sass/component/tittle.scss";
import Slick_1 from "./slider_2";

function beforeAndAter() {
    return (
        <div>
            <h1 className="tittle"> <span >Before</span> and <span >After</span> </h1>
            <h2 className="des_BAA">image forest before & after in the world</h2>
            <hr/>
            <Slick_1/>
        </div>
    );
}

export default beforeAndAter;