import { NavLink } from "react-router";
import Footer from "./Footer";

function Developertemplates(){
    return(
        <div>
             <div className="mx-auto max-w-[900px] px-4 md:px-0">
  <div className="flex flex-col items-center justify-center">
    <div className="flex flex-col pt-[20px]">

      {/* Product Hero Section */}
      <div className="mb-[60px] md:mb-[100px]">
        <div className="container flex flex-col items-center justify-center gap-6 px-4">
          <div className="rounded-5 bg-slate-50 p-5">
            <img
              src="https://www.jagodana.com/icon/products/developertemplates.jpg"
              height="50"
              width="50"
              alt="Developer Templates"
              title="Developer Templates"
            />
          </div>
          <div className="flex flex-col gap-3 text-center">
            <p className="text-4xl font-bold">Developer Templates</p>
            <h1 className="max-w-3xl text-base text-primary/80">
              Find high-quality, production-ready templates that help developers
              and founders ship faster. Easily integrate them into your projects
              and accelerate your development workflow.
            </h1>
          </div>
          <NavLink
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-10 bg-black bg-gradient-to-l from-black via-white/20 to-black px-6 py-3 text-base font-semibold text-white shadow-lg"
            to="https://developertemplates.com/?utm_source=website&utm_medium=app-page&utm_campaign=backlink&utm_id=jagodana-llc-website"
          >
            Open App
          </NavLink>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="mb-[60px] md:mb-[100px]">
        <div className="container flex max-w-[1200px] flex-col justify-center gap-10 px-4 md:px-0">
          <img
            src="https://www.jagodana.com/developer-templates-image.png"
            alt="product details"
            title="product details"
            height="auto"
            width="auto"
          />
          <div className="">
            <h2 className="text-3xl font-semibold mt-6 mb-2 flex justify-start">
              Ship Faster with Developer Templates
            </h2>
            <p className="text-base leading-7 mb-4 text-gray-700 flex justify-start ">
              Access a curated collection of templates that streamline your
              development process, whether you're a solo developer or part of
              a startup.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2 flex justify-start">
              Boilerplate Code & UI Components
            </h3>
            <p className="text-base leading-7 mb-4 text-gray-700 flex justify-start">
              Leverage pre-built codebases and UI components to jumpstart your
              SaaS applications with minimal effort.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2 flex justify-start">
              Full-Stack Project Starters
            </h3>
            <p className="text-base leading-7 mb-4 text-gray-700 flex justify-start">
              Kickstart your projects with ready-made templates that include
              frontend and backend integrations.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2 flex justify-start">
              Scalable and Customizable
            </h3>
            <p className="text-base leading-7 mb-4 text-gray-700 flex justify-start">
              Adapt templates to fit your business needs, ensuring long-term
              maintainability and scalability.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2 flex justify-start">
              Developer-Centric Documentation
            </h3>
            <p className="text-base leading-7 mb-4 text-gray-700 flex justify-start">
              Comprehensive documentation, setup guides, and best practices to
              help you get started quickly.
            </p>
          </div>
        </div>
      </div>

    </div>

    {/* Back Button */}
    <div>
      <NavLink className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-9 rounded-10 bg-gradient-to-l from-black via-white/20 to-black px-6 py-3 font-semibold text-white shadow-lg mb-10 !py-5"
      to="/product">
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
          className="lucide lucide-arrow-left"
        >
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
        Back To Products
      </NavLink>
    </div>
  </div>
</div>
<Footer></Footer>
        </div>
    )
}
export default Developertemplates;