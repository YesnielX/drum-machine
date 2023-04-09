import { ChangeEvent } from "react";
import { useAppStore } from "../store/appStore";

const Controls = () => {
  const appStore = useAppStore();

  const volume = appStore.volume;
  const power = appStore.power;

  const handleVolumeUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    appStore.changeVolume(parseFloat(event.target.value));
  };

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="is-flex is-flex-direction-column is-justify-content-center field is-grouped is-grouped-centered">
            <p className="control">
              <button
                className={`button is-rounded ${
                  power ? "is-success" : "is-danger"
                }`}
                onClick={appStore.handlePower}
              >
                <span className="icon">
                  <i className={`fas fa-power-off has-text-white`}></i>
                </span>
                <span>{power ? "ON" : "OFF"}</span>
              </button>
            </p>

            <br />
            {appStore.DrumPressed ? (
              <span
                className="tag is-primary is-rounded is-size-4"
                id="display"
              >
                {appStore.DrumPressed}
              </span>
            ) : null}
            <br />
            <p className="control">
              <input
                max="1"
                min="0.1"
                step="0.01"
                type="range"
                value={volume}
                onChange={handleVolumeUpdate}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
