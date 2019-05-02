import React from 'react';
import ReactSVG from 'react-svg'
const App = () => (
  <div>
    {/* Logo is an actual React component */}
    <Logo />
  </div>
); 
const HelloWorld = () => (
	<div className="page-wrapper">
	  <div className="layer1">
    <div className="layer1-top-parallax">
            <div className="Ukraine_map">
        <ReactSVG src="./assets/img/ukraine.svg" />
      </div>
      <div className="semiopacity">
          <article className="card">
                <h1 className="head"><span>Оберіть місцевий бюджет</span></h1>
                <form className="answers">
                  <button className="send">
                      <div className="fa-img">
                        <img src="/assets/img/go2.png"/>
                      </div>              
                  </button>
                    <div className="custom-select">
                      <div className="select-wrapper">
                       <select>
                        <option value="" disabled defaultValue>Виберіть місто</option>
                        <option value="1">Київ</option>
                        <option value="2">Дніпропетровськ</option>
                        <option value="3">Одеса</option>
                      </select>
                      <div className="select-arrow"></div>
                      </div>
                      <div className="select-wrapper">

                      <select>
                        <option value="" disabled defaultValue>Виберіть бюджет</option>
                        <option value="1">Київський бюджет</option>
                        <option value="2">Дніпропетровський бюджет</option>
                        <option value="3">Одеський бюджет</option>
                      </select>
                      <div className="select-arrow"></div>
                      </div>
                  </div>
                </form>
          </article>
      </div>
    </div>
  </div>
  <div className="layer2">
    <div className="layer2-top">
      <div className="hover-fold">
        <div className="hide_top">
          <h2>ДИПЛОМНИЙ ПРОЕКТ</h2>
        </div>
        <div className="top">
          <div className="front face"></div>
          <div className="back face">
            <p>Відкритий бюджет</p>
            <p>Продукт призначений для аналізу місцевих бюджетів у результаті - формування аналізу, або кластеризація бюджету</p>
          </div>
        </div>
  
          <div className="bottom"></div>
  
      </div>
    </div>
    
    <div className="layer2-button">
      <div className="book-bg">
          <div className="book-cover"></div>
          <div className="book-page-cover"></div>
      </div>
    </div>


</div>
  </div>
);

export default HelloWorld;
