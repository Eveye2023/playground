import "./Worksheets.scss";
import template1 from "../../assets/images/math_template1.png";
import template2 from "../../assets/images/math_template2.png";
import template3 from "../../assets/images/math_template3.png";
import SavedWorksheet from "../../Components/SavedWorksheet/SavedWorksheet";
import { Link } from "react-router-dom";
import { useState } from "react";

function Worksheets() {
  const [showTypes, setShowType] = useState(false);
  const [showForm, setShowForm] = useState(false);

  function CreateBtnHandler() {
    setShowType(true);
    window.scrollTo(0, document.body.scrollHeight);
  }

  function MathBtnHandler() {
    setShowForm(true);
  }

  return (
    <>
      <main className="main-wrapper">
        <SavedWorksheet />
        <div className="create-worksheet">
          <button className="create-worksheet__btn-create" onClick={CreateBtnHandler}>
            <i className="fa fa-solid fa-plus"></i> Create New Worksheet
          </button>
          <div className={showTypes ? "create-worksheet__type show" : "create-worksheet__type"}>
            <button className={"create-worksheet__type-btn"} onClick={MathBtnHandler}>Math</button>
            <Link to="handwriting" className={showForm? "hide": ""}>
              <button className="create-worksheet__type-btn">Handwriting</button>
            </Link>
          </div>
          <form className={showForm? "create-worksheet__form show" : "create-worksheet__form"}>
            <div className="create-worksheet__template">
              <label className="create-worksheet__label">Choose template:</label>
              <label className="create-worksheet__template-option">
                <input type="radio" name="template" />
                <img src={template1} alt="template1" />
              </label>
              <label className="create-worksheet__template-option">
                <input type="radio" name="template" />
                <img src={template2} alt="template2" />
              </label>
              <label className="create-worksheet__template-option">
                <input type="radio" name="template" />
                <img src={template3} alt="template3" />
              </label>
            </div>
            <div className="create-worksheet__math-param">
              <div className="create-worksheet__range">
                <label htmlFor="start_number" className="create-worksheet__label">
                  Start Number:
                </label>
                <input type="number" name="start_number" id="start_number" />
              </div>
              <div className="create-worksheet__range">
                <label htmlFor="end_number" className="create-worksheet__label">
                  End Number:
                </label>
                <input type="number" name="end_number" id="end_number" />
              </div>
              <div className="create-worksheet__operator">
                <label htmlFor="operator" className="create-worksheet__label">
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
            <input type="submit" value="Create" className="create-worksheet__submit" />
          </form>
        </div>
      </main>
    </>
  );
}

export default Worksheets;
