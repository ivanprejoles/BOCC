import { useModal } from '@/hooks/use-modal-store'
import axios from 'axios'
import * as z from 'zod'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Form } from '../ui/form'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { InputField } from '../forms/form-input'

const RequestModal = () => {
    const {isOpen, onClose, type, data} = useModal()

    
    const isModalOpen = isOpen && type === 'Request'

    const { requestType, ...rest } = data || {}; 

    const RequestForm = useForm({
        defaultValues: {
            ...Object.keys(rest).reduce((acc, field) => ({ ...acc, [field]: '' }), {}),
        }
    })


    const RequestSchema = z.object({
        ...Object.keys(rest).reduce((acc, field) => ({ ...acc, [field]: 
            z.string().min(0, {
                message: 'No Data.'
            }),
         }), {}),
    })

    useEffect(() => {
        if (rest) {
            Object.entries(rest).map(([key, value]) => {
                return RequestForm.setValue(key as never, value as never)
            })
        }
    }, [rest, RequestForm])
    

    const handleClose = () => {
        onClose()
    }

    const isLoadingRequest = RequestForm.formState.isSubmitting;


    const RequestSubmit = async (values: z.infer<typeof RequestSchema>) => {
        await axios.post('/api/store', values)
        .then((response) => {
            if (response?.data && response.data?.id) {
                // const template = response.data
                RequestForm.reset()
                onClose()
                // dispatch(addSwitcher({
                //     key: response.data.id, value: {
                //         label: template.mame,
                //         value: template.id,
                //         shareCode: template.shareCode
                //     }
                // }))
                RequestForm.reset()
                // Router.push(`/template/${template.id}`)
                // toastSuccess('New Store Added')
            }
        })
        .catch(() => {
            // toastError('We encountered an error adding new server. Please check your network connection and try again.')
            console.error('[New Server] : cannot add new server')
        })
    }
    
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
        <DialogContent className='w-full scroll overflow-y-scroll max-w-[50vw] bg-white/25 shadow-lg text-white'>
            <DialogHeader className='pt-8 px-6'>
                <DialogTitle className='text-lg text-center font-semibold'>
                    Request {requestType}
                </DialogTitle>
                <DialogDescription className='text-center text-white text-sm font-normal font-mono'>
                    To {requestType === 'delete' ? 'delete the entry' : 'accept the entry' }, type <b className='font-bold'>Request {requestType}</b>
                </DialogDescription>
            </DialogHeader>
                    <Form {...RequestForm} >
                        <form onSubmit={RequestSubmit} className='space-y-5 overflow-auto'>
                            <div className="grid grid-cols-1 gap-3">
                                <InputField 
                                    name='request'
                                    control={RequestForm.control}
                                    isLoading={isLoadingRequest}
                                    // placeholder='Request'
                                />                                               
                            </div>
                            <DialogFooter className='px-6 py-4 gap-2'>
                                <Button variant="default" disabled={isLoadingRequest}>
                                    {requestType}
                                </Button>
                                <Button variant="default" disabled={isLoadingRequest} onClick={(e) => {e.preventDefault()}} >
                                    cancel
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
        </DialogContent>
    </Dialog>
  )
}

export default RequestModal