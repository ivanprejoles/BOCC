import HomePageGrids from "./_components/home-page-grids";

const Home = () => {
    return (
        // section 1
        <div className="h-auto">
            <div className="h-[30rem] relative p-20">
                <div className="w-full h-full relative z-10">
                    <HomePageGrids />
                </div>
                <div className=" w-full h-full absolute top-0 left-0 right-0 m-auto">
                    <img
                        src={'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FUntitled%20Project?alt=media&token=b3ae4c26-44f2-4373-80fc-44764dd215eb'}
                        alt={''}
                        className="w-full h-full object-center object-cover absolute top-0 z-[1]"
                    />
                </div>
            </div>
            <div className="min-h-[20rem] h-auto grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1">
                <div className="h-full w"></div>
                <div className=""></div>
            </div>
                <div className="h-[50rem]" ></div>
                <div className="h-[50rem]" ></div>
                <div className="h-[50rem]" ></div>
                <div className="h-[50rem]" ></div>
                <div className="h-[50rem]" ></div>
                <section className="h-[50rem]" id="register">
                    
                </section>
        </div>
    );
}
 
export default Home;