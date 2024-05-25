import '@/lib/styles/scroll.css'

import {
    Dialog,
    DialogContent,
    DialogHeader
} from '@/components/ui/dialog'

import { usePostModal } from '@/hooks/use-post-modal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '../ui/separator';

const PostModal = () => {
    const { isOpen, onClose, data } = usePostModal()

    const handleClose = () => {
        onClose();
    }
    
    return ( 
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className='bg-white text-black p-0 w-full scroll overflow-y-scroll max-h-[90vh] md:max-w-[60vw] top-[55%] h-[80vh]:'>
                <DialogHeader className='pt-8 px-6'>
                </DialogHeader>
                <Card className='overflow-x-hidden ring-0'>
                    <CardHeader className='border-none'>
                        <CardTitle className='text-xl font-serif'>
                            {data.title}
                        </CardTitle>
                        <Separator />
                        <CardDescription className=''>
                            {data.date}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className=''>
                            {data.description}
                        </p>
                    </CardContent>
                    <CardContent className='px-0 py-0'>
                        <div className="w-full h-[30rem] overflow-hidden">
                            <img src={data.image} className='w-full h-full object-cover cursor-pointer' alt={data.title} />
                        </div>
                        {/* <Separator className='' /> */}
                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
     );
}
 
export default PostModal;