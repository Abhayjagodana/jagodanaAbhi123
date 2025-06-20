import { useForm } from "react-hook-form";
  
import Footer from "./Footer";
import { NavLink } from "react-router";

function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
  return (
    <div className="container mx-auto mb-12 mt-[30px] flex max-w-[1200px] flex-col px-4">
      <div data-aos="fade-up" className="flex flex-col items-center justify-center aos-init aos-animate">
        <h1 className="mx-auto mb-6 max-w-4xl text-center text-2xl font-bold capitalize leading-tight text-black md:text-[54px]">
          Get in Touch with Us!
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-black sm:text-xl">
          We’re here to help—reach out for solutions tailored to grow your business.
        </p>
      </div>

      <div className="h-full w-full">
        <canvas style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 10001
        }} />

        <div
          className="grid w-full grid-cols-1 gap-5 rounded-50 bg-cover bg-no-repeat p-4 md:grid-cols-2 md:p-8 lg:p-20
      bg-gradient-to-r from-emerald-100 from-emerald-50 via-yellow-50  to-fuchsia-200"
        >
          <div className="flex flex-col gap-5">
            <h2 className="text-star text-center text-3xl font-bold">
              Reach out by filling the form.
            </h2>

            <form onSubmit={handleSubmit((data) => console.log(data))}  >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
                {/* First Name */}
                <div>
                  <div className="MuiFormControl-root MuiTextField-root w-full border-b border-black bg-white placeholder:text-[16px] placeholder:text-[#0000004D] focus:outline-none css-1pv2xcc">
                    <input
                      type="text"
                      placeholder="First Name"
                      {...register("firstName",
                        {
                          required: { value: true, message: "*Please Fil Require" },
                          maxLength: { value: 20, message: "MAx lenth At least 20" },
                          minLength: { value: 3, message: "*Min length At least 3" },
                          pattern: { value: /^[A-Za-z]+$/i, message: "please Enter Only Character " }
                        })}

                      className="w-full h-12 px-4 border-2 border-black rounded-md"></input>
                    {typeof errors.firstName?.message === "string" && (
                      <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                    )}

                    <div className="MuiInputBase-root MuiOutlinedInput-root css-iz33ar">

                    </div>
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <div className="MuiFormControl-root MuiTextField-root w-full border-b border-black bg-white placeholder:text-[16px] placeholder:text-[#0000004D] focus:outline-none css-1pv2xcc">
                    <input
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName", {
                        required: { value: true, message: "Please Fill Require" },
                        minLength: { value: 3, message: "Min Length At least 3" },
                        maxLength: { value: 20, message: "Max Length At least 20" },
                        pattern: { value: /^[A-Za-z]+$/i, message: "please Enter Only Character" }
                      })}
                      className="w-full h-12 px-4 border-2 border-black rounded-md"></input>
                    {typeof errors.lastName?.message === "string" && (
                      <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                    )}
                    <div className="MuiInputBase-root MuiOutlinedInput-root css-iz33ar">

                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <div className="MuiFormControl-root MuiTextField-root w-full border-b border-black bg-white placeholder:text-[16px] placeholder:text-[#0000004D] focus:outline-none css-1pv2xcc">
                    <input
                      type="Email"
                      placeholder="Email-Address"
                      {...register("email", {
                        required: { value: true, message: "Please Fill Require" },

                      })}
                      className="w-full h-12 px-4 border-2 border-black rounded-md"></input>
                    <div className="MuiInputBase-root MuiOutlinedInput-root css-iz33ar">
                      {typeof errors.email?.message === "string" && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <div className="MuiFormControl-root MuiTextField-root w-full border-b border-black bg-white placeholder:text-[16px] placeholder:text-[#0000004D] focus:outline-none css-1pv2xcc">
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      {...register("mobilenumber", {
                        required: { value: true, message: "please Fill Require" },
                        pattern: { value: /^[0-9]{10}$/, message: "Please Enter 10 Digit" }
                      })}
                      className="w-full h-12 px-4 border-2 border-black rounded-md"></input>
                    {typeof errors.mobilenumber?.message === "string" && (
                      <p className="text-red-500 text-sm">{errors.mobilenumber.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <div className="MuiFormControl-root MuiTextField-root mt-5 w-full bg-white placeholder:text-[16px] placeholder:text-[#0000004D] focus:outline-none css-1pv2xcc">
                    <textarea
                      placeholder="Write your message here..."
                      {...register("message", {
                        required: { value: true, message: "Please Fill rquire" },
                        minLength: { value: 7, message: "minlength At least 7" }
                      })}
                      className="w-full h-28 px-4 py-2 border-2 border-black rounded-md resize-none"></textarea>
                    {typeof errors.message?.message === "string" && (
                      <p className="text-red-500 text-sm">{errors.message.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 w-full rounded-10 bg-black bg-gradient-to-l from-black via-white/20 to-black py-6 text-[16px] text-white hover:bg-black"
              > 
                <p className="px-[30px] py-[5px] "  >Submit</p>
              </button>
            </form>
            {/* Contact Info */}
            <div className="flex flex-col gap-4 rounded-10 py-4">
              <div>
                <a
                  className="flex gap-2 rounded-5 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.jagodana.com/icon/location-icon.svg"
                >
                  <img src="https://www.jagodana.com/icon/location-icon.svg" alt="location" title="location" height="24" width="24" />
                  <p>1021 E Lincolnway, 7463 Cheyenne, WY 82001</p>
                </a>
              </div>
              <div>
                <a
                  className="flex gap-2 rounded-5 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:support@jagodana.org"
                >
                  <img src="https://www.jagodana.com/icon/email-icon.svg" alt="email" title="email" height="24" width="24" />
                  <p>support@jagodana.org</p>
                </a>
              </div>
            </div>
          </div>

          {/* Location Image */}
          <NavLink
            className="flex"
            target="_blank"
            rel="noopener noreferrer"
            to="https://www.bing.com/maps?q=platinum+park+surat&cvid=a3b35ecb47e0417dabe958396e080321&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCTEwNzgyajBqNKgCBLACAQ&FORM=ANAB01&PC=U531"
          >
            <img
              src="https://www.jagodana.com/company-location/map.png "
              className="h-full w-full rounded-10 object-cover"
              alt="company location"
              title="company location"
            />
          </NavLink>
        </div>
      </div>
      <Footer></Footer>
    </div>

  );
}

export default Contact;
