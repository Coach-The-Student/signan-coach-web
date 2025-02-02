import { getScreenWidth } from "@/helpers"
import { useEffect, useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { data, LayoutTabbar } from "."
import * as icons from "@/assets/icons"

function LayoutSidebar() {
  const [ breakPoint, setBreakPoint ] = useState("")

  useEffect(() => {
    const { type } = getScreenWidth()
    setBreakPoint(type)

    window.addEventListener("resize", () => {
      const { type } = getScreenWidth()
      setBreakPoint(type)
    })
  }, [])

  if (breakPoint === "md" || breakPoint === "sm") return <LayoutTabbar />
  return (
    <div className="flex">
      <aside className="fixed w-[18%] h-[90vh] px-4 py-8 flex flex-col justify-between">
        <nav>
          <ul className="flex flex-col">
            {data.navs.map((nav) => (
              <li>
                <NavLink to={nav.href} className={({isActive}) => `${isActive && "bg-grey-light"} w-full py-3 px-4 rounded-lg text-xs font-medium flex items-center gap-4`}>
                  {/* todo: write correct dynamic types */}
                  {/* @ts-ignore: icon names exist as icons */}
                  <img src={icons[nav.icon]} width={20} />
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-3">
          <div className="bg-grey-light rounded-xl mx-2 p-4">
            <div className="flex items-center gap-2">
              <img src={icons["comment"]} />
              <h4 className="text-xs font-bold">Disclaimer</h4>
            </div>
            <ul className="list-disc list-outside ml-4 mt-2 text-xs text-grey-text">
              <li>Data about revenue for the week is incomplete</li>
              <li>The monthly report always includes the most updated information</li>
            </ul>
          </div>
          <ul className="flex gap-4 px-4 text-xs text-grey-text">
            <li>Terms & Privacy</li>
            <li>Help</li>
          </ul>
        </div>
      </aside>
      <main className="ml-[18%] w-full min-h-[90vh] border border-l border-t">
        <Outlet />
      </main>
    </div>
  )
}

export default LayoutSidebar