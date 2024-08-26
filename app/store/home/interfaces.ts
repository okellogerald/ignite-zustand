import { Category } from "app/models/category";
import { Recipe } from "app/models/recipe";
import { FitnessVideo } from "app/models/video";

export const HOME_CATEGORIES: Category[] = [
  { id: "1", name: "Diet" },
  { id: "2", name: "Exercise" },
  { id: "3", name: "Mantra" },
  { id: "4", name: "Sex" },
  { id: "5", name: "Lifestyle" },
];

export interface HomeRecommendations {
  diet: Recipe[];
  exercise: FitnessVideo[];
  mantra: string[];
  sex: string[];
  lifestyle: string[];
}
