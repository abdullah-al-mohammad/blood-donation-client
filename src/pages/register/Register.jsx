import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const { data = {}, isLoading: loading } = useQuery({
    queryKey: ["district"],
    queryFn: async () => {
      const [district, subDistrict] = await Promise.all([
        fetch("district.json").then((res) => res.json()),
        fetch("sub-district.json").then((res) => res.json()),
      ]);
      return { districts: district, subDistricts: subDistrict };
    },
  });
  if (loading) {
    return <span>loading....</span>;
  }

  const { districts = [], subDistricts = [] } = data || {};
  console.log(data);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* name field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Your Name"
                  {...register("namegit add README.md")}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* email field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email")}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* district dropdown */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">District</span>
                </label>
                <select
                  defaultValue="default"
                  className="select"
                  {...register("district")}
                >
                  <option value="default" disabled={true}>
                    District
                  </option>
                  {districts.map((district) => (
                    <option key={district.id} value={district.name}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* sub- district dropdown */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub District</span>
                </label>
                {/* <select
                  defaultValue="default"
                  className="select"
                  {...register("sub-district")}
                >
                  <option disabled={true} value="default">Sub District</option>
                  {
                    subDistricts.map(subDistrict => (
                      <option key={subDistrict.id} value={subDistrict.name}>{subDistrict.name}</option>
                    ))
                  }
                </select> */}
                <Controller
                  control={control}
                  name="sub-district"
                  render={({ field }) => {
                   return <Select
                    {...field}
                      options={subDistricts.map((subDistrict) => ({
                        value: subDistrict.name,
                        label: subDistrict.name,
                      }))}
                      placeholder={"select district"}
                      // {...register("sub-district")}
                    ></Select>;
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
                  {...register("blood-group")}
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
              {/* upload photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Profile</span>
                </label>
                <input type="file" className="file-input w-full max-w-xs" />
              </div>
              {/* password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password")}
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* confirm password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("confirm-password")}
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
