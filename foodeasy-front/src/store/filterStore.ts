import { StateCreator, create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

type FilterState = {
  categories: number[];
  cousines: number[];
  order: "asc" | "desc";
  switchCategory: (categoryId: number) => void;
  switchCousines: (cousineId: number) => void;
  setOrder: (order: "asc" | "desc") => void;
  clearFilters: () => void;
};

type FilterStatePersist = (
  config: StateCreator<FilterState>,
  options: PersistOptions<FilterState>
) => StateCreator<FilterState>;

const useFilters = create<FilterState>(
  (persist as FilterStatePersist)(
    (set) => ({
      categories: [],
      cousines: [],
      order: "asc",
      switchCategory: (categoryId) => {
        set((state) => ({
          categories: state.categories.includes(categoryId)
            ? state.categories.filter((category) => category !== categoryId)
            : [...state.categories, categoryId],
        }));
      },
      switchCousines: (cousineId) => {
        set((state) => ({
          cousines: state.cousines.includes(cousineId)
            ? state.cousines.filter((cousine) => cousine !== cousineId)
            : [...state.cousines, cousineId],
        }));
      },
      setOrder: (order) => {
        set({ order });
      },
      clearFilters: () => {
        set({ categories: [], cousines: [], order: "asc" });
      },
    }),
    { name: "filters" }
  )
);
export default useFilters;
