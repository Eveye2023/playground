import "./MathWorksheetTemplate3.scss";
import logo from "../../assets/images/logo8.png";
import { range } from "lodash";
import PrintIcon from "../PrintIcon/PrintIcon";
import number_line from "../../assets/images/number-line.png";
import { useState } from "react";


function MathWorksheetTemplate3() {
  
  const [operator,setOperator]= useState("+");
  const [startNum, setStartNum] = useState(0);
  const [endNum,setEndNum] = useState(0);
  const [refresh,setRefresh] = useState(false);

  function randomNum(start:number,end:number) {
    let num = end + 1 - start;
    return Math.floor(Math.random() * num) + start;
  }
  function renderRandomMathExpression() {
    const randomNumPair = [randomNum(startNum, endNum), randomNum(startNum, endNum)];
    if (operator === "-" || operator === "÷") {
      randomNumPair.sort((a, b) => b - a);
    }
    return (
      <>
        {randomNumPair[0]} {operator} {randomNumPair[1]}
      </>
    );
  }
  function submitHandler(event:any){
    event.preventDefault();
    setOperator(event.target.operator.value);
    setStartNum(Number(event.target.start_number.value));
    setEndNum(Number(event.target.end_number.value));  
    setRefresh(!refresh);
  }
  
  return (
    <>
    <main className="main-wrapper">
    <form className="math-worksheet__form" onSubmit={submitHandler}>
          <div className="math-worksheet__math-param">
            <div className="math-worksheet__range">
              <label htmlFor="start_number" className="math-worksheet__label">
                Start Number:
              </label>
              <input type="number" name="start_number" id="start_number" />
            </div>
            <div className="math-worksheet__range">
              <label htmlFor="end_number" className="math-worksheet__label">
                End Number:
              </label>
              <input type="number" name="end_number" id="end_number" />
            </div>
            <div className="math-worksheet__operator">
              <label htmlFor="operator" className="math-worksheet__label">
                Operator:
              </label>
              <select name="operator" id="operator">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="÷">÷</option>
              </select>
            </div>
          </div>
          <input type="submit" value="Create" className="math-worksheet__submit" />
        </form>
      <div className="math-worksheet3">
        <div className="math-worksheet3__print">
          <PrintIcon />
        </div>
        <div className="math-worksheet3__header">
          <div className="math-worksheet3__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="math-worksheet3__title">
            <h2>Number Line Math</h2>
          </div>
          <div className="math-worksheet3__name">
            <h3>Date:</h3>
            <h3>Name:</h3>
          </div>
        </div>
        <div className="math-worksheet3__instruction">Use the number line to find the answer</div>

        <div className="math-worksheet3__content">
          {range(0, 7).map((index) => (
            <div className="math-worksheet3__quest" key={index}>
              {/* <div className="math-worksheet3__number-line"> */}
                <img className="math-worksheet3__number-line" src={number_line} alt="number line" />
              {/* </div> */}
              <div className="math-worksheet3__mathmatic">
                {renderRandomMathExpression()} ={" "}
                <div className="math-worksheet3__answer-holder">
                    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </main>
    </>
  );
}

export default MathWorksheetTemplate3;
