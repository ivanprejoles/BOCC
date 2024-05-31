/* eslint-disable @typescript-eslint/no-explicit-any */
import {create} from 'zustand'

export type ModalType = 'AddAnnouncement'|'AddNews'|'EditAnnouncement'|'EditNews'|'ShowForm'|'Request'


interface ModalStore {
    type: ModalType | null,
    data: any,
    isOpen: boolean,
    onOpen: (type: ModalType, data?: any) => void,
    onClose: () => void,
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({
        isOpen: true, type, data
    }),
    onClose: () => set({
        isOpen: false, type: null
    })
}))