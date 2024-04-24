import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Verification from "./pages/Verification";
import PasswordReset from "./pages/PasswordReset";
import ResetNewPassword from "./pages/ResetNewPassword";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./utils/ProtectedRoute";
import MultiColumnLayout from "./pages/Layout/MultiColumnLayout/MultiColumnLayout";
import HolyGrailLayout from "./pages/Layout/HolyGrailLayout/HolyGrailLayout";
import MasonryStyleLayout from "./pages/Layout/MasonryStyleLayout/MasonryStyleLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-email" element={<Verification />} />
      <Route path="/password-reset" element={<PasswordReset />} />
      <Route path="/password-reset/:token" element={<ResetNewPassword />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/layout/multi-column-layout"
        element={<MultiColumnLayout />}
      />
      <Route path="/layout/holy-grail-layout" element={<HolyGrailLayout />} />
      <Route
        path="/layout/masonry-style-layout"
        element={<MasonryStyleLayout />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
