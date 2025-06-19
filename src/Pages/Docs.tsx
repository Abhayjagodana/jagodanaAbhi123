import { NavLink } from "react-router";
import Footer from "./Footer";

function Docs(){
    return(
        <div>
            <div className="container mx-auto flex min-h-screen max-w-[1200px] flex-col gap-20">
  <div
    className="mt-[30px] flex w-full flex-col items-center justify-center gap-2 rounded-10 bg-cover p-5 md:gap-5 md:p-10
   
    "
    style={{ backgroundImage: 'url("https://www.jagodana.com/subscribe-bg.svg")' }}
  
  >
    <h1 className="flex flex-col gap-2 text-center text-3xl font-bold md:text-5xl">
      <span className="capitalize">Docs</span>
      <span className="sr-only">:</span>
      <span className="text-center text-base font-medium">
        Familiarize yourself with the docs that affect you
      </span>
    </h1>
  </div>
  <div className="flex flex-wrap items-center justify-center gap-5">
    <NavLink
      className="relative flex flex-col justify-between gap-2 rounded-10 bg-contain p-1"
      to="/Privacy"
      
    >
      <div className="flex flex-col gap-4 rounded-5 bg-white p-4 border-2 border-slate-300 hover:border-indigo-300">
        <div className="flex flex-col gap-1 ">
          <h3 className="text-3xl font-bold">Privacy Policy</h3>
          <p className="text-black/50">
            Familiarize yourself with the data privacy laws that affect you
          </p>
        </div>
        <time
          dateTime="2024-10-10T00:00:00.000Z"
          className="flex text-sm text-black/50 md:text-lg"
        >
          <span className="mr-1 font-semibold text-black/70">Last updated:</span>
          October 10, 2024
        </time>
      </div>
    </NavLink>

    <NavLink
      className="relative flex flex-col justify-between gap-2 rounded-10 bg-contain p-1"
      to="/terms"
      
    >
      <div className="flex flex-col gap-4 rounded-5 bg-white p-4 border-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-3xl font-bold">Terms Of Services</h3>
          <p className="text-black/50">
            Familiarize yourself with the terms of services that affect you
          </p>
        </div>
        <time
          dateTime="2024-10-10T00:00:00.000Z"
          className="flex text-sm text-black/50 md:text-lg"
        >
          <span className="mr-1 font-semibold text-black/70">Last updated:</span>
          October 10, 2024
        </time>
      </div>
    </NavLink>
  </div>
</div>
  <Footer></Footer>
            </div>
    )
}
export default Docs;