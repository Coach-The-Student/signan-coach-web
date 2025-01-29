import { Button, Input } from "@/components/base"
import { Link, useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()

  const handleSubmit = (e:any) => {
    e.preventDefault()
    navigate("/verify-email")
  }

  return (
    <>
      <h2 className="text-2xl font-semibold">
        Create Account
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Input label="First Name" />
          <Input label="Last Name" />
        </div>
        <Input label="Email" />
        <Input label="Password" />
        <Input label="Confirm Password" />
        <Button size="lg" className="mt-4">Continue</Button>
      </form>
      <div className="flex flex-col items-center gap-2 text-sm">
        <p className="text-center">
          <span className="text-grey-text">Already have an account?</span>
          <Link to="/login" className="text-primary text-center text-sm ml-1">Login</Link>
        </p>
      </div>
    </>
  )
}

export default Register