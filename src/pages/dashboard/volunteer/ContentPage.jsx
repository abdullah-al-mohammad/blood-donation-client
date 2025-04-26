import { useNavigate } from "react-router-dom"

const ContentPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='adminBG'>
        <h1 className="text-center font-bold text-3xl uppercase p-5" data-aos="flip-right">
          Welcome {user?.displayName}
        </h1>
      </div>
      <div className="adminBannerBG">
        <h1 className="capitalize text-4xl text-center mb-5">volunteer blog home</h1>
        <div className="text-center mb-5">
          <Link to={'/'}><button>Home</button></Link>
          <span className="mx-2">/</span>
          <button className="btn-active btn-info text-[#ef3d32]">volunteer</button>
        </div>
        <div className="flex justify-center p-6">
          <button
            className="btn btn-error px-8 py-7 text-lg text-white btn-ripple hover:text-red-500 font-rubik_storm"
            onClick={() => navigate("/dashboard/CreateContent")}
          >
            Add Blog
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContentPage