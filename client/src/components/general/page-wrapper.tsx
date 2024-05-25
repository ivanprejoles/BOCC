import React from "react";

interface PageWrapperProps {
    children: React.ReactNode,
}

const PageWrapper = ({
    children,
}: PageWrapperProps) => {
    return (  
        <main className="w-full h-full relative overflow-auto">
            {children}
        </main>
    );
}
 
export default PageWrapper;