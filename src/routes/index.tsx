import { Routes, Route } from "react-router";
import { Home } from "@/pages/home";
import { ConfirmEmail, Login, NewPassword } from "@/pages/auth";

function Router() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="reset-password">
        <Route path="confirm-email" element={<ConfirmEmail />} />
        <Route path="new-password" element={<NewPassword />} />
      </Route>
    </Routes>
  )
}

export default Router