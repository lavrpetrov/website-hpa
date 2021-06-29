import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "../scss/main.css";

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';
import {cv, github, instagram, logo, notion, str, telegram} from "./image";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


function Slider() {
    const [sliderActive, setSliderActive] = React.useState(false);

    const toggleVisibleBlockSlider = () => {
        setSliderActive(!sliderActive)
    };

    const sliders = [
        {
            name: "Website",
            image: (<img className="swiper__img" src={logo} alt="place"/>),
            value: (<div className="swiper__text">
                <div className="swiper__text_p"><span>Название:</span><p>Website HPA</p></div>
                <div className="swiper__text_div"><span>Создатель:</span><p>Андрей Долженков, Олег Неволин</p></div>
                <div className="swiper__text_div"><span>Цель проекта: </span>
                    <p>&#10004; Создание сайта, на котором разместить страницы подразделений, <br/> ассистентов,
                        менторов, базу знаний ЛЭ.<br/>
                    </p></div>
                <div className="swiper__text_div"><span>Технологии: </span><p>
                    &#10004; HTML <br/>
                    &#10004; CSS<br/>
                    &#10004; JavaScript<br/>
                    &#10004; ReactJS<br/>
                    &#10004; React Router</p></div>
                <div className="swiper__contacts_main">
                    <span>Ссылки:</span>
                    <div className="swiper__contacts">
                        <a className="swiper__contacts_a"
                           href="https://github.com/lavrpetrov/website-hpa"
                           target="_blank" rel="noreferrer"><img
                            className="swiper__contacts_logo" src={github} alt="notion"/></a>

                    </div>
                </div>
            </div>),
        },
        {
            name: "STR",
            image: (<img className="swiper__img" src={str} alt="place"/>),
            value: (<div className="swiper__text">
                <div className="swiper__text_p"><span>Название:</span><p>Simple Task Repeater</p></div>
                <div className="swiper__text_div"><span>Создатель:</span><p>Петр Лавров, Альбина Лупанова</p></div>
                <div className="swiper__text_div"><span>Цель проекта: </span>
                    <p>&#10004; Создание приложения, способное автоматически балансировать нагрузку по дням(условно Nmax
                        задач в день. Если Nтек.задач > Nmax - задача переноситься на другой день), и гибкий перенос
                        задач (пример: смена постельного белья - если ты не сделал её в текущий день, она не удалиться
                        со списка, а перенесётся на другой день)<br/>
                    </p></div>
                <div className="swiper__text_div"><span>Технологии: </span><p>
                    &#10004; Python <br/>
                </p></div>
                <div className="swiper__contacts_main">
                    <span>Ссылки:</span>
                    <div className="swiper__contacts">
                        <a className="swiper__contacts_a"
                           href="https://github.com/lavrpetrov/simple-task-repeater"
                           target="_blank" rel="noreferrer"><img
                            className="swiper__contacts_logo" src={github} alt="notion"/></a>

                    </div>
                </div>
            </div>),
        },
        {
            name: "NA",
            image: (<img className="swiper__img" src={notion} alt="place"/>),
            value: (<div className="swiper__text">
                <div className="swiper__text_p"><span>Название:</span><p>Notion Assistant</p></div>
                <div className="swiper__text_div"><span>Создатель:</span><p>Роман Шапошников, Степан Григорьев</p></div>
                <div className="swiper__text_div"><span>Цель проекта: </span>
                    <p>&#10004;Создание бота, который будет уметь работать со страничками в Notion (сканить,
                        обрабатывать, расставлять теги, проставлять статусы.<br/>
                    </p></div>
                <div className="swiper__text_div"><span>Технологии: </span><p>
                    &#10004; Python <br/>
                    &#10004; Notion API <br/>
                </p></div>
                <div className="swiper__contacts_main">
                    <span>Ссылки:</span>
                    <div className="swiper__contacts">
                        <a className="swiper__contacts_a"
                           href="https://github.com/lavrpetrov/notion-assistant"
                           target="_blank" rel="noreferrer"><img
                            className="swiper__contacts_logo" src={github} alt="notion"/></a>

                    </div>
                </div>
            </div>),
        },
        {
            name: "WC",
            image: (<img className="swiper__img" src="http://placehold.it/400x400" alt="place"/>),
            value: (<div className="swiper__text">
                <div className="swiper__text_p"><span>Название:</span><p>Игра в города</p></div>
                <div className="swiper__text_div"><span>Создатель:</span><p>Анастасия Сыпачева</p></div>
                <div className="swiper__text_div"><span>Цель проекта: </span>
                    <p>&#10004; Классическая игра в города с уровнями сложности<br/>
                    </p></div>
                <div className="swiper__text_div"><span>Технологии: </span><p>
                    &#10004; Java <br/>
                </p></div>
                <div className="swiper__contacts_main">
                    <span>Ссылки:</span>
                    <div className="swiper__contacts">
                        <a className="swiper__contacts_a"
                           href="https://github.com/lavrpetrov/cities-game"
                           target="_blank" rel="noreferrer"><img
                            className="swiper__contacts_logo" src={github} alt="notion"/></a>

                    </div>
                </div>
            </div>),
        },
    ];

    return (
        <>
            <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                {sliders &&
                sliders.map((name, index) => (
                    <SwiperSlide
                        key={`${name}_${index}`}
                        key_second={`${index}`}
                    >
                        <div className="swiper__text_main ">
                            {sliders[index].value}
                            <div className="swiper__about"
                                 onClick={() => {
                                     toggleVisibleBlockSlider();
                                 }}>{sliders[index].about}</div>
                        </div>
                        <div>{sliders[index].image}</div>
                    </SwiperSlide>

                ))
                }
            </Swiper>

        </>
    );

}

export default Slider;
