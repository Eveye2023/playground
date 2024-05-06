import { PlayCircle, PauseCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import "./IdentifyBirdSound.scss";
import { Modal } from "react-bootstrap";

const birdInfoList = [
  {
    audio: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/282424/audio",
    name: "Gray-and-buff Woodpecker",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/221149421/1200",
  },
  {
    audio: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/618461409/audio",
    name: "Canada goose",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/59953191/1200",
  },
  {
    audio: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/133754771/audio",
    name: "Swallow-tailed Gull",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/58292261/1200",
  },
  {
    audio: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/618449993/audio",
    name: "Common Loon",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308049951/1200",
  },
  {
    audio: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/618445812/audio",
    name: "American Robin",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/303441381/1200",
  },
  {
    audio: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/618336049/audio",
    name: "Northern Cardinal",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/297087301/1200",
  },
];

function IdentifyBirdSound() {
  function randomBirds() {
    return shuffle(birdInfoList).slice(0, 3);
  }
  const [birds, setBirds] = useState(randomBirds());
  const [randomBird, setRandomBird] = useState(birds[Math.floor(Math.random() * birds.length)]);
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(randomBird.audio));
  const [showNames, setShowNames] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [guessCorrect, showGuessCorrect] = useState(false);

  //   let showNamesTimer: any;

  useEffect(() => {
    const bird = birds[Math.floor(Math.random() * birds.length)];
    setRandomBird(bird);
    setAudio(new Audio(bird.audio));
    setPlaying(false);
    // clearTimeout(showNamesTimer);
  }, [birds]);

  function playAudio(): void {
    audio.play();
    setPlaying(true);
    setShowNames(true);
    // show names in 3 seconds in case audio is too long
    // showNamesTimer = setTimeout(() => setShowNames(true), 3000);
    audio.addEventListener("ended", () => {
      setPlaying(false);
      //   setShowNames(true);
      //   clearTimeout(showNamesTimer);
    });
  }
  function pauseAudio(): void {
    audio.pause();
    setPlaying(false);
  }

  function guessBird(index: number): void {
    console.log("Guess:", birds[index]);
    if (birds[index].name === randomBird.name) {
      console.log("Guess is correct!");
      showGuessCorrect(true);
    } else {
      console.log(`Guess is wrong, should be ${randomBird.name}`);
      showGuessCorrect(false);
    }
    setShowResultModal(true);
  }

  function hideResultsModal(): void {
    audio.pause();
    setShowResultModal(false);
    setBirds(randomBirds());
    setShowNames(false);
  }

  return (
    <main className="main-wrapper">
      <div className="identify-bird-sound">
        <Modal show={showResultModal} onHide={hideResultsModal}>
          <Modal.Header closeButton>
            {guessCorrect ? (
              <h3>Your guess is correct!</h3>
            ) : (
              <div>
                <h3>Your guess is incorrect!</h3>
                <h3>Correct answer is {randomBird.name}</h3>
              </div>
            )}
          </Modal.Header>
          <Modal.Body>
            <h3>{randomBird.name}</h3>
            <div className="identify-bird-sound__image-container">
              <img src={randomBird.image} alt={randomBird.name} />
            </div>
          </Modal.Body>
        </Modal>
        <h2 className="identify-bird-sound__ques">Guess which bird makes this sound</h2>
        <div className="identify-bird-sound__play-button-container">
          <button onClick={playing ? pauseAudio : playAudio} className="identify-bird-sound__play-btn"> 
            {playing ? <PauseCircle /> : <PlayCircle />}
          </button>
        </div>
        {/* {showNames ? ( */}
          <div className="identify-bird-sound__option-container">
            <div className="identify-bird-sound__option" onClick={() => guessBird(0)}>
              <h3>{birds[0].name}</h3>
            </div>
            <div className="identify-bird-sound__option" onClick={() => guessBird(1)}>
              <h3>{birds[1].name}</h3>
            </div>
            <div className="identify-bird-sound__option" onClick={() => guessBird(2)}>
              <h3>{birds[2].name}</h3>
            </div>
          </div>
        {/* ) : null} */}
      </div>
    </main>
  );
}

export default IdentifyBirdSound;
