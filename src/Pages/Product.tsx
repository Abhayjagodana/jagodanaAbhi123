import { Link } from "react-router";
import Footer from "./Footer";
import {Helmet} from "react-helmet";
function Products(){
    return(
          
        <div className=" flex min-h-screen flex-col">
          
            <Helmet>
                <meta charSet="utf-8" />
                <title>Product-jagodanaabhi-123</title>
                
            </Helmet>
            
        
               <div className="container mx-auto mb-5 mt-[30px] flex max-w-[900px] flex-col gap-10 px-4 md:mb-12 md:mt-[50px]">
  <div data-aos="fade-up" className="flex flex-col items-center justify-center aos-init aos-animate">
    <h1 className="mx-auto mb-6 max-w-4xl text-center text-2xl font-bold capitalize leading-tight text-black md:text-[54px]">
      Explore Jagodana LLC's Proven Product Line
    </h1>
    <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-black sm:text-xl">
      Efficient, scalable, and reliable solutions to transform your operations
    </p>
  </div>
  <div>
    <div className="flex flex-wrap justify-center gap-8 ">
      <div className="flex w-96 flex-col items-center justify-between gap-5 rounded-10 bg-lightgray p-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="rounded-5 bg-white p-3 bg-slate-100	">
            <img
              src="https://www.jagodana.com/icon/saas.svg"
              alt="SaaS"
              height="50"
              width="50"
              title="SaaS"
              className="min-h-[50px] min-w-[50px]"
            />
          </div>
          <div className="flex flex-col gap-1 text-center">
            <p className="text-2xl font-bold">SaaS</p>
            <p className="text-primary/50">
              Boost productivity and scale your business with our powerful SaaS solutions.
            </p>
          </div>
        </div>
        <Link
          className="max-h-6 rounded-10 bg-black bg-gradient-to-l from-black via-white/20 to-black text-sm font-semibold text-white shadow-lg px-5 py-5 flex rounded-5 justify-center items-center gap-2"
          to="/saas"
         >
          Learn More
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
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
</div>

               <Footer></Footer>
        </div>
    )
}
export default Products;