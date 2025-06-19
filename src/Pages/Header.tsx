import { Link } from "react-router";
function Header(){
    return(
        <div>
      
                      <div className="container sticky top-8 z-[100] mx-auto flex items-center justify-between rounded-10 bg-white px-4 py-4 transition-all md:px-8 max-w-[1200px]">
                          <a className="flex h-[36px] flex-1 content-center items-center justify-start gap-1 text-center md:gap-2" href="/" >
                              <img src="https://www.jagodana.com/logo.jpg" width="36" height="36" alt="company logo" title="company logo" className="max-h-[36px] object-contain" />
                              <p className="text-center text-xl font-bold capitalize">Jagodana LLC</p>
                          </a>
                          <div className="hidden items-center justify-center gap-5 lg:flex">
                              <div className="font-semibold">
                                  <Link to="/Product">Products</Link>
                              </div>
          
                              <Link
                                  className="max-h-6 rounded-10 bg-black bg-gradient-to-l from-black via-white/20 to-black text-sm font-semibold text-white shadow-lg px-6 py-6 flex justify-center items-center gap-2"
                                  to="/contact"
                              >
                                  Contact Us
                              </Link>
                          </div>
          
                          <div className="z-[10] flex items-center justify-center lg:hidden">
                              <img
                                  src="https://www.jagodana.com/icon/menu.svg"
                                  alt="menu icon"
                                  title="menu-icon"
                                  height="20"
                                  width="20"
                              />
                          </div>
                      </div>

                      </div>
              )
          }
         
export default Header;