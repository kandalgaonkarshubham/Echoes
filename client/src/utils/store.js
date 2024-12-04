import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      email: '',
      apiKey: '',

      login: (email, apiKey) => {
        set({ email, apiKey });
        document.cookie = "isAuthenticated=true; path=/; expires=" + new Date(Date.now() + 86400000).toUTCString();
      },
      logOut: () => {
        set({ email: '', apiKey: '' });
        document.cookie = "isAuthenticated=; path=/; expires=" + new Date(0).toUTCString();
      },
    }),
    {
      name: 'auth',
    },
  ),
);

export const useJournalStore = create(
  persist(
    (set) => ({
      journals: [],

      setJournals: (journals) => set(journals),
      addJournal: (newJournal) => set((state) => ({ journals: [...state.journals, newJournal] })),
    }),
    {
      name: 'journals',
    },
  ),
);
