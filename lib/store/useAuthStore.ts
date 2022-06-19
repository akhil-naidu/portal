import create from 'zustand';

interface AuthStore {
  session: any;
  setSession: any;
}

const useAuthStore = create<AuthStore>((set) => ({
  session: null,
  setSession: (session: any) => set(() => ({ session: session })),
}));

export default useAuthStore;
