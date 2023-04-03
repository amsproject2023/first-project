const List = () =>{
    const listItems = ['Home','About Us','Courses','Services','Gallery','Contact Us'];
        const item = listItems.map((data,index)=>{
            return(<li className="nav-item"><a href='#' className="nav-link">{data}</a></li>)
        });
            return(
                <>
                {item}
                </>

            )
}
export default List;