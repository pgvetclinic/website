import { create } from 'zustand';

interface NavigationStore {
  isOpen: boolean;
  toggleIsOpen: () => void;
  routeChange: () => void;
  hidden: boolean;
  currentYpos: number;
  updateCurrentYpos: (pos: number) => void;
}

const useNavigationStore = create<NavigationStore>((set) => ({
  // Initial state
  isOpen: false,
  currentYpos: -10,
  hidden: false,
  // Actions
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  routeChange: () => set({ isOpen: false }),
  updateCurrentYpos: (pos: number) =>
    set((state) => ({
      currentYpos: pos,
      hidden: state.currentYpos < pos - 2,
    })),
}));

export default useNavigationStore;
