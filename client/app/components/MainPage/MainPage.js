import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import UkraineMap from '../UkraineMap/UkraineMap';
function preloaderCall() {
  return new Promise(
    function(resolve, reject) {
      setTimeout(
        function(){
          resolve();
        }, 1000);
    });
}
export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentregion : 'Київ',
      loading: true,
      currentCity: 'Київ',
      cityKey: '26400100000',
    };
    this.regionCity = React.createRef();
    this.region = React.createRef();
    this.svgMap = React.createRef();
    this.changeRegionFromMap = this.changeRegionFromMap.bind(this);
    this.changeRegion = this.changeRegion.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.chooseCities = this.chooseCities.bind(this);
    this.chooseRegion = this.chooseRegion.bind(this);
  };
  componentDidMount() {
    preloaderCall().then(() => {
      this.setState({ loading: false }); 
    });
  }
  changeRegion(){
    let regionSelect = this.region.current;
    let regionOption = regionSelect.options[regionSelect.selectedIndex].value;
    this.setState({currentregion: regionOption});
  };
  changeCity(){
    let citySelect = this.regionCity.current;
    let cityOption = citySelect.options[citySelect.selectedIndex].value;
    this.setState({
      currentCity: cityOption,
      cityKey: citySelect.options[citySelect.selectedIndex].dataset.key
    });

  };
  changeRegionFromMap(value){
    this.setState({currentregion: value});
    let regionSelect = this.region.current;
    let citySelect = this.regionCity.current;
    let cityOption = citySelect.options[citySelect.selectedIndex].value;
    this.setState({
      currentCity: cityOption,
      cityKey: citySelect.options[citySelect.selectedIndex].dataset.key
    });
    regionSelect.options[regionSelect.selectedIndex].value = regionSelect.option
    for (let opt, j = 0; opt = regionSelect.options[j]; j++) {
      if (opt.value == value) {
        regionSelect.selectedIndex = j;
        break;
      }
      else regionSelect.selectedIndex = 0
    }
  }
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
        <option data-key="02301510000" value='Іванівці'>Іванівці</option>,
        <option data-key="02301511000" value='Каришків'>Каришків</option>,
        <option data-key="02301512000" value ='Комарівці'>Комарівці</option>,
        <option data-key="02301513000" value = 'Кузьминці'>Кузьминці</option>,
        <option data-key="02301514000" value = 'Лісове'>Лісове</option>,
        <option data-key="02301515000" value = 'Лука-Барська'>Лука-Барська</option>,
    ];
    let Volynska = [ 
      <option data-key="03308502000" value = 'Баківці'>Баківці</option>,
      <option data-key="03308503000" value='Білосток'>Білосток</option>,
      <option data-key="03308505000" value = 'Буяни'>Буяни</option>,
      <option data-key="03308505000" value = 'Веселе'>Веселе</option>,
      <option data-key="03308507000" value = 'Воютин'>Воютин</option>,
      <option data-key="03308508000" value = 'Луцький район'>Луцький район</option>,
    ];
    let Dnypropetrovska = [ 
      <option data-key="04536000000-"  value = 'Верхньодніпровськ'>Верхньодніпровськ</option>,
      <option data-key="04538000000"  value='Лошкарівка'>Лошкарівка</option>,
      <option  data-key="04541000000" value = 'Межиріч'>Межиріч</option>,
      <option  data-key="04537000000" value = 'Межова'>Межова</option>,
      <option  data-key="04539000000" value = 'Першотравневе'>Першотравневе</option>,
      <option  data-key="04542000000" value = 'Троїцьке'>Троїцьке</option>,
    ];
    let Donetska = [ 
      <option  data-key="05201100000" value = 'Донецьк'>Донецьк</option>,
      <option  data-key="05302507000" value='Зайцеве'>Зайцеве</option>,
      <option  data-key="05302509000" value = 'Калинівка'>Калинівка</option>,
      <option data-key="05302510000"  value = 'Калинове'>Калинове</option>,
      <option data-key="05302303000"  value = 'Світлодарська'>Світлодарська</option>,
      <option data-key="05302305000"  value = 'Часів Яр'>Часів Яр</option>,

    ];
    let Zhytomyrska = [
      <option  data-key="06301513000" value = 'Камені'>Камені</option>,
      <option  data-key="06301515000" value='Лебединці'>Лебединці</option>,
      <option  data-key="06301516000" value = 'Любимівка'>Любимівка</option>,
      <option  data-key="06301519000" value = 'Міньковці'>Міньковці</option>,
      <option  data-key="06301520000" value = 'Мостове'>Мостове</option>,
      <option  data-key="06301521000" value = 'Нехворощ'>Нехворощ</option>,
    ];
    let Zakarpatska = [ 
      <option  data-key="07313401000" value = 'Вишково'>Вишково</option>,
      <option  data-key="07312528000" value='Холмок'>Холмок</option>,
      <option  data-key="07312529000" value = 'Худльово'>Худльово</option>,
      <option  data-key="07313200000" value = 'Хутський район'>Хутський район</option>,
      <option  data-key="07312530000" value = 'Часлівці'>Часлівці</option>,
      <option  data-key="07312531000" value = 'Червоне'>Червоне</option>,
    ];
    let Zaporyzka = [ 
      <option  data-key="08535000000" value = 'Благовіщенка'>Благовіщенка</option>,
      <option  data-key="08532000000" value='Кирилівка'>Кирилівка</option>,
      <option  data-key="08534000000" value = 'Новобогданівка'>Новобогданівка</option>,
      <option  data-key="08530000000" value = 'Плодородне'>Плодородне</option>,
      <option  data-key="08531000000" value = 'Приазовське'>Приазовське</option>,
      <option  data-key="08533000000" value = 'Якимівка'>Якимівка</option>,
    ];
    let IvanoFrankivska = [ 
      <option  data-key="09304501000" value = 'Вербівці'>Вербівці</option>,
      <option  data-key="09304502000" value='Виноград'>Виноград</option>,
      <option  data-key="09304503000" value = 'Вікно'>Вікно</option>,
      <option data-key="09304504000"  value = 'Вільхівці'>Вільхівці</option>,
      <option data-key="09304301000"  value = 'Чернелиця'>Чернелиця</option>,
      <option  data-key="09304401000" value = 'Городенки'>Городенки</option>,
    ];
    let Kyiv = [<option data-key="26400100000" value = 'Київ'>Київ</option>,];
    let Kyivska = [ 
      <option  data-key="10325504000" value = 'Жоравка'>Жоравка</option>,
      <option  data-key="10325505000" value='Засупоївка'>Засупоївка</option>,
      <option  data-key="10325506000" value = 'Капустинці'>Капустинці</option>,
      <option  data-key="10325507000" value = 'Кулябівка'>Кулябівка</option>,
      <option  data-key="10325507000" value = 'Лемешівка'>Лемешівка</option>,
      <option  data-key="10325509000" value = 'Лозовий Яр'>Лозовий Яр</option>,
    ];
    let Kirovogradska = [ 
      <option  data-key="11317503000" value = 'Деріївка'>Деріївка</option>,
      <option  data-key="11317504000" value='Зибкове'>Зибкове</option>,
      <option  data-key="11317505000" value = 'Камбурліївка'>Камбурліївка</option>,
      <option  data-key="11317506000" value = 'Куцеволівка'>Куцеволівка</option>,
      <option  data-key="11317507000" value = "Мар'ївка">Мар'ївка</option>,
      <option  data-key="11317508000" value = 'Млинок'>Млинок</option>,
    ];
    let Lvivska = [ 
      <option  data-key="15324505000" value = 'Бишів'>Бишів</option>,
      <option  data-key="13313301000" value='Радехів'>Радехів</option>,
      <option  data-key="13312529000" value = 'Скнилів'>Скнилів</option>,
      <option  data-key="13312530000" value = 'Сокільники'>Сокільники</option>,
      <option  data-key="13312534000" value = 'Ставчани'>Ставчани</option>,
      <option  data-key="13312535000" value = 'Старе Село'>Старе Село</option>,
    ];
    let Odeska = [ 
      <option  data-key="15324505000" value = 'Борисівка'>Борисівка</option>,
      <option  data-key="15324506000" value='Вишневе'>Вишневе</option>,
      <option  data-key="15324507000" value = 'Глибоке'>Глибоке</option>,
      <option  data-key="15324509000" value = 'Дельжирел'>Дельжирел</option>,
      <option  data-key="15324508000" value = 'Дивізія'>Дивізія</option>,
      <option  data-key="15324510000" value = 'Жовтий Яр'>Жовтий Яр</option>,
    ];
    let Mykolaivska = [
      <option  data-key="14522000000" value = 'Березанка'>Березанка</option>,
      <option  data-key="14524000000" value='Володимирівка'>Володимирівка</option>,
      <option  data-key="14525000000" value = 'Казанка'>Казанка</option>,
      <option  data-key="14501000000" value = 'Куцуруб'>Куцуруб</option>,
      <option  data-key="14523000000" value = 'Прибужжя'>Прибужжя</option>,
      <option  data-key="14319519000" value = 'Суворе'>Суворе</option>,
    ];
    let Poltavska = [ 
      <option  data-key="16501000000" value = 'Білоцерківка'>Білоцерківка</option>,
      <option  data-key="16523000000" value='Бутенки'>Бутенки</option>,
      <option  data-key="16521000000" value = 'Гребінка'>Гребінка</option>,
      <option  data-key="16522000000" value = 'Ланна'>Ланна</option>,
      <option  data-key="16520000000" value = 'Рокити'>Рокити</option>,
      <option  data-key="16326509000" value = 'Сидоряче'>Сидоряче</option>,
    ];
    let Rivnenska = [ 
      <option  data-key="17306501000" value = 'Бережки'>Бережки</option>,
      <option  data-key="17306502000" value='Бережниця'>Бережниця</option>,
      <option  data-key="17306503000" value = 'Берестя'>Берестя</option>,
      <option  data-key="17306504000" value = 'Великі Озера'>Великі Озера</option>,
      <option  data-key="17306505000" value = 'Велюнь'>Велюнь</option>,
      <option  data-key="17306301000" value = 'Дубровиця'>Дубровиця</option>,
    ];
    let Symska = [ 
      <option  data-key="18309501000" value = 'Байрак'>Байрак</option>,
      <option  data-key="18309401000" value='Липова Долина'>Липова Долина</option>,
      <option  data-key="18308520000" value = 'Пристайлове'>Пристайлове</option>,
      <option data-key="18308521000"  value = 'Рябушки'>Рябушки</option>,
      <option  data-key="18308522000" value = 'Червлене'>Червлене</option>,
      <option  data-key="18308523000" value = 'Штепівка'>Штепівка</option>,
    ];
    let Ternopylska = [ 
      <option  data-key="19306509000" value = 'Доброводи'>Доброводи</option>,
      <option  data-key="19306510000" value='Добромірка'>Добромірка</option>,
      <option  data-key="19306511000" value = 'Залісці'>Залісці</option>,
      <option  data-key="19306512000" value = 'Залужжя'>Залужжя</option>,
      <option  data-key="19306513000" value = 'Зарубинці'>Зарубинці</option>,
      <option  data-key="19306514000" value = 'Заруддя'>Заруддя</option>,
    ];
    let Kharkivska = [ 
      <option  data-key="20312501000" value = 'Бірки'>Бірки</option>,
      <option  data-key="20309502000" value='Богданівське'>Богданівське</option>,
      <option  data-key="20312503000" value = 'Велика Гомільша'>Велика Гомільша</option>,
      <option  data-key="20312502000" value = 'Борова'>Борова</option>,
      <option data-key="20309501000"  value = 'Вільшани'>Вільшани</option>,
      <option  data-key="20312402000" value = 'Троїцьке'>Троїцьке</option>,
    ];
    let Khersonska = [ 
      <option data-key="21313501000"  value = 'Анатоліївка'>Анатоліївка</option>,
      <option  data-key="21313502000" value='Братське'>Братське</option>,
      <option  data-key="21313401000" value = 'Нижні Сірогози'>Нижні Сірогози</option>,
      <option  data-key="21312514000" value = 'Семенівка'>Семенівка</option>,
      <option  data-key="21312516000" value = 'Федорівка'>Федорівка</option>,
      <option  data-key="21312519000" value = 'Слобожанське'>Слобожанське</option>,
    ];
    let Khmelnytska = [ 
      <option  data-key="22518000000" value = 'Понінка'>Понінка</option>,
      <option  data-key="22519000000" value='Розсоша'>Розсоша</option>,
      <option  data-key="22520000000" value = 'Сатанів'>Сатанів</option>,
      <option  data-key="22521000000" value = 'Стара Синява'>Стара Синява</option>,
      <option  data-key="22523000000" value = 'Чемерівці'>Чемерівці</option>,
      <option  data-key="22522000000" value = 'Чорний Острів'>Чорний Острів</option>,
    ];
    let Cherkaska = [ 
      <option  data-key="23302505000" value = 'Бойківщина'>Бойківщина</option>,
      <option  data-key="23302506000" value='Великий Хутір'>Великий Хутір</option>,
      <option  data-key="23302508000" value = 'Демки'>Демки</option>,
      <option  data-key="23302510000" value = 'Золотоношка'>Золотоношка</option>,
      <option  data-key="23302511000" value = 'Жорнокльови'>Жорнокльови</option>,
      <option  data-key="23302512000" value = 'Кантакузівка'>Кантакузівка</option>,
    ];
    let Chernyvetska = [ 
      <option  data-key="24302501000" value = 'Байраки'>Байраки</option>,
      <option  data-key="24302502000" value='Буківка'>Буківка</option>,
      <option  data-key="24302503000" value = 'Велика Буда'>Велика Буда</option>,
      <option  data-key="24502000000" value = 'Великий Кучурій'>Великий Кучурій</option>,
      <option  data-key="24503000000" value = 'Волока'>Волока</option>,
      <option  data-key="24302301000" value = 'Герца'>Герца</option>,
    ];
    let Chernygivska = [ 
      <option  data-key="25506000000" value = 'Батурин'>Батурин</option>,
      <option  data-key="25503000000" value='Кіпті'>Кіпті</option>,
      <option  data-key="25507000000" value = 'Корюківка'>Корюківка</option>,
      <option  data-key="25504000000" value = 'Макіївка'>Макіївка</option>,
      <option  data-key="25508000000" value = 'Носівка'>Носівка</option>,
      <option  data-key="25505000000" value = 'Парафіївка'>Парафіївка</option>,
    ];
    switch(this.state.currentregion){
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
                 <UkraineMap onChange = {this.changeRegionFromMap} svgref={this.svgMap} />
                 <div className="semiopacity">
                    <article className="card">
                       <h1 className="head"><span>Оберіть місцевий бюджет</span></h1>
                       <form className="answers">
                          <button className="send">
                             <div className="fa-img">
                                <p>
                                   <Link
                                      to={{
                                        pathname: '/income',
                                        state: {
                                          city: this.state.currentCity,
                                          cityKey: this.state.cityKey,
                                          fromNotifications: true
                                        }
                                      }}
                                    >
                                   GO</Link>
                                </p>
                             </div>
                          </button>
                          <div className="custom-select">
                            <div className="select-wrapper" >
                                <select id="regionCity" ref={this.regionCity} onChange = {this.changeCity}>
                                  {this.chooseCities()}
                                </select>
                                <div className="select-arrow"></div>
                             </div>
                            <div className="select-wrapper">
                                  <select ref={this.region} currentregion= {this.state.currentregion} onChange = {this.changeRegion} placeholder="Виберіть бюджет">
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

