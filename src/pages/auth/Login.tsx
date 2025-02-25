import { Button, Input } from "@/components/base"
import { Link, useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const handleSubmit = (e:any) => {
    e.preventDefault()
    navigate("/dashboard")
  }

  return (
    <>
      <h2 className="text-2xl font-semibold">
        Sign In
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input label="Email address" />
        <Input label="Password" />
        <Button size="lg" className="mt-4">Continue</Button>
      </form>
      <div className="flex flex-col items-center gap-2 text-sm">
        <Link to="/dashboard/reset-password/confirm-email" className="text-primary text-center text-sm">Forgot password?</Link>
        <p className="text-center">
          <span className="text-grey-text">Don't have an account?</span>
          <Link to="/dashboard/register" className="text-primary text-center text-sm ml-1">Create Account</Link>
        </p>
      </div>
    </>
  )
}

export default Login