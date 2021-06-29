import React from 'react';
import {logo, sdPicture} from "../components/image"
import Slidersd from "../components/Slidersd";
import {Link} from "react-router-dom";
import SliderWorks from "../components/SliderWorks";

function Software() {
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
                    {headers.sdActive}
                    {headers.pp}
                    {headers.school}
                </div>
            </div>
            <div className="mainPages">
                <div className="container">
                    <div className="main__textPages">
                        <h1 className="main__h1Pages">Software{"\n"}Development</h1>
                        <p className="main__pPages">1. У вас есть отличная возможность поработать с крутыми
                            программистами.<br/>
                            2. Есть куча идей, как у менторов, так и у нас, также можете выносить на обсуждение свои
                            идеи
                            - побрейнштормим и сделаем что-то годное.
                            <br/>
                            3. Это отличная возможность для начинающих программистов составить себе
                            портфолио из классных и полезных проектов!</p>
                    </div>
                    <div className="main__imgPages"><img src={sdPicture} alt="softPhoto" /></div>
                </div>
            </div>
            <div className="container">
                <h1 className="name__h1Pages">Наша команда</h1>
            </div>
            <div className="swiper__teams container">
                <Slidersd/>
            </div>
            <div className="container">
                <h1 className="name__h1Pages">Наши работы</h1>
            </div>
            <div className="swiper__works container">
                <SliderWorks/>
            </div>


        </div>
    );

}

export default Software;
