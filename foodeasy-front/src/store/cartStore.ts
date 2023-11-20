import { StateCreator, create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

type CartState = {
  items: {
    restaurant: number;
    item: number;
    quantity: number;
  }[];
  addItem: (data: {
    restaurant: number;
    item: number;
    quantity: number;
  }) => void;
  removeItem: (data: { restaurant: number; item: number }) => void;
  clearCart: () => void;
};

type CartStatePersist = (
  config: StateCreator<CartState>,
  options: PersistOptions<CartState>
) => StateCreator<CartState>;

const useCart = create<CartState>(
  (persist as CartStatePersist)(
    (set) => ({
      items: [],
      addItem: (data) => {
        if (data.quantity <= 0) return;
        set((state) => ({
          items: [...state.items, data],
        }));
      },
      removeItem: (data) => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              item.item !== data.item && item.restaurant !== data.restaurant
          ),
        }));
      },
      clearCart: () => {
        set({ items: [] });
      },
    }),
    { name: "cart" }
  )
);
export default useCart;
