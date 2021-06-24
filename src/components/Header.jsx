import React from 'react';
import {logo} from "./image";
import {Link} from "react-router-dom";

function Header() {
    // const location = window.location.pathname
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
        pp: (<Link to="/personal-productivity" className="nav__pp">Personal<br/>Productivity</Link>)
    }
    const sd = true
    console.log(sd ? '{headers.sdActive}' : '{headers.sd}')
    return (

        <div className="headerPages container">
            <Link to="/">
                <img src={logo} alt="logo" className="logo"/>
            </Link>
            <div className="nav">
                {sd ? '{headers.sdActive}' : '{headers.sd}'}
                {sd ? "{headers.sdActive}" : "{headers.sd}"}
                {headers.pp}
                <Link to="#" className="nav__school">
                    School 146
                </Link>
            </div>
        </div>
    );

}

export default Header;
