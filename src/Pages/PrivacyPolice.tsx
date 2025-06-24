import Footer from "./Footer";
import { Helmet } from "react-helmet";
function Privacyploice(){
    return(
        <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>privacy-jagodanaabhi-123</title>
                
            </Helmet>
          <div>
  <div className="container mx-auto flex max-w-[900px] flex-col gap-5 px-4 md:px-0">
    <div
      className="mt-[30px] flex w-full flex-col items-center justify-center gap-2 rounded-10 bg-cover p-5 md:gap-5 md:p-10"
      style={{ backgroundImage: 'url("https://www.jagodana.com/subscribe-bg.svg")' }}
    >
      <h1 className="flex flex-col gap-2 text-center text-3xl font-bold md:text-5xl">
        <span className="capitalize">Privacy Policy</span>
        <span className="sr-only">:</span>
        <span className="text-center text-base font-medium">
          Familiarize yourself with the data privacy laws that affect you
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
      <p>
        Our Product, accessible from&nbsp;Jagodana LLC, one of our main
        priorities is the privacy of our visitors. This Privacy Policy document
        contains types of information that is collected and recorded by Product
        and how we use it.
      </p>
      <p>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us.
      </p>
      <p>
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in Product. This policy is not applicable to any
        information collected offline or via channels other than this website.
      </p>

      <h2>Consent</h2>
      <p>
        By using our website, you hereby consent to our Privacy Policy and
        agree to its terms.
      </p>

      <h2>Information we collect</h2>
      <p>
        The personal information that you are asked to provide, and the reasons
        why you are asked to provide it, will be made clear to you at the point
        we ask you to provide your personal information.
      </p>
      <p>
        If you contact us directly, we may receive additional information about
        you such as your name, email address, phone number, the contents of the
        message and/or attachments you may send us, and any other information
        you may choose to provide.
      </p>
      <p>
        When you register for an Account, we may ask for your contact
        information, including items such as name, company name, address, email
        address, and telephone number.
      </p>
    </div>
  </div>
</div>
<Footer></Footer>
        </div>
    )
}
export default Privacyploice;