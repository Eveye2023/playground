import "./PrintIcon.scss";

function PrintIcon() {
  return (
    <>
      <button className="print-button" onClick={window.print}>
        <span className="print-icon"></span>
      </button>
    </>
  );
}

export default PrintIcon;
