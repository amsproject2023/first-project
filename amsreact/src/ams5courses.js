import fullStack from './images/ams-featured-courses-full-stack-card-photo.jpg';
import frontEnd from './images/ams-featured-courses-front-end-card-photo.jpg';
import backEnd from './images/ams-featured-courses-back-end-card-photo.jpg';
const Courses = () => {
    return (
        <>
           <section className='container'>
<div className='row'>
<div className='col-12 text-center'>
<h1>Featured Courses</h1>
</div>
</div>
<div className='carousel' id='courses-carousel' data-bs-ride='carousel'>
<div className='carousel-inner'>

<div className='carousel-item active'>

<div className='row courses mb-lg-5 mb-md-4 mb-sm-3 m-auto'>
<div className='col-lg-4 col-md-6 col-sm-12 course p-0'>
<img src={fullStack} 
alt='full stack' width='100%' />
<div className='p-3'>
<h3>Full Stack</h3>
<p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incidunt ut
labore et dolore magna aliaqua. Quis ipsum Suspendise ultrices gravida. Risus commodo
viverra maecenas.</p>
</div>
<ul>
<li><a href='#'>Courses Details</a></li>
<li><a href='#'>Internship</a></li>
<li><a href='#'>Career Oppurtunities</a></li>
<li><a href='#'>Courses Details</a></li>
<li><a href='#'>Internship</a></li>
</ul>
<button className='btn read-btn m-3'>Read More</button>
</div>
<div className='col-lg-4 col-md-6 col-sm-12 course p-0'>
<img src={frontEnd} alt='front end' 
width='100%' />
<div className='p-3'>
<h3>Front End</h3>
<p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incidunt ut
labore et dolore magna aliaqua. Quis ipsum Suspendise ultrices gravida. Risus commodo
viverra maecenas.</p>
</div>
<ul>
<li><a href='#'>Courses Details</a></li>
<li><a href='#'>Internship</a></li>
<li><a href='#'>Career Oppurtunities</a></li>
<li><a href='#'>Courses Details</a></li>
<li><a href='#'>Internship</a></li>
</ul>
<button className='btn read-btn m-3'>Read More</button>
</div>
<div className='col-lg-4 col-md-6 col-sm-12 course p-0'>
<img src={backEnd} alt='back end' 
width='100%' />
<div className='p-3'>
<h3>Back End</h3>
<p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incidunt ut
labore et dolore magna aliaqua. Quis ipsum Suspendise ultrices gravida. Risus commodo
viverra maecenas.</p>
</div>
<ul>
<li><a href='#'>Courses Details</a></li>
<li><a href='#'>Internship</a></li>
<li><a href='#'>Career Oppurtunities</a></li>
<li><a href='#'>Courses Details</a></li>
<li><a href='#'>Internship</a></li>
</ul>
<button className='btn read-btn m-3'>Read More</button>
</div>
</div>


</div>

<div className='carousel-item'>

<div className='row courses mb-lg-5 mb-md-4 mb-sm-3'>
<div className='col-lg-4 col-md-6 col-sm-12 course p-0'>
<img src={fullStack} 
alt='full stack' width='100%' />
<div className='p-3'>
<h3>Full Stack</h3>
<p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incidunt ut
labore et dolore magna aliaqua. Quis ipsum Suspendise ultrices gravida. Risus commodo
viverra maecenas.</p>
</div>
<ul>
<li><a href='#'>Courses Details</a></li>
<li><a href='#'>Internship</a></li>
<li><a href='#'>Career Oppurtunities</a></li>
<li><a href='#'>Courses Details</a></li>
<li><a href='#'>Internship</a></li>
</ul>
<button className='btn read-btn m-3'>Read More</button>
</div>
<div className='col-lg-4 col-md-6 col-sm-12 course p-0'>
<img src={frontEnd} alt='front end'
width='100%' />
<div className='p-3'>
<h3>Front End</h3>
<p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incidunt ut
labore et dolore magna aliaqua. Quis ipsum Suspendise ultrices gravida. Risus commodo
viverra maecenas.</p>
</div>
<ul>
<li><a href='#'>Courses Details</a></li>
<li><a href='#'>Internship</a></li>
<li><a href='#'>Career Oppurtunities</a></li>
<li><a href='#'>Courses Details</a></li>
<li><a href='#'>Internship</a></li>
</ul>
<button className='btn read-btn m-3'>Read More</button>
</div>
<div className='col-lg-4 col-md-6 col-sm-12 course p-0'>
<img src={backEnd} alt='back end'
width='100%' />
<div className='p-3'>
<h3>Back End</h3>
<p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incidunt ut
labore et dolore magna aliaqua. Quis ipsum Suspendise ultrices gravida. Risus commodo
viverra maecenas.</p>
</div>
<ul>
<li><a href='#'>Courses Details</a></li>
<li><a href='#'>Internship</a></li>
<li><a href='#'>Career Oppurtunities</a></li>
<li><a href='#'>Courses Details</a></li>
<li><a href='#'>Internship</a></li>
</ul>
<button className='btn read-btn m-3'>Read More</button>
</div>
</div>


</div>
<button className='carousel-control-prev' data-bs-target='#courses-carousel' data-bs-slide='prev'><span className='carousel-control-prev-icon course-prevslide'>	</span></button>
<button className='carousel-control-next' data-bs-target='#courses-carousel' data-bs-slide='next'><span className='carousel-control-next-icon course-nextslide'>	</span></button>
</div>
</div>

</section>


        </>
    );
}
export default Courses;