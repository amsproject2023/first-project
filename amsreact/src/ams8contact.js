const ContactUs = () => {
    return (
        <>
            <section className='container-fluid contact-us p-0'>
                <div className='row m-0'>
                    <div className='col-12 text-center pt-4'>
                        <h1>Contact us</h1>
                    </div>
                </div>
                <div className='inputs-data mx-auto'>
                    <form>
                        <div className='row m-0'>
                            <div className='col-12'>
                                
                                <input type='text' className='form-control' id='name' placeholder='Your name' />
                            </div>
                        </div>
                        <div className='row m-0'>
                            <div className='col-12 text-center'>
                                <input type='email' className='form-control' id='mail' placeholder='Email' />
                            </div>
                        </div>
                        <div className='row m-0'>
                            <div className='col-12 text-center'>
                                <input type='tel' className='form-control' id='number'  placeholder='Phone number' />
                            </div>
                        </div>
                        <div className='row m-0'>
                            <div className='col-12 text-center'>
                                <input type='button' className='btn' id='submit-btn' value='Submit' />
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </>
    );
}
export default ContactUs;