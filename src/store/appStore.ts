import { create } from "zustand";

interface appStoreInterface {
  volume: number;
  power: boolean;
  DrumPressed: string;
  changeVolume(volume: number): void;
  handlePower(): void;
  changeDrumPressed(id: string): void;
}

export const useAppStore = create<appStoreInterface>((set) => ({
  volume: 0.3,
  power: true,
  DrumPressed: "",
  changeVolume: (volume) => set((state) => ({ volume })),
  handlePower: () => set((state) => ({ power: !state.power })),
  changeDrumPressed: (id: string) =>
    set(() => ({
      DrumPressed: id,
    })),
}));
