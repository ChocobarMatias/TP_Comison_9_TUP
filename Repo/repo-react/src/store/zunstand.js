import {create} from "zustand";

export const useAuthStore = create((set) => ({
    isAuthenticated: false,
    nombre:null,
    user: null,
    setNombre: (nombre) =>  set({ nombre }),
    login: (user) => set({ isAuthenticated: true, user }),
    logout: () => set({ isAuthenticated: false, user: null, nombre:null }),
}));


