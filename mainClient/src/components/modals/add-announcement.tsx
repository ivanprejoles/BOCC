import { useModal } from '@/hooks/use-modal-store'
import axios from 'axios'
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Form } from '../ui/form'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { InputField } from '../forms/form-input'
import { TextareaField } from '../forms/form-textarea'
import { Separator } from '../ui/separator'

const AddAnnouncementSchema = z.object({
    image: z.string().min(0, {
        message: 'Image is optional.'
    }),
    title: z.string().min(1, {
        message: 'Announcement title is required.'
    }),
    description: z.string().min(1, {
        message: 'Announcement description is required.'
    }),
})

const AddAnnouncementModal = () => {
    const {isOpen, onClose, type, data} = useModal()

    const AnnouncementForm = useForm({
        resolver: zodResolver(AddAnnouncementSchema),
        defaultValues: {
            image: '',
            title: '',
            description: ''
        }
    })

    const isLoadingAnnouncement = AnnouncementForm.formState.isSubmitting;

    const isModalOpen = isOpen  && type === 'AddAnnouncement'

    const onAnnounceSubmit = async (values: z.infer<typeof AddAnnouncementSchema>) => {
        await axios.post('/api/store', values)
        .then((response) => {
            if (response?.data && response.data?.id) {
                // const template = response.data
                AnnouncementForm.reset()
                onClose()
                // dispatch(addSwitcher({
                //     key: response.data.id, value: {
                //         label: template.mame,
                //         value: template.id,
                //         shareCode: template.shareCode
                //     }
                // }))
                AnnouncementForm.reset()
                // Router.push(`/template/${template.id}`)
                // toastSuccess('New Store Added')
            }
        })
        .catch(() => {
            // toastError('We encountered an error adding new server. Please check your network connection and try again.')
            console.error('[New Server] : cannot add new server')
        })
    }

    const handleClose = () => {
        onClose()
    }
    
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
        <DialogContent className='w-full scroll overflow-y-scroll max-w-[50vw] bg-white/25 shadow-lg text-white'>
            <DialogHeader className='pt-8 px-6'>
                <DialogTitle className='text-lg text-center font-semibold'>
                    Add Announcement
                </DialogTitle>
                <DialogDescription className='text-center text-white text-sm font-normal font-mono'>
                    Announcement

                </DialogDescription>
            </DialogHeader>
                    <Form {...AnnouncementForm} >
                        <form onSubmit={onAnnounceSubmit} className='space-y-5'>
                            <div className="grid grid-cols-1 gap-3">
                                <InputField 
                                    name='title'
                                    control={AnnouncementForm.control}
                                    isLoading={isLoadingAnnouncement}
                                    placeholder='Title'
                                />                                               
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                <TextareaField
                                    name='description'
                                    control={AnnouncementForm.control}
                                    isLoading={isLoadingAnnouncement}
                                    placeholder='Description'
                                />                                                  
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                <TextareaField
                                    name='image'
                                    control={AnnouncementForm.control}
                                    isLoading={isLoadingAnnouncement}
                                    placeholder='Image'
                                />                                                  
                            </div>
                            <DialogFooter className='px-6 py-4 gap-2'>
                                <Button variant="default" disabled={isLoadingAnnouncement}>
                                    Submit
                                </Button>
                                <Button variant="default" disabled={isLoadingAnnouncement} onClick={(e) => {e.preventDefault()}} >
                                    Reset
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
        </DialogContent>
    </Dialog>
  )
}

export default AddAnnouncementModal