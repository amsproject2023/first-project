import Header from './ams1header';
import AboutBanner from './aboutpage/about2banner';
import LearnFun from './aboutpage/about3content';
import ProgrammingClasses from './aboutpage/about4classes';
import VirtualReality from './aboutpage/about6vr';
import SpokenEnglish from './aboutpage/about5english';
import Astronomy from './aboutpage/about7astronomy';
import SummerHolidays from './aboutpage/about8description';
import GetCall from './aboutpage/about9getcall';
import Footer from "./ams9footer";

function AboutPage () {
    return(
        <>
        <div >
        <Header/>
        <AboutBanner/>
        <LearnFun/>
        <ProgrammingClasses/>
        <SpokenEnglish/>
        <VirtualReality/>
        <Astronomy/>
        <SummerHolidays/>
        <GetCall/>
        <Footer/>
        </div>
        </>



    );

}
export default AboutPage;