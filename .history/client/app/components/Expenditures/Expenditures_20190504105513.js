import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
const App = () => (
  <div>
    {/* Logo is an actual React component */}
    <Logo />
  </div>
); 
const Expenditures = () => (
  <div className="page-wrapper income__page">
     <div class="layer-one">
        <div class="layer-one-top-parallax">

          <nav>
          <ul class="topmenu">
            <li><a href="">ГОЛОВНА </a></li>
            <li><a href="income.html">ДОХОДИ</a>
              <ul class="submenu">
                <li><a href="">виконання бюджету</a></li>
                <li><a href="">структура бюджету</a></li>
              </ul>
              </li>
            <li><a href="expenditures.html" class="active">ВИДАТКИ</a>
              <ul class="submenu">
                <li><a href="">виконання бюджету</a></li>
                <li><a href="">структура бюджету</a></li>
              </ul>
              </li>
            </li>
            <li><a href="">ДИНАМІКА</a></li>
            <li><a href="">КЛАСТЕРИЗАЦІЯ</a></li>
          </ul>
        </nav>
        
        <h3>Бюджет міста Києва</h3>

        <div class="buttons-top">
        <button class="send1">
            <p><Link to="/">ВИКОНАННЯ БЮДЖЕТУ</Link></p>          
        </button>
        <button class="send1">
            <p><Link to="/">СТРУКТУРА БЮДЖЕТУ</Link></p>          
        </button>
        </div>

        <div class="all">
        <div class ="choose-periods">
        <div class="custom-select">
          <p>Рік:</p>
          <p>За період:</p>
          <p></p>
          <p>Фонд:</p>
          <p>Код:</p>
        </div>
        <div class="custom-select">
          <div class="select-wrapper">
            <select>
              <option value="" disabled defaultValue>Рік</option>
              <option value="1">2018</option>
              <option value="2">2019</option>
            </select>
          </div>
          <div class="select-wrapper">
            <select>
              <option value="" disabled defaultValue>Початок</option>
              <option value="1">Січень</option>
              <option value="2">Лютий</option>
              <option value="3">Березень</option>
            </select>
          </div>
          <div class="select-wrapper">
            <select>
              <option value="" disabled defaultValue>Кінець</option>
              <option value="1">Січень</option>
              <option value="2">Лютий</option>
              <option value="3">Березень</option>
            </select>
          </div>
          <div class="select-wrapper">
            <select>
              <option value="" disabled defaultValue>Фонд</option>
              <option value="1">Спеціальний</option>
              <option value="2">Загальний</option>
              <option value="3">Разом</option>
            </select>
          </div>
          <div class="select-wrapper">
            <select>
              <option value="" disabled defaultValue>Код</option>
              <option value="1">10000000</option>
              <option value="2">20000000</option>
              <option value="3">30000000</option>
            </select>
          </div>
          </div>
        </div>
        <div class="button-send">
        <button class="send">
          <div class="fa-img">
            <p><Link to="/">ПОШУК</Link></p>
          </div>              
        </button>
        </div>
        </div>

          <table class="table">
            <thead>
              <tr class="tr">
                <th scope="col">КПК</th>
                <th scope="col">КФК</th>
                <th scope="col">Найменування КПК</th>
                <th scope="col">Розпис на рік з урахуванням змін</th>
                <th scope="col">Кошторисні призначення на рік з урахуванням змін</th>
                <th scope="col">Виконано за період</th>
                <th scope="col">Виконання до уточненого річного розпису, % </th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr>
                <td scope="row"> 0150</td>
                <td>0111</td>
                <td>Організаційне, інформаційно-аналітичне та матеріально-технічне забезпечення діяльності обласної ради, районної ради, районної у місті ради (у разі її створення), міської, селищної, сільської рад</td>
                <td>119 184 300.00</td>
                <td>119 184 300.00</td>
                <td>14 745 616.99</td>
                <td>12.37</td>
              </tr>
              <tr>
                <td scope="row"> 0150</td>
                <td>0111</td>
                <td>Організаційне, інформаційно-аналітичне та матеріально-технічне забезпечення діяльності обласної ради, районної ради, районної у місті ради (у разі її створення), міської, селищної, сільської рад</td>
                <td>119 184 300.00</td>
                <td>119 184 300.00</td>
                <td>14 745 616.99</td>
                <td>12.37</td>
              </tr>
              <tr>
                <td scope="row"> 0150</td>
                <td>0111</td>
                <td>Організаційне, інформаційно-аналітичне та матеріально-технічне забезпечення діяльності обласної ради, районної ради, районної у місті ради (у разі її створення), міської, селищної, сільської рад</td>
                <td>119 184 300.00</td>
                <td>119 184 300.00</td>
                <td>14 745 616.99</td>
                <td>12.37</td>
              </tr>

            </tbody>
          </table>
        
        </div>
      </div>
  </div>
);

export default Expenditures;
