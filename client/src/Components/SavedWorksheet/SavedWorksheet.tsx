import template1 from "../../assets/images/math_template1.png";
import template2 from "../../assets/images/math_template2.png";
import template3 from "../../assets/images/math_template3.png";
import "./SavedWorksheet.scss";

function SavedWorksheet(){
    return(
        <div className="saved-worksheets">
          <h1 className="saved-worksheets__header">Saved Worksheets</h1>
          <div className="saved-worksheets__content">
            <div className="saved-worksheets__worksheet">
              <img src={template1} alt="" />
            </div>
            <div className="saved-worksheets__worksheet">
              <img src={template2} alt="" />
            </div>
            <div className="saved-worksheets__worksheet">
              <img src={template3} alt="" />
            </div>
          </div>
        </div>
    )
}

export default SavedWorksheet;