import classesImg from './images/ams_python_programming_students.png'; 
const ProgrammingClasses = () => {
    return(
        <>
        <section className='programming-section'>
            <div className='container programming-classes m-auto text-center py-lg-5 py-md-4 py-sm-4'>
                <div className="row py-lg-5 py-md-2 py-sm-3">
                    <div className="col-12 programming">
                        <h1><span className='days'>30 Days</span> Programming Classes</h1>
                        <small>(Python, Javascript)</small>
                    </div>
                </div>
                <div className="row python-program m-auto ">
                    <div className="col-lg-5 col-md-5 col-sm-12 programming-image">
                        <img src={classesImg} alt='programming classes' width='100%'/>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 programming-content">
                        <p className='pt-3'> In today's world, programming skills are becoming increasingly valuable, and students who learn to code during the summer holidays can gain a significant advantage in their academic and professional careers. These courses can teach students the basics of programming languages like Python and Javascript.</p>
                        <button className='btn class-btn'>Read More</button>
                        <button className='btn class-btn' >Book your Seat</button>
                    </div>
                </div>
            </div>
        </section>
        </>

    );

}
export default ProgrammingClasses;