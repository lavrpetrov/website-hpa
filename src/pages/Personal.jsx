import React from 'react';
import {Link} from "react-router-dom";
import {logo} from "../components/image";

function Personal() {
    const headers = {
        sdActive: (<Link to="/software-development" className="nav__sd active">
            <span className="purple">Sof</span><span className="green">twa</span><span
            className="orange">re</span><br/><span className="purple">Dev</span><span
            className="green">elop</span><span className="orange">ment</span>
        </Link>),
        ppActive: (<Link to="/personal-productivity" className="nav__pp active">
            <span className="purple">Per</span><span className="green">son</span><span className="orange">al</span><br/><span
            className="purple">Pro</span><span
            className="green">duc</span>
            <span className="orange">tivity</span>
        </Link>),
        sd: (<Link to="/software-development" className="nav__sd">Software<br/>Development</Link>),
        pp: (<Link to="/personal-productivity" className="nav__pp">Personal<br/>Productivity</Link>),
        school: (<Link to="#" className="nav__school">School 146</Link>)
    }
    return (
        <div className="sd_body">
            <div className="headerPages container">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo"/>
                </Link>
                <div className="nav">
                    {headers.sd}
                    {headers.ppActive}
                    {headers.school}
                </div>
            </div>
            <div>fdfdfdf</div>
        </div>
    );

}

export default Personal;
