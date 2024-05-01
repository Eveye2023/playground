import "./MathWorksheetTemplate2.scss";
import logo from "../../assets/images/logo7.png";
import { range } from "lodash";
import PrintIcon from "../PrintIcon/PrintIcon";
import apple_line from "../../assets/images/apple-line3.png";

interface MathWorksheetTemplate2Props {
  operator: "+" | "-";
  start: number;
  end: number;
}

function MathWorksheetTemplate2({ operator, start, end }: MathWorksheetTemplate2Props) {
  function randomNum() {
    let num = end - start
    return Math.floor(Math.random() * num) + start + 1;
  }

  return (
    <>
      <main className="math-worksheet2">
        <div className="math-worksheet2__print">
          <PrintIcon />
        </div>
        <div className="math-worksheet2__header">
          <h3>
            Date:
          </h3>
          <div className="math-worksheet2__text-holder"></div>
          <h3>
            Name:
          </h3>
          <div className="math-worksheet2__text-holder"></div>
        </div>
        <h1 className="math-worksheet2__title">
         Apple Math
        </h1>
        <div className="math-worksheet2__content">
          {range(0, 3).map((index1) => (
            <div className="math-worksheet2__column" key={index1}>
              {range(0, 6).map((index) => (
                <div className="math-worksheet2__quest" key={index}>
                 <div> {randomNum()} + {randomNum()} = </div>
                  <div className="math-worksheet2__answer-holder">
                    <img src={apple_line} alt="apple line" /> </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default MathWorksheetTemplate2;
