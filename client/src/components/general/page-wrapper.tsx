import React from "react";

interface PageWrapperProps {
    children: React.ReactNode,
}

const PageWrapper = ({
    children,
}: PageWrapperProps) => {
    return (  
        <main className="w-full h-auto relative">
            {children}
        </main>
    );
}
 
export default PageWrapper;