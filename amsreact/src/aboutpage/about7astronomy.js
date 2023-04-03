import astronomyImg from './images/ams_astronomy_kids.png'; 
const Astronomy = () => {
    return(
        <>
        <section className='astronomy-section pt-3'>
            <div className='container'>
            <div className="row">
                    <div className="col-12 astronomy-title text-center py-lg-5 py-md-2 py-sm-3">
                        <h1>Astronomy</h1>
                        <small>(Live Planet Programs Everyday)</small>
                    </div>
                </div>
                <div className="row astronomy m-auto py-lg-5 py-md-2 py-sm-3">
                    <div className="col-lg-7 col-md-7 col-sm-12 astronomy-content">
                        <p>Students who are interested in astronomy and space exploration can benefit from programs that allow them to view planets and stars through a telescope. These understanding and appreciation fot the universe around them. 
                        </p>
                        <div className='astronomy-btns text-center'>
                        <button className='btn astronomy-btn'>Read More</button>
                        <button className='btn astronomy-btn'>Book your Seat</button>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 astronomy-image">
                        <img src={astronomyImg} alt='Spoken English' width='100%'/>
                    </div>
                </div>
            </div>
        </section>
        </>

    );

}
export default Astronomy;