const ServiceProps = (props) => {
    return (
        <>
            <img src={props.serviceImage} alt={props.serviceName} width='100%'/>
            <h3>{props.serviceTitle}</h3>
            <p>{props.serviceDescription}</p>
            <button className='btn read-btn mt-2'>{props.servieBtn}</button>
        </>
    );
}
export default ServiceProps;