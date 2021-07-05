import React from 'react'
import {logo} from "./image";

function Menu({items, active, setActive}) {
    return (
        <div className={active ? 'menu__home active' : 'menu__home'} onClick={() => setActive(false)}>
            <div className={active ? 'close__menu' : ''}/>
            <div className="menu__content" onClick={e => e.stopPropagation()}>
                <ul>
                    {items.map(item =>
                        <li
                        key={item.id}>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
                <img src={logo} alt="logo" className="logo__menu"/>
            </div>
        </div>
    )

}

export default Menu;