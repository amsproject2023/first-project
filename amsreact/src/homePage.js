import Header from './ams1header';
import Banner from './ams2banner';
import AboutUs from './ams3about';
import Services from './ams4services';
import Courses from './ams5courses';
import Testimonials from './ams6testimonials';
import Location from './ams7location';
import ContactUs from './ams8contact';
import Footer from './ams9footer';


const HomePage = () => {
    return (
        <>
            <div>
                <main>
                    <Header/>
                    <Banner />
                    <AboutUs />
                    <Services />
                    <Courses />
                    <Testimonials />
                    {/* <Location /> */}
                    <ContactUs />
                    <Footer />
                </main>
            </div>
        </>
    );
}
export default HomePage;