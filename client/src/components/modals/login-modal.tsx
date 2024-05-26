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

import Input from '@mui/joy/Input';
import { useLoginModal } from '@/hooks/use-login-modal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import ButtonField from '../form/form-button';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/firebase/firebase';
import { InputField } from '../form/form-input';

// import { addSwitcher } from '@/lib/reduxFeatures/templateslice';
// import { useDispatch, useSelector } from 'react-redux';
// import { toastError, toastSuccess } from '@/lib/toast-method';

const LoginFormSchema = z.object({
    name: z.string().min(2, {
        message: 'Template name is required.'
    }),
})

const LoginModal = () => {
    // const dispatch = useDispatch()
    // const Router = useRouter()
    const { isOpen, onClose } = useLoginModal()
    
    const LoginForm = useForm({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            name: '',
        }
    })

    const isLoadingLogin = LoginForm.formState.isSubmitting;
    const onLoginSubmit = async (values: z.infer<typeof LoginFormSchema>) => {
        return console.log(values)
        await axios.post('/api/store', values)
        .then((response) => {
            if (response?.data && response.data?.id) {
                // const template = response.data
                // form.reset()
                onClose()
                // dispatch(addSwitcher({
                //     key: response.data.id, value: {
                //         label: template.mame,
                //         value: template.id,
                //         shareCode: template.shareCode
                //     }
                // }))
                // form.reset()
                // Router.push(`/template/${template.id}`)
                // toastSuccess('New Store Added')
            }
        })
        .catch(() => {
            // toastError('We encountered an error adding new server. Please check your network connection and try again.')
            console.error('[New Server] : cannot add new server')
        })
    }

    const googlePopUp = () => {
        signInWithPopup(auth, provider)
            .then(async (data) => {

                const {
                    email,
                    displayName,
                    photoURL,
                    uid
                } = data.user as {email: string, displayName: string, photoURL: string, uid: string}

                LoginForm.setValue('email', email)
                LoginForm.setValue('username', displayName)
                LoginForm.setValue('googlePhotoUrl', photoURL)
                LoginForm.setValue('id', uid)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleClose = () => {
        // form.reset();
        onClose();
    }
    
    return ( 
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className='bg-white/25 shadow-lg text-white p-0 w-full scroll overflow-y-scroll'>
                <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-lg text-center font-semibold'>
                        Account Login
                    </DialogTitle>
                    <DialogDescription className='text-center text-white text-sm font-normal font-mono'>
                        Do not share your google account and password to other user and any member of the company.
                    </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="Login" className="w-full h-full">
                    <TabsList className="grid w-full grid-cols-1 bg-white/20 rounded-none text-white">
                        <TabsTrigger value="Login">Account Login</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Login">
                        <Form {...LoginForm} >
                            <div className="space-y-3 px-6 pb-3">
                                <div className="grid grid-cols-1 gap-3">
                                    <ButtonField
                                        control={LoginForm.control}
                                        name='email'
                                        isLoading={isLoadingLogin}
                                        placeholder='Email'
                                        googlePopUp={googlePopUp}
                                    />                                            
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <InputField 
                                        name='password'
                                        control={LoginForm.control}
                                        isLoading={isLoadingLogin}
                                        placeholder='Password'
                                        type='password'
                                    />                                               
                                </div>
                            </div>
                            <DialogFooter className='px-6 py-4 gap-2'>
                                <Button variant="default" disabled={isLoadingLogin}>
                                    Login
                                </Button>
                                <Button variant="default" type='button' disabled={isLoadingLogin} onClick={(e) => {e.preventDefault()}} >
                                    Reset
                                </Button>
                            </DialogFooter>
                        </Form>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
     );
}
 
export default LoginModal;