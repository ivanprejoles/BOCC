const ContactSection = () => {
    return (  
        <div className="w-full  h-[50rem] grid grid-cols-1 grid-rows-2 lg:grid-cols-5 lg:grid-rows-1">
            <div className="lg:col-start-1 lg:col-end-3 bg-black relative">
                <div className="h-3/4 w-5/6 lg:w-[120%] bg-red-100  top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] lg:translate-x-0 lg:left-[10%] grid grid-cols-2 gap-5 p-5 absolute">
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>
            <div className="lg:col-start-3 lg:col-end-6 bg-red-400"></div>
        </div>
    );
}
 
export default ContactSection;