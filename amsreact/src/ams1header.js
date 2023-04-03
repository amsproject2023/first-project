import List from './ams1listitems';
import amslogo from './images/ams-logo.png';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='pt-3'>
                            <nav className='navbar navbar-expand-lg p-0'>
                                <div className='container'>
                                    <a href='#' className='col-lg-4 col-md-4 col-sm-12 logo navbar-brand text-center'><img src={amslogo} alt='ams-logo' className='ams-logo' /></a>
                                    <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbar'>
                                        <span className='navbar-toggler-icon'></span>
                                    </button>
                                    <div className='col-lg-8 col-md-8 col-sm-12 collapse navbar-collapse' id='navbar'>
                                        <ul className='navbar-nav'>
                                            <List />
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
{/*                 
                <div className='pop-up-window'>
                    <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#modal'>open modal</button>
                    <div className='modal fade' id='modal'>
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h1>Learn with fun in this summer </h1>
                                    <button className='btn' data-bs-dismiss='modal'>x</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </header>
        </>
    );
}
export default Header;