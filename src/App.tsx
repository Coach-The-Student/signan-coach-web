import { Suspense } from "react"
import Router from "./routes"
import { Loader } from "./components/inc"

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router />
    </Suspense>
  )
}

export default App
