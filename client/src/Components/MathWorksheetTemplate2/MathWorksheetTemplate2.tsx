import "./MathWorksheetTemplate2.scss";
import logo from "../../assets/images/logo7.png";
import { range } from "lodash";
import PrintIcon from "../PrintIcon/PrintIcon";
import apple_line from "../../assets/images/apple-line3.png";
import { useState } from "react";


function MathWorksheetTemplate2() {
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
    console.log("operator: ",event.target.operator.value)
    setStartNum(Number(event.target.start_number.value));
    console.log("start: ",Number(event.target.start_number.value))
    setEndNum(Number(event.target.end_number.value));  
    console.log("start: ",Number(event.target.end_number.value))
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
        <div className="math-worksheet2">
          <div className="math-worksheet2__print">
            <PrintIcon />
          </div>
          <div className="math-worksheet2__header">
            <h3>Date:</h3>
            <div className="math-worksheet2__text-holder"></div>
            <h3>Name:</h3>
            <div className="math-worksheet2__text-holder"></div>
          </div>
          <h1 className="math-worksheet2__title">Apple Math</h1>
          <div className="math-worksheet2__content">
            {range(0, 3).map((index1) => (
              <div className="math-worksheet2__column" key={index1}>
                {range(0, 9).map((index) => (
                  <div className="math-worksheet2__quest" key={index}>
                    <div>
                      {" "}
                      {randomNum(startNum,endNum)} + {randomNum(startNum,endNum)} ={" "}
                    </div>
                    <div className="math-worksheet2__answer-holder">
                      <img src={apple_line} alt="apple line" />{" "}
                    </div>
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

export default MathWorksheetTemplate2;
