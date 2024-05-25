import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const SelectField = ({
    control,
    isLoading,
    placeholder,
    name,
    options
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: {control: any, isLoading: boolean, placeholder: string, name: string, options: string[]}) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        {placeholder}
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {options.map((option) => (
                                <SelectItem value={option}>
                                    {option}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}