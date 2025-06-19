import { Link } from "react-router";
function Footer(){
    return(
    <div>
    <div className="border-t border-black">
  <div className="container mx-auto flex max-w-[1200px] flex-col p-4 md:py-10">
    <div className="flex flex-col justify-center gap-3 border-b pb-5 max-md:items-center md:flex-row md:justify-between">
      <ul className="flex flex-wrap justify-center gap-3">
        <li className="font-semibold">
          <a href="/">Home</a>
        </li>
        <li className="font-semibold">
          <Link to="/Product">Products</Link>
        </li>
        <li className="font-semibold">
          <Link to="/About">About Us</Link>
        </li>
        <li className="font-semibold">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="font-semibold">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="font-semibold">
          <Link to="/docs">Docs</Link>
        </li>
      </ul>
      {/* <div className="flex gap-6">
        <a
          className="hover:animate-bounce hidden"
          target="_blank"
          href="/"
        >
          <img
            src="https://www.jagodana.com/icon/x.svg"
            height="32"
            width="32"
            alt="x-icon"
            title="x-icon"
          />
        </a>
        <a
          className="hover:animate-bounce hidden"
          target="_blank"
          href="/"
        >
          <img
            src="https://www.jagodana.com/icon/instagram.svg"
            height="32"
            width="32"
            alt="instagram-icon"
            title="instagram-icon"
          />
        </a>
        <a
          className="hover:animate-bounce block"
          target="_blank"
          href="https://www.linkedin.com/company/jagodana-llc"
        >
          <img
            src="https://www.jagodana.com/icon/linkedin.svg"
            height="32"
            width="32"
            alt="linkedin-icon"
            title="linkedin-icon"
          />
        </a>
      </div> */}
    </div>
    <div className="flex flex-col justify-center gap-3 pt-5 max-md:items-center md:flex-row md:justify-between">
      <div className="order-2 flex flex-col text-[15px] md:order-1">
        <span>© 2025 Jagodana LLC. All rights reserved.</span>
        <span className="text-gray-400">1021 E Lincolnway, 7463 Cheyenne, WY 82001</span>
        <span className="text-gray-400">support@jagodana.org</span>
      </div>
      <div className="order-1 flex justify-center gap-5 md:order-2">
        <Link className="font-semibold" to="/privacy">
          Privacy Policy
        </Link>
        <Link className="font-semibold" to="/Terms">
          Terms Of Services
        </Link>
      </div>
    </div>
  </div>
</div>
    </div>
    )
}
export default Footer;