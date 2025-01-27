import { Routes, Route } from "react-router";
import { Dashboard } from "@/pages/dashboard";
import { ConfirmEmail, Login, NewPassword } from "@/pages/auth";

function Router() {
  return (
    <Routes>
      {/* auth */}
      <Route path="login" element={<Login />} />
      <Route path="reset-password">
        <Route path="confirm-email" element={<ConfirmEmail />} />
        <Route path="new-password" element={<NewPassword />} />
      </Route>

      {/* dashboard */}
      <Route path="" element={<Dashboard />} />
    </Routes>
  )
}

export default Router