import englishImg from './images/ams_spoken_english_kids.png'; 
const SpokenEnglish = () => {
    return(
        <>
        <section>
            <div className='container py-lg-5 py-md-4 py-sm-3'>
            <div className="row">
                    <div className="col-12 english-title text-center py-lg-5 py-md-2 py-sm-3">
                        <h1><span className='days'>45 Days</span> Spoken English</h1>
                        <small>(Fluency in English, Overcome stage Fear & communication skills)</small>
                    </div>
                </div>
                <div className="row spoken-english m-auto py-3">
                    <div className="col-lg-7 col-md-7 col-sm-12 english-content">
                        <p className='p-3 m-0'>Many students struggle with speaking English fluently, and summer holidays can be a great time to work on their communication skills. These courses can help students improve their spoken English, build their confidence, and develop their vocabulary. 
                        </p>
                        <div className='english-btns text-center'>
                        <button className='btn english-btn'>Read More</button>
                        <button className='btn english-btn'>Book your Seat</button>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 english-image">
                        <img src={englishImg} alt='Spoken English' width='100%'/>
                    </div>
                </div>
                
            </div>
        </section>
        </>

    );

}
export default SpokenEnglish;