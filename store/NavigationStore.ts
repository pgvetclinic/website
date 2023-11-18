import { create } from 'zustand';

interface NavigationStore {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

const useNavigationStore = create<NavigationStore>((set) => ({
  // Initial state
  isOpen: false,
  // Actions
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useNavigationStore;
