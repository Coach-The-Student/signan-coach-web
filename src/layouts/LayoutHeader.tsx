import Logo from "@/assets/logo.png"
import { Button } from "@/components/base"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { data } from "."

function LayoutHeader() {
  const navigate = useNavigate()

  return (
    <>
      <header className="mt-8 px-44 w-full">
        <div className="flex justify-between items-center w-full py-2 px-8 shadow-md rounded-full bg-white">
          <div className="flex items-center gap-2">
            <img src={Logo} />
            <h1 className="font-bold">Signan Solution</h1>
          </div>
          <nav className="flex gap-8">
            <ul className="flex items-center">
              {data.navs.map((nav) => (
                <li>
                  <NavLink
                    to={nav.href}
                    className={({isActive}) => `${isActive && "bg-grey-light border text-grey-text"} relative text-[#4D4D4D] w-full py-2 px-4 rounded-full text-sm font-medium flex flex-col items-center gap-4`}
                    children={({isActive}) => (
                      <>
                        <span>{nav.title}</span>
                        <hr className={`${isActive ? "opacity-100" : "opacity-0"} absolute bottom-[1px] w-1/3 h-[3px] bg-primary rounded-full`} />
                      </>
                    )}
                  />
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <Button variant="grey" className="rounded-full px-6" onClick={() => navigate("/dashboard/coach-or-client")}>Login</Button>
              <Button className="rounded-full" onClick={() => navigate("/dashboard/coach-or-client?type=new_user")}>Get started</Button>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default LayoutHeader