import React from "react";
import twitterIcon from "../images/Twitter Icon.png"
import facebookIcon from "../images/Facebook Icon.png"
import instagramIcon from "../images/Instagram Icon.png"
import githubIcon from "../images/GitHub Icon.png"


export default function Footer() {
    return (
        <section className="footer">
            <img className="socialsIcon" src={twitterIcon}/>
            <img className="socialsIcon" src={facebookIcon}/>
            <img className="socialsIcon" src={instagramIcon}/>
            <img className="socialsIcon" src={githubIcon}/>
        </section>
    )
}