import { Input, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { InputGroup, Button, Form } from "react-bootstrap";

interface WorksheetRowProps {
  fontSize: number;
  spacing: number;
}
function WorksheetRow({ fontSize, spacing }: WorksheetRowProps) {
  const [value, setValue] = useState("");
  function textChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    setValue(event.target.value);
  }

  return (
    <div className="worksheets__row" style={{ height: fontSize * 1.5 + "px", fontSize, letterSpacing: spacing + "px" }}>
      <div className="worksheets__control">
        <TextField placeholder={"Type here..."} autoComplete="off"
        onChange={textChange} inputProps={{pattern: "[a-zA-Z0-9]"}} />
      </div>
      <div className="worksheets__review" style={{}}>
        <div className="worksheets__review-text">{value}</div>
        <div className="worksheets__review-lines">
          <div className="worksheets__review-line"></div>
          <div className="worksheets__review-line"></div>
        </div>
      </div>
    </div>
  );
}

export default WorksheetRow;
