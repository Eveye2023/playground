import { useEffect, useState } from "react";
import { range, shuffle } from "lodash";
import "./MemoryGame.scss";
import mode_selector from "../../assets/images/mode-selector.png";
import easy_mode from "../../assets/images/easy-mode.png";
import medium_mode from "../../assets/images/medium-mode.png";
import hard_mode from "../../assets/images/hard-mode.png";
import BubbleBackground from "../../Components/BubbleBackground/BubbleBackground";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FRUITS_PATH = "/images/fruits/";
const ANIMAL_PATH = "/images/animals/";

enum Mode {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}
const allModes = () =>
  Object.keys(Mode).filter((item) => {
    return isNaN(Number(item));
  });
enum Theme {
  ICON = "ICON",
  ANIMAL = "ANIMAL",
  FRUIT = "FRUIT",
}
const allThemes = () =>
  Object.keys(Theme).filter((item) => {
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

const icons = [
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

const fruits = range(1, 19).map((i) => `${i}.png`);
const animals = range(1, 19).map((i) => `${i}.png`);

function MemoryGame() {
  const [mode, setMode] = useState(Mode.EASY);
  const [theme, setTheme] = useState(Theme.ICON);
  const [gameCounter, setGameCounter] = useState(0);

  const [dimensions, setDimensions] = useState([0, 0]);
  const [flippedCard1, setFlippedCard1] = useState(-1);
  const [flippedCard2, setFlippedCard2] = useState(-1);
  const [shuffledCards, setShuffledCards] = useState([] as string[]);
  const [successfulGuesses, setSuccessfulGuesses] = useState([] as number[]);
  const [showOptionModal, setShowOptionModal] = useState(true);
  const [showResultModal, setShowResultModal] = useState(false);

  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setSuccessfulGuesses([]);
    const [rows, cols] = getDimensions(mode);
    setDimensions([rows, cols]);
    let cards;
    switch (theme) {
      case Theme.ICON:
        cards = icons;
        break;
      case Theme.FRUIT:
        cards = fruits;
        break;
      case Theme.ANIMAL:
        cards = animals;
        break;
    }
    const randomCards = shuffle(cards).slice(0, (rows * cols) / 2);
    const gameCards = [...randomCards, ...randomCards];
    setShuffledCards(shuffle(gameCards));
    setFlippedCard1(-1);
    setFlippedCard2(-1);
  }, [mode, theme, gameCounter]);

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

        
        setScore(score + Math.max((10 - step) * 10, 10));
        setStep(0);

        console.log("match");
        const newSuccessfulGuesses = [...successfulGuesses, flippedCard1, index];
        setSuccessfulGuesses(newSuccessfulGuesses);
        if (newSuccessfulGuesses.length === rows * cols) {
          console.log("all done!");
          setShowResultModal(true);
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

  // function cancel() {}

  function startGame() {
    setShowOptionModal(false);
    restart();
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

  function restart() {
    // setDimensions([0,0]);
    setGameCounter(gameCounter+1);
    setFlippedCard1(-1);
    setFlippedCard2(-1);
    setSuccessfulGuesses([]);
    setScore(0);
    setStep(0);
  }

  function goback() {
    navigate("/games");
  }

  window.scrollTo(0, document.body.scrollHeight);

  function renderCard(index: number): import("react").ReactNode {
    switch (theme) {
      case Theme.ICON:
        return <i className={"fa fa-thin fa-4x " + shuffledCards[index]}></i>;
      case Theme.FRUIT:
        return (
          <img
            src={`${process.env.PUBLIC_URL}${FRUITS_PATH}${shuffledCards[index]}`}
            alt={`Fruit option ${shuffledCards[index]}`}
          />
        );
      case Theme.ANIMAL:
        return (
          <img
            src={`${process.env.PUBLIC_URL}${ANIMAL_PATH}${shuffledCards[index]}`}
            alt={`Animal option ${shuffledCards[index]}`}
          />
        );
    }
  }

  function hideResultModal() {
    setScore(0);
    setStep(0);
    setShowResultModal(false);
  }

  return (
    <>
      <BubbleBackground />
      <div className="memory-game">
        <Modal
          show={showResultModal}
          onHide={() => {
            hideResultModal();
            restart();
          }}
        >
          <Modal.Header>
            <h1>You win!</h1>
          </Modal.Header>
          <Modal.Body>
            <h3>Your score is {score}</h3>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="memory-game__game-button"
              onClick={() => {
                hideResultModal();
                setShowOptionModal(true);
              }}
            >
              Start over
            </button>
            <button
              className="memory-game__game-button"
              onClick={() => {
                hideResultModal();
                restart();
              }}
            >
              Try again
            </button>
          </Modal.Footer>
        </Modal>
        <Modal show={showOptionModal} keyboard={false}>
          {/* <Modal.Header>

          </Modal.Header> */}
          <Modal.Body>
            <div>
              <h3 className="memory-game__selector-title">Choose Mode</h3>
              <div className="memory-game__selector">
                {allModes().map((modeOption) => (
                  <div
                    className={"btn-neon " + (modeOption === mode ? "active" : "")}
                    key={modeOption}
                    onClick={() => setMode(modeOption as Mode)}
                  >
                    {modeOption}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="memory-game__selector-title">Choose Theme</h3>
              <div className="memory-game__selector">
                {allThemes().map((themeOption) => (
                  <div
                    className={"btn-neon " + (themeOption === theme ? "active" : "")}
                    key={themeOption}
                    onClick={() => setTheme(themeOption as Theme)}
                  >
                    {themeOption}
                  </div>
                ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="memory-game__game-button" onClick={() => startGame()}>
              Start
            </button>
          </Modal.Footer>
        </Modal>
        <div className="memory-game__left-controller">
          <button className="memory-game__game-button" onClick={goback}>
            <i className="fa fa-solid fa-backward"></i> Back
          </button>
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
                    {renderCard(rowId * cols + colId)}
                  </div>
                </div>
                //   {shuffledCards[rowId*cols + colId]}
              ))}
            </div>
          ))}
        </div>
        <div className="memory-game__board">
          <div className="memory-game__score">Score: {score}</div>
          <button className="memory-game__game-button" onClick={restart}>
            Restart
          </button>
        </div>
      </div>
    </>
  );
}

export default MemoryGame;
