import { create } from "zustand";

interface useLogin {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}

export const useLoginModal = create<useLogin>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),

}))