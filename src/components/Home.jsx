import React from 'react';

import {
    cloud1down,
    cloud1upper, cloud3down, cloud3upper,
    contactUs,
    greenPlus,
    island1,
    island2,
    island3,
    orangePlus,
    purplePlus,
    logo
} from "./image";

import Menu from "./Menu"
import {Link} from "react-router-dom";

function Home() {
    const [menuActive, setMenuActive] = React.useState(false)
    const items = [
        {value: "Personal Productivity", href: "/personal-productivity"},
        {value: "Software Development", href: "/software-development"},
        {value: "School 146", href: "/school"},
        {value: "Contact us", href: "/contact"},
    ]
    return (
        <div className="container">
            <style>{'body { background-color: #CCD4D6; }'}</style>
            <div className="header">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo"/>
                </Link>
                <img onClick={() => setMenuActive(!menuActive)} src={contactUs} alt="contact" className="contact"/>
            </div>
            <Menu logo={logo} items={items} active={menuActive} setActive={setMenuActive}/>
            <div className="main">
                <div className="island__left">
                    <Link to="/personal-productivity">
                        <img src={island1} alt="island"
                             className="island__left_main"/>
                    </Link>
                    <Link to="/personal-productivity">
                        <img src={greenPlus} alt="plus" className="plus__green"/>
                    </Link>
                </div>
                <div className="island__middle">
                    {/*
                    за что отвечает этот остров, пока хз (сайт школы, приколюхи)
                    пока пусть висит ноунейм
                    */}
                    <img src={island2} alt="island"
                         className="island__middle_main"/>
                    <img src={orangePlus} alt="plus" className="plus__orange"/>
                </div>
                <div className="island__right">
                    <Link to="/software-development">
                        <img src={purplePlus} alt="plus" className="plus__purple"/>
                    </Link>
                    <Link to="/software-development">
                        <img src={island3} alt="island"
                             className="island___right_main"/>
                    </Link>
                </div>
                <img src={cloud1upper} alt="cloud" className="cloud__first__upper"/>
                <img src={cloud1down} alt="cloud" className="cloud__first__down"/>
                <img src={cloud3upper} alt="cloud" className="cloud__third__upper"/>
                <img src={cloud3down} alt="cloud" className="cloud__third__down"/>
            </div>
        </div>
    );

}

export default Home;
