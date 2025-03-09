import { NavLink, Outlet } from 'react-router-dom'
import { data } from "."
import * as icons from "@/assets/icons"

function LayoutDashboardTabbar() {
  return (
    <div className="mb-24">
      <Outlet />
      <nav className="fixed bottom-0 w-full left-0 py-4 border-t bg-white px-2">
        <ul className="flex justify-between">
          {data.dashboard_navs.map((nav) => (
            <li className='flex flex-col items-center w-full'>
              <NavLink to={`/dashboard${nav.href ? `${nav.href}` : ""}`} className={({isActive}) => `${isActive && "bg-grey-light"} w-8 py-2 rounded-lg text-[10px] font-medium flex flex-col items-center`}>
                {/* todo: write correct dynamic types */}
                {/* @ts-ignore: icon names exist as icons */}
                <img src={icons[nav.icon]} width={20} />
              </NavLink>
              <span className='text-[8px]'>{nav.title}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default LayoutDashboardTabbar