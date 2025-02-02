import { Routes, Route } from "react-router";
import { Dashboard } from "@/pages/dashboard";
import { ConfirmEmail, Login, NewPassword, Register, VerifyEmail } from "@/pages/auth";
import { LayoutAuth } from "@/pages/auth/layouts";
import { LayoutHeader, LayoutSidebar } from "@/layouts";

function Router() {
  return (
    <Routes>
      {/* auth */}
      <Route element={<LayoutAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="reset-password">
          <Route path="confirm-email" element={<ConfirmEmail />} />
          <Route path="new-password" element={<NewPassword />} />
        </Route>
      </Route>

      {/* dashboard */}
      <Route element={<LayoutHeader />}>
        <Route element={<LayoutSidebar />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Router