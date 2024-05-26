import '@/lib/styles/scroll.css'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Separator } from '@/components/ui/separator';
import { usePostModal } from '@/hooks/use-post-modal';

const Announcement = () => {
    const {onOpen} = usePostModal()
      
    const onClickPost = () => {
        onOpen({
            title: 'dsadsadsa',
            description: 'dwadwadwa',
            date: 'dwadwadwada',
            image: 'dwadadwadwa'
        })
    }

    return (  
        <div className="h-full w-full overflow-hidden relative flex flex-row">
            <div className="hidden md:block md:w-2/4 h-full sticky top-0 left-0 ">dsadsa</div>
            <div className="flex-grow w-full min-h-full h-auto scroll py-4 overflow-y-auto overflow-x-hidden xl:px-20 2xl:px-40 space-y-5">
                <p className='text-center'>Events</p>
                <Card className='overflow-x-hidden'>
                    <CardHeader>
                        <CardTitle className='line-clamp-2 text-xl font-serif'>Card Title Card Title Card Title Card Title Card Title Card Title Card Title Card Title Card Title Card Title</CardTitle>
                        <Separator />
                        <CardDescription className=''>Saturday, May 25, 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='line-clamp-3'>Card contentCard contentCard contentcontentCardcontentCardcontentCardcontentCard Card content Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
                    </CardContent>
                    <CardContent className='px-0 py-0'>
                        <div className="w-full h-[20rem] overflow-hidden">
                            <img src="https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367" className='w-full h-full object-cover cursor-pointer' onClick={onClickPost} />
                        </div>
                        {/* <Separator className='' /> */}
                    </CardContent>
                </Card>
                <Card className='overflow-x-hidden'>
                    <CardHeader>
                        <CardTitle className='line-clamp-2 text-xl font-serif'>Card Title Card Title Card Title Card Title Card Title Card Title Card Title Card Title Card Title Card Title</CardTitle>
                        <Separator />
                        <CardDescription className=''>Saturday, May 25, 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='line-clamp-3'>Card contentCard contentCard contentcontentCardcontentCardcontentCardcontentCard Card content Card content Card content Card content Card content Card content Card content Card content Card content Card content</p>
                    </CardContent>
                    <CardContent className='px-0 py-0'>
                        <div className="w-full h-[20rem] overflow-hidden">
                            <img src="https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367" className='w-full h-full object-cover cursor-pointer' />
                        </div>
                        {/* <Separator className='' /> */}
                    </CardContent>
                </Card>
                <p className='text-center'>End of announcement</p>
            </div>
            <div className="hidden md:block md:w-2/4 h-full sticky top-0 right-0 overflow-y-auto scroll px-3 space-y-2 py-2">
                <p>Announcement</p>
                <Card className='overflow-x-hidden shadow-none bg-transparent dark:bg-transparent border-none ring-0 hover:bg-[#E4E6E9]/80 dark:hover:bg-secondary/70 cursor-pointer'>
                    <CardContent className='p-2 gap-2 flex flex-col'>
                    <div className="h-[5rem] grid grid-cols-3 grid-rows-1 space-x-4 rounded-md w-full">
                        <img src="https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367" className='w-full h-full object-cover rounded-lg' />
                        <CardTitle className='line-clamp-2 text-sm font-semibold col-span-2'>Card Title1 C ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card  ard Title2 Card Title3 Card Titl4e Card Title Card Title Card Title Card Title Card Title Card Title</CardTitle>
                    </div>
                        <Separator />
                        <CardDescription className=''>Saturday, May 25, 2024</CardDescription>
                    </CardContent>
                </Card>
                <Card className='overflow-x-hidden shadow-none bg-transparent dark:bg-transparent border-none ring-0 hover:bg-[#E4E6E9]/80 dark:hover:bg-secondary/70 cursor-pointer'>
                    <CardContent className='p-2 gap-2 flex flex-col'>
                    <div className="h-[5rem] grid grid-cols-3 grid-rows-1 space-x-4 rounded-md w-full">
                        <img src="https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367" className='w-full h-full object-cover rounded-lg' />
                        <CardTitle className='line-clamp-2 text-sm font-semibold col-span-2'>Card Title1 C ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card  ard Title2 Card Title3 Card Titl4e Card Title Card Title Card Title Card Title Card Title Card Title</CardTitle>
                    </div>
                        <Separator />
                        <CardDescription className=''>Saturday, May 25, 2024</CardDescription>
                    </CardContent>
                </Card>
                <Card className='overflow-x-hidden shadow-none bg-transparent dark:bg-transparent border-none ring-0 hover:bg-[#E4E6E9]/80 dark:hover:bg-secondary/70 cursor-pointer'>
                    <CardContent className='p-2 gap-2 flex flex-col'>
                    <div className="h-[5rem] grid grid-cols-3 grid-rows-1 space-x-4 rounded-md w-full">
                        <img src="https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367" className='w-full h-full object-cover rounded-lg' />
                        <CardTitle className='line-clamp-2 text-sm font-semibold col-span-2'>Card Title1 C ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card  ard Title2 Card Title3 Card Titl4e Card Title Card Title Card Title Card Title Card Title Card Title</CardTitle>
                    </div>
                        <Separator />
                        <CardDescription className=''>Saturday, May 25, 2024</CardDescription>
                    </CardContent>
                </Card>
                <Card className='overflow-x-hidden shadow-none bg-transparent dark:bg-transparent border-none ring-0 hover:bg-[#E4E6E9]/80 dark:hover:bg-secondary/70 cursor-pointer'>
                    <CardContent className='p-2 gap-2 flex flex-col'>
                    <div className="h-[5rem] grid grid-cols-3 grid-rows-1 space-x-4 rounded-md w-full">
                        <img src="https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367" className='w-full h-full object-cover rounded-lg' />
                        <CardTitle className='line-clamp-2 text-sm font-semibold col-span-2'>Card Title1 C ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card  ard Title2 Card Title3 Card Titl4e Card Title Card Title Card Title Card Title Card Title Card Title</CardTitle>
                    </div>
                        <Separator />
                        <CardDescription className=''>Saturday, May 25, 2024</CardDescription>
                    </CardContent>
                </Card>
                <Card className='overflow-x-hidden shadow-none bg-transparent dark:bg-transparent border-none ring-0 hover:bg-[#E4E6E9]/80 dark:hover:bg-secondary/70 cursor-pointer'>
                    <CardContent className='p-2 gap-2 flex flex-col'>
                    <div className="h-[5rem] grid grid-cols-3 grid-rows-1 space-x-4 rounded-md w-full">
                        <img src="https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367" className='w-full h-full object-cover rounded-lg' />
                        <CardTitle className='line-clamp-2 text-sm font-semibold col-span-2'>Card Title1 C ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card  ard Title2 Card Title3 Card Titl4e Card Title Card Title Card Title Card Title Card Title Card Title</CardTitle>
                    </div>
                        <Separator />
                        <CardDescription className=''>Saturday, May 25, 2024</CardDescription>
                    </CardContent>
                </Card>
                <Card className='overflow-x-hidden shadow-none bg-transparent dark:bg-transparent border-none ring-0 hover:bg-[#E4E6E9]/80 dark:hover:bg-secondary/70 cursor-pointer'>
                    <CardContent className='p-2 gap-2 flex flex-col'>
                    <div className="h-[5rem] grid grid-cols-3 grid-rows-1 space-x-4 rounded-md w-full">
                        <img src="https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367" className='w-full h-full object-cover rounded-lg' />
                        <CardTitle className='line-clamp-2 text-sm font-semibold col-span-2'>Card Title1 C ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card  ard Title2 Card Title3 Card Titl4e Card Title Card Title Card Title Card Title Card Title Card Title</CardTitle>
                    </div>
                        <Separator />
                        <CardDescription className=''>Saturday, May 25, 2024</CardDescription>
                    </CardContent>
                </Card>
                <Card className='overflow-x-hidden shadow-none bg-transparent dark:bg-transparent border-none ring-0 hover:bg-[#E4E6E9]/80 dark:hover:bg-secondary/70 cursor-pointer'>
                    <CardContent className='p-2 gap-2 flex flex-col'>
                    <div className="h-[5rem] grid grid-cols-3 grid-rows-1 space-x-4 rounded-md w-full">
                        <img src="https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367" className='w-full h-full object-cover rounded-lg' />
                        <CardTitle className='line-clamp-2 text-sm font-semibold col-span-2'>Card Title1 C ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card  ard Title2 Card Title3 Card Titl4e Card Title Card Title Card Title Card Title Card Title Card Title</CardTitle>
                    </div>
                        <Separator />
                        <CardDescription className=''>Saturday, May 25, 2024</CardDescription>
                    </CardContent>
                </Card>
                <Card className='overflow-x-hidden shadow-none bg-transparent dark:bg-transparent border-none ring-0 hover:bg-[#E4E6E9]/80 dark:hover:bg-secondary/70 cursor-pointer'>
                    <CardContent className='p-2 gap-2 flex flex-col'>
                    <div className="h-[5rem] grid grid-cols-3 grid-rows-1 space-x-4 rounded-md w-full">
                        <img src="https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367" className='w-full h-full object-cover rounded-lg' />
                        <CardTitle className='line-clamp-2 text-sm font-semibold col-span-2'>Card Title1 C ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card  ard Title2 Card Title3 Card Titl4e Card Title Card Title Card Title Card Title Card Title Card Title</CardTitle>
                    </div>
                        <Separator />
                        <CardDescription className=''>Saturday, May 25, 2024</CardDescription>
                    </CardContent>
                </Card>
                <Card className='overflow-x-hidden shadow-none bg-transparent dark:bg-transparent border-none ring-0 hover:bg-[#E4E6E9]/80 dark:hover:bg-secondary/70 cursor-pointer'>
                    <CardContent className='p-2 gap-2 flex flex-col'>
                    <div className="h-[5rem] grid grid-cols-3 grid-rows-1 space-x-4 rounded-md w-full">
                        <img src="https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367" className='w-full h-full object-cover rounded-lg' />
                        <CardTitle className='line-clamp-2 text-sm font-semibold col-span-2'>Card Title1 C ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card ard Title2 Card Title3 Card  ard Title2 Card Title3 Card Titl4e Card Title Card Title Card Title Card Title Card Title Card Title</CardTitle>
                    </div>
                        <Separator />
                        <CardDescription className=''>Saturday, May 25, 2024</CardDescription>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
 
export default Announcement;