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
    <ValueDisplay value={inputValue}/>

  <input 
    type='text'
    value={inputValue}
    placeholder='Введите заметку'
    onChange={handleInputChange}
  />
  <button onClick={handleBtnClick} >Сохранить</button>
   {/* <p>Предыдущее значение: {displayValue}</p> */}
   
    </div>
  );
}

export default App;
