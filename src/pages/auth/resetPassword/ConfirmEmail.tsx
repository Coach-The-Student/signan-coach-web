import { Button, Input } from "@/components/base"
import { Link, useNavigate } from "react-router-dom"

function ConfirmEmail() {
  const navigate = useNavigate()

  const handleSubmit = (e:any) => {
    e.preventDefault()
    navigate("/reset-password/new-password")
  }

  return (
    <section className="w-full h-screen flex flex-col gap-6 justify-center items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-center">
          Reset your password
        </h2>
        <p className="text-grey-text text-center text-sm">
          Enter your email address so we can you a link to reset<br />
          your password
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-1/4 flex flex-col gap-2">
        <Input placeholder="Email address" />
        <Button type="submit" size="lg">Continue</Button>
        <Link to="/login" className="text-primary text-center text-sm">Back to Log In</Link>
      </form>
    </section>
  )
}

export default ConfirmEmail