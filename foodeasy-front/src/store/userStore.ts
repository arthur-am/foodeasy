import { StateCreator, create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

type User = {
  name: string;
  cnpj?: string;
  email: string;
  telefone: string;
  password: string;
  type: "client" | "restaurant" | "deliverman";
  address?: {
    street: string;
    number: string;
    district: string;
    city: string;
    state: string;
    cep: string;
  };
};

type UserState = {
  currentUser: User | null;
  users: User[];
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (user: User) => void;
};

type UserStatePersist = (
  config: StateCreator<UserState>,
  options: PersistOptions<UserState>
) => StateCreator<UserState>;

const useUser = create<UserState>(
  (persist as UserStatePersist)(
    (set) => ({
      currentUser: null,
      users: [],
      login: (email, password) => {
        set((state) => {
          console.log(state.users, email, password);
          return {
            currentUser:
              state.users.find(
                (user) => user.email == email && user.password == password
              ) || null,
          };
        });
      },
      logout: () => {
        set({ currentUser: null });
      },
      register: (user) => {
        set((state) => ({
          users: [...state.users, user],
        }));
      },
    }),
    { name: "users" }
  )
);
export default useUser;
