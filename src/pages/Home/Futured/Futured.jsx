import future1 from '../../../assets/future1.jpg'
import future2 from '../../../assets/future2.jpg'
import future3 from '../../../assets/future3.jpg'
import future4 from '../../../assets/future4.jpg'
import future5 from '../../../assets/future5.jpg'
import future6 from '../../../assets/future6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import './futured.css'
AOS.init();

const Futured = () => {
  return (
    <section className="mb-40 border-box">
      <h5 className="text-center text-bold_red-0 ">Latest Blog & Update</h5>
      <h1 className="text-4xl md:text-6xl py-6 text-center">Events & Blood Drive Updates
      </h1>
      <p className="text-center pb-16 md:text-2xl lg:px-28">
        Stay informed and engaged with the latest news, upcoming events, and
        vital blood donation drives happening in your community
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 place-content-center place-items-center grid-flow-dense overflow-hidden p-10'>
        <div className="card rounded-none h-full w-full shadow-2xl border-error transition-all duration-500 ease-in-out hover:-translate-y-2 futuredCard"
          data-aos="fade-up"
          data-aos-easing='ease-in-sine'
          data-aos-duration='2000'
          data-aos-once='true'>
          <figure>
            <img className='transform hover:scale-[1.5] transition duration-300 ease-in-out'
              src={future1}
              alt="blood"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl transition-all ease-in-out duration-500 hover:text-bold_red-0">Why blood donation matters.?</h2>
            <p>
              Every drop of blood can make a difference. Donating blood is a
              simple yet powerful way to save lives. br Join our mission to ensure
              that no one has to suffer due to a shortage of blood.
            </p>
            <div className="card-actions justify-end">
              {/* <button className="btn [background:linear-gradient(25deg,_red_5%,_white_90%)]">Read More...</button> */}
            </div>
          </div>
        </div>
        <div className="card rounded-none w-full h-full shadow-2xl border-error transition-all duration-500 hover:-translate-y-2 futuredCard"
          data-aos="fade-up"
          data-aos-easing='ease-in-sine'
          data-aos-duration='2000'
          data-aos-once='true'>
          <figure>
            <img className='transform hover:scale-[1.5] transition duration-300 ease-in-out'
              src={future2}
              alt="blood"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl transition-all ease-in-out duration-500 hover:text-bold_red-0">Artificial Blood Development</h2>
            <p>
              Scientists are exploring lab-grown blood cells to help address shortages and rare blood type needs
            </p>
            <div className="card-actions justify-end">
              {/* <button className="btn [background:linear-gradient(25deg,_red_5%,_white_90%)]">Read More...</button> */}
            </div>
          </div>
        </div>
        <div className="card rounded-none w-full h-full shadow-2xl border-error transition-all duration-500 hover:-translate-y-2 futuredCard">
          <figure>
            <img className='transform hover:scale-[1.5] transition duration-300 ease-in-out'
              src={future3}
              alt="blood"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl transition-all duration-500 hover:text-bold_red-0">Smart Apps for Donors</h2>
            <p>
              Mobile applications now allow users to find nearby blood drives, schedule appointments, and receive real-time alerts on urgent needs.
            </p>
            <div className="card-actions justify-end">
              {/* <button className="btn [background:linear-gradient(25deg,_red_5%,_white_90%)]">Read More...</button> */}
            </div>
          </div>
        </div>
        <div className="card rounded-none w-full h-full shadow-2xl border-error transition-all duration-500 hover:-translate-y-2 futuredCard"
          data-aos="fade-up"
          data-aos-easing='ease-in-sine'
          data-aos-duration='2000'
          data-aos-once='true'>
          <figure>
            <img className='transform hover:scale-[1.5] transition duration-300 ease-in-out'
              src={future4}
              alt="blood"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl transition-all ease-in-out duration-500 hover:text-bold_red-0">Increasing Accessibility & Awareness</h2>
            <p>
              Online campaigns and social media initiatives are encouraging more people to donate and spread awareness.
            </p>
            <div className="card-actions justify-end">
              {/* <button className="btn [background:linear-gradient(25deg,_red_5%,_white_90%)]">Read More...</button> */}
            </div>
          </div>
        </div>
        <div className="card rounded-none w-full h-full shadow-2xl border-error transition-all duration-500 hover:-translate-y-2 futuredCard"
          data-aos="fade-up"
          data-aos-easing='ease-in-sine'
          data-aos-duration='2000'
          data-aos-once='true'>
          <figure>
            <img className='transform hover:scale-[1.5] transition duration-300 ease-in-out'
              src={future5}
              alt="blood"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl transition-all duration-500 ease-in-out hover:text-bold_red-0">Enhanced Donor Experience</h2>
            <p>
              Devices that monitor donor health could soon improve eligibility assessments and post-donation care.
            </p>
            <div className="card-actions justify-end">
              {/* <button className="btn [background:linear-gradient(25deg,_red_5%,_white_90%)]">Read More...</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Futured;
