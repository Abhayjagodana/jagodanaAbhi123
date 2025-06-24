import { NavLink } from "react-router";
import Footer from "./Footer";

function SaasDeveloperTemplete() {
    return (
        <div>
            <div className="mx-auto max-w-[900px] px-4 md:px-0">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col pt-[20px]">

                        {/* Product Card */}
                        <div className="mb-[60px] md:mb-[100px]">
                            <div className="container flex flex-col items-center justify-center gap-6 px-4">
                                <div className="rounded-5 bg-slate-50 p-5">
                                    <img
                                        src="https://www.jagodana.com/icon/products/saas.developertemplates.jpg"
                                        height="50"
                                        width="50"
                                        alt="SaaS Developer Template"
                                        title="SaaS Developer Template"
                                    />
                                </div>
                                <div className="flex flex-col gap-3 text-center">
                                    <p className="text-4xl font-bold">SaaS Developer Template</p>
                                    <h1 className="max-w-3xl text-base text-primary/80">
                                        Accelerate your development workflow with our curated collection
                                        of ready-to-use SaaS templates. Get started quickly with
                                        pre-built UI components and backend integrations.
                                    </h1>
                                </div>
                                <NavLink
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-10 bg-black bg-gradient-to-l from-black via-white/20 to-black px-6 py-3 text-base font-semibold text-white shadow-lg"
                                    to="https://saas.developertemplates.com/?utm_source=website&utm_medium=app-page&utm_campaign=backlink&utm_id=jagodana-llc-website"
                                >
                                    Open App
                                </NavLink>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="mb-[60px] md:mb-[100px]">
                            <div className="container flex max-w-[1200px] flex-col justify-center gap-10 px-4 md:px-0">
                                <img
                                    src="https://www.jagodana.com/saas-developertemplates-image.png"
                                    alt="product details"
                                    title="product details"
                                    height="auto"
                                    width="auto"
                                />
                                <div className="">
                                    <h2 className="text-3xl font-semibold mt-6 mb-2 flex justify-start">
                                        Boost Your Development with SaaS Developer Template
                                    </h2>
                                    <p className="text-base leading-7 mb-4  text-gray-700 flex justify-start">
                                        Enhance your productivity with pre-built, customizable templates for
                                        various SaaS applications.
                                    </p>

                                    <h3 className="text-2xl font-semibold mt-6 mb-2 flex justify-start">
                                        Pre-Built UI Components
                                    </h3>
                                    <p className="text-base leading-7 mb-4 text-gray-700 flex justify-start">
                                        Leverage a collection of responsive and modern UI components to build
                                        your applications faster.
                                    </p>

                                    <h3 className="text-2xl font-semibold mt-6 mb-2 flex justify-start">
                                        Backend Integrations
                                    </h3>
                                    <p className="text-base leading-7 mb-4 text-gray-700 flex justify-start">
                                        Connect seamlessly with databases, authentication services, and cloud
                                        platforms using our backend-ready templates.
                                    </p>

                                    <h3 className="text-2xl font-semibold mt-6 mb-2 flex justify-start">
                                        Scalable and Customizable
                                    </h3>
                                    <p className="text-base leading-7 mb-4 text-gray-700 flex justify-start">
                                        Adapt and extend templates to fit your business needs, ensuring
                                        long-term scalability and maintainability.
                                    </p>

                                    <h3 className="text-2xl font-semibold mt-6 mb-2 flex justify-start">
                                        Developer-Friendly Documentation
                                    </h3>
                                    <p className="text-base leading-7 mb-4 text-gray-700 flex justify-start">
                                        Get started easily with comprehensive documentation, including setup
                                        guides and best practices.
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
export default SaasDeveloperTemplete;