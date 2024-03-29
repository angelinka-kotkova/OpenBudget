import React from 'react';
const App = () => (
  <div>
    {/* Logo is an actual React component */}
    <Logo />
  </div>
); 
const Income = () => (
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
                      <p>GO</p>
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
      <video autoPlay muted loop id="myVideo">
        <source src="./assets/img/Magic-Mouse-Scroll.mp4" type="video/mp4" />
      </video>
      <div className="layer2-top-content">
        <h1>ДИПЛОМНИЙ ПРОЕКТ</h1>
        <p>Open Budget</p>
      </div>
    </div>
    
    <div className="layer2-button">
      <div className="hover-fold">
        <div className="hide_top">
        <div className = "hide_top-top">
          <h2>АВТОР ТА КЕРІВНИК</h2>
            </div>
            <div className = "hide_top-top-top">
            <div className = "hide_top-left">
            Коткова А.А.
            </div>
            <div className = "hide_top-right">
            Олійник О.Ю.
            </div>
            </div>
        </div>
        <div className="top">
          <div className="front face"></div>
          <div className="back face">
            <div className = "bottom-img-left">
            </div>
            <div className = "bottom-img-right">
            </div>
          </div>
        </div>
          <div className="bottom">
          <p>А ТУТ ІНФОРМАЦІЯ ПРО ВИКОНАВЦІВ ПРОЕКТУ</p>
          </div>
      </div>
    </div>
  </div>
  <div className = "layer3">
  </div>
  </div>
  
);

export default Income;
