import ActivitiesSection from "./_components/Section/activities-section";
import ContactSection from "./_components/Section/contact-section";
import GridSteps from "./_components/Section/grid-steps";
import { ImagesParallax } from "./_components/Section/imageParallax-section";
import { HomeImageSlider } from "./_components/Section/imageSlider-section";
import HomePageGrids from "./_components/home-page-grids";

const Home = () => {
    return (
        // section 1
        <div className="h-auto relative">
            <div className="h-auto">
                <HomeImageSlider />
            </div>
            <div className="min-h-[25rem] bg-blue-700 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 lg:grid-rows-1 px-20 gap-5" id="account">
                <GridSteps />
            </div>
                {/* <div className="min-h-[25rem]" > */}
                    <ImagesParallax />
                {/* </div> */}
                <section className="h-auto" id="activities">
                    <div className="w-full p-10">
                        <h2 className="text-4xl text-center font-serif font-extrabold">
                            Activities
                        </h2>
                    </div>
                    <ActivitiesSection />
                </section>
                <section className="h-auto w-full" id="contact">
                <div className="w-full p-10">
                        <h2 className="text-4xl text-center font-serif font-extrabold">
                            Contact Us
                        </h2>
                    </div>
                    <ContactSection />
                </section>
                {/* register */}
        </div>
    );
}
 
export default Home;