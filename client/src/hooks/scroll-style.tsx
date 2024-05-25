import { create } from "zustand";

interface useForm {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}

export const useFormModal = create<useForm>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))