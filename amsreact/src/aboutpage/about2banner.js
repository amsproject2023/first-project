import Header from '../ams1header';
import bannerImage1 from './images/ams_learn_with_fun.jpg';

const AboutBanner = () => {
    return (
        <>
            <section>
            <Header/>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 summer-banner p-0'>
                            <img src={bannerImage1} alt='learn with fun' width='100%' />
                        </div>
                    </div>
                </div>
               
            </section>
        </>
    );


}
export default AboutBanner;