import "./MathWorksheetTemplate3.scss";
import logo from "../../assets/images/logo8.png";
import { range } from "lodash";
import PrintIcon from "../PrintIcon/PrintIcon";
import apple_line from "../../assets/images/apple-line3.png";
import number_line from "../../assets/images/number-line.png";

interface MathWorksheetTemplate3Props {
  operator: "+" | "-";
  start: number;
  end: number;
}

function MathWorksheetTemplate3({ operator, start, end }: MathWorksheetTemplate3Props) {
  function randomNum() {
    let num = end - start;
    return Math.floor(Math.random() * num) + start + 1;
  }

  return (
    <>
      <main className="math-worksheet3">
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
          {range(0, 6).map((index) => (
            <div className="math-worksheet3__quest" key={index}>
              {/* <div className="math-worksheet3__number-line"> */}
                <img className="math-worksheet3__number-line" src={number_line} alt="number line" />
              {/* </div> */}
              <div className="math-worksheet3__mathmatic">
                {randomNum()} + {randomNum()} ={" "}
                <div className="math-worksheet3__answer-holder">
                    </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default MathWorksheetTemplate3;
