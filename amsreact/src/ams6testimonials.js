import holdingPin from './images/ams-testimonials-photo-holding-pin.png';
import profilePhoto from './images/ams-testimonials-photo-nanditha-mohan.png';
import profilebg from './images/ams-testimonials-quotes-frame.png';
const Testimonials = () => {
    return (
        <>
            <section className='container-fluid testimonials pb-lg-5 pb-md-4 pb-sm-3'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h1>Testimonials</h1>
                    </div>
                </div>
                <div className='carousel carousel-fade' data-bs-ride='carousel' id='carousel'>
                    <div className='carousel-inner'>
                        <div className='carousel-indicators'>
                            <button type='button' data-bs-target='#carousel' data-bs-slide-to='0' className='slides active'>
                            </button>
                            <button type='button' data-bs-target='#carousel' data-bs-slide-to='1' className='slides'></button>
                            <button type='button' data-bs-target='#carousel' data-bs-slide-to='2' className='slides'></button>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-7 col-md-8 col-sm-12 profiles mx-auto my-2'>
                                <img src={profilebg} alt='slider background' width='100%' />
                                <div className='carousel-item active'>
                                    <div className='row student-profile'>
                                        <div className='col-7 profile-content'>
                                            <p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor
                                                incidunt ut labore et dolore magna aliaqua. Quis ipsum Suspendise ultrices
                                                gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        </div>
                                        <div className='col-5 profile-photo'>
                                            <img src={holdingPin} className='pin'
                                                alt='pin' />
                                            <img src={profilePhoto}
                                                alt='profile photo' width='100%' />
                                            <h5>--Nonaditha Mohan</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='carousel-item'>
                                    <div className='row student-profile'>
                                        <div className='col-7 profile-content'>
                                            <p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor
                                                incidunt ut labore et dolore magna aliaqua. Quis ipsum Suspendise ultrices
                                                gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        </div>
                                        <div className='col-5 profile-photo'>
                                            <img src={holdingPin} className='pin'
                                                alt='pin' />
                                            <img src={profilePhoto}
                                                alt='profile photo' width='100%' />
                                            <h5>--Nonaditha Mohan</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
export default Testimonials;