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
    Form
} from '@/components/ui/form'
// import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFormModal } from '@/hooks/use-form-modal';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { InputField } from '@/components/form/form-input';
import { DatePickerField } from '../form/form-data-picker';
import { SelectField } from '../form/form-select';
import { TextareaField } from '../form/form-textarea';
import ButtonField from '../form/form-button';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/firebase/firebase';
import { useState } from 'react';
// import { addSwitcher } from '@/lib/reduxFeatures/templateslice';
// import { useDispatch, useSelector } from 'react-redux';
// import { toastError, toastSuccess } from '@/lib/toast-method';

const RegisterFormSchema = z.object({
    email: z.string().min(2, {
        email: 'Template name is required.'
    }),
})

const SetupFormSchema = z.object({
    name: z.string().min(2, {
        message: 'Template name is required.'
    }),
})

const FormModal = () => {
    const [statetype, setType] = useState('Setup')
    // const dispatch = useDispatch()
    // const Router = useRouter()
    const { isOpen, onClose } = useFormModal()
    
    

    const registerForm = useForm({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: {

        }
    })
    
    const SetupForm = useForm({
        resolver: zodResolver(SetupFormSchema),
        defaultValues: {
            email: '',
            username: '',
            googlePhotoUrl: '',
            id: '',
            password: ''
        }
    })

    const isLoadingRegister = registerForm.formState.isSubmitting;
    const isLoadingSetup = SetupForm.formState.isSubmitting;
    

    const onRegisterSubmit = async (values: z.infer<typeof SetupFormSchema>) => {
        await axios.post('/api/store', values)
        .then((response) => {
            if (response?.data && response.data?.id) {
                // const template = response.data
                SetupForm.reset()
                onClose()
                // dispatch(addSwitcher({
                //     key: response.data.id, value: {
                //         label: template.mame,
                //         value: template.id,
                //         shareCode: template.shareCode
                //     }
                // }))
                SetupForm.reset()
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

                SetupForm.setValue('email', email)
                SetupForm.setValue('username', displayName)
                SetupForm.setValue('googlePhotoUrl', photoURL)
                SetupForm.setValue('id', uid)

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
            <DialogContent className=' p-0 w-full scroll overflow-y-scroll max-w-[50vw] bg-white/25 shadow-lg text-white'>
                <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-lg text-center font-semibold'>
                        BOCC MEMBERSHIP APPLICATION
                    </DialogTitle>
                    <DialogDescription className='text-center text-white text-sm font-normal font-mono'>
                        After regitration, company will email you if registration is verified. If so, setup your account with email used on registration.
                    </DialogDescription>
                </DialogHeader>

                {/* tabs */}
                <Tabs defaultValue={statetype === 'Registration' ? 'Registration' : 'Setup'}   className="w-full h-full">
                    <TabsList className="grid w-full grid-cols-2 bg-white/20 rounded-none text-white">
                        <TabsTrigger value="Registration">Account Registration</TabsTrigger>
                        <TabsTrigger value="Setup">Account Setup</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Registration">
                        <Form {...registerForm} >
                            <form onSubmit={onRegisterSubmit}>
                                <div className="space-y-3 px-6 pb-3">
                                    <div className="grid grid-cols-3 gap-3">
                                        <InputField 
                                            name='first_name'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='First Name'
                                        />                           
                                        <InputField 
                                            name='middle_name'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Middle Name'
                                        />                           
                                        <InputField 
                                            name='last_name'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Last Name'
                                        />                           
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <InputField 
                                            name='mother'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Mother'
                                        />                           
                                        <InputField 
                                            name='father'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Father'
                                        />                                    
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        <InputField 
                                            name='spouse'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Spouse'
                                        />                                               
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        <TextareaField
                                            name='place_of_birth'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Place of Birth'
                                        />                                               
                                    </div>
                                    <div className="grid grid-cols-4 gap-3">
                                        <DatePickerField
                                            name="date_birth"
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Date of Birth'
                                        />
                                        <InputField 
                                            name='place_of_birth'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Place of Birth'
                                        />                                               
                                        <SelectField
                                            name='civil_status'
                                            control={registerForm.control}
                                            placeholder='Civil Status'
                                            isLoading={isLoadingRegister}
                                            options={['Single', 'Married', 'Divorced', 'Separated', 'Widowed']}
                                        />
                                        <SelectField
                                            name='gender'
                                            control={registerForm.control}
                                            placeholder='Gender'
                                            isLoading={isLoadingRegister}
                                            options={['Male', 'Female']}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        <InputField 
                                            name='citizenship'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Citizenship'
                                        /> 
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <InputField 
                                            name='contact_number'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Contact Number'
                                            type='tel'
                                            max={11}
                                        /> 
                                        <InputField 
                                            name='email'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Email'
                                            type='email'
                                        /> 
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <TextareaField
                                            name='residential_address'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Residential Address'
                                        />                                               
                                        <TextareaField
                                            name='provincial_address'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Provincial Address'
                                        />                                               
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <InputField
                                            name='occupation'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Occupation'
                                        />                                               
                                        <InputField
                                            name='employer'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='Employer'
                                        />                                               
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        <InputField
                                            name='tin'
                                            control={registerForm.control}
                                            isLoading={isLoadingRegister}
                                            placeholder='TIN'
                                            type='tel'
                                            max={9}
                                        />                                                                                          
                                    </div>
                                </div>
                                <DialogFooter className='px-6 py-4 gap-2'>
                                    <Button variant="default" disabled={isLoadingRegister}>
                                        Submit
                                    </Button>
                                    <Button variant="default" disabled={isLoadingRegister} onClick={(e) => {e.preventDefault()}} >
                                        Reset
                                    </Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </TabsContent>
                    <TabsContent value="Setup">
                        <Form {...SetupForm} >
                            <div className="space-y-3 px-6 pb-3">
                                <div className="grid grid-cols-1 gap-3">
                                    <ButtonField
                                        control={SetupForm.control}
                                        name='email'
                                        isLoading={isLoadingSetup}
                                        placeholder='Email'
                                        googlePopUp={googlePopUp}
                                    />                                            
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <InputField 
                                        name='password'
                                        control={SetupForm.control}
                                        isLoading={isLoadingSetup}
                                        placeholder='Password'
                                        type='password'
                                    />                                               
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <InputField 
                                        name='confirm_password'
                                        control={SetupForm.control}
                                        isLoading={isLoadingSetup}
                                        placeholder='Confirm Password'
                                        type='password'
                                    />                                               
                                </div>
                            </div>
                            <DialogFooter className='px-6 py-4 gap-2'>
                                <Button variant="default" disabled={isLoadingSetup}>
                                    Setup
                                </Button>
                                <Button variant="default" type='button' disabled={isLoadingSetup} onClick={(e) => {e.preventDefault()}} >
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
 
export default FormModal;