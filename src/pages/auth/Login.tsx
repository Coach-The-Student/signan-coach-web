import { Button, Input } from "@/components/base"
import { Link } from "react-router-dom"

function Login() {
  return (
    <section className="w-full h-screen flex flex-col gap-6 justify-center items-center">
      <h2 className="text-2xl font-semibold text-center">
        Log in to back to<br />
        Signan Solution
      </h2>
      <form className="w-1/4 flex flex-col gap-2">
        <Input placeholder="Email address" />
        <Input placeholder="Password" />
        <Button size="lg">Continue</Button>
        <Link to="/reset-password/confirm-email" className="text-primary text-center text-sm">Forgot password?</Link>
      </form>
    </section>
  )
}

export default Login