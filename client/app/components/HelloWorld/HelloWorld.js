import React from 'react';
import ReactSVG from 'react-svg'
const App = () => (
  <div>
    {/* Logo is an actual React component */}
    <Logo />
  </div>
); 
const HelloWorld = () => (
	<div>
  	<div className="parallax" id="parallax1">
		<div data-depth="0.2" className="semiopacity">
			<div className="in-semiopacity">
				<img src="/assets/img/favicon.ico"/>
				<hr/>
				<h1>Дипломний проект</h1><br/>
				<h2>на тему: "Комплекс задач кластеризації даних місцевих фінансів"</h2>
			</div>
		</div>
	</div>
	<div className="parallax-1">
      <div className="arrow-container">
        <div className="semiopacity">
	        <a href="#myAnchor">
	          <div className="arrow arrow-first"></div>
	          <div className="arrow arrow-second"></div>
	        </a>
      	</div>
  	</div>
    <div name="myAnchor" id="myAnchor" className="choose-buget">
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
		
  <div className="parallax-2">
    <div className="semiopacity-2">
    
    <div className="me-information">
      <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/assets/img/me1.png" alt="Avatar" style={{width:'250px',height:'250px'}}/>
        </div>
          
        <div className="flip-card-back">
          <p>АВТОР</p> 
          <h5>Коткова Ангеліна</h5>
          <hr/>
          <p>студентка 4 курсу</p> 
          <p>групи ІС-51, ФІОТ, АСОІУ</p>
        </div>
      </div>
    </div>
  </div>  
  
  <div className="program-information">
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src="./assets/img/programm.png" alt="Avatar" style={{width:'250px',height:'250px'}}/>
      </div>
        
      <div className="flip-card-back">
        <p>ПРОГРАМА</p> 
        <h5>Відкритий бюджет</h5>
        <hr/>
        <p>продукт призначений для аналізу місцевих бюджетів</p> 
        <p>у результаті - формування аналізу, або кластеризація бюджету</p>
      </div>
    </div>
  </div>
  </div>

</div>
</div>

<div className="footer">
    <a target="_blank" href="https://www.instagram.com/_k_ang/?hl=ru">
      <img src="./assets/img/instagram.png" className="instagram-img" />
    </a>
    <a target="_blank" href="https://t.me/k_ang">
      <img src="./assets/img/telegram.png" className="instagram-img" />
    </a>
    <a target="_blank" href="https://www.facebook.com/angelina.kotkova.5?ref=bookmarks">
      <img src="./assets/img/facebook.png" className="instagram-img" />
    </a>
</div>
	
</div>
);

export default HelloWorld;
