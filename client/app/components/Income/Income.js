import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const App = () => (
  <div>
    {/* Logo is an actual React component */}
    <Logo />
  </div>
); 



export default class Income extends Component {
 constructor(props) {
    super(props);
    this.state = {
      explanationFlag: false,
      structureFlag: false,
      incomeDocument: '',
      city: "Киев",
      cityKey: '26400100000'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount () {
    console.log(this.props.location); 
    if(this.props.location){
      this.setState((state) => {
        city: this.props.location.city
        cityKey: this.props.location.cityKey
      })
    }
    fetch('/api/incomes',{
    method: 'POST',
    body: JSON.stringify({
      cityKey: this.props.location.state.cityKey
    }),
    headers: {"Content-Type": "application/json"}
    })
    .then(function(response){
      console.log(response.json);
      return response.json()
    }).then(function(body){
      console.log(body);
    });
  }
  
  handleClick(event) {
    if (event.target.name == "explanation"){
      this.setState({
        explanationFlag: true,
        structureFlag: false,
      });
    }
    else if (event.target.name == "structure")
    {
      this.setState({
        structureFlag: true,
        explanationFlag: false,
      });
    }
    else {
      this.setState({
        structureFlag: false,
        explanationFlag: false,
      });
    }
  }
  render(){
    const {city} = this.props.location.state;
    let table =            
            <table className="table">
              <thead>
                <tr className="tr">
                  <th scope="col">Код</th>
                  <th scope="col">Найменування</th>
                  <th scope="col">Розпис на рік</th>
                  <th scope="col">Виконано за період</th>
                  <th scope="col">Виконання до уточненого річного розпису, % </th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr>
                  <td scope="row">10000000</td>
                  <td>Податкові надходження</td>
                  <td>40 430 748 000.00</td>
                  <td>6 473 583 004.16</td>
                  <td>16.01</td>
                </tr>
                <tr>
                  <td scope="row">10000000</td>
                  <td>Податкові надходження</td>
                  <td>40 430 748 000.00</td>
                  <td>6 473 583 004.16</td>
                  <td>16.01</td>
                </tr>
                <tr>
                  <td scope="row">10000000</td>
                  <td>Податкові надходження</td>
                  <td>40 430 748 000.00</td>
                  <td>6 473 583 004.16</td>
                  <td>16.01</td>
                </tr>
                <tr>
                  <td scope="row">10000000</td>
                  <td>Податкові надходження</td>
                  <td>40 430 748 000.00</td>
                  <td>6 473 583 004.16</td>
                  <td>16.01</td>
                </tr>
                <tr>
                  <td scope="row">10000000</td>
                  <td>Податкові надходження</td>
                  <td>40 430 748 000.00</td>
                  <td>6 473 583 004.16</td>
                  <td>16.01</td>
                </tr>
                <tr>
                  <td scope="row">10000000</td>
                  <td>Податкові надходження</td>
                  <td>40 430 748 000.00</td>
                  <td>6 473 583 004.16</td>
                  <td>16.01</td>
                </tr>
                <tr>
                  <td scope="row">10000000</td>
                  <td>Податкові надходження</td>
                  <td>40 430 748 000.00</td>
                  <td>6 473 583 004.16</td>
                  <td>16.01</td>
                </tr>
                <tr>
                  <td scope="row">10000000</td>
                  <td>Податкові надходження</td>
                  <td>40 430 748 000.00</td>
                  <td>6 473 583 004.16</td>
                  <td>16.01</td>
                </tr>
                <tr>
                  <td scope="row">10000000</td>
                  <td>Податкові надходження</td>
                  <td>40 430 748 000.00</td>
                  <td>6 473 583 004.16</td>
                  <td>16.01</td>
                </tr>
                <tr>
                  <td scope="row">10000000</td>
                  <td>Податкові надходження</td>
                  <td>40 430 748 000.00</td>
                  <td>6 473 583 004.16</td>
                  <td>16.01</td>
                </tr>
                <tr>
                  <td scope="row">10000000</td>
                  <td>Податкові надходження</td>
                  <td>40 430 748 000.00</td>
                  <td>6 473 583 004.16</td>
                  <td>16.01</td>
                </tr>
                <tr>
                  <td scope="row">10000000</td>
                  <td>Податкові надходження</td>
                  <td>40 430 748 000.00</td>
                  <td>6 473 583 004.16</td>
                  <td>16.01</td>
                </tr>
                <tr>
                  <td scope="row">10000000</td>
                  <td>Податкові надходження</td>
                  <td>40 430 748 000.00</td>
                  <td>6 473 583 004.16</td>
                  <td>16.01</td>
                </tr>
              </tbody>
            </table>
    let realizationDiagram =  <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                <Pie
                  data={data}
                  cx={420}
                  cy={200}
                  startAngle={180}
                  endAngle={0}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {
                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                  }
                </Pie>
              </PieChart>
    let structureDiagram = 
              <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                <Pie
                  data={data}
                  cx={420}
                  cy={200}
                  startAngle={180}
                  endAngle={0}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {
                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                  }
                </Pie>
              </PieChart>
    if (this.state.structureFlag){
      return
        <div className="page-wrapper income__page">
          <div className="layer-one">
            <div className="layer-one-top-parallax">
              <nav>
                <ul className="topmenu">
                  <li><Link to="/">ГОЛОВНА</Link></li>
                  <li><Link to="/income" className="active">ДОХОДИ</Link>
                    <ul className="submenu">
                      <li><a href="">виконання бюджету</a></li>
                      <li><a href="">структура бюджету</a></li>
                    </ul>
                  </li>
                  <li><Link to="/expenditures">ВИДАТКИ</Link>
                    <ul className="submenu">
                      <li><a href="">виконання бюджету</a></li>
                      <li><a href="">структура бюджету</a></li>
                    </ul>
                  </li>
                  <li><a href="">ДИНАМІКА</a></li>
                  <li><a href="">КЛАСТЕРИЗАЦІЯ</a></li>
                </ul>
              </nav>
              <h3>Бюджет м. {city}</h3>
              <div className="buttons-top">
                <button className="send1" name="explanation" onClick={this.handleClick}>ВИКОНАННЯ БЮДЖЕТУ         
                </button>
                <button className="send1" name="structure" onClick={this.handleClick}>
                    СТРУКТУРА БЮДЖЕТУ         
                </button>
              </div>
              <div className="all">
                <div className ="choose-periods">
                  <div className="custom-select">
                    <p>Рік:</p>
                    <p>За період:</p>
                    <p></p>
                    <p>Фонд:</p>
                    <p>Код:</p>
                  </div>
                  <div className="custom-select">
                    <div className="select-wrapper">
                      <select>
                        <option value="" disabled defaultValue>Рік</option>
                        <option value="1">2018</option>
                        <option value="2">2019</option>
                      </select>
                    </div>
                    <div className="select-wrapper">
                      <select>
                        <option value="" disabled defaultValue>Початок</option>
                        <option value="1">Січень</option>
                        <option value="2">Лютий</option>
                        <option value="3">Березень</option>
                      </select>
                    </div>
                    <div className="select-wrapper">
                      <select>
                        <option value="" disabled defaultValue>Кінець</option>
                        <option value="1">Січень</option>
                        <option value="2">Лютий</option>
                        <option value="3">Березень</option>
                      </select>
                    </div>
                    <div className="select-wrapper">
                      <select>
                        <option value="" disabled defaultValue>Фонд</option>
                        <option value="1">Спеціальний</option>
                        <option value="2">Загальний</option>
                        <option value="3">Разом</option>
                      </select>
                    </div>
                    <div className="select-wrapper">
                      <select>
                        <option value="" disabled defaultValue>Код</option>
                        <option value="1">10000000</option>
                        <option value="2">20000000</option>
                        <option value="3">30000000</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="button-send">
                  <button className="send">
                    <div className="fa-img">
                      <p><Link to="/">ПОШУК</Link></p>
                    </div>              
                  </button>
                </div>
              </div>
              
            </div>
         </div>
        </div>
    }
    else if (this.state.explanationFlag){
      return <div className="page-wrapper income__page">
      <div className="layer-one">
          <div className="layer-one-top-parallax">
            <nav>
              <ul className="topmenu">
                <li><Link to="/">ГОЛОВНА</Link></li>
                <li><Link to="/income" className="active">ДОХОДИ</Link>
                  <ul className="submenu">
                    <li><a href="">виконання бюджету</a></li>
                    <li><a href="">структура бюджету</a></li>
                  </ul>
                </li>
                <li><Link to="/expenditures">ВИДАТКИ</Link>
                  <ul className="submenu">
                    <li><a href="">виконання бюджету</a></li>
                    <li><a href="">структура бюджету</a></li>
                  </ul>
                </li>
                <li><a href="">ДИНАМІКА</a></li>
                <li><a href="">КЛАСТЕРИЗАЦІЯ</a></li>
              </ul>
            </nav>
            <h3>Бюджет м. {city}</h3>
            <div className="buttons-top">
              <button className="send1" name="explanation" onClick={this.handleClick}>ВИКОНАННЯ БЮДЖЕТУ         
              </button>
              <button className="send1" name="structure" onClick={this.handleClick}>
                  СТРУКТУРА БЮДЖЕТУ         
              </button>
            </div>
            <div className="all">
              <div className ="choose-periods">
                <div className="custom-select">
                  <p>Рік:</p>
                  <p>За період:</p>
                  <p></p>
                  <p>Фонд:</p>
                  <p>Код:</p>
                </div>
                <div className="custom-select">
                  <div className="select-wrapper">
                    <select>
                      <option value="" disabled defaultValue>Рік</option>
                      <option value="1">2018</option>
                      <option value="2">2019</option>
                    </select>
                  </div>
                  <div className="select-wrapper">
                    <select>
                      <option value="" disabled defaultValue>Початок</option>
                      <option value="1">Січень</option>
                      <option value="2">Лютий</option>
                      <option value="3">Березень</option>
                    </select>
                  </div>
                  <div className="select-wrapper">
                    <select>
                      <option value="" disabled defaultValue>Кінець</option>
                      <option value="1">Січень</option>
                      <option value="2">Лютий</option>
                      <option value="3">Березень</option>
                    </select>
                  </div>
                  <div className="select-wrapper">
                    <select>
                      <option value="" disabled defaultValue>Фонд</option>
                      <option value="1">Спеціальний</option>
                      <option value="2">Загальний</option>
                      <option value="3">Разом</option>
                    </select>
                  </div>
                  <div className="select-wrapper">
                    <select>
                      <option value="" disabled defaultValue>Код</option>
                      <option value="1">10000000</option>
                      <option value="2">20000000</option>
                      <option value="3">30000000</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="button-send">
                <button className="send">
                  <div className="fa-img">
                    <p><Link to="/">ПОШУК</Link></p>
                  </div>              
                </button>
              </div>
            </div>
            <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                <Pie
                  data={data}
                  cx={420}
                  cy={200}
                  startAngle={180}
                  endAngle={0}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {
                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                  }
                </Pie>
              </PieChart>
          </div>
      </div>
    </div>
    } 
    else {
      return <div className="page-wrapper income__page">
      <div className="layer-one">
          <div className="layer-one-top-parallax">
            <nav>
              <ul className="topmenu">
                <li><Link to="/">ГОЛОВНА</Link></li>
                <li><Link to="/income" className="active">ДОХОДИ</Link>
                  <ul className="submenu">
                    <li><a href="">виконання бюджету</a></li>
                    <li><a href="">структура бюджету</a></li>
                  </ul>
                </li>
                <li><Link to="/expenditures">ВИДАТКИ</Link>
                  <ul className="submenu">
                    <li><a href="">виконання бюджету</a></li>
                    <li><a href="">структура бюджету</a></li>
                  </ul>
                </li>
                <li><a href="">ДИНАМІКА</a></li>
                <li><a href="">КЛАСТЕРИЗАЦІЯ</a></li>
              </ul>
            </nav>
            <h3>Бюджет м. {city}</h3>
            <div className="buttons-top">
              <button className="send1" name="explanation" onClick={this.handleClick}>ВИКОНАННЯ БЮДЖЕТУ         
              </button>
              <button className="send1" name="structure" onClick={this.handleClick}>
                  СТРУКТУРА БЮДЖЕТУ         
              </button>
            </div>
            <div className="all">
              <div className ="choose-periods">
                <div className="custom-select">
                  <p>Рік:</p>
                  <p>За період:</p>
                  <p></p>
                  <p>Фонд:</p>
                  <p>Код:</p>
                </div>
                <div className="custom-select">
                  <div className="select-wrapper">
                    <select>
                      <option value="" disabled defaultValue>Рік</option>
                      <option value="1">2018</option>
                      <option value="2">2019</option>
                    </select>
                  </div>
                  <div className="select-wrapper">
                    <select>
                      <option value="" disabled defaultValue>Початок</option>
                      <option value="1">Січень</option>
                      <option value="2">Лютий</option>
                      <option value="3">Березень</option>
                    </select>
                  </div>
                  <div className="select-wrapper">
                    <select>
                      <option value="" disabled defaultValue>Кінець</option>
                      <option value="1">Січень</option>
                      <option value="2">Лютий</option>
                      <option value="3">Березень</option>
                    </select>
                  </div>
                  <div className="select-wrapper">
                    <select>
                      <option value="" disabled defaultValue>Фонд</option>
                      <option value="1">Спеціальний</option>
                      <option value="2">Загальний</option>
                      <option value="3">Разом</option>
                    </select>
                  </div>
                  <div className="select-wrapper">
                    <select>
                      <option value="" disabled defaultValue>Код</option>
                      <option value="1">10000000</option>
                      <option value="2">20000000</option>
                      <option value="3">30000000</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="button-send">
                <button className="send">
                  <div className="fa-img">
                    <p><Link to="/">ПОШУК</Link></p>
                  </div>              
                </button>
              </div>
            </div>
            {table}
          </div>
      </div>
    </div>
    }
  }
}
