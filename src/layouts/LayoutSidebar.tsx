import { NavLink, Outlet } from "react-router-dom"

function LayoutSidebar() {
  const navs = [
    {
      title: "Dashboard",
      href: "",
      icon: "dashboard"
    },
    {
      title: "Engagements",
      href: "/engagements",
      icon: "engagements"
    },
    {
      title: "Resources",
      href: "/resources",
      icon: "resources"
    },
    {
      title: "Clients",
      href: "/clients",
      icon: "clients"
    },
    {
      title: "Report",
      href: "/report",
      icon: "report"
    },
    {
      title: "Settings",
      href: "/settings",
      icon: "settings"
    }
  ]

  return (
    <div className="flex">
      <aside className="fixed w-[18%] h-[90vh] px-4 py-8 flex flex-col justify-between">
        <nav>
          <ul className="flex flex-col">
            {navs.map((nav) => (
              <li>
                <NavLink to={nav.href} className={({isActive}) => `${isActive && "bg-grey-light"} inline-block w-full py-3 px-4 rounded-lg text-xs font-medium`}>{nav.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-3">
          <div className="bg-grey-light rounded-xl mx-2 p-4">
            <h4 className="text-xs font-bold">Disclaimer</h4>
            <ul className="list-disc list-outside ml-3 mt-2 text-xs text-grey-text">
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