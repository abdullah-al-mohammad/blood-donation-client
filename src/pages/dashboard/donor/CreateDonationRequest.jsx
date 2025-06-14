
import { Controller, useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from "react-router-dom";
import './donor.css'
// ..
AOS.init();

const CreateDonationRequest = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { user } = useAuth()
  const axiosPublic = useAxiosPublic()


  const { data = {}, isLoading: loading } = useQuery({
    queryKey: ["district"],
    queryFn: async () => {
      const [district, subDistrict] = await Promise.all([
        fetch("/district.json").then((res) => res.json()),
        fetch("/sub-district.json").then((res) => res.json()),
      ]);
      return { districts: district, subDistricts: subDistrict };
    },
  });

  if (loading) {
    return <div className='flex justify-center items-center h-screen'>
      <progress className="loading loading-ring loading-xl"></progress>
    </div>
  }

  const { districts = [], subDistricts = [] } = data || {};



  const onSubmit = async (data) => {

    const donationInfo = {
      name: user?.displayName,
      email: user?.email,
      recipientName: data.recipientName,
      district: data.district,
      subDistrict: data.subDistrict,
      bloodGroup: data.bloodGroup,
      hospitalName: data.hospitalName,
      hospitalAddress: data.hospitalAddress,
      message: data.message,
      donationDateTime: data.donationDateTime

    }
    const res = await axiosPublic.post('/donations', donationInfo)
    console.log(res);
    if (res.data) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Donation has been Creatated Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };
  const getCurrentDateTime = () => {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const localTime = new Date(now.getTime() - offset * 60000);
    return localTime.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:MM"
  };
  return (
    <div className="text-white">
      <div className="adminBannerBG">
        <h1 className="text-center p-5 uppercase text-2xl md:text-4xl" data-aos="flip-right">Emergency Blood Request</h1>
        <p className="text-center mb-5">Your information helps us find the right donor for your needs.</p>
        <div className="text-center">
          <Link to={'/'}><button>Home</button></Link>
          <span className="mx-2">/</span>
          <button className="btn-active btn-info text-bold_red-0">request donor</button>
        </div>
      </div>
      <div data-aos="zoom-in-down">
        <div>
          <div className="card bg-base-100 max-w-screen-2xl shrink md:shadow-2xl container mx-auto rounded-none">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* date field */}
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text">Date</span>
                </label>
                <div>
                  <input
                    aria-label="Date and time"
                    type="datetime-local"
                    placeholder="donation date & time"
                    defaultValue={getCurrentDateTime()}
                    {...register("donationDateTime")}
                    className="input input-bordered p-10"
                    required
                  />
                </div>
              </div>
              {/* name field */}
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text">Name</span>
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="recipient name"
                    {...register("recipientName")}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              {/* district dropdown */}
              <div className="form-control district">
                <label className="label mb-2">
                  <span className="label-text">District</span>
                </label>
                <Controller
                  control={control}
                  name="district"
                  render={({ field }) => {
                    return (
                      <Select
                        {...field}
                        options={districts.map((district) => ({
                          value: district.name,
                          label: district.name,
                        }))}
                        styles={{
                          control: (base) => ({
                            ...base,
                            backgroundColor: "#1e293b", // bg-slate-800
                            color: "white",
                            borderColor: "#334155", // optional
                          }),
                          singleValue: (base) => ({
                            ...base,
                            color: "white",
                          }),
                          menu: (base) => ({
                            ...base,
                            backgroundColor: "#1e293b", // bg-slate-800
                          }),
                          option: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused ? "#334155" : "#1e293b", // hover and normal
                            color: "white",
                            cursor: "pointer",
                          }),
                          placeholder: (base) => ({
                            ...base,
                            color: "#cbd5e1", // text-slate-300
                          }),
                        }}
                      ></Select>
                    );
                  }}
                ></Controller>
              </div>
              {/* sub- district dropdown */}
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text">Sub District</span>
                </label>
                <Controller
                  control={control}
                  name="subDistrict"
                  render={({ field }) => {
                    return (
                      <Select
                        {...field}
                        options={subDistricts.map((subDistrict) => ({
                          value: subDistrict.name,
                          label: subDistrict.name,
                        }))}
                        styles={{
                          control: (base) => ({
                            ...base,
                            backgroundColor: "#1e293b", // bg-slate-800
                            color: "white",
                            borderColor: "#334155", // optional
                          }),
                          singleValue: (base) => ({
                            ...base,
                            color: "white",
                          }),
                          menu: (base) => ({
                            ...base,
                            backgroundColor: "#1e293b", // bg-slate-800
                          }),
                          option: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused ? "#334155" : "#1e293b", // hover and normal
                            color: "white",
                            cursor: "pointer",
                          }),
                          placeholder: (base) => ({
                            ...base,
                            color: "#cbd5e1", // text-slate-300
                          }),
                        }}
                      ></Select>
                    );
                  }}
                ></Controller>
              </div>
              {/* blood group */}
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text">Blood-Group</span>
                </label>
                <div>
                  <select
                    defaultValue={"default"}
                    className="select select-ghost w-full max-w-xs"
                    {...register("bloodGroup")}
                  >
                    <option value={"default"} disabled>
                      Select Group
                    </option>
                    <option value={"A+"}>A+</option>
                    <option value={"A-"}>A-</option>
                    <option value={"B+"}>B+</option>
                    <option value={"B-"}>B-</option>
                    <option value={"AB+"}>AB+</option>
                    <option value={"AB-"}>AB-</option>
                    <option value={"O+"}>O+</option>
                    <option value={"O-"}>O-</option>
                  </select>
                </div>
              </div>
              {/* hospital name */}
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text">Hospital Name</span>
                </label>
                <div>
                  <input
                    placeholder="hospital name"
                    type="text"
                    {...register("hospitalName")}
                    className="file-input w-full px-3"
                  />
                </div>
              </div>
              {/* Address field */}
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text">Full Address</span>
                </label>
                <div className="relative">
                  <div>
                    <input
                      type="text"
                      placeholder="full address"
                      {...register("hospitalAddress")}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* request message field */}
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text">Request Message</span>
                </label>
                <div>
                  <textarea className="textarea" placeholder="request message" {...register('message')} required></textarea>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-bold_red-0 hover:bg-white hover:text-bold_red-0 hover:border-bold_red-0 transition duration-500 ease-in-out">Create Donation</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDonationRequest;
