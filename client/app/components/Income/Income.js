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
      response: '',
      post: '',
      responseToPost: '',
    };
  }
  componentDidMount () { 
    const { cityKey } = this.props.location.state
      fetch(`/api/hello`)
        .then(res => res.json())
        .then(json => this.setState({ response: json }));
  }

  handleClick() {
    this.setState(state => ({
      structureFlag: !state.structureFlag
    }));
  }
  render(){
    const {city} = this.props.location.state;
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
              <button className="send1" onClick={this.handleClick}>ВИКОНАННЯ БЮДЖЕТУ         
              </button>
              <button className="send1">
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
          </div>
      </div>
    </div>
  }
}
