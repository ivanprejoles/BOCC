import { Button } from "../ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import GoogleIcon from '@mui/icons-material/Google';

const ButtonField = ({
    control,
    isLoading,
    placeholder,
    name,
    googlePopUp
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} : {control: any, isLoading: boolean, placeholder: string, name: string, googlePopUp: () => void}) => {
    return (  
        <FormField
            control={control}
            name={name}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({field}) => (
                <FormItem>
                    <FormLabel
                        className='uppercase text-xs font-bold '
                    >
                        {placeholder}
                    </FormLabel>
                    <FormControl>
                        <Button
                            className="w-full text-start justify-start bg-white/10 hover:bg-white/35 border-white hover:text-black"
                            variant='outline'
                            disabled={isLoading}
                            type="button"
                            onClick={googlePopUp}
                        >
                            <GoogleIcon className="mr-2" />
                            {placeholder}
                        </Button>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
 
export default ButtonField;