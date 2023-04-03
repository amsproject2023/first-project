import VRimage from './images/ams_virtual_reality_photo.png'; 
const VirtualReality = () => {
    return(
        <>
        <section className='vr-section'>
            <div className='container py-lg-5 py-md-4 py-sm-3'>
                <div className="row">
                    <div className="col-12 vr-title text-center py-lg-5 py-md-2 py-sm-3">
                        <h1>Virtual Reality</h1>
                        <small>(Understand Lessons easily)</small>
                    </div>
                </div>
                <div className="row about-vr m-auto py-3">
                    <div className="col-lg-5 col-md-5 col-sm-12 vr-image">
                        <img src={VRimage} alt='virtual reality' width='100%'/>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 vr-content">
                        <p>VR (Virtual Reality) technology can be a powerful tool to help students learn and remember complex concepts. By creating immersive simulations, students can experience difficult concepts in a more engaging nad interactive way, making it easier to retain information.
                        </p>
                        <div className='vr-btns text-center'>
                        <button className='btn vr-btn'>Read More</button>
                        <button className='btn vr-btn'>Book your Seat</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    );

}
export default VirtualReality;