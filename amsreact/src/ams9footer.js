import footerLogo from './images/ams-logo.png';
const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center pt-3'>
                            <h1>Useful Information</h1>
                        </div>
                    </div>
                    <div className='row information'>
                        <div className='col-lg-3 col-md-6 col-sm-12 footer-content'>
                            <img src={footerLogo} alt='ams-logo' />
                            <p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliaqua. Quis ipsum Suspendise ultrices gravida. Risus commodo viverra maecenascilisis.</p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 navigate'>
                            <h5>Navigate Site</h5>
                            <ul className='p-0'>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>About Us</a></li>
                                <li><a href='#'>Courses</a></li>
                                <li><a href='#'>Services</a></li>
                                <li><a href='#'>Gallery</a></li>
                                <li><a href='#'>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 policies'>
                            <h5>Policies</h5>
                            <ul className='p-0'>
                                <li><a href='#'>Privacy Policy</a></li>
                                <li><a href='#'>Terms & Conditions</a></li>
                                <li><a href='#'>Return Policy</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 social-media'>
                            <h5>Social Media</h5>
                            <ul className='p-0'>
                                <li><a href='#'><span className='bi-meta meta pe-3'></span>Meta</a></li>
                                <li><a href='#'><span className='bi-twitter twitter pe-3'></span>Twitter</a></li>
                                <li><a href='#'><span className='bi-instagram insta pe-3'></span>Instagram</a></li>
                                <li><a href='#'><span className='bi-youtube youtube pe-3'></span>Youtube</a></li></ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 copy-right text-center'>
                        <p><i className='bi-c-circle-fill px-2'></i>All copy rights reserved - 2023</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;