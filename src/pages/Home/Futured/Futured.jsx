import future1 from '../../../assets/future1.jpg'
import future2 from '../../../assets/future2.jpg'
import future3 from '../../../assets/future3.jpg'
import future4 from '../../../assets/future4.jpg'
import future5 from '../../../assets/future5.jpg'
import future6 from '../../../assets/future6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Futured = () => {
  return (
    <div className="mt-5">
      <section>
        <h5 className="text-center"
          data-aos="zoom-in-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">Latest Blog & Update</h5>
        <h1 className="text-5xl my-3 text-center"
          data-aos="zoom-in-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
          Stay Connected: News, <br /> Events & Blood Drive Updates
        </h1>
        <p className="text-center mb-5"
          data-aos="zoom-in-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
          Stay informed and engaged with the latest news, upcoming events, and
          vital blood donation drives happening in your community. <br /> Join
          us in making a difference—one drop at a time!
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-x-48'>
          <div className="card bg-base-100 md:w-96 shadow-sm"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <figure>
              <img className='transform hover:scale-[1.5] transition delay-150 duration-300 ease-in-out'
                src={future1}
                alt="blood"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Why blood donation matters.?</h2>
              <p>
                Every drop of blood can make a difference. Donating blood is a
                simple yet powerful way to save lives. br Join our mission to ensure
                that no one has to suffer due to a shortage of blood.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More...</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 md:w-96 shadow-sm"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <figure>
              <img className='transform hover:scale-[1.5] transition delay-150 duration-300 ease-in-out'
                src={future2}
                alt="blood"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Artificial Blood Development</h2>
              <p>
                Scientists are exploring lab-grown blood cells to help address shortages and rare blood type needs
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More...</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 md:w-96 shadow-sm"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <figure>
              <img className='transform hover:scale-[1.5] transition delay-150 duration-300 ease-in-out'
                src={future3}
                alt="blood"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Smart Apps for Donors</h2>
              <p>
                Mobile applications now allow users to find nearby blood drives, schedule appointments, and receive real-time alerts on urgent needs.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More...</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 md:w-96 shadow-sm"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <figure>
              <img className='transform hover:scale-[1.5] transition delay-150 duration-300 ease-in-out'
                src={future4}
                alt="blood"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Increasing Accessibility & Awareness</h2>
              <p>
                Online campaigns and social media initiatives are encouraging more people to donate and spread awareness.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More...</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 md:w-96 shadow-sm"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <figure>
              <img className='transform hover:scale-[1.5] transition delay-150 duration-300 ease-in-out'
                src={future5}
                alt="blood"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Enhanced Donor Experience</h2>
              <p>
                Devices that monitor donor health could soon improve eligibility assessments and post-donation care.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More...</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Futured;
