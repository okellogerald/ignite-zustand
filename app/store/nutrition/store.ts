import { create, StateCreator } from "zustand";
import { Category } from "app/models/category";
import { Recipe } from "app/models/recipe";

export const RECIPE_CATEGORIES: Category[] = [
  { id: "1", name: "Breakfast" },
  { id: "2", name: "Lunch" },
  { id: "3", name: "Dinner" },
  { id: "4", name: "Snacks" },
  { id: "5", name: "Desserts" },
  { id: "6", name: "Drinks" },
];

interface NutritionTabStore {
  tabs: Category[];
  currentTab: Category;
  updateTab: (id: string) => void;
}

const createTabSlice: StateCreator<NutritionTabStore> = (
  set,
  get,
) => ({
  tabs: RECIPE_CATEGORIES,
  currentTab: RECIPE_CATEGORIES[0],
  updateTab: (id) => {
    const tab = get().tabs.filter((e) => e.id === id)[0];
    return set({ currentTab: tab });
  },
});

export interface Recipes {
  [key: string]: Recipe[];
}

interface RecipesStore {
  breakfast: Recipe[];
  lunch: Recipe[];
  dinner: Recipe[];
  snacks: Recipe[];
  desserts: Recipe[];
  drinks: Recipe[];

  updateRecipes: (recipes: Recipes) => void;
}

const createRecipesSlice: StateCreator<
  RecipesStore
> = (
  set,
) => ({
  breakfast: [],
  lunch: [],
  dinner: [],
  snacks: [],
  desserts: [],
  drinks: [],

  updateRecipes: (recipes) => set(recipes),
});

export const useNutritionStore = create<NutritionTabStore & RecipesStore>()((...a) => ({
  ...createTabSlice(...a),
  ...createRecipesSlice(...a),
}));
