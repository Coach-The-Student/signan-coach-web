import WordMark from "@/assets/wordmark.png";
import { Button, TableFooter } from "@/components/base";
import { Icon } from "@/components/inc";
import { Link, Outlet } from "react-router-dom";

function LayoutFooter() {
  return (
    <>
      <Outlet />
      <TableFooter className="px-44 max-sm:px-4 py-12 flex flex-col gap-24 max-sm:gap-8">
        {/* CTA Section */}
        <div
          className="w-full p-12 max-sm:p-6 rounded-xl text-white flex flex-col gap-4 max-sm:gap-3 items-center text-center"
          style={{
            background: "linear-gradient(45deg, black, #0052CC, #0052CC)",
          }}
        >
          <h4 className="font-bold text-2xl max-sm:text-lg">
            Ready to Achieve Your Goals?
          </h4>
          <p className="text-base max-sm:text-xs">
            Start your journey to success with expert coaching and
            <br />
            transform your life today
          </p>
          <Button
            className="bg-white text-grey-text font-bold mt-4 max-sm:mt-3 max-sm:text-sm"
            pill
            size="lg"
          >
            Get Started
          </Button>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-5 max-sm:grid-cols-1 px-6 max-sm:px-0 max-sm:gap-6">
          {/* Left Section (Logo + Socials + Email) */}
          <div className="col-span-2 max-sm:col-span-1 flex flex-col gap-4 max-sm:gap-3 items-start">
            <img
              src={WordMark}
              alt="Signan Solutions Logo"
              className="max-sm:w-full max-sm:max-w-[150px]"
            />
            <span className="text-lg max-sm:text-sm">
              Most reliable coaching system
            </span>
          </div>

          {/* Right Section (Company/Legal/Company Links) */}
          <div className="col-span-3 max-sm:col-span-1 grid grid-cols-3 gap-4 max-sm:gap-3 max-sm:order-2">
            <div className="flex flex-col gap-4">
              <h5 className="opacity-60 font-medium mb-2 text-base max-sm:text-xs">
                Company
              </h5>
              <Link to="" className="text-sm max-sm:text-xs">
                About Us
              </Link>
              <Link to="" className="text-sm max-sm:text-xs">
                Careers
              </Link>
              <Link to="" className="text-sm max-sm:text-xs">
                Partners
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="opacity-60 font-medium mb-2 text-base max-sm:text-xs">
                Legal
              </h5>
              <Link to="" className="text-sm max-sm:text-xs">
                Terms & Conditions
              </Link>
              <Link to="" className="text-sm max-sm:text-xs">
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="opacity-60 font-medium mb-2 text-base max-sm:text-xs">
                Company
              </h5>
              <Link to="" className="text-sm max-sm:text-xs">
                FAQs
              </Link>
              <Link to="" className="text-sm max-sm:text-xs">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Icons and Email (Moved Below on Small Screens) */}
          <div className="col-span-2 max-sm:col-span-1 flex flex-col gap-4 max-sm:gap-3 items-start max-sm:order-3">
            <div className="flex gap-2 max-sm:gap-1 max-sm:mt-4">
              <Icon
                name="linkedin"
                bg="#0052CC"
                size={20}
                className="max-sm:size-5"
              />
              <Icon
                name="twitter"
                bg="#0052CC"
                size={20}
                className="max-sm:size-5"
              />
              <Icon
                name="instagram"
                bg="#0052CC"
                size={20}
                className="max-sm:size-5"
              />
              <Icon
                name="facebook"
                bg="#0052CC"
                size={20}
                className="max-sm:size-5"
              />
            </div>
            <div className="flex flex-col">
              <span className="max-sm:text-xs">
                Support@signansolutions.com
              </span>
            </div>
          </div>
        </div>
      </TableFooter>
    </>
  );
}

export default LayoutFooter;
