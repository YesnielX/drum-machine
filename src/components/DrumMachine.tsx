import data from "../data/drumPads";
import { useAppStore } from "../store/appStore";
import "../styles/DrumMachine.css";
import Controls from "./Controls";
import DrumPad from "./DrumPad";

const DrumMachine = () => {
  const appStore = useAppStore();
  const currentVolume = appStore.volume;

  const renderDrumPads = () => {
    return data.map((item) => (
      <DrumPad key={item.id} pad={item} currentVolume={currentVolume} />
    ));
  };

  return (
    <div className="hero-body has-text-centered container is-flex is-flex-direction-column is-justify-content-center">
      <h1 className="title my-6 has-text-white">Drum Machine</h1>
      <div id="drum-machine">
        <div className="columns is-vcentered">
          <div className="column">
            <div className="box has-background-light">
              <div className="columns is-multiline is-mobile">
                {renderDrumPads()}
              </div>
            </div>
          </div>
          <div className="column">
            <Controls />
          </div>
        </div>
      </div>
      <span className="has-text-white mt-6">
        Made with ❤️ By{" "}
        <a
          className="has-text-white"
          href="https://github.com/yesnielx"
          target="_blank"
          rel="noopener noreferrer"
        >
          YesnielX
        </a>
      </span>
    </div>
  );
};

export default DrumMachine;
