import React from "react";
import '@/lib/styles/banner.css'

interface PageWrapperProps {
    children: React.ReactNode,
}

const FlexWrapper = ({
    children,
}: PageWrapperProps) => {
    return (  
        <main className="w-full h-full relative flex flex-col bg-[#efefef] dark:bg-[#090A0C]">
            {children}
        </main>
    );
}
 
export default FlexWrapper;