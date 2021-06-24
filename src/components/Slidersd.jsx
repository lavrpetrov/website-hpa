import React, {useState} from 'react';
import {petr, andrey, roman, mikhail, yaroslav, telegram, notion, cv, instagram, vk} from "./image";

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

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


function Slider() {
    const [sliderActive, setSliderActive] = React.useState(false);
    const [activeBlock, setActiveBlock] = useState(null);
    const sortRef = React.useRef();

    const onSelectBlock = (index) => {
        setActiveBlock(index);
    }

    const toggleVisibleBlockSlider = () => {
        setSliderActive(!sliderActive)
    };

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setSliderActive(false)
        }
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    const sliders = [
        {
            name: "Petr",
            image: (<img className="swiper__img" src={petr} alt="place"/>),
            value: (<div className="swiper__text">
                <div className="swiper__text_p"><span>Роль:</span><p>Руководитель проектов</p></div>
                <div className="swiper__text_div"><span>Компетенции: </span><p>&#10004; Программирование, System
                    design<br/>
                    &#10004; Карьера, собеседования, резюме, рекрутинг<br/>
                    &#10004; Руководство командой, управление проектами и процессами<br/>
                    &#10004; Коммуникации, презентации, переговоры, импровизация, лекции, нетворкинг<br/>
                    &#10004; Body weight fitness, йога, скалолазанье, альпинизм, путешествия<br/>
                    &#10004; Практическая философия, Психология, Non-fiction литература, жизненные стратегии и
                    майндсеты,
                    hard and soft skills
                </p></div>
                <div className="swiper__text_div"><span>Интересы: </span><p>
                    &#10004; Personal Assistant AI, Deep user interactions, Google Assistant <br/>
                    &#10004; AR/VR, Machine Perception, PC building<br/>
                    &#10004; Knowledge Systems, Learning and interacting with information<br/>
                    &#10004; Psychology, Productivity systems<br/>
                    &#10004; Рисование, игра на пианино, поезия, сторителлинг, танцы</p></div>
            </div>),
            valueFull: (<div className="swiper__text">
                    <div className="swiper__full"><span>О себе:</span><p>
                        Мне кажется, современный мир слишком разочарован, потерян, ленив и черств.<br/>
                        И я хочу что-то с этим сделать.<br/>
                        Одна из причин почему мир такой - потому что все это очень сложно.<br/>
                        Быть вдохновленным - тяжело. Потому что вдохновение без результатов быстро приводит к
                        разочарованию. А результаты требуют навыков, труда и плана. И никто не учит нас как создать
                        что-либо из этого.<br/>
                        Знать свой путь - тяжело. Потому что мир огромный и запутанный. Мы абсолютно свободны, перед
                        нами миллионы дорог - и глаза разбегаются, выбор выматывает, и в итоге, изнеможденные, мы идем
                        по первой затянувшей нас колее, пока она не приведет нас в тупик.<br/>
                        Не лениться тяжело. Потому что каждая маленькая лень - делает лень в нас сильнее. Лень рождает
                        лень. А сила рождает силу. Но никто не говорит нам об этом. Если тебе тяжело встать с кровати -
                        так будет не всегда. Так будет первые 10 раз. Но эти десять раз нужно себя преодолеть.<br/>
                        Любить и ценить окружающих людей тяжело. Жизнь полна стресса, мисскоммуникации и перечисленных
                        выше недуга. В этих обстоятельствах люди часто друг друга разочаровывают, подводят, предают.
                        Тяжело продолжать верить в людей, доверять им, быть уязвимым. Но оно того стоит.<br/>
                        Мне очень повезло найти решения для этих задач которые, кажется, может быть, если повезет -
                        имеют шансы сработать. И я считаю своим долгом поделиться ими с теми, кто хочет поменять к
                        лучшему свою жизнь и жизнь окружающих людей.<br/></p>
                    </div>
                    <div className="swiper__contacts_main">
                        <span>Ссылки:</span>
                        <div className="swiper__contacts">
                            <a className="swiper__contacts_a"
                               href="https://www.notion.so/Who-am-I-Petr-Lavrov-64debc4fe6404cab8785fa47d57aba5b"
                               target="_blank" rel="noreferrer"><img
                                className="swiper__contacts_logo" src={notion} alt="notion"/></a>
                            <a className="swiper__contacts_a"
                               href="https://www.notion.so/Petr-Lavrov-487e20f1130d4db08b67ae6ee58251ec"
                               target="_blank" rel="noreferrer"><img
                                className="swiper__contacts_logo" src={cv} alt="notion"/></a>
                            <a className="swiper__contacts_a" href="https://www.instagram.com/beware.life_is_awesome/"
                               target="_blank" rel="noreferrer"><img
                                className="swiper__contacts_logo" src={instagram} alt="notion"/></a>
                            <a className="swiper__contacts_a" href="https://t.me/manifold_garden" target="_blank" rel="noreferrer"><img
                                className="swiper__contacts_logo" src={telegram}
                                alt="notion"/></a>
                        </div>
                    </div>
                </div>
            ),
            about: (<div className="swiper__about">Подробнее...</div>)
        },
        {
            name: "Andrey",
            image: (<img className="swiper__img" src={andrey} alt="place"/>),
            value: (<div className="swiper__text">
                <div className="swiper__text_p"><span>Роль:</span><p>TeamLead команды разработчиков</p></div>
                <div className="swiper__text_div"><span>Компетенции: </span><p>&#10004; Программирование, Frontend,
                    ReactJS, BEM, SASS<br/>
                </p></div>
                <div className="swiper__text_div"><span>Интересы: </span><p>
                    &#10004;Personal Education, Computer, Software and Technical Innovations<br/>
                    &#10004; Бег, плавание<br/>
                    &#10004;Cooking, Playing Guitar</p></div>

            </div>),
            valueFull: (<div className="swiper__text">
                    <div className="swiper__full"><span>О себе:</span><p>
                        Интересуюсь инвестициями и саморазвитием. <br/>
                        Внедрил систему GTD. <br/>
                        В последнее время полностью отказался от новостных подписок и лишних соц.сетей.</p>
                    </div>
                    <div className="swiper__contacts_main">
                        <span>Ссылки:</span>
                        <div className="swiper__contacts">
                            <a className="swiper__contacts_a"
                               href="https://www.instagram.com/mustkov/" target="_blank" rel="noreferrer"><img
                                className="swiper__contacts_logo" src={instagram} alt="notion"/></a>
                            <a className="swiper__contacts_a" href="https://t.me/mustkov" target="_blank" rel="noreferrer"><img
                                className="swiper__contacts_logo" src={telegram}
                                alt="notion"/></a>
                        </div>
                    </div>
                </div>
            ),
            about: (<div className="swiper__about">Подробнее...</div>)
        },
        {
            name: "Roman",
            image: (<img className="swiper__img" src={roman} alt="place"/>),
            value: (<div className="swiper__text">
                <div className="swiper__text_p"><span>Роль:</span><p>Куратор направления - "Notion"</p></div>
                {/*<div className="swiper__text_div"><span>Компетенции: </span><p>&#10004; Программирование, Frontend,*/}
                {/*    ReactJS, BEM, SASS<br/>*/}
                {/*    &#10004; Руководство командой, управление проектами и процессами<br/>*/}
                {/*    &#10004; Бег, плавание<br/>*/}
                {/*</p></div>*/}
                {/*<div className="swiper__text_div"><span>Интересы: </span><p>*/}
                {/*    &#10004;Personal Education, Computer, Software and Technical Innovations<br/>*/}
                {/*    &#10004;Cooking, Playing Guitar</p></div>*/}
            </div>),
            valueFull: (<div className="swiper__text">
                    <div className="swiper__full"><span>О себе:</span><p>
                        Веду GTD с октября <br/>
                        Каждое утро принимаю холодный душ<br/>
                        Пробовал медитировать<br/>
                        Ботаю Python<br/>
                        Тренировки — мой стиль жизни<br/>
                        Не залипаю в ленту ВК, не пялюсь на фотки в инсте и тд...<br/>
                        Учусь в СПбГУ</p>
                    </div>
                    <div className="swiper__contacts_main">
                        <span>Ссылки:</span>
                        <div className="swiper__contacts">
                            <a className="swiper__contacts_a"
                               href="https://www.instagram.com/mustkov/" target="_blank" rel="noreferrer"><img
                                className="swiper__contacts_logo" src={instagram} alt="notion"/></a>
                            <a className="swiper__contacts_a" href="https://t.me/mustkov" target="_blank" rel="noreferrer"><img
                                className="swiper__contacts_logo" src={telegram}
                                alt="notion"/></a>
                        </div>
                    </div>
                </div>
            ),
            about: (<div className="swiper__about">Подробнее...</div>)
        },
        {
            name: "Yaroslav",
            image: (<img className="swiper__img" src={yaroslav} alt="place"/>),
            value: (<div className="swiper__text">
                <div className="swiper__text_p"><span>Роль:</span><p>ассистент, программист</p></div>
                <div className="swiper__text_div"><span>Компетенции: </span><p>
                    &#10004;Программирование на Python<br/>
                    &#10004;Быстрый и качественный поиск информации
                </p></div>
                <div className="swiper__text_div"><span>Интересы: </span><p>
                    &#10004;Гитара<br/>
                    &#10004;Поезия<br/>
                    &#10004;Бег, турник, брусья</p></div>

            </div>),
            valueFull: (<div className="swiper__text">
                    <div className="swiper__full"><span>О себе:</span><p>
                        Студент 1 ИБ в ДОННУ<br/></p>
                    </div>
                    <div className="swiper__contacts_main">
                        <span>Ссылки:</span>
                        <div className="swiper__contacts">
                            <a className="swiper__contacts_a"
                               href="https://vk.com/bdew_187451" target="_blank" rel="noreferrer"><img
                                className="swiper__contacts_logo" src={vk} alt="notion"/></a>
                            <a className="swiper__contacts_a" href="https://t.me/ylv_4" target="_blank" rel="noreferrer"><img
                                className="swiper__contacts_logo" src={telegram}
                                alt="notion"/></a>
                        </div>
                    </div>
                </div>
            ),
            about: (<div className="swiper__about">Подробнее...</div>)
        },
    ];

    return (
        <>
            <Swiper ref={sortRef} slidesPerView={1} spaceBetween={30} loop={true} pagination={{
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
                                     onSelectBlock(index)
                                 }}>{sliders[index].about}</div>
                        </div>
                        <div>{sliders[index].image}</div>
                        {sliderActive && (
                            <div className={activeBlock === index ? 'swiper__block' : ''}>
                                {activeBlock === index ? sliders[index].valueFull : ''}
                            </div>
                        )}
                    </SwiperSlide>
                ))
                }
            </Swiper>

        </>
    );

}

export default Slider;
