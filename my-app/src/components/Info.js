import React from "react";
import profilePic from "../images/IMG_6010.jpg"
import mailIcon from "../images/Icon.png"
import linkedInIcon from "../images/Vector.png"

export default function Info() {
    return (
        <section>
            <img className="img--profile" src={profilePic}/>
            <h2 className="text--fullName">Salvinas Taukevicius</h2>
            <h2 className="text--position">Student</h2>
            <h2 className="text--website">i481136.hera.fhict.nl</h2>
            <div className="buttons">
            <div className="individualButton1">
                <img className="logo--email" src={mailIcon}/>
                <a className="buttons--email" href="mailto: s.taukevicius@student.fontys.nl">Email</a>
            </div>
                <div className="individualButton2">
                <img className="logo--linkedIn" src={linkedInIcon} />
                <a className="buttons--linkedIn" href="https://www.linkedin.com/in/salvinas-taukevi%C4%8Dius-3b2265167/?originalSubdomain=nl">LinkedIn</a>
            </div>
            </div>
        </section>
    )
}