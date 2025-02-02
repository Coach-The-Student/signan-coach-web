<<<<<<< HEAD
import { Avatar, AvatarFallback, AvatarImage } from "@/components/inc";
import { Link, Outlet } from "react-router-dom";
=======
import { Avatar, AvatarFallback, AvatarImage } from "@/components/inc"
import { Link, Outlet } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/inc"
import Logo from "@/assets/logo.png"
>>>>>>> origin/dev

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
<<<<<<< HEAD
      <header className="w-full h-[10vh] flex justify-between items-center px-6">
        <div></div>
=======
      <header className="w-full h-[5vh] md:h-[10vh] hidden lg:flex justify-between items-center px-6">
        <div>
          <img src={Logo} />
        </div>
>>>>>>> origin/dev
        <div>
          <nav>
            <ul className="hidden md:flex gap-5 items-center">
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
<<<<<<< HEAD
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
=======
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-4">
                  <DropdownMenuLabel className="flex gap-2 items-center mb-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <h4 className="text-sm font-medium">Nelson Mandela</h4>
                      <span className="text-xs text-grey-text font-normal">nelson@gmail.com</span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Help</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
>>>>>>> origin/dev
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
