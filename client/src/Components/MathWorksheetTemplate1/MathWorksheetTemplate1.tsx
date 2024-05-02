import "./MathWorksheetTemplate1.scss";
import logo from "../../assets/images/logo7.png";
import { range } from "lodash";
import PrintIcon from "../PrintIcon/PrintIcon";

interface MathWorksheetTemplate1Props {
  operator: "+" | "-";
  start: number;
  end: number;
}

function MathWorksheetTemplate1({ operator, start, end }: MathWorksheetTemplate1Props) {
  function randomNum() {
    let num = end - start;
    return Math.floor(Math.random() * num) + start + 1;
  }

  return (
    <>
      <main className="main-wrapper">
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
            from {start} to {end}
          </h1>
          <div className="math-worksheet__content">
            {range(0, 2).map((index1) => (
              <div className="math-worksheet__column" key={index1}>
                {range(0, 13).map((index) => (
                  <div className="math-worksheet__quest" key={index}>
                    {randomNum()} + {randomNum()} =
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
