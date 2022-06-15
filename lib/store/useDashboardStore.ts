import create from 'zustand';

interface DashboardStore {
  isBurger: boolean;
  toggleBurger: () => void;
}

const useDashboardStore = create<DashboardStore>((set) => ({
  isBurger: false,
  toggleBurger: () => set((state) => ({ isBurger: !state.isBurger })),
}));

export default useDashboardStore;
