/**
 * GuestLanding.jsx - صفحة الهبوط الرئيسية للزوار
 * تجمع كل مكونات الصفحة في مكان واحد
 */
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Personas from "../components/Personas";
import Footer from "../components/Footer";

const GuestLanding = () => {
    return (
        <div className="min-h-screen">
            {/* شريط التنقل - ثابت أعلى الصفحة */}
            <Navbar />

            {/* القسم الرئيسي */}
            <Hero />

            {/* قسم الخدمات */}
            <Services />

            {/* قسم شرائح المستخدمين */}
            <Personas />

            {/* الفوتر */}
            <Footer />
        </div>
    );
};

export default GuestLanding;
