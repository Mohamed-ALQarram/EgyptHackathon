/**
 * App.jsx - نقطة الدخول الرئيسية للتطبيق
 * يحتوي على إعداد React Router v6/v7
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuestLanding from "./pages/GuestLanding";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* صفحة الهبوط الرئيسية */}
        <Route path="/" element={<GuestLanding />} />

        {/* يمكنك إضافة صفحات جديدة هنا */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
