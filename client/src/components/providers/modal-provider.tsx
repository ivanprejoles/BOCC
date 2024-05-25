import { useEffect, useState } from "react";

import FormModal from "@/components/modals/form-modal";
import PostModal from "../modals/post-modal";

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
            <FormModal />
            <PostModal />
        </>
    );
}
 
export default ModalProvider;