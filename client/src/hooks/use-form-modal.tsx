import { create } from "zustand";


interface useForm {
    type: 'Registration'|'Setup',
    isOpen: boolean,
    onOpen: (type: 'Registration'|'Setup') => void,
    onClose: () => void,
}

export const useFormModal = create<useForm>((set) => ({
    type: 'Registration',
    isOpen: false,
    onOpen: (type = 'Registration') => set({isOpen: true, type}),
    onClose: () => set({isOpen: false}),
}))