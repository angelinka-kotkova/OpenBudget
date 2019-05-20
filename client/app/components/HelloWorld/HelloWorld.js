import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Preloader from '../Preloader/Preloader';
import UkraineMap from '../UkraineMap/UkraineMap';
import ReactDOM from 'react-dom'
function preloaderCall() {
  return new Promise(
    function(resolve, reject) {
      setTimeout(
        function(){
          resolve();
        }, 1000);
    });
}
export default class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentRegion : 'Київ',
      loading: true,
      svgPathClass: 'region-map__item--active',};
    this.svgMap = React.createRef();
    this.changeRegion = this.changeRegion.bind(this);
    this.chooseCities = this.chooseCities.bind(this);
    this.chooseRegion = this.chooseRegion.bind(this);
  };
  componentDidMount() {
    preloaderCall().then(() => {
      this.setState({ loading: false }); 
    });
  }
  changeRegion(){
    let regionSelect = document.getElementById('region');
    let regionOption = regionSelect.options[regionSelect.selectedIndex].value;
    this.setState({currentRegion: regionOption});
  };
  chooseRegion(){
    return (
      [
        <option key="264001" value="Київ">м. Київ</option>,
        <option key="023015" value="Вінницька">Вінницька обл.</option>,
        <option key="033085" value="Волинська">Волинська обл.</option>,
        <option key="045380" value="Дніпропетровська">Дніпропетровська обл.</option>,
        <option key="053025" value="Донецька">Донецька обл.</option>,
        <option key="063015" value="Житомирська">Житомирська обл.</option>,
        <option key="073125" value="Закарпатська">Закарпатська обл.</option>,
        <option key="085320" value="Запорізька">Запорізька обл.</option>,
        <option key="093045" value="Івано-Франківська">Івано-Франківська обл.</option>,
        <option key="103255" value="Київська">Київська обл.</option>,
        <option key="113175" value="Кіровоградська">Кіровоградська обл.</option>,
        <option key="113135" value="Львівська">Львівська обл.</option>,
        <option key="145220" value="Миколаївська">Миколаївська обл.</option>,
        <option key="153245" value="Одеська">Одеська обл.</option>,
        <option key="165010" value="Полтавська">Полтавська обл.</option>,
        <option key="173065" value="Рівненська">Рівненська обл.</option>,
        <option key="183095" value="Сумська">Сумська обл.</option>,
        <option key="193065" value="Тернопільська">Тернопільська обл.</option>,
        <option key="203125" value="Харківська">Харківська обл.</option>,
        <option key="213135" value="Херсонська">Херсонська обл.</option>,
        <option key="225180" value="Хмельницька">Хмельницька обл.</option>,
        <option key="233025" value="Черкаська">Черкаська обл.</option>,
        <option key="243025" value="Чернівецька">Чернівецька обл.</option>,
        <option key="255060" value="Чернігівська">Чернігівська обл.</option>,
      ]
    )
  }
  chooseCities(){
    let Vinnytska = [ 
        <option value = 'Каришків'>Каришків</option>,
        <option value='Каришків'>Каришків</option>,
        <option value = 'Комарівці'>Комарівці</option>,
        <option value = 'Кузьминці'>Кузьминці</option>,
        <option value = 'Лісове'>Лісове</option>,
        <option value = 'Лука-Барська'>Лука-Барська</option>,
    ];
    let Volynska = [ 
      <option value = 'Баківці'>Баківці</option>,
      <option value='Білосток'>Білосток</option>,
      <option value = 'Буяни'>Буяни</option>,
      <option value = 'Веселе'>Веселе</option>,
      <option value = 'Воютин'>Воютин</option>,
      <option value = 'Луцький район'>Луцький район</option>,
    ];
    let Dnypropetrovska = [ 
      <option value = 'Верхньодніпровськ'>Верхньодніпровськ</option>,
      <option value='Лошкарівка'>Лошкарівка</option>,
      <option value = 'Межиріч'>Межиріч</option>,
      <option value = 'Межова'>Межова</option>,
      <option value = 'Першотравневе'>Першотравневе</option>,
      <option value = 'Троїцьке'>Троїцьке</option>,
    ];
    let Donetska = [ 
      <option value = 'Донецьк'>Донецьк</option>,
      <option value='Зайцеве'>Зайцеве</option>,
      <option value = 'Калинівка'>Калинівка</option>,
      <option value = 'Часів Яр'>ЧасівЯр</option>,
      <option value = 'Калинове'>Калинове</option>,
      <option value = 'Світлодарська'>Світлодарська</option>,
    ];
    let Zhytomyrska = [
      <option value = 'Камені'>Камені</option>,
      <option value='Лебединці'>Лебединці</option>,
      <option value = 'Любимівка'>Любимівка</option>,
      <option value = 'Міньковці'>Міньковці</option>,
      <option value = 'Мостове'>Мостове</option>,
      <option value = 'Нехворощ'>Нехворощ</option>,
    ];
    let Zakarpatska = [ 
      <option value = 'Вишково'>Вишково</option>,
      <option value='Холмок'>Холмок</option>,
      <option value = 'Худльово'>Худльово</option>,
      <option value = 'Хутський район'>Хутський район</option>,
      <option value = 'Часлівці'>Часлівці</option>,
      <option value = 'Червоне'>Червоне</option>,
    ];
    let Zaporyzka = [ 
      <option value = 'Благовіщенка'>Благовіщенка</option>,
      <option value='Кирилівка'>Кирилівка</option>,
      <option value = 'Новобогданівка'>Новобогданівка</option>,
      <option value = 'Плодородне'>Плодородне</option>,
      <option value = 'Приазовське'>Приазовське</option>,
      <option value = 'Якимівка'>Якимівка</option>,
    ];
    let IvanoFrankivska = [ 
      <option value = 'Вербівці'>Вербівці</option>,
      <option value='Виноград'>Виноград</option>,
      <option value = 'Вікно'>Вікно</option>,
      <option value = 'Вільхівці'>Вільхівці</option>,
      <option value = 'Чернелиця'>Чернелиця</option>,
      <option value = 'Городенки'>Городенки</option>,
    ];
    let Kyiv = [<option value = 'Київ'>Київ</option>,];
    let Kyivska = [ 
      <option value = 'Жоравка'>Жоравка</option>,
      <option value='Засупоївка'>Засупоївка</option>,
      <option value = 'Капустинці'>Капустинці</option>,
      <option value = 'Кулябівка'>Кулябівка</option>,
      <option value = 'Лемешівка'>Першотравневе</option>,
      <option value = 'Лозовий Яр'>Лозовий Яр</option>,
    ];
    let Kirovogradska = [ 
      <option value = 'Деріївка'>Деріївка</option>,
      <option value='Зибкове'>Зибкове</option>,
      <option value = 'Камбурліївка'>Камбурліївка</option>,
      <option value = 'Куцеволівка'>Куцеволівка</option>,
      <option value = "Мар'ївка">Мар'ївка</option>,
      <option value = 'Млинок'>Млинок</option>,
    ];
    let Lvivska = [ 
      <option value = 'Бишів'>Бишів</option>,
      <option value='Радехів'>Радехів</option>,
      <option value = 'Скнилів'>Скнилів</option>,
      <option value = 'Сокільники'>Сокільники</option>,
      <option value = 'Ставчани'>Ставчани</option>,
      <option value = 'Старе Село'>Старе Село</option>,
    ];
    let Odeska = [ 
      <option value = 'Борисівка'>Борисівка</option>,
      <option value='Вишневе'>Вишневе</option>,
      <option value = 'Глибоке'>Глибоке</option>,
      <option value = 'Дельжирел'>Дельжирел</option>,
      <option value = 'Дивізія'>Дивізія</option>,
      <option value = 'Жовтий Яр'>Жовтий Яр</option>,
    ];
    let Mykolaivska = [
      <option value = 'Березанка'>Березанка</option>,
      <option value='Володимирівка'>Володимирівка</option>,
      <option value = 'Казанка'>Казанка</option>,
      <option value = 'Куцуруб'>Куцуруб</option>,
      <option value = 'Прибужжя'>Прибужжя</option>,
      <option value = 'Суворе'>Суворе</option>,
    ];
    let Poltavska = [ 
      <option value = 'Білоцерківка'>Білоцерківка</option>,
      <option value='Бутенки'>Бутенки</option>,
      <option value = 'Гребінка'>Гребінка</option>,
      <option value = 'Ланна'>Ланна</option>,
      <option value = 'Рокити'>Рокити</option>,
      <option value = 'Сидоряче'>Сидоряче</option>,
    ];
    let Rivnenska = [ 
      <option value = 'Бережки'>Бережки</option>,
      <option value='Бережниця'>Бережниця</option>,
      <option value = 'Берестя'>Берестя</option>,
      <option value = 'Великі Озера'>Великі Озера</option>,
      <option value = 'Велюнь'>Велюнь</option>,
      <option value = 'Дубровиця'>Дубровиця</option>,
    ];
    let Symska = [ 
      <option value = 'Байрак'>Байрак</option>,
      <option value='Липова Долина'>Липова Долина</option>,
      <option value = 'Пристайлове'>Пристайлове</option>,
      <option value = 'Рябушки'>Рябушки</option>,
      <option value = 'Червлене'>Червлене</option>,
      <option value = 'Штепівка'>Штепівка</option>,
    ];
    let Ternopylska = [ 
      <option value = 'Доброводи'>Доброводи</option>,
      <option value='Добромірка'>Добромірка</option>,
      <option value = 'Залісці'>Залісці</option>,
      <option value = 'Залужжя'>Залужжя</option>,
      <option value = 'Зарубинці'>Зарубинці</option>,
      <option value = 'Заруддя'>Заруддя</option>,
    ];
    let Kharkivska = [ 
      <option value = 'Бірки'>Бірки</option>,
      <option value='Богданівське'>Богданівське</option>,
      <option value = 'Велика Гомільша'>Велика Гомільша</option>,
      <option value = 'Борова'>Борова</option>,
      <option value = 'Вільшани'>Вільшани</option>,
      <option value = 'Троїцьке'>Троїцьке</option>,
    ];
    let Khersonska = [ 
      <option value = 'Анатоліївка'>Анатоліївка</option>,
      <option value='Братське'>Братське</option>,
      <option value = 'Нижні Сірогози'>Нижні Сірогози</option>,
      <option value = 'Семенівка'>Семенівка</option>,
      <option value = 'Федорівка'>Федорівка</option>,
      <option value = 'Слобожанське'>Слобожанське</option>,
    ];
    let Khmelnytska = [ 
      <option value = 'Понінка'>Понінка</option>,
      <option value='Розсоша'>Розсоша</option>,
      <option value = 'Сатанів'>Сатанів</option>,
      <option value = 'Стара Синява'>Стара Синява</option>,
      <option value = 'Чемерівці'>Чемерівці</option>,
      <option value = 'Чорний Острів'>Чорний Острів</option>,
    ];
    let Cherkaska = [ 
      <option value = 'Бойківщина'>Бойківщина</option>,
      <option value='Великий Хутір'>Великий Хутір</option>,
      <option value = 'Демки'>Демки</option>,
      <option value = 'Золотоношка'>Золотоношка</option>,
      <option value = 'Жорнокльови'>Жорнокльови</option>,
      <option value = 'Кантакузівка'>Кантакузівка</option>,
    ];
    let Chernyvetska = [ 
      <option value = 'Байраки'>Байраки</option>,
      <option value='Буківка'>Буківка</option>,
      <option value = 'Велика Буда'>Велика Буда</option>,
      <option value = 'Великий Кучурій'>Великий Кучурій</option>,
      <option value = 'Волока'>Волока</option>,
      <option value = 'Герца'>Герца</option>,
    ];
    let Chernygivska = [ 
      <option value = 'Батурин'>Батурин</option>,
      <option value='Кіпті'>Кіпті</option>,
      <option value = 'Корюківка'>Корюківка</option>,
      <option value = 'Макіївка'>Макіївка</option>,
      <option value = 'Носівка'>Носівка</option>,
      <option value = 'Парафіївка'>Парафіївка</option>,
    ];
    switch(this.state.currentRegion){
      case 'Вінницька':
            return Vinnytska;
      case 'Волинська':
            return Volynska;
      case 'Дніпропетровська':
            return Dnypropetrovska;
      case 'Донецька':
            return Donetska;
      case 'Житомирська':
            return Zhytomyrska;
      case 'Закарпатська':
            return Zakarpatska;
      case 'Запорізька':
            return Zaporyzka;
      case 'Івано-Франківська':
            return IvanoFrankivska;
      case 'Київ':
            return Kyiv;
      case 'Київська':
            return Kyivska;
      case 'Кіровоградська':
            return Kirovogradska;
      case 'Львівська':
            return Lvivska;
      case 'Миколаївська':
            return Mykolaivska;
      case 'Одеська':
            return Odeska;
      case 'Полтавська':
            return Poltavska;
      case 'Рівненська':
            return Rivnenska;
      case 'Сумська':
            return Symska;
      case 'Тернопільська':
            return Ternopylska;
      case 'Харківська':
            return Kharkivska;
      case 'Херсонська':
            return Khersonska;
      case 'Хмельницька':
            return Khmelnytska;
      case 'Черкаська':
            return Cherkaska;
      case 'Чернівецька':
            return Chernyvetska;
      case 'Чернігівська':
            return Chernygivska;
      default:
            return <option>Оберіть місто</option>;
    }
  }
  render(){
    return this.state.loading ? 
        <Preloader/> 
        : 
        <div className="page-wrapper one__screen">
           <div className="center_img-wrapper">
              <img src="./assets/img/logo.png" alt="" />
           </div>
           <div className="layer1">
              <div className="layer1-top-parallax">
                 <UkraineMap svgref={this.svgMap} />
                 <div className="semiopacity">
                    <article className="card">
                       <h1 className="head"><span>Оберіть місцевий бюджет</span></h1>
                       <form className="answers">
                          <button className="send">
                             <div className="fa-img">
                                <p>
                                   <Link to="/income">
                                   GO</Link>
                                </p>
                             </div>
                          </button>
                          <div className="custom-select">
                             <div className="select-wrapper" >
                                <select id="regionCity">
                                  {this.chooseCities()}
                                </select>
                                <div className="select-arrow"></div>
                             </div>
                             <div className="select-wrapper">
                                <select id="region" onChange = {this.changeRegion} placeholder="Виберіть бюджет">
                                  {this.chooseRegion()}
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
                          <h2>КЕРІВНИК ТА АВТОР</h2>
                       </div>
                       <div className = "hide_top-top-top">
                          <div className = "hide_top-left">
                             Олійник О.Ю.
                          </div>
                          <div className = "hide_top-right">
                             Коткова А.А.
                          </div>
                       </div>
                    </div>
                    <div className="top">
                       <div className="front face"></div>
                       <div className="back face">
                          <div className = "bottom-img-left">
                             <div className="card">
                                <div className="side"><img src="./assets/img/ol.jpg" alt="Jimmy Eat World"/></div>
                                <div className="side back">
                                   <p>Старший викладач кафедри автоматизованих систем обробки інформаціі та управління Національного технічного університету України “Київський політехнічний інститут імені Ігоря Сікорського”</p>
                                </div>
                             </div>
                          </div>
                          <div className = "bottom-img-right">
                             <div className="card">
                                <div className="side"><img src="./assets/img/me.png" alt="Jimmy Eat World"/></div>
                                <div className="side back">
                                   <p>Старший викладач кафедри автоматизованих систем обробки інформаціі та управління Національного технічного університету України “Київський політехнічний інститут імені Ігоря Сікорського”</p>
                                </div>
                             </div>
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
  }
}

