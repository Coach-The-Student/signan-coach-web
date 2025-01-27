import { LayoutHeader, LayoutSidebar } from "./layouts"
import Router from "./routes"

function App() {
  const userLoggedIn = true

  return (
    <>
      {userLoggedIn && <LayoutHeader />}
      <section className="w-full flex">
        {userLoggedIn && <LayoutSidebar />}
        <main className={`${userLoggedIn && "border-l border-t"} w-[80%]`}>
          <Router />
        </main>
      </section>
    </>
  )
}

export default App
