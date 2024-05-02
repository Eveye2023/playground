import { Outlet, Link } from "react-router-dom";
import Park from "../../Components/Park/Park";
import ribbon_banner from "../../assets/images/ribbon.png";
import "./HandwritingWorksheet.scss";
import { useState } from "react";
import WorksheetSetting from "../../Components/WorkSheetSetting/WorkSheetSetting";
import WorksheetRow from "../../Components/WorksheetRow/WorksheetRow";
import { range } from "lodash";

function HandwritingWorksheet() {
  const [fontSize, setFontSize] = useState(40);
  const [spacing, setSpacing] = useState(10);
  const getNumOfRows = () => 350 / fontSize;
  return (
    <><h1 className="handwriting-header">Hand Writing</h1><div className="worksheets" style={{ fontSize }}>
      <WorksheetSetting fontSize={fontSize} setFontSize={setFontSize} spacing={spacing} setSpacing={setSpacing} />
      {range(0, getNumOfRows()).map((rowId) => (
        <WorksheetRow fontSize={fontSize} spacing={spacing} key={rowId} />
      ))}
    </div></>
  );
}

export default HandwritingWorksheet;
