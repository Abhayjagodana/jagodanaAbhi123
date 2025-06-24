import Footer from "./Footer"
import { Helmet } from "react-helmet";
function About(){
    return(
        <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>About-jagodanaabhi-123</title>
                 <meta
          name="description"
          content="Learn more about Jagodana Abhi LLC, our mission, and the services we provide to accelerate your development workflow."
        />
            </Helmet>
            <div className="container mx-auto mb-5 mt-[30px] flex flex-col gap-10 px-4 md:mb-12 md:mt-[50px]">
  <div data-aos="fade-up" className="flex flex-col items-center justify-center aos-init aos-animate">
    <h1 className="mx-auto mb-6 max-w-4xl text-center text-2xl font-bold capitalize leading-tight text-black md:text-[54px]">
      Get to Know Jagodana LLC: Your Trusted Digital Partner
    </h1>
    <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-black sm:text-xl">
      Innovative IT solutions and dedicated support to help your business thrive
    </p>
  </div>

  <div className="container mx-auto grid max-w-[1200px] grid-cols-1 justify-center gap-10 pb-[100px] md:grid-cols-3">
    <div className="flex flex-col items-center justify-center">
      <img src="https://www.jagodana.com/about-us/mission.svg" title="mission" alt="mission" height="auto" width="auto" className="max-h-[300px] max-w-[300px]" />
      <div className="flex flex-1 flex-col gap-4">
        <h2 className="text-center text-3xl font-bold uppercase">mission</h2>
        <p className="text-center text-lg text-black/50">
          At Jagodana LLC, our mission is to deliver tailored digital and IT services with transparency, empowering businesses to thrive and achieve sustainable growth.
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center">
      <img src="https://www.jagodana.com/about-us/vision.svg" title="vision" alt="vision" height="auto" width="auto" className="max-h-[300px] max-w-[300px]" />
      <div className="flex flex-1 flex-col gap-4">
        <h2 className="text-center text-3xl font-bold uppercase">vision</h2>
        <p className="text-center text-lg text-black/50">
          Our vision is to become a leading global digital service provider, setting new standards for innovation, quality, and customer satisfaction.
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center">
      <img src="https://www.jagodana.com/about-us/values.svg" title="values" alt="values" height="auto" width="auto" className="max-h-[300px] max-w-[300px]" />
      <div className="flex flex-1 flex-col gap-4">
        <h2 className="text-center text-3xl font-bold uppercase">values</h2>
        <p className="text-center text-lg text-black/50">
          Jagodana LLC is committed to excellence, integrity, and transparency, delivering top-tier services while driving growth and success for our clients.
        </p>
      </div>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
    <div className="relative -left-40 h-[400px] w-[400px] rounded-full bg-lightgray md:left-0 md:h-[600px] md:w-[600px] lg:-left-[100px] lg:h-[750px] lg:w-[750px] xl:-left-[200px] 2xl:-left-[400px]">
      <div className="absolute max-w-[250px] rounded-10 bg-white p-4 md:max-w-[300px] md:p-8 -right-16 top-5 md:right-16 lg:right-24 lg:top-24" style={{ boxShadow: "rgba(0, 0, 0, 0.04) 0px 30px 30px" }}>
        <h2 className="absolute -top-5 left-3 text-2xl font-bold text-black/30 md:text-4xl">1</h2>
        <h3 className="text-base font-bold md:text-lg">Professional Support</h3>
        <p className="text-sm text-black/70 md:text-base">
          Expert assistance to ensure long-term growth and measurable results.
        </p>
      </div>
      <div className="absolute max-w-[250px] rounded-10 bg-white p-4 md:max-w-[300px] md:p-8 -right-8 top-[calc(50%-58px)] md:top-[calc(50%-80px)] lg:right-0 lg:top-[calc(50%-80px)]" style={{ boxShadow: "rgba(0, 0, 0, 0.04) 0px 30px 30px" }}>
        <h2 className="absolute -top-5 left-3 text-2xl font-bold text-black/30 md:text-4xl">2</h2>
        <h3 className="text-base font-bold md:text-lg">Awesome Design</h3>
        <p className="text-sm text-black/70 md:text-base">
          Creative, modern designs that enhance user experience and drive engagement.
        </p>
      </div>
      <div className="absolute max-w-[250px] rounded-10 bg-white p-4 md:max-w-[300px] md:p-8 -right-16 bottom-5 md:right-16 lg:bottom-24 lg:right-24" style={{ boxShadow: "rgba(0, 0, 0, 0.04) 0px 30px 30px" }}>
        <h2 className="absolute -top-5 left-3 text-2xl font-bold text-black/30 md:text-4xl">3</h2>
        <h3 className="text-base font-bold md:text-lg">Planning & Execution</h3>
        <p className="text-sm text-black/70 md:text-base">
          Strategic planning and precise execution to achieve your business goals.
        </p>
      </div>
    </div>

    <div className="right-0 flex w-full max-w-[500px] flex-col items-center justify-center gap-5 lg:ml-[-100px] xl:max-w-[650px]">
      <div>
        <p className="text-center text-2xl font-bold md:text-3xl lg:text-6xl">
          We are the best in your area
        </p>
        <p className="text-center text-base text-black/50 md:text-lg lg:text-xl"></p>
      </div>
      <div className="flex justify-between gap-20 lg:p-5">
        <div className="flex flex-col items-center justify-center gap-1 lg:gap-2">
          <h2 className="text-base font-bold md:text-xl lg:text-2xl">10+</h2>
          <p className="text-base text-black/50 md:text-xl lg:text-2xl">Project done</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 lg:gap-2">
          <h2 className="text-base font-bold md:text-xl lg:text-2xl">10+</h2>
          <p className="text-base text-black/50 md:text-xl lg:text-2xl">Client</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 lg:gap-2">
          <h2 className="text-base font-bold md:text-xl lg:text-2xl">5+</h2>
          <p className="text-base text-black/50 md:text-xl lg:text-2xl">Running Project</p>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col gap-5 md:gap-12">
    <div data-aos="fade-up" className="flex flex-col items-center justify-center aos-init">
      <h2 className="mx-auto mb-6 max-w-4xl text-center text-2xl font-bold capitalize leading-tight text-black md:text-[54px]">
        Why Choose Us?
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-black sm:text-xl">
        Powering Your Success with Scalable, Secure, and Innovative SaaS Solutions
      </p>
    </div>

    <div className="mt-[-30px] grid grid-cols-1 gap-10 md:grid-cols-3">
      <div>
        <div className="rounded-xl text-card-foreground shadow flex flex-col gap-1 rounded-10 border-0 p-5 bg-white" style={{ boxShadow: "rgba(220, 220, 220, 0.5) 0px 7px 30px" }}>
          <img src="https://www.jagodana.com/about-us/scalable.png" alt="Scalable and Future-Proof" title="Scalable and Future-Proof" height="50" width="50" className="object-cover" />
          <p className="text-lg font-bold ">Scalable and Future-Proof</p>
          <p className="text-base text-black/50">
            We build flexible, scalable systems designed to adapt as your business grows, ensuring your platform remains robust and future-ready.
          </p>
        </div>
      </div>
      <div>
        <div className="rounded-xl text-card-foreground shadow flex flex-col gap-1 rounded-10 border-0 p-5 bg-lightgrey mt-10" style={{ boxShadow: "rgba(220, 220, 220, 0.5) 0px 7px 30px" }}>
          <img src="https://www.jagodana.com/about-us/support.png" alt="Ongoing Support and Maintenance" title="Ongoing Support and Maintenance" height="50" width="50" className="object-cover" />
          <p className="text-lg font-bold ">Ongoing Support and Maintenance</p>
          <p className="text-base text-black/50">
            Our commitment doesn’t end at launch. We provide continuous support, updates, and maintenance to keep your solution optimized and secure.
          </p>
        </div>
      </div>
      <div>
        <div className="rounded-xl text-card-foreground shadow flex flex-col gap-1 rounded-10 border-0 p-5 bg-white" style={{ boxShadow: "rgba(220, 220, 220, 0.5) 0px 7px 30px" }}>
          <img src="https://www.jagodana.com/about-us/time.png" alt="Fast Time-to-Market" title="Fast Time-to-Market" height="50" width="50" className="object-cover" />
          <p className="text-lg font-bold ">Fast Time-to-Market</p>
          <p className="text-base text-black/50">
            Our agile development process accelerates your product's time-to-market, giving you the competitive advantage you need.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>  
<Footer></Footer>
        </div>
    )
}
export default About