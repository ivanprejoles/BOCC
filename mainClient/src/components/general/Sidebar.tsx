import React, { ElementRef, useEffect, useRef, useState } from 'react'
import dashboards from '@/lib/Sidebar-links';
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@mui/material'
import { Link , useLocation} from 'react-router-dom';
import { ChevronsLeft, MenuIcon} from "lucide-react";

import { ScrollArea } from '@/components/ui/scroll-area';

const Sidebar = () => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const isResizingRef = useRef(false)
    const sidebarRef = useRef<ElementRef<'aside'>>(null)
    const navbarRef = useRef<ElementRef<'div'>>(null)
    const [isResetting, setIsResetting] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(isMobile)
    const location = useLocation();
    const pathname = location.pathname; // Get the entire path
    // Extract the path up to "/users"
    const usersPath = pathname.split('/')[1];

    useEffect(() => {
        if (isMobile) {
            collapse()
        } else {
            resetWidth()
        }
    }, [isMobile])

    useEffect(() => {
        if (isMobile) {
            collapse()
        }
    },[usersPath, isMobile])

    // MOUSE EVENT AREA
    const handleMouseDown = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) =>  {
        event.preventDefault()
        event.stopPropagation()

        isResizingRef.current = true;
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

    const handleMouseMove = (event: MouseEvent) => {
        if (!isResizingRef.current) return
        let newWidth = event.clientX

        if (newWidth < 64) newWidth = 64
        if (newWidth > 320) newWidth = 320

        if (sidebarRef.current && navbarRef.current) {
            sidebarRef.current.style.width = `${newWidth}px`
            navbarRef.current.style.setProperty('left', `${newWidth}px`)
            navbarRef.current.style.setProperty('width', `calc(100% - ${newWidth}px)`)
            navbarRef.current.style.cursor = 'cursor';
        }
    }

    const handleMouseUp = () => {
        isResizingRef.current = false
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
    }

    const resetWidth = () => {
        if (sidebarRef.current && navbarRef.current) {
            setIsCollapsed(false)
            setIsResetting(true)

            sidebarRef.current.style.width = isMobile ? '100%' : '240px'
            navbarRef.current.style.setProperty(
                'width',
                isMobile ? '0' : 'calc(100% - 240px)'
            )
            navbarRef.current.style.setProperty(
                'left',
                isMobile ? '100%' : '240px'
            )
            setTimeout(() => setIsResetting(false), 300)
        }
    }

    const collapse = () => {
        if (sidebarRef.current && navbarRef.current) {
            setIsCollapsed(true)
            setIsResetting(true)

            sidebarRef.current.style.width = '0'
            navbarRef.current.style.setProperty('width', '100%')
            navbarRef.current.style.setProperty('left', '0')

            setTimeout(() => setIsResetting(false), 300)
        }
    }
    
    return (
        <>
            <aside
                ref={sidebarRef} 
                className={cn(
                    'group/sidebar h-full bg-white overflow-y-auto relative w-60 flex flex-col z-[40]',
                    isResetting && 'transition-all ease-in-out duration-300',
                    isMobile && 'w-0',
                )}
            >
                <div className="h-full w-full p-2 pr-2 ">

                    <ScrollArea className="w-full h-full overflow-y-auto">
                        {Object.entries(dashboards).map(([title, dashboard], dashboardKey) => (
                            <div className='w-full h-auto' key={dashboardKey} aria-description={title}>
                                <h2 className='w-full line-clamp-1 text-ellipsis py-2 text-sm font-thin'>
                                    {dashboard.title}
                                </h2>
                                {dashboard.pages.map((page, pageKey) => (
                                    <Link to={page.link} key={pageKey}>
                                        <div 
                                            className={cn(
                                                "cursor-pointer h-[3rem] group hover:bg-blue-50/15 hover:border-blue-200/35 hover:border-2 rounded-lg overflow-hidden flex flex-row",
                                                (usersPath === page.link) && 'bg-blue-100/15 border-blue-400/35 border-2'
                                            )}
                                        >
                                            <div className="h-full aspect-square rounded-full p-3 ">
                                                <page.Icon 
                                                    className={cn(
                                                        'h-full flex-1 w-full group-hover:text-blue-400',
                                                        (usersPath === page.link) && 'text-blue-500'
                                                    )}
                                                />
                                            </div>
                                            <div className="w-full px-2 h-full flex flex-row items-center">
                                                <h2 
                                                    className={cn(
                                                        "w-full line-clamp-1 text-ellipsis font-semibold text-md group-hover:text-blue-400",
                                                        (usersPath === page.link) && 'text-blue-500',
                                                    )}
                                                >
                                                    {page.title}
                                                </h2>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            
                        ))}
                    </ScrollArea>
                </div>
                <div
                    onClick={collapse}
                    role="button"
                    className={cn(
                        'h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition',
                        isMobile && 'opacity-100'
                    )}
                >
                    <ChevronsLeft className="h-6 w-6"/>
                </div>
                <div 
                    onMouseDown={handleMouseDown}
                    onClick={resetWidth}
                    className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0" 
                />
            </aside>
            <div 
                ref={navbarRef}
                className={cn(
                    'absolute z-40 left-0 w-[4rem]',
                    isResetting && 'transition-all ease-in-out duration-300',
                    isMobile && 'left-0 '
                )}
            >
                <nav className={cn(
                    "bg-transparent ",
                    isCollapsed && 'px-3 py-2 w-full'
                )}>
                    {isCollapsed && <MenuIcon onClick={resetWidth}
                    role='button' className='h-6 w-6 text-muted-foreground' />}
                </nav>
            </div>
        </> 
    )
}

export default Sidebar