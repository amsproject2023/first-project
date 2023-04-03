import softwareImg from './images/ams-services-software-development-card-photo.jpg';
import trainingImg from './images/ams-services-software-training-card-photo.jpg';
import printingImg from './images/ams-services-printing-service-card-photo.jpg';
import ServiceProps from './ams4serviceprops';
const Services = () => {
    return (
        <>
            <section className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h1>Services</h1>
                    </div>
                </div>
                <div className='row ams-services mb-lg-5 mb-md-4 mb-sm-3 m-auto'>
                    <div className='col-lg-4 col-md-6 col-sm-12 service p-0'>
                         <img src={softwareImg} alt='software development' width='100%' /> 
                        <div className='ams-service p-3'>
                            <ServiceProps serviceTitle='Software Development' serviceDescription='Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliaqua. Quis ipsum Suspendise ultrices gravida.' servieBtn='Read More'/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 service p-0'>
                        <img src={trainingImg} alt='software training' width='100%' />
                        <div className='ams-service p-3'>
                        <ServiceProps serviceTitle='Software Training' serviceDescription='Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliaqua. Quis ipsum Suspendise ultrices gravida.' servieBtn='Read More'/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 service p-0'>
                        <img src={printingImg} alt='Printing Services' width='100%' />
                        <div className='ams-service p-3'>
                        <ServiceProps serviceTitle='Printing Services' serviceDescription='Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliaqua. Quis ipsum Suspendise ultrices gravida.' servieBtn='Read More'/>   
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Services;