import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';

const OurServices = () => {
  return (
    <div className=" mb-40 group">
      <div className="text-center pb-16">
        <p className=" pb-6 text-bold_red-0">What We Do</p>
        <h1 className="text-4xl md:text-6xl capitalize  pb-6">our best services</h1>
        <p className="md:text-2xl">
          Discover the services that make us stand out and help you achieve your goals with ease
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 place-content-center place-items-center gap-y-20 p-5">
        <div className="overflow-hidden md:order-1 rounded">
          <img
            className="transition-all ease-in-out duration-500 hover:scale-[1.2]"
            src={service1}
            alt=""
          />
        </div>
        <div className="md:order-2">
          <h2 className="text-4xl md:text-7xl  text-gray-500">01</h2>
          <h3 className="text-2xl md:text-4xl  mb-5 transition-all ease-in-out duration-500 group-hover:text-bold_red-0">
            Free Health Checkup Before Donation
          </h3>
          <p className="mb-5">
            Every donor undergoes a basic health screening before donating. We check blood pressure,
            hemoglobin level, weight, and general health to ensure the safety of both the donor and
            recipient.
          </p>
          {/* <button className="capitalize btn [background:linear-gradient(25deg,_red_5%,_white_90%)]">
            read more
          </button> */}
        </div>
        <div className="overflow-hidden md:order-4 rounded">
          <img
            className="transition-all ease-in-out duration-500 hover:scale-[1.2]"
            src={service2}
            alt=""
          />
        </div>
        <div className="text-end md:order-3">
          <h2 className="text-4xl md:text-7xl  text-gray-500">02</h2>
          <h3 className="text-2xl md:text-4xl  mb-5 transition-all ease-in-out duration-500 group-hover:text-bold_red-0">
            Connected Blood Banks
          </h3>
          <p className="mb-5">
            We collaborate with trusted blood banks to ensure safe storage, testing, and
            distribution of blood. You can easily locate the nearest blood bank through our
            platform.
          </p>
        </div>
        <div className="overflow-hidden hover:bg-black hover:bg-opacity-50 md:order-5 rounded">
          <img
            className="transition-all ease-in-out duration-500 transform hover:scale-[1.2]"
            src={service3}
            alt=""
          />
        </div>
        <div className="md:order-6">
          <h2 className="text-4xl md:text-7xl  text-gray-500">03</h2>
          <h3 className="text-2xl md:text-4xl mb-5  transition-all ease-in-out duration-500 group-hover:text-bold_red-0">
            Donor & Patient Support
          </h3>
          <p className="mb-5">
            We offer 24/7 support for donors and patients—whether you need help booking a donation,
            locating a blood bank, or making an urgent request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
