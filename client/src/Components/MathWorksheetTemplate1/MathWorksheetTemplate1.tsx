import "./MathWorksheetTemplate1.scss";
import logo from "../../assets/images/logo7.png";
import { range } from "lodash";
import PrintIcon from "../PrintIcon/PrintIcon";
import { useState } from "react";


function MathWorksheetTemplate1() {

  const [operator,setOperator]= useState("+");
  const [startNum, setStartNum] = useState(0);
  const [endNum,setEndNum] = useState(0);
  const [refresh,setRefresh] = useState(false);

  function randomNum(start:number,end:number) {
    let num = end + 1 - start;
    return Math.floor(Math.random() * num) + start;
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
        <div className="math-worksheet">
          <div className="math-worksheet__print">
            <PrintIcon />
          </div>
          <div className="math-worksheet__header">
            {/* <img src={logo} alt="logo" /> */}
            <h3>
              Date:<span className="math-worksheet__text-holder"></span>
            </h3>
            <h3>
              Name:<span className="math-worksheet__text-holder"></span>
            </h3>
          </div>
          <h1 className="math-worksheet__title">
            {operator === "+" ? "Addition " : null}
            {operator === "-" ? "Subtraction " : null}
            {operator === "*" ? "Multiplication " : null}
            {operator === "÷" ? "Division " : null}
            from {startNum} to {endNum}
          </h1>
          <div className="math-worksheet__content">
            {range(0, 2).map((index1) => (
              <div className="math-worksheet__column" key={index1}>
                {range(0, 13).map((index) => (
                  <div className="math-worksheet__quest" key={index}>
                    {randomNum(startNum,endNum)} {operator} {randomNum(startNum,endNum)} =
                    <span className="math-worksheet__answer-holder"> </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default MathWorksheetTemplate1;
