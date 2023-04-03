import bannerImg from './images/ams-banner-group-of-studetns-with-animationated-icons.png'
const Banner = () => {
    return (
        <>
        
            <section className='banner-section'>
                <div className='container'>
                    <div className='carousel' id='banner-carousel' data-bs-ride='carousel'>
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <div className='row banner'>
                                    <div className='col-lg-6 col-md-6 col-sm-12 banner-content ps-lg-5'>
                                        <div className='carousel-caption d-md-block content'>
                                            <h1>The Ultimate <span className='d-block'>Destination for your</span> Software Career</h1>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 banner-image'>
                                        <img src={bannerImg}
                                            alt='Banner image' width='100%' />
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='row banner'>
                                    <div className='col-lg-6 col-md-6 col-sm-12 banner-content ps-lg-5'>
                                        <div className='carousel-caption  d-md-block content'>
                                            <h1>The Ultimate <span className='d-block'>Destination for your</span> Software Career</h1>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 banner-image'>
                                        <img src={bannerImg}
                                            alt='Banner image' width='100%' />
                                    </div>
                                </div>
                            </div>

                            <button className='carousel-control-prev' data-bs-target='#banner-carousel' data-bs-slide='prev'><span className='carousel-control-prev-icon'>	</span></button>
                            <button className='carousel-control-next' data-bs-target='#banner-carousel' data-bs-slide='next'><span className='carousel-control-next-icon'>	</span></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Banner;