import Footer from "./Footer";
import { Helmet } from "react-helmet";
function TermsService(){
    return(
        <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Terms-jagodanaabhi-123</title>
                
            </Helmet>
            <div>
  <div className="container mx-auto flex max-w-[900px] flex-col gap-5 px-4 md:px-0">
    <div
      className="mt-[30px] flex w-full flex-col items-center justify-center gap-2 rounded-10 bg-cover p-5 md:gap-5 md:p-10"
      style={{ backgroundImage: 'url("https://www.jagodana.com/subscribe-bg.svg")' }}
    >
      <h1 className="flex flex-col gap-2 text-center text-3xl font-bold md:text-5xl">
        <span className="capitalize">Terms Of Services</span>
        <span className="sr-only">:</span>
        <span className="text-center text-base font-medium">
          Familiarize yourself with the terms of services that affect you
        </span>
      </h1>
    </div>

    <time
      dateTime="2024-10-10T00:00:00.000Z"
      className="flex justify-center text-[14px] text-black/70 md:text-[18px]"
    >
      <span className="mr-1 font-semibold text-black">Last updated:</span>
      October 10, 2024
    </time>

    <div className="mb-6 overflow-hidden bg-white [&>*:last-child]:mb-0 [&>*]:md:p-2 [&>h2]:py-3 [&>h2]:text-center [&>h2]:text-[16px] [&>h2]:font-semibold [&>h2]:md:text-[24px] [&>h3]:text-[16px] [&>h3]:font-semibold [&>h3]:md:text-[20px] [&>p]:text-center [&>p]:text-[14px] [&>p]:text-black/70 [&>p]:md:text-start [&>p]:md:text-[18px]">
      <h2>1. Terms</h2>

      <h3 className="flex justify-start ">1.1 General</h3>
      <p>
        By accessing this Website, accessible from&nbsp;Jagodana LLC, you are
        agreeing to be bound by these Website Terms and Conditions of Use and
        agree that you are responsible for the agreement with any applicable
        local laws. If you disagree with any of these terms, you are prohibited
        from accessing this site. The materials contained in this Website are
        protected by copyright and trademark law.
      </p>

      <h2>2. Use License</h2>

      <h3 className="flex justify-start">2.1 General</h3>
      <p>
        Permission is granted to temporarily download one copy of the materials
        on Product's Website for personal, non-commercial transitory viewing
        only. This is the grant of a license, not a transfer of title, and
        under this license you may not:
      </p>
      <p>
        modify or copy the materials; use the materials for any commercial
        purpose or for any public display; attempt to reverse engineer any
        software contained on Product's Website; remove any copyright or other
        proprietary notations from the materials; or transferring the materials
        to another person or "mirror" the materials on any other server. This
        will let Product to terminate upon violations of any of these
        restrictions. Upon termination, your viewing right will also be
        terminated and you should destroy any downloaded materials in your
        possession whether it is printed or electronic format.
      </p>
    </div>
  </div>
</div>
<Footer></Footer>
        </div>
    )
}
export default TermsService;