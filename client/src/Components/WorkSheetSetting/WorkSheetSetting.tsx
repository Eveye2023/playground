import { IconButton, Slider } from "@mui/material";
import { isNumber } from "lodash";
import "./WorksheetSetting.scss";
import PrintIcon from "../PrintIcon/PrintIcon";

const FONT_SIZE_MAX = 120;
const FONT_SIZE_MIN = 28;
const FONT_SIZE_CHANGE_STEP = 2;
const SPACING_MAX = 20;
const SPACING_MIN = 2;
const SPACING_CHANGE_STEP = 1;

interface WorksheetSettingProps {
  fontSize: number;
  setFontSize: (fontSize: number) => void;
  spacing: number;
  setSpacing: (spacing: number) => void;
}

function WorksheetSetting({ fontSize, setFontSize, spacing, setSpacing }: WorksheetSettingProps) {

  function handleFontSizeChange(event: Event, value: number | number[], activeThumb: number): void {
    if (isNumber(value)) {
      setFontSize(value);
    }
  }

  function handleSpacingChange(event: Event, value: number | number[], activeThumb: number): void {
    if (isNumber(value)) {
      setSpacing(value);
    }
  }

  //   function fontSizeInputChange(event: ChangeEvent): void {
  //     setFontSize(event.target.value);
  //   }

  return (
    <div className="worksheets__settings">
      <div className="worksheet__slider">
      <span className="worksheet__label">Size</span>
      <Slider
        step={2}
        value={fontSize}
        min={FONT_SIZE_MIN}
        max={FONT_SIZE_MAX}
        onChange={handleFontSizeChange}
        valueLabelDisplay="on"
        // className="worksheet__slider"
      />
      </div>
      {/* <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={reduceFontSize} disabled={fontSize === FONT_SIZE_MIN}>
          -
        </Button>
        <span>Font Size: {fontSize}</span>
        <Button onClick={increaseFontSize} disabled={fontSize === FONT_SIZE_MAX}>
          +
        </Button>
      </ButtonGroup> */}
      <div className="worksheet__slider">
      <span className="worksheet__label spacing-label">Spacing</span>
      <Slider
        value={spacing}
        min={SPACING_MIN}
        max={SPACING_MAX}
        onChange={handleSpacingChange}
        valueLabelDisplay="on"
        // className="worksheet__slider"
      />
      </div>
      {/* <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={reduceSpacing} disabled={spacing === SPACING_MIN}>
          -
        </Button>
        <span>Letter Space: {spacing}</span>
        <Button onClick={increaseSpacing} disabled={spacing === SPACING_MAX}>
          +
        </Button>
      </ButtonGroup> */}
      <div className="worksheet__print">
        <PrintIcon />
      </div>
      {/* <IconButton onClick={showPrint}>
        <PrintIcon />
      </IconButton> */}
    </div>
  );
}

export default WorksheetSetting;
