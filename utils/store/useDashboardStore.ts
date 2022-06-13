import create from 'zustand';

interface DashboardStore {
  isBurger: boolean;
  toggleBurger: () => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  isBurger: false,
  toggleBurger: () => set((state) => ({ isBurger: !state.isBurger })),
}));
