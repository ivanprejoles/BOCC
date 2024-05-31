import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export const InputField = ({
    control,
    isLoading,
    placeholder,
    name,
    type = 'text',
    max
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} : {control: any, isLoading: boolean, placeholder?: string, name: string, type?: 'text'|'email'|'tel'|'password', max?: number}) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({field}) => (
                <FormItem className="relative">
                    <FormLabel
                        className='uppercase text-xs font-bold'
                    >
                        {placeholder}
                    </FormLabel>
                    <FormControl>
                        {type === 'tel' 
                        ? (
                            <Input

                                disabled={isLoading}
                                placeholder={placeholder}
                                {...field}
                                type={type}
                                maxLength={max}
                                className="bg-transparent border-white text-white placeholder:text-slate-300"
                            />) 
                        : (
                            <Input
                                disabled={isLoading}
                                placeholder={placeholder}
                                {...field}
                                type={type}
                                className="bg-transparent border-white text-white placeholder:text-slate-300"
                            />
                        )}
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}