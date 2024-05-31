import React, { useEffect, useState } from 'react'
import AddAnnouncementModal from '../modals/add-announcement'
import AddNewsModal from '../modals/add-news'
import EditAnnouncementModal from '../modals/edit-announcement'
import EditNewsModal from '../modals/edit-news'
import ShowFormModal from '../modals/show-form'
import RequestModal from '../modals/accept-request'

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    
    if (!isMounted) {
        return null
    }
    
    
  return (
    <>
        <AddAnnouncementModal />
        <AddNewsModal />
        <EditAnnouncementModal />
        <EditNewsModal />
        <ShowFormModal />
        <RequestModal />
    </>
  )
}

export default ModalProvider