import { create } from 'zustand';

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setPlatformId: (platformId: number) => void;
  setGenreId: (genreId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));


export default useGameQueryStore;