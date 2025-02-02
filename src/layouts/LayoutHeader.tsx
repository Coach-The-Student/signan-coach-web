import { Avatar, AvatarFallback, AvatarImage } from "@/components/inc";
import { Link, Outlet } from "react-router-dom";

function LayoutHeader() {
  const navs = [
    {
      title: "Coaching Dashboard",
      href: "",
    },
    {
      title: "Coaching Marketplace",
      href: "",
    },
    {
      title: "AI Content",
      href: "",
    },
    {
      title: "Home",
      href: "",
    },
  ];

  return (
    <div>
      <header className="w-full h-[10vh] flex justify-between items-center px-6">
        <div></div>
        <div>
          <nav>
            <ul className="flex gap-5 items-center">
              {navs.map((nav) => (
                <li>
                  <Link
                    to={nav.href}
                    className="text-grey-text text-sm text-[#3A3A3ACC]"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
              <li>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default LayoutHeader;
