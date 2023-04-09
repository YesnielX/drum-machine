import { useEffect, useRef } from "react";
import { useAppStore } from "../store/appStore";

interface DrumPadProps {
  pad: {
    id: string;
    keyCode: number;
    keyTrigger: string;
    url: string;
  };
  currentVolume: number;
}

const DrumPad = ({ pad, currentVolume }: DrumPadProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const appStore = useAppStore();

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      divRef.current?.classList.add("has-background-primary");
      appStore.changeDrumPressed(pad.id);
      audioRef.current.play();

      setTimeout(() => {
        divRef.current?.classList.remove("has-background-primary");
      }, 100);
    }
  };

  useEffect(() => {
    if (divRef.current) {
      divRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (audioRef.current === null) return;

    audioRef.current.volume = appStore.power ? currentVolume : 0;
  }, [currentVolume, appStore.power]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.keyCode === pad.keyCode) {
        handleClick();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleClick, pad.keyCode]);

  return (
    <div className="column is-4">
      <div
        className="box drum-pad is-clickable is-unselectable	"
        id={pad.keyTrigger}
        onClick={handleClick}
        ref={divRef}
        tabIndex={0}
      >
        <p>{pad.keyTrigger}</p>
        <audio
          ref={audioRef}
          src={pad.url}
          className="clip"
          id={pad.keyTrigger}
        />
      </div>
    </div>
  );
};

export default DrumPad;
