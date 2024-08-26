import { create, StateCreator } from "zustand";
import { HOME_CATEGORIES, HomeRecommendations } from "./interfaces";
import { Category } from "app/models/category";

interface HomeTabStore {
  tabs: Category[];
  currentTab: Category;
  updateTab: (id: string) => void;
}

const createTabSlice: StateCreator<HomeTabStore> = (
  set,
  get,
) => ({
  tabs: HOME_CATEGORIES,
  currentTab: HOME_CATEGORIES[0],
  updateTab: (id) => {
    const tab = get().tabs.filter((e) => e.id === id)[0];
    return set({ currentTab: tab });
  },
});

interface HomeRecommendationsStore {
  recommendations?: HomeRecommendations;
  setRecommendations: (value: HomeRecommendations) => void;
}

const createRecommendationsSlice: StateCreator<
  HomeRecommendationsStore
> = (
  set,
) => ({
  recommendations: undefined,
  setRecommendations: (value) => set({ recommendations: value }),
});

export const useHomeStore = create<HomeTabStore & HomeRecommendationsStore>()((
  ...a
) => ({
  ...createTabSlice(...a),
  ...createRecommendationsSlice(...a),
}));
