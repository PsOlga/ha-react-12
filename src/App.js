import React from 'react';
import { useState } from 'react';
import './App.css';
import ValueDisplay from './components/ValueDisplay';





function App() {

  const [inputValue, setInputValue] = useState("");

// Состояние для хранения значения, которое будет отображаться после нажатия кнопки
const [displayValue, setDisplayValue] = useState('');
// Обработчик изменения инпута
const handleInputChange = (event) => {
  setInputValue(event.target.value);
};
// Обработчик события н кнопку
const handleBtnClick = () => {
  setDisplayValue(inputValue);
  setInputValue("");
};


  return (
    <div className="App">

  <div className="App2">
  <input 
    type='text'
    value={inputValue}
    placeholder='Введите заметку'
    onChange={handleInputChange}
    className="inputNote"
  />
  
  <button 
  onClick={handleBtnClick} 
  className="btnSave"
  >Сохранить</button>

  </div >
<div className="valueDisp">
<ValueDisplay value={inputValue}/>
</div>
 

    </div>
  );
}

export default App;
