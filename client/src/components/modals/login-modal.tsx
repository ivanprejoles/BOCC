import '@/lib/styles/scroll.css'

import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import axios from 'axios'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog'
import {
    Form,   
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
// import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFormModal } from '@/hooks/use-form-modal';
import Input from '@mui/joy/Input';

// import { addSwitcher } from '@/lib/reduxFeatures/templateslice';
// import { useDispatch, useSelector } from 'react-redux';
// import { toastError, toastSuccess } from '@/lib/toast-method';

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Template name is required.'
    }),
})

const LoginModal = () => {
    // const dispatch = useDispatch()
    // const Router = useRouter()
    const { isOpen, onClose } = useFormModal()
    
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
        }
    })

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        return console.log(values)
        await axios.post('/api/store', values)
        .then((response) => {
            if (response?.data && response.data?.id) {
                // const template = response.data
                form.reset()
                onClose()
                // dispatch(addSwitcher({
                //     key: response.data.id, value: {
                //         label: template.mame,
                //         value: template.id,
                //         shareCode: template.shareCode
                //     }
                // }))
                form.reset()
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
        // form.reset();
        onClose();
    }
    
    return ( 
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className='bg-white text-black p-0 w-full scroll overflow-y-scroll'>
                <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-lg text-center font-semibold'>
                        Add new template
                    </DialogTitle>
                    <DialogDescription className='text-center text-[#71717a] text-sm font-normal font-mono'>
                        Give your new template a name
                    </DialogDescription>
                </DialogHeader>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-8 h-full'
                    >
                        <div className="space-y-3 px-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel
                                            className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'
                                        >
                                            template name
                                        </FormLabel>
                                            <FormControl>
                                                
                                                <Input
                                                    disabled={isLoading}
                                                    placeholder='Enter template name here'
                                                    className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                                                    {...field}
                                                />
                                            </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel
                                            className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'
                                        >
                                            template name
                                        </FormLabel>
                                            <FormControl>
                                                
                                                <Input
                                                    disabled={isLoading}
                                                    placeholder='Enter template name here'
                                                    className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                                                    {...field}
                                                />
                                            </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel
                                            className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'
                                        >
                                            template name
                                        </FormLabel>
                                            <FormControl>
                                                
                                                <Input
                                                    disabled={isLoading}
                                                    placeholder='Enter template name here'
                                                    className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                                                    {...field}
                                                />
                                            </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel
                                            className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'
                                        >
                                            template name
                                        </FormLabel>
                                        <FormControl>
                                            
                                            <Input
                                                disabled={isLoading}
                                                placeholder='Enter template name here'
                                                className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel
                                            className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'
                                        >
                                            template name
                                        </FormLabel>
                                        <FormControl>
                                            
                                            <Input
                                                disabled={isLoading}
                                                placeholder='Enter template name here'
                                                className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                                                {...field}
                                            />
                                        </FormControl>
                                        <DialogDescription className='text-[#71717a] text-sm font-normal font-mono'>
                                            Give your new template a name
                                        </DialogDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel
                                            className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'
                                        >
                                            template name
                                        </FormLabel>
                                        <FormControl>
                                            
                                            <Input
                                                disabled={isLoading}
                                                placeholder='Enter template name here'
                                                className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                                                {...field}
                                            />
                                        </FormControl>
                                        <DialogDescription className='text-[#71717a] text-sm font-normal font-mono'>
                                            Give your new template a name
                                        </DialogDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter className='bg-gray-100 px-6 py-4 gap-2'>
                            <Button variant="default" disabled={isLoading}>
                                Send
                            </Button>
                            <Button variant="default" disabled={isLoading} onClick={(e) => {e.preventDefault()}} >
                                Reset
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
     );
}
 
export default LoginModal;