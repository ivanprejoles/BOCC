import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const activities = [
    {
        title: 'title title title',
        description: 'titletitletitletitletitle title title title',
        date: 'sdadasdsa',
        image: 'dsadasdasdasdas'
    },
    {
        title: 'title title title',
        description: 'titletitletitletitletitle title title title',
        date: 'sdadasdsa',
        image: 'dsadasdasdasdas'
    },
    {
        title: 'title title title',
        description: 'titletitletitletitletitle title title title',
        date: 'sdadasdsa',
        image: 'dsadasdasdasdas'
    },
]

const ActivitiesSection = () => {
    return (  
        <div className="w-full h-auto flex flex-col gap-8">
            {activities.map((activity, key) => (
                <div className="w-full md:h-[40rem] flex flex-row relative py-[1px]">
                    <div 
                        className={cn(
                            "h-1/2 md:h-full md:w-7/12 relative",
                            key % 2 === 1 ? 'right-0 ml-auto' : ''
                    )}>
                        <img
                            className="
                                w-full
                                h-full
                                object-cover
                                brightness-[110%]
                            "

                            style={{ paddingTop: "calc(100% * (video aspect ratio) / 1)" }}
                            src='https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FUntitled%20Project?alt=media&token=b3ae4c26-44f2-4373-80fc-44764dd215eb'
                        />
                    </div> 
                <div 
                    className={cn(
                        " absolute h-full md:h-full w-full md:w-[60%] flex items-center flex-row top-0 dark:before:bg-[#141010] text-black dark:text-white",
                        key % 2 === 1 ? 'left-pointer' : 'right-0 right-pointer justify-end'
                    )}>
                    <div className="z-50 w-[80%] items-center justify-center hidden sm:flex">
                        <div className="max-w-full min-w-9 h-auto flex flex-col items-center justify-center gap-6">
                            <div className="overflow-hidden object-cover relative h-[5rem] w-[5rem]">
                                <Link to={'/'}>
                                    <img src='/assets/Ivan_homepage.svg' className='absolute w-full h-full hover:scale-105' />
                                </Link>
                            </div>
                            <p className="max-w-xs lg:max-w-md line-clamp-3 text-ellipsis leading-6 text-center font-normal text-sm md:text-xl ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
                                No Function
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}
 
export default ActivitiesSection;