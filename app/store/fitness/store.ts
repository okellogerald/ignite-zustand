import { Category } from "app/models/category";
import { FitnessVideo } from "app/models/video";
import { create, StateCreator } from "zustand";
import { SAMPLE_FITNESS_VIDEOS } from "./sample_videos";

export const FITNESS_CATEGORIES: Category[] = [
  { id: "1", name: "All" },
  { id: "2", name: "Weights" },
  { id: "3", name: "Pilates" },
  { id: "4", name: "Yoga" },
];

interface FitnessTabStore {
  tabs: Category[];
  currentTab: Category;
  updateTab: (id: string) => void;
}

const createTabSlice: StateCreator<FitnessTabStore> = (
  set,
  get,
) => ({
  tabs: FITNESS_CATEGORIES,
  currentTab: FITNESS_CATEGORIES[0],
  updateTab: (id) => {
    const tab = get().tabs.filter((e) => e.id === id)[0];
    return set({ currentTab: tab });
  },
});

interface FitnessVideosStore {
  all: FitnessVideo[];
  weights: FitnessVideo[];
  pilates: FitnessVideo[];
  yoga: FitnessVideo[];

  updateVideos: (categoryId: string, videos: FitnessVideo[]) => void;
}

const createVideosSlice: StateCreator<
  FitnessVideosStore
> = (
  set,
) => ({
  all: SAMPLE_FITNESS_VIDEOS,
  weights: SAMPLE_FITNESS_VIDEOS.filter((v) => v.tags.includes("weights")),
  pilates: SAMPLE_FITNESS_VIDEOS.filter((v) => v.tags.includes("pilates")),
  yoga: SAMPLE_FITNESS_VIDEOS.filter((v) => v.tags.includes("yoga")),

  updateVideos: (categoryId, videos) => {
    return set(() => ({
      [categoryId]: videos,
    }));
  },
});

export const useFitnessStore = create<FitnessTabStore & FitnessVideosStore>()((
  ...a
) => ({
  ...createTabSlice(...a),
  ...createVideosSlice(...a),
}));
