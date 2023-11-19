import { create } from 'zustand';

interface NavigationStore {
  isOpen: boolean;
  toggleIsOpen: () => void;
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
  updateCurrentYpos: (pos: number) =>
    set((state) => ({ currentYpos: pos, hidden: state.currentYpos < pos })),
}));

export default useNavigationStore;
