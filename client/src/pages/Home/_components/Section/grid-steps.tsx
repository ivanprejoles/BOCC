import { TfiWrite } from "react-icons/tfi";

import { IconType } from "react-icons";
import { useFormModal } from "@/hooks/use-form-modal";

interface GridInterface {
    CardIcon: IconType,
    title: string,
    description: string,
    type: 'Registration' | 'Setup'
}


const Card = ({
    CardIcon,
    title,
    description,
    type
}: GridInterface) => {
    const RegisterModal = useFormModal()

    return (
        <div className="w-full h-full flex items-center justify-center" >
            <div className="h-4/5 w-4/5 grid grid-rows-5">
                <div className="row-span-2 w-full h-full justify-center items-center">
                    <div className="h-full w-full relative flex flex-row">
                        <CardIcon size={20}/>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-center text-center row-span-1">
                    <h3 className="text-center text-4xl font-semibold font-serif h-auto line-clamp-1 text-ellipsis">
                        {title}
                    </h3>
                </div>
                <p className="row-span-2 line-clamp-3 overflow-hidden text-ellipsis h-full">
                    {description}
                </p>
            </div>
        </div>
    )
}

const GridSteps = () => {
    

    const items = [
        {
            icon: TfiWrite,
            title: 'title  title title title',
            description: 'string string description string string description string string description string description string string description string description string string description string description string string description',
            type: 'Registration'
        },
        {
            icon: TfiWrite,
            title: 'title',
            description: 'string string description string string description string string description',
            type: 'Setup'
        },
        {
            icon: TfiWrite,
            title: 'title',
            description: 'string string description string string description string string description'
        },
    ]
    
    return (  
        <>
            <div className="w-full h-full flex items-center">
                <h2 className="text-6xl w-full text-center ">
                    3 Steps to Create an account
                </h2>
            </div>
            {items.map((item) => (
                <Card
                    title={item.title}
                    description={item.description}
                    CardIcon={item.icon}
                    type={item.type}
                />
            ))}
        </>
    );
}
 
export default GridSteps;