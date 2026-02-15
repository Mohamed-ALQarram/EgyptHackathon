import { Link } from "react-router-dom";
import Icon from "../commons/Icon";

const Footer = () => {
    const year = new Date().getFullYear();

    const sections = [
        { title: "روابط سريعة", links: [{ label: "الرئيسية", href: "#home" }, { label: "خدماتنا", href: "#services" }, { label: "عن الشركة", href: "#personas" }, { label: "الأسعار", href: "#" }] },
        { title: "خدماتنا", links: [{ label: "تجميع من المنزل", href: "#" }, { label: "خدمات الشركات", href: "#" }, { label: "بيع مواد خام", href: "#" }, { label: "برنامج الولاء", href: "#" }] },
        { title: "الدعم", links: [{ label: "الأسئلة الشائعة", href: "#" }, { label: "سياسة الخصوصية", href: "#" }, { label: "الشروط والأحكام", href: "#" }, { label: "اتصل بنا", href: "#" }] },
    ];

    const socials = [
        { name: "facebook", href: "#", label: "فيسبوك" },
        { name: "twitter", href: "#", label: "تويتر" },
        { name: "instagram", href: "#", label: "إنستجرام" },
    ];

    return (
        <footer id="footer" style={{ backgroundColor: "#3E2723", color: "#fff" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "48px" }}>
                    {/* Brand Column */}
                    <div style={{ gridColumn: "span 1" }} className="lg:col-span-2">
                        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "24px" }}>
                            <div style={{ width: 44, height: 44, background: "linear-gradient(135deg,#1B5E20,#4CAF50)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Icon name="leaf" size={22} color="white" />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <span style={{ fontSize: 22, fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>Green Loop</span>
                                <span style={{ fontSize: 11, color: "#66BB6A", marginTop: -2 }}>جرين لوب</span>
                            </div>
                        </Link>
                        <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9, marginBottom: 24, maxWidth: 380, fontSize: 14 }}>
                            منصة Green Loop هي حلقة الوصل بين الأفراد والشركات ومصانع إعادة التدوير. هدفنا بناء اقتصاد دائري يحافظ على البيئة ويخلق فرص عمل جديدة.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            <a href="mailto:info@greenloop.com" style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 14, transition: "color 0.3s" }}
                                onMouseEnter={e => e.currentTarget.style.color = "#4CAF50"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                                <Icon name="mail" size={18} /><span>info@greenloop.com</span>
                            </a>
                            <a href="tel:+201234567890" style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 14, transition: "color 0.3s" }}
                                onMouseEnter={e => e.currentTarget.style.color = "#4CAF50"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                                <Icon name="phone" size={18} /><span dir="ltr">+20 123 456 7890</span>
                            </a>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
                                <Icon name="location" size={18} /><span>القاهرة، مصر</span>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    {sections.map(sec => (
                        <div key={sec.title}>
                            <h4 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 24 }}>{sec.title}</h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                                {sec.links.map(l => (
                                    <li key={l.label}>
                                        <a href={l.href} style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: 14, transition: "all 0.3s" }}
                                            onMouseEnter={e => { e.target.style.color = "#4CAF50"; e.target.style.paddingRight = "8px"; }}
                                            onMouseLeave={e => { e.target.style.color = "rgba(255,255,255,0.45)"; e.target.style.paddingRight = "0"; }}>
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "20px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                    <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 14, margin: 0 }}>© {year} Green Loop. جميع الحقوق محفوظة.</p>
                    <div style={{ display: "flex", gap: 12 }}>
                        {socials.map(s => (
                            <a key={s.name} href={s.href} aria-label={s.label}
                                style={{ width: 42, height: 42, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "all 0.3s" }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#4CAF50"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(255,255,255,0.45)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                                <Icon name={s.name} size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
