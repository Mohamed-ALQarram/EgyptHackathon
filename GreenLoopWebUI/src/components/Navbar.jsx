/**
 * Navbar.jsx - شريط التنقل العلوي
 * يحتوي على اللوجو، روابط التنقل، وزر تسجيل الدخول
 * يدعم القائمة المتجاوبة للموبايل مع تأثيرات scroll
 */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../commons/Icon";
import Button from "../commons/Button";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { label: "الرئيسية", href: "#home" },
        { label: "خدماتنا", href: "#services" },
        { label: "عن الشركة", href: "#personas" },
        { label: "تواصل معنا", href: "#footer" },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // إغلاق القائمة عند الضغط على رابط
    const handleLinkClick = () => setIsMobileMenuOpen(false);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                backgroundColor: isScrolled ? "rgba(255,255,255,0.97)" : "transparent",
                backdropFilter: isScrolled ? "blur(20px)" : "none",
                boxShadow: isScrolled ? "0 4px 30px rgba(0,0,0,0.08)" : "none",
                padding: isScrolled ? "12px 0" : "20px 0",
            }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                    {/* === اللوجو === */}
                    <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
                        <div
                            style={{
                                width: "44px",
                                height: "44px",
                                background: "linear-gradient(135deg, #1B5E20, #4CAF50)",
                                borderRadius: "14px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 15px rgba(76, 175, 80, 0.3)",
                                transition: "transform 0.3s, box-shadow 0.3s",
                            }}
                        >
                            <Icon name="leaf" size={24} color="white" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span
                                style={{
                                    fontSize: "22px",
                                    fontWeight: 800,
                                    color: isScrolled ? "#1B5E20" : "#fff",
                                    transition: "color 0.3s",
                                    lineHeight: 1.2,
                                }}
                            >
                                Green Loop
                            </span>
                            <span
                                style={{
                                    fontSize: "11px",
                                    fontWeight: 600,
                                    color: isScrolled ? "#4CAF50" : "#AED581",
                                    transition: "color 0.3s",
                                    marginTop: "-2px",
                                }}
                            >
                                جرين لوب
                            </span>
                        </div>
                    </Link>

                    {/* === روابط التنقل (Desktop) === */}
                    <div style={{ display: "none" }} className="md:!flex md:items-center md:gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                style={{
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    color: isScrolled ? "#3E2723" : "rgba(255,255,255,0.9)",
                                    textDecoration: "none",
                                    transition: "color 0.3s",
                                    position: "relative",
                                    paddingBottom: "4px",
                                }}
                                className="hover:!text-leaf"
                                onMouseEnter={(e) => e.target.style.color = "#4CAF50"}
                                onMouseLeave={(e) => e.target.style.color = isScrolled ? "#3E2723" : "rgba(255,255,255,0.9)"}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* === زر تسجيل الدخول (Desktop) === */}
                    <div style={{ display: "none" }} className="md:!block">
                        <Button variant={isScrolled ? "primary" : "outline"} size="sm">
                            تسجيل الدخول
                        </Button>
                    </div>

                    {/* === زر القائمة (Mobile) === */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:!hidden"
                        style={{
                            padding: "8px",
                            borderRadius: "10px",
                            color: isScrolled ? "#3E2723" : "#fff",
                            cursor: "pointer",
                            transition: "all 0.3s",
                        }}
                        aria-label="القائمة"
                    >
                        <Icon name={isMobileMenuOpen ? "close" : "menu"} size={26} />
                    </button>
                </div>

                {/* === قائمة الموبايل === */}
                <div
                    style={{
                        overflow: "hidden",
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        maxHeight: isMobileMenuOpen ? "500px" : "0",
                        opacity: isMobileMenuOpen ? 1 : 0,
                        marginTop: isMobileMenuOpen ? "16px" : "0",
                    }}
                    className="md:!hidden"
                >
                    <div
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "20px",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                            padding: "24px",
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                                style={{
                                    display: "block",
                                    padding: "12px 16px",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    color: "#3E2723",
                                    textDecoration: "none",
                                    borderRadius: "12px",
                                    marginBottom: "4px",
                                    transition: "all 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#E8F5E9";
                                    e.target.style.color = "#4CAF50";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "#3E2723";
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div style={{ paddingTop: "16px", borderTop: "1px solid #f0f0f0", marginTop: "8px" }}>
                            <Button variant="primary" fullWidth size="md">
                                تسجيل الدخول
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
