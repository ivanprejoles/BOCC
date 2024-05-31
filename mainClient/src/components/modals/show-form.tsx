import { useModal } from '@/hooks/use-modal-store'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import { Form } from '../ui/form'
import { useForm } from 'react-hook-form'
import { InputField } from '../forms/form-input'
import { TextareaField } from '../forms/form-textarea'
import { useEffect } from 'react'
import { SelectField } from '../forms/form-select'


const ShowFormModal = () => {
    const {isOpen, onClose, type, data} = useModal()

    const isModalOpen = isOpen  && type === 'ShowForm'

    const ReadForm = useForm({
        defaultValues: {
            ...Object.keys(data).reduce((acc, field) => ({ ...acc, [field]: '' }), {}),
        }
    })

    useEffect(() => {
        if (data) {
            Object.entries(data).map(([key, value]) => {
                return ReadForm.setValue(key as never, value as never)
            })
        }
    }, [data, ReadForm])
    

    const handleClose = () => {
        onClose()
    }
    
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose} >
        <DialogContent className=' w-full scroll overflow-y-scroll max-w-[50vw] bg-white/25 shadow-lg text-white'>
            <DialogHeader className='pt-8 px-0 md:px-6'>
                <DialogTitle className='text-lg text-center font-semibold'>
                    Edit Announcement
                </DialogTitle>
                <DialogDescription className='text-center text-white text-sm font-normal font-mono'>
                    Announcement

                </DialogDescription>
            </DialogHeader>
                    <Form {...ReadForm} >
                        <form className='space-y-5 overflow-auto'>
                        <div className="space-y-3 px-6 pb-3">
                                    <div className="grid grid-cols-3 gap-3">
                                        <InputField 
                                            name='first_name'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='First Name'
                                        />                           
                                        <InputField 
                                            name='middle_name'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Middle Name'
                                        />                           
                                        <InputField 
                                            name='last_name'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Last Name'
                                        />                           
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <InputField 
                                            name='mother'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Mother'
                                        />                           
                                        <InputField 
                                            name='father'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Father'
                                        />                                    
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        <InputField 
                                            name='spouse'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Spouse'
                                        />                                               
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        <TextareaField
                                            name='place_of_birth'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Place of Birth'
                                        />                                               
                                    </div>
                                    <div className="grid grid-cols-4 gap-3">
                                        <InputField
                                            name="date_birth"
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Date of Birth'
                                        />
                                        <InputField 
                                            name='place_of_birth'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Place of Birth'
                                        />                                               
                                        <SelectField
                                            name='civil_status'
                                            control={ReadForm.control}
                                            placeholder='Civil Status'
                                            isLoading={true}
                                            options={['Single', 'Married', 'Divorced', 'Separated', 'Widowed']}
                                        />
                                        <SelectField
                                            name='gender'
                                            control={ReadForm.control}
                                            placeholder='Gender'
                                            isLoading={true}
                                            options={['Male', 'Female']}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        <InputField 
                                            name='citizenship'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Citizenship'
                                        /> 
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <InputField 
                                            name='contact_number'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Contact Number'
                                            type='tel'
                                            max={11}
                                        /> 
                                        <InputField 
                                            name='email'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Email'
                                            type='email'
                                        /> 
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <TextareaField
                                            name='residential_address'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Residential Address'
                                        />                                               
                                        <TextareaField
                                            name='provincial_address'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Provincial Address'
                                        />                                               
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <InputField
                                            name='occupation'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Occupation'
                                        />                                               
                                        <InputField
                                            name='employer'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='Employer'
                                        />                                               
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        <InputField
                                            name='tin'
                                            control={ReadForm.control}
                                            isLoading={true}
                                            placeholder='TIN'
                                            type='tel'
                                            max={9}
                                        />                                                                                          
                                    </div>
                                </div>
                        </form>
                    </Form>
        </DialogContent>
    </Dialog>
  )
}

export default ShowFormModal