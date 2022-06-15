import create from 'zustand';

interface DashboardStore {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const useGlobalStore = create<DashboardStore>((set) => ({
  isDarkMode: false,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useGlobalStore;
