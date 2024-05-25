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
// import { addSwitcher } from '@/lib/reduxFeatures/templateslice';
// import { useDispatch, useSelector } from 'react-redux';
// import { toastError, toastSuccess } from '@/lib/toast-method';

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Template name is required.'
    }),
})

const FormModal = () => {
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
            <DialogContent className=' p-0 w-full scroll overflow-y-scroll max-w-[50vw]'>
                <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-lg text-center font-semibold'>
                        BOCC MEMBERSHIP APPLICATION
                    </DialogTitle>
                    <DialogDescription className='text-center text-sm font-normal font-mono'>
                        After regitration, company will email you if registration is verified. If so, setup your account with email used on registration.
                    </DialogDescription>
                </DialogHeader>

                {/* tabs */}
                <Tabs defaultValue="Registration" className="w-full h-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="Registration">Registration</TabsTrigger>
                        <TabsTrigger value="Setup">Setup</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Registration">
                        <Form {...form} >
                            <div className="space-y-3 px-6 pb-3">
                                <div className="grid grid-cols-3 gap-3">
                                    <InputField 
                                        name='first_name'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='First Name'
                                    />                           
                                    <InputField 
                                        name='middle_name'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Middle Name'
                                    />                           
                                    <InputField 
                                        name='last_name'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Last Name'
                                    />                           
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <InputField 
                                        name='mother'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Mother'
                                    />                           
                                    <InputField 
                                        name='father'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Father'
                                    />                                    
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <InputField 
                                        name='spouse'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Spouse'
                                    />                                               
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <TextareaField
                                        name='place_of_birth'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Place of Birth'
                                    />                                               
                                </div>
                                <div className="grid grid-cols-4 gap-3">
                                    <DatePickerField
                                        name="date_birth"
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Date of Birth'
                                    />
                                    <InputField 
                                        name='place_of_birth'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Place of Birth'
                                    />                                               
                                    <SelectField
                                        name='civil_status'
                                        control={form.control}
                                        placeholder='Civil Status'
                                        isLoading={isLoading}
                                        options={['Single', 'Married', 'Divorced', 'Separated', 'Widowed']}
                                    />
                                    <SelectField
                                        name='gender'
                                        control={form.control}
                                        placeholder='Gender'
                                        isLoading={isLoading}
                                        options={['Male', 'Female']}
                                    />
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <InputField 
                                        name='citizenship'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Citizenship'
                                    /> 
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <InputField 
                                        name='contact_number'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Contact Number'
                                        type='tel'
                                        max={11}
                                    /> 
                                    <InputField 
                                        name='email'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Email'
                                        type='email'
                                    /> 
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <TextareaField
                                        name='residential_address'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Residential Address'
                                    />                                               
                                    <TextareaField
                                        name='provincial_address'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Provincial Address'
                                    />                                               
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <InputField
                                        name='occupation'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Occupation'
                                    />                                               
                                    <InputField
                                        name='employer'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Employer'
                                    />                                               
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <InputField
                                        name='tin'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='TIN'
                                        type='tel'
                                        max={9}
                                    />                                                                                          
                                </div>
                            </div>
                            <DialogFooter className='px-6 py-4 gap-2'>
                                <Button variant="default" disabled={isLoading}>
                                    Submit
                                </Button>
                                <Button variant="default" disabled={isLoading} onClick={(e) => {e.preventDefault()}} >
                                    Reset
                                </Button>
                            </DialogFooter>
                        </Form>
                    </TabsContent>
                    <TabsContent value="Setup">
                        <Form {...form} >
                            <div className="space-y-3 px-6 pb-3">
                                <div className="grid grid-cols-1 gap-3">
                                    <InputField 
                                        name='email'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Email Registered'
                                        type='email'
                                    />                                               
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <InputField 
                                        name='password'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Password'
                                        type='password'
                                    />                                               
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <InputField 
                                        name='confirm_password'
                                        control={form.control}
                                        isLoading={isLoading}
                                        placeholder='Confirm Password'
                                        type='password'
                                    />                                               
                                </div>
                            </div>
                            <DialogFooter className='px-6 py-4 gap-2'>
                                <Button variant="default" disabled={isLoading}>
                                    Setup
                                </Button>
                                <Button variant="default" disabled={isLoading} onClick={(e) => {e.preventDefault()}} >
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