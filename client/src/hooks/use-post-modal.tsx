import { create } from "zustand";

interface Post {
    title: string,
    description: string,
    date: string,
    image: string,
}

interface usePost {
    isOpen: boolean,
    data: Post,
    onOpen: (data: Post) => void,
    onClose: () => void,
}

const initialData = {
    title: '',
    description: '',
    date: '',
    image: ''
}
export const usePostModal = create<usePost>((set) => ({
    data: initialData,
    isOpen: false,
    onOpen: (data) => set({isOpen: true, data}),
    onClose: () => set({isOpen: false, data: initialData}),

}))