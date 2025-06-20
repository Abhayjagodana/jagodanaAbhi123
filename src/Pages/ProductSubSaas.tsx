import { NavLink } from "react-router";
import Footer from "./Footer";

function ProductSubSaas(){
    return(
        <div>
            <div className="mx-auto max-w-[900px] px-4 md:px-0">
  <div className="flex flex-col items-center justify-center">
    <div className="flex flex-col pt-[20px]">
      <div className="mb-[60px] md:mb-[100px]">
        <div className="container flex flex-col items-center justify-center gap-6 px-4">
          <div className="rounded-5 bg-lightgray p-5">
            <img src="https://www.jagodana.com/icon/products/imejis.png" height="50" width="50" alt="Imejis.io" title="Imejis.io" />
          </div>
          <div className="flex flex-col gap-3 text-center">
            <p className="text-4xl font-bold">Imejis.io</p>
            <h1 className="max-w-3xl text-base text-primary/80">
              Effortlessly generate custom images with our JSON API-powered Image Generation App. Generate images with custom text, color, and image
            </h1>
          </div>
          <a
            target="_blank"
            className="rounded-10 bg-black bg-gradient-to-l from-black via-white/20 to-black px-6 py-3 text-base font-semibold text-white shadow-lg"
            href="https://www.imejis.io/?utm_source=website&utm_medium=app-page&utm_campaign=backlink&utm_id=jagodana-llc-website"
          >
            Open App
          </a>
        </div>
      </div>
      <div className="mb-[60px] md:mb-[100px]">
        <div className="container flex max-w-[1200px] flex-col justify-center gap-10 px-4 md:px-0">
          <img src="https://www.jagodana.com/imejis-image.png" alt="product details" title="product details" height="auto" width="auto" />
          <div>
            <h2 className="text-3xl font-semibold mt-6 mb-2">Transform Your Image Management with imejis</h2>
            <p className="text-base leading-7 mb-4 text-gray-700">
              Empowering your visual content workflow with automated image categorization and AI-driven tools.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Efficient Image Categorization</h3>
            <p className="text-base leading-7 mb-4 text-gray-700">
              Organize and categorize your images effortlessly. imejis uses advanced AI to sort and tag images, making your library easy to navigate and search.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Smart Search and Filters</h3>
            <p className="text-base leading-7 mb-4 text-gray-700">
              Find any image in seconds using smart search and filters. Whether you're looking by tags, date, or content, imejis makes searching intuitive and fast.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Seamless Integration</h3>
            <p className="text-base leading-7 mb-4 text-gray-700">
              Integrate imejis with your existing systems. Whether it's cloud storage or content management platforms, imejis ensures a smooth and flexible workflow.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-2">AI-Driven Enhancement Tools</h3>
            <p className="text-base leading-7 mb-4 text-gray-700">
              Enhance your images with powerful AI tools. Automatically adjust quality, resolution, and optimize images for various uses.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <NavLink className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-9 rounded-10 bg-gradient-to-l from-black via-white/20 to-black px-6 py-3 font-semibold text-white shadow-lg mb-10 !py-5"
      to="/Product"
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
export default ProductSubSaas;