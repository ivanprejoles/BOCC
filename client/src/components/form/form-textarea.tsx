import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

export const TextareaField = ({
    control,
    isLoading,
    placeholder,
    name,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} : {control: any, isLoading: boolean, placeholder: string, name: string}) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        {placeholder}
                    </FormLabel>
                    <FormControl>
                        <Textarea
                            placeholder={placeholder}
                            className="resize-y bg-transparent border-white text-white placeholder:text-slate-300"
                            {...field}
                            disabled={isLoading}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}