import { create } from "zustand";

export const useSoundStore = create<{
  sound: string;
  setSound: (sound: string) => void;
}>((set) => ({
  sound: "",
  setSound: (sound: string) => set(() => ({ sound })),
}));
