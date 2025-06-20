import { NavLink } from "react-router";
import Footer from "./Footer";

function Blogs(){
  return(
    <div>
        <div className="container mx-auto mb-5 flex min-h-screen w-full max-w-[1200px] flex-col gap-3 px-5 md:mb-14 lg:gap-[30px]">
  <div
    className="mt-[30px] flex w-full flex-col items-center justify-center gap-2 rounded bg-cover p-5 md:gap-5 md:p-10 bg-gradient-to-r from-emerald-100 from-emerald-50 via-yellow-50  to-fuchsia-200
    " 
    
  >
    <h1 className="flex flex-col gap-2 text-center text-3xl font-bold md:text-5xl">
      <span className="capitalize">Blogs</span>
      <span className="sr-only">:</span>
      <span className="text-center text-base font-medium">
        Explore Tips, Techniques, and Inspiration with our blog posts.
      </span>
    </h1>
  </div>
  <div className="mx-4 flex md:gap-5">
    <div className="flex flex-1 flex-col gap-5 md:gap-10">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex h-full flex-col items-center justify-center gap-5 text-lg">
          <img
            src="https://www.jagodana.com/icon/blogs-not-found.svg"
            alt="file not found"
            title="file not found"
            height="250"
            width="250"
          />
          <p className="max-w-xl text-center text-lg capitalize text-primary/50 md:text-2xl">
            blog post you're looking for doesn't exist. Please explore other posts or check back later for new content.
          </p>
        </div>
        <NavLink
          className="max-h-6 rounded-10 bg-black bg-gradient-to-l from-black via-white/20 to-black text-sm font-semibold text-white shadow-lg px-6 py-6 flex justify-center items-center gap-2"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-left"
          >
            <path d="M6 8L2 12L6 16"></path>
            <path d="M2 12H22"></path>
          </svg>
          Back To Home
        </NavLink>
      </div>
    </div>
    <div></div>
  </div>
</div>
     <Footer></Footer>
    </div>
  )
}
export default Blogs;