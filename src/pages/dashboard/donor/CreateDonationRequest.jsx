
import { Controller, useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

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
    return <span>loading....</span>;
  }

  const { districts = [], subDistricts = [] } = data || {};
  console.log(data);



  const onSubmit = async (data) => {
    console.log(data);

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
   await axiosPublic.post('/donations', donationInfo)


  };
  return (
    <div>
      <div className="">
        <div className="hero-content">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* date field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                aria-label="Date and time"
                 type="datetime-local"
                  placeholder="donation date & time"
                  {...register("donationDateTime")}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* name field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="recipient name"
                  {...register("recipientName")}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* district dropdown */}
              <div className="form-control">
                <label className="label">
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
                      ></Select>
                    );
                  }}
                ></Controller>
              </div>
              {/* sub- district dropdown */}
              <div className="form-control">
                <label className="label">
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
                      ></Select>
                    );
                  }}
                ></Controller>
              </div>
              {/* blood group */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Blood-Group</span>
                </label>
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
              {/* hospital name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Hospital Name</span>
                </label>
                <input
                  placeholder="hospital name"
                  type="text"
                  {...register("hospitalName")}
                  className="file-input w-full max-w-xs"
                />
              </div>
              {/* Address field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Address</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="full address"
                    {...register("hospitalAddress")}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* request message field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Request Message</span>
                </label>
                <textarea className="textarea" placeholder="request message" {...register('message')} required></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Create Donation</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDonationRequest;
