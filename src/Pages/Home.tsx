
import { Link, NavLink } from "react-router";
import { ClientDemo } from "./ClientDemo";
import { MarqueeDemo } from "./SlideBar";
import Footer from "./Footer";

function Home() {
    return (
           
        <div className="container mx-auto mt-10 max-w-[1200px] flex-1 px-4">
            
            <div className="mb-[30px] md:mb-[64px]">
                <div
                    className="flex items-center justify-center overflow-hidden rounded-[32px] bg-cover p-8 md:p-24 lg:rounded-[50px]"
                    style={{ backgroundImage: 'url(https://www.jagodana.com/hero-section-bg.svg)' }}
                >
                    <div className="text-center">
                        <div className="relative inline-block">
                            <Link
                                className="rounded-full border-0 bg-white px-3 py-1 text-sm text-primary shadow-none"
                                to="/contact"
                            >
                                Contact us here
                            </Link>
                            <img
                                src="https://www.jagodana.com/icon/arrow.svg"
                                className="h-[50px] w-[50px]"
                                height={50}
                                width={50}
                                alt="navigation arrow"
                                title="navigation arrow"
                            />
                        </div>

                        <div data-aos="fade-up" className="flex flex-col items-center justify-center">
                            <h1 className="mx-auto mb-6 max-w-4xl text-center text-2xl font-bold capitalize leading-tight text-black md:text-[54px]">
                                Launch Your SaaS in Weeks, Not Months – Accelerate Your Success
                            </h1>
                            <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-black sm:text-xl">
                                Maximize your productivity and transform your digital presence with our innovative automation and custom development services tailored to your business.
                            </p>
                            <Link
                                className="max-h-6 rounded-[10px] bg-black bg-gradient-to-l from-black via-white/20 to-black text-sm font-semibold text-white shadow-lg px-6 py-6 flex justify-center items-center gap-2"
                                to="/contact"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-10 max-w-[1200px] flex-1 px-4">
                <div className="mb-[30px] md:mb-[64px]">
                    <div className="flex flex-col gap-[64px]">

                        {/* Header Section */}
                        <div
                            className="container mx-auto flex max-w-[800px] flex-col items-center justify-center gap-4 aos-init aos-animate"
                            data-aos="fade-up"
                        >

                            {/* Badge */}
                            <div className="flex items-center justify-center gap-3 rounded-full bg-lightgray">
                                <div className="h-[32px] w-[32px] rounded-full bg-black">
                                    <img
                                        src="https://www.jagodana.com/icon/progress.svg"
                                        height="auto"
                                        width="auto"
                                        className="p-1"
                                        alt="Your Software Progress icon"
                                        title="Your Software Progress icon"
                                    />
                                </div>
                                <p className="pr-4 text-sm">Your Software Progress</p>
                            </div>

                            {/* Title */}
                            <p className="text-center text-[24px] font-semibold leading-tight md:text-[42px]">
                                Transform Creative Challenges into Real Solutions
                            </p>

                            {/* Subtitle */}
                            <p className="text-center text-[18px] font-normal leading-tight">
                                Empower your business by turning complex challenges into streamlined solutions
                                with diverse perspectives and efficient processes.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="flex flex-col gap-6 md:flex-row">

                            {/* Card 1 */}
                            <div
                                className="rounded-xl bg-card text-card-foreground shadow flex flex-col gap-3 rounded-10 border-0 p-4"
                                style={{ boxShadow: '0 7px 30px #0000000a' }}
                            >
                                <p className="text-xl font-semibold">Seamless Workflow Automation</p>
                                <p className="text-base">
                                    Automate tedious tasks and enhance workflows with our intelligent tools,
                                    saving time and boosting efficiency.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div
                                className="rounded-xl bg-card text-card-foreground shadow flex flex-col gap-3 rounded-10 border-0 p-4"
                                style={{ boxShadow: '0 7px 30px #0000000a' }}
                            >
                                <p className="text-xl font-semibold">Tailored Web Development</p>
                                <p className="text-base">
                                    Craft unique web experiences that meet your exact business needs
                                    with our flexible, scalable solutions.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>




            </div>

            <div className="mb-[30px] md:mb-[64px]">
                <div
                    className="flex flex-col items-center justify-center overflow-hidden rounded-[50px] bg-cover p-8 md:p-12"
                    style={{ backgroundImage: "url('https://www.jagodana.com/subscribe-bg.svg')" }}
                >
                    <div data-aos="fade-up" className="flex flex-col items-center justify-center aos-init aos-animate">
                        <h2 className="mx-auto mb-6 max-w-4xl text-center text-2xl font-bold capitalize leading-tight text-black md:text-[54px]">
                            State-of-the-Art Tools and Technologies
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-black sm:text-xl">
                            Harness the power of the latest automation, SaaS, and development technologies to stay ahead of the curve.
                        </p>
                    </div>


                 <ClientDemo></ClientDemo>
                  
                </div>
            </div>

            <div
                    className="container mx-auto flex max-w-[800px] flex-col items-center justify-center gap-4 aos-init aos-animate"
                    data-aos="fade-up "
                >
                    <div className="flex items-center justify-center gap-3 rounded-full bg-lightgray mt-8">
                        <div className="h-[32px] w-[32px] rounded-full bg-black">
                            <img
                                src="https://www.jagodana.com/icon/client.svg"
                                height="auto"
                                width="auto"
                                className="p-1"
                                alt="Our Customers icon"
                                title="Our Customers icon"
                            />
                        </div>
                        <p className="pr-4 text-sm">Our Customers</p>
                    </div>
                    <p className="text-center text-[24px] font-semibold leading-tight md:text-[42px]">
                        Hear from Our Happy Clients
                    </p>
                    <p className="text-center text-[18px] font-normal leading-tight">
                        Our clients love us for delivering outstanding results, easy-to-use solutions, and excellent support.
                    </p>
                </div>
                <MarqueeDemo></MarqueeDemo>

                <div className="grid grid-cols-1 gap-3 rounded-32 bg-lightgray  md:gap-[62px] md:p-[62px] lg:grid-cols-2 lg:rounded-50 ">
                    <div>
                        <h2 className="text-center text-[24px] font-medium md:text-start md:text-[48px]">
                            Collaboration Without Boundaries
                        </h2>
                        <p className="border-b pb-8 text-center text-base md:text-start md:text-xl">
                            Work effortlessly with our team, enjoying seamless communication and efficient project delivery, no matter where you are.
                        </p>
                    </div>
                    <div>
                        <div>
                            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                                <div
                                    className="absolute"
                                    style={{
                                        left: "20%",
                                        top: "20%",
                                        willChange: "transform",
                                        transform: "translateX(70%) translateY(60%) scale(3)"
                                    }}
                                >
                                    <NavLink to="https://www.linkedin.com/in/jagodana-abhi-8237a8269/">
                                        <img
                                            src="https://media.licdn.com/dms/image/v2/D4D03AQHi-ZYDdrqUMA/profile-displayphoto-scale_400_400/B4DZd8Wm_AHkAg-/0/1750137991739?e=1755734400&v=beta&t=ngHX8kKXsDObNpDMWTYz5ITV14Pi8a9wzdaVuI87T9Y"
                                            alt="Abhi Jagodana"
                                            title="profile icon for abhi Jagodana"
                                            className="h-12 w-12 rounded-full border-2 border-white"
                                            height="auto"
                                            width="auto"
                                        />
                                    </NavLink>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="flex items-center justify-center overflow-hidden rounded-32 bg-cover p-8 lg:rounded-50"
                    style={{
                        backgroundImage: 'url("https://www.jagodana.com/subscribe-bg.svg")'
                    }}
                >
                    <div className="text-center ">
                        <div
                            data-aos="fade-up"
                            className="flex flex-col items-center justify-center aos-init aos-animate "
                        >
                            <h2 className="mx-auto mb-6 max-w-4xl text-center text-2xl font-bold capitalize leading-tight text-black md:text-[54px]">
                                Ready to Take the Next Step?
                            </h2>
                            <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-black sm:text-xl">
                                Subscribe now and unlock unlimited designs for one simple monthly fee. Let's create something amazing together.
                            </p>
                            <Link
                                className="max-h-6 rounded-10 bg-black bg-gradient-to-l from-black via-white/20 to-black text-sm font-semibold text-white shadow-lg px-6 py-6 flex justify-center items-center gap-2"
                                to="/contact"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
             <Footer></Footer>
        </div>

    )
}
export default Home;