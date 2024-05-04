import { useEffect, useState } from "react";
import { range, shuffle } from "lodash";
import "./MemoryGame.scss";
import mode_selector from "../../assets/images/mode-selector.png";
import easy_mode from "../../assets/images/easy-mode.png";
import medium_mode from "../../assets/images/medium-mode.png";
import hard_mode from "../../assets/images/hard-mode.png";
import BubbleBackground from "../../Components/BubbleBackground/BubbleBackground";

enum Mode {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}
const allModes = () =>
  Object.keys(Mode).filter((item) => {
    return isNaN(Number(item));
  });

const getDimensions = (mode: Mode) => {
  switch (mode) {
    case Mode.EASY:
      return [4, 4];
    case Mode.MEDIUM:
      return [4, 6];
    case Mode.HARD:
      return [6, 6];
  }
};

const cards = [
  "fa-envelope",
  "fa-car",
  "fa-hand-o-right",
  "fa-truck",
  "fa-wifi",
  "fa-h-square",
  "fa-thumbs-o-up",
  "fa-anchor",
  "fa-stethoscope",
  "fa-wheelchair",
  "fa-hand-peace-o",
  "fa-thumbs-o-down",
  "fa-cc-mastercard",
  "fa-paypal",
  "fa-chain",
  "fa-cut",
  "fa-paperclip",
  "fa-undo",
  "fa-pause",
  "fa-step-forward",
  "fa-play-circle-o",
  "fa-asl-interpreting",
  "fa-balance-scale",
  "fa-bank",
  "fa-battery-1",
  "fa-battery-full",
  "fa-bed",
  "fa-binoculars",
  "fa-bicycle",
  "fa-bolt",
];

function MemoryGame() {
  const [mode, setMode] = useState(Mode.EASY);

  const [dimensions, setDimensions] = useState([0, 0]);
  const [flippedCard1, setFlippedCard1] = useState(-1);
  const [flippedCard2, setFlippedCard2] = useState(-1);
  const [shuffledCards, setShuffledCards] = useState([] as string[]);
  const [successfulGuesses, setSuccessfulGuesses] = useState([] as number[]);

  const [step, setStep] = useState(0);
  const [score,setScore] = useState(0);

  useEffect(() => {
    setSuccessfulGuesses([]);
    const [rows, cols] = getDimensions(mode);
    setDimensions([rows, cols]);
    const randomCards = shuffle(cards).slice(0, (rows * cols) / 2);
    const gameCards = [...randomCards, ...randomCards];
    setShuffledCards(shuffle(gameCards));
    setFlippedCard1(-1);
    setFlippedCard2(-1);
  }, [mode]);

  const rows = dimensions[0];
  const cols = dimensions[1];
  function flipCard(index: number) {
    if (successfulGuesses.includes(index)) {
      return;
    }
    if (-1 === flippedCard1) {
      setFlippedCard1(index);
      console.log(((index: number) => shuffledCards[index])(index));
    } else if (-1 === flippedCard2) {
      if (flippedCard2 === index) {
        return;
      }
      setFlippedCard2(index);
      console.log(((index: number) => shuffledCards[index])(index));
      // determine if 2 cards match
      if (
        ((index: number) => shuffledCards[index])(flippedCard1) ===
        ((index: number) => shuffledCards[index])(index)
      ) {
        // match!
  
        setScore(score + ((10 - step) * 10));
        setStep(0);

        console.log("match");
        const newSuccessfulGuesses = [...successfulGuesses, flippedCard1, index];
        setSuccessfulGuesses(newSuccessfulGuesses);
        if (newSuccessfulGuesses.length === rows * cols) {
          console.log("all done!");
          setScore(0);
          setStep(0);
        }
      } else {
        console.log("not match");
        setStep(step + 1);
      }
      setTimeout(() => {
        setFlippedCard1(-1);
        setFlippedCard2(-1);
      }, 500);
    }
  }

  function getMemoryGameCardImageClass(index: number) {
    if (successfulGuesses.includes(index)) {
      return "memory-game__card-image-success";
    }
    if (flippedCard1 === index || flippedCard2 === index) {
      return "memory-game__card-image-current";
    } else {
      return "";
    }
  }
  
  function restart(){
    // setDimensions([0,0]);
    setFlippedCard1(-1);
    setFlippedCard2(-1);
    setSuccessfulGuesses([]);
    setScore(0);
    setStep(0);
  }

  window.scrollTo(0, document.body.scrollHeight);

  return (
    <>
      <BubbleBackground />
      <div className="memory-game">
        <div className="memory-game__mode-wrapper">
          <div className="memory-game__mode-header">
            {/* <img src={mode_selector} alt="mode selection" /> */}
          </div>
          <div className="memory-game__selector">
            {allModes().map((modeOption) => (
              <div
                className={"mode-selector " + (modeOption === mode ? "active" : "")}
                key={modeOption}
                onClick={() => setMode(modeOption as Mode)}
              >
                {modeOption}
              </div>
            ))}
          </div>
        </div>
        <div className="memory-game__cards">
          {/* <div className="memory-game__cards-header">
            {mode === "EASY" ? <img src={easy_mode} alt="easy mode" /> : ""}
            {mode === "MEDIUM" ? <img src={medium_mode} alt="medium mode" /> : ""}
            {mode === "HARD" ? <img src={hard_mode} alt="hard mode" /> : ""}
          </div> */}

          {range(0, rows).map((rowId) => (
            <div className="memory-game__row" key={rowId}>
              {range(0, cols).map((colId) => (
                <div
                  className="memory-game__card"
                  key={colId}
                  onClick={() => flipCard(rowId * cols + colId)}
                >
                  <div
                    className={
                      "memory-game__card-image " + getMemoryGameCardImageClass(rowId * cols + colId)
                    }
                  >
                    <i
                      className={
                        "fa fa-thin fa-4x " +
                        ((index: number) => shuffledCards[index])(rowId * cols + colId)
                      }
                    ></i>
                  </div>
                </div>
                //   {shuffledCards[rowId*cols + colId]}
              ))}
            </div>
          ))}
        </div>
        <div className="memory-game__board">
          <div className="memory-game__score">
            Score: {score}
          </div>
          <button className="memory-game__game-button" onClick={()=>restart()}><i className="fa fa-solid fa-backward"></i> Back</button>
          <button className="memory-game__game-button" onClick={()=>restart()}>Restart</button>
        </div>
      </div>
    </>
  );
}

export default MemoryGame;
