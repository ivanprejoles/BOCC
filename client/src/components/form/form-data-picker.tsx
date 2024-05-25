import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

export const DatePickerField = ({
    control,
    isLoading,
    placeholder,
    name
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: {control: any, isLoading: boolean, placeholder: string, name: string}) => {
   
    return (
        <FormField
            control={control}
            name={name}
            render={({field}) => (
                <FormItem>
                    <FormLabel
                        className='uppercase text-xs font-bold '
                    >
                        {placeholder}
                    </FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                    {field.value ? (
                                        format(field.value, "PPP")
                                ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01") || isLoading
                                }
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                <FormMessage />
            </FormItem>
            )}
        />
    )
}