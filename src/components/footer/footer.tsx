import React from 'react';
import {LogoIcon} from "../../icon/icon";
import "./footer.scss";

function footer() {
    return (
        <div className="contain_footer">
            <LogoIcon/>
            <ul className="">
                <li>Privacy policy</li>
                <li>Hosted by Netlify</li>
                <li>Cookie policy</li>
            </ul>
            <ul className="">
                <li>Design by Tan Kaka</li>
                <li>All right reserved</li>
                <li>K.V.K 81231</li>
            </ul>
        </div>
    );
}

export default footer;