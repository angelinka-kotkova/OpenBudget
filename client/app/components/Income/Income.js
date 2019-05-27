import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import ChartExplanation from "../Chart/ChartExplanation";
import ChartStructure from "../Chart/ChartStructure";

const columns = [
  ['data', 91.4]
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];




export default class Income extends Component {
 constructor(props) {
    super(props);
    this.state = {
      explanationFlag: false,
      structureFlag: false,
      incomeDocument: '',
      city: "Киев",
      cityKey: '26400100000',
      dataObj: "No data",
      tableData: "No data",
      columnsExplanation: [
        ['до уточненого річного плану', 24]
      ],
      columnsStructure: [
        ['Трансферти з державного бюджету', 88.13],
        ['Податкові надходження', 9.41],
        ['Неподаткові надходження', 1.60],
        ['Трансферти з місцевих бюджетів', 0.86],
        ['Доходи від операцій з капіталом', 0.00],

      ]
    };
    this.yearSelect = React.createRef();
    this.lastMonth = React.createRef();
    this.incomeCode = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount () {
    if(this.props.location){
      this.setState((state) => {
        return{
          city: this.props.location.state.city,
          cityKey: this.props.location.state.cityKey
        }
      })
      fetch('api/incomes/' + this.props.location.state.cityKey)
      .then(response => response.json())
      .then(data => {
        let incomesArr = data[0].incomes;
        let dataArr = incomesArr.filter(function(item){
          if(item.year=="2018" && item.month == "1"){
            return item
          }
        })
        dataArr = dataArr[0].budgetData.filter(function(item){
          let incomeCode = item.incomeCode;
          if(incomeCode[0] == "1"){
            return item;
          }
        })
        this.setState((state)=> {
          return {
            dataObj: data,
            tableData: dataArr
          }
        })

      })
      .catch(error => console.log(error));
      }
  }
  
  handleClick(event) {
    let incomesArr = this.state.dataObj[0].incomes;
    let yearSelect = this.yearSelect.current,
        lastMonth = this.lastMonth.current,
        incomeCode = this.incomeCode.current;
    let dataArr = incomesArr.filter(function(item){
      if(item.year==yearSelect.value && item.month == lastMonth.options[lastMonth.selectedIndex].value){
        return item
      }
    })
    dataArr = dataArr[0].budgetData.filter(function(item){
      let incomeCodeVar = item.incomeCode;
      if(incomeCodeVar[0] == incomeCode.value){
        return item;
      }
    })
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
  handleSearch(event){
    let incomesArr = this.state.dataObj[0].incomes;
    let yearSelect = this.yearSelect.current,
        lastMonth = this.lastMonth.current,
        incomeCode = this.incomeCode.current;
    let dataArr = incomesArr.filter(function(item){
      if(item.year==yearSelect.value && item.month == lastMonth.options[lastMonth.selectedIndex].value){
        return item
      }
    })
    dataArr = dataArr[0].budgetData.filter(function(item){
      let incomeCodeVar = item.incomeCode;
      if(incomeCodeVar[0] == incomeCode.value){
        return item;
      }
    })
    this.setState((state)=> {
      return {
        tableData: dataArr
      }
    })
  }
  render(){
    const tableRow = this.state.tableData != "No data" ? this.state.tableData.map((item,index) => 
      <tr key={index}>
        <td scope="row">{item.incomeCode}</td>
        <td scope="row">{item.incomeCodeName}</td>
        <td scope="row">{item.yearBudgetPlan}</td>
        <td scope="row">{item.totalDone}</td>
        <td scope="row">{item.percentDone}</td>
      </tr>) : <tr>NO DATA</tr>
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
                {tableRow}
              </tbody>
            </table>
    if (this.state.structureFlag){
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
              <h3>Бюджет м. {this.props.location.state.city}</h3>
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
              <ChartStructure columns={this.state.columnsExplanation}/>
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
            <h3>Бюджет м. {this.props.location.state.city}</h3>
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
                  <p>Код:</p>
                </div>
                <div className="custom-select">
                  <div className="select-wrapper">
                    <select ref={this.yearSelect}>
                      <option value="" disabled defaultValue>Рік</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                    </select>
                  </div>
                  <div className="select-wrapper">
                    <select >
                      <option value="" disabled defaultValue>Початок</option>
                      <option value="1">Січень</option>
                      <option value="2">Лютий</option>
                      <option value="3">Березень</option>
                    </select >
                  </div>
                  <div className="select-wrapper">
                    <select ref={this.lastMonth}>
                      <option value="" disabled defaultValue>Кінець</option>
                      <option value="1">Січень</option>
                      <option value="2">Лютий</option>
                      <option value="3">Березень</option>
                    </select>
                  </div>
                  <div className="select-wrapper">
                    <select ref={this.incomeCode}>
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
            <ChartExplanation columns={this.state.columnsExplanation}/>
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
            <h3>Бюджет м. {this.props.location.state.city}</h3>
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
                  <p>Код:</p>
                </div>
                <div className="custom-select">
                  <div className="select-wrapper">
                    <select ref={this.yearSelect}>
                      <option value="" disabled defaultValue>Рік</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                    </select>
                  </div>
                  <div className="select-wrapper">
                    <select >
                      <option value="" disabled defaultValue>Початок</option>
                      <option value="1">Січень</option>
                      <option value="2">Лютий</option>
                      <option value="3">Березень</option>
                    </select >
                  </div>
                  <div className="select-wrapper">
                    <select ref={this.lastMonth}>
                      <option value="" disabled defaultValue>Кінець</option>
                      <option value="1">Січень</option>
                      <option value="2">Лютий</option>
                      <option value="3">Березень</option>
                    </select>
                  </div>
                  <div className="select-wrapper">
                    <select ref={this.incomeCode}>
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
                    <p><a onClick={this.handleSearch}>ПОШУК</a></p>
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
