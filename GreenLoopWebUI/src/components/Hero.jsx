/**
 * Hero.jsx - القسم الرئيسي (البطل)
 * يحتوي على العنوان الرئيسي، النص التوضيحي، أزرار التحميل، والإحصائيات
 */
import { useState, useEffect } from "react";
import { fetchStats } from "../services/api";
import Icon from "../commons/Icon";

const Hero = () => {
    const [stats, setStats] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadStats = async () => {
            const data = await fetchStats();
            setStats(data);
            setIsLoaded(true);
        };
        loadStats();
    }, []);

    return (
        <section
            id="home"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            {/* === خلفية متدرجة === */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 30%, #4CAF50 70%, #388E3C 100%)",
                }}
            />

            {/* === أشكال زخرفية متحركة === */}
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
                <div
                    className="animate-float"
                    style={{
                        position: "absolute",
                        top: "-80px",
                        left: "-80px",
                        width: "400px",
                        height: "400px",
                        background: "radial-gradient(circle, rgba(139,195,74,0.25) 0%, transparent 70%)",
                        borderRadius: "50%",
                    }}
                />
                <div
                    className="animate-float"
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "-60px",
                        width: "350px",
                        height: "350px",
                        background: "radial-gradient(circle, rgba(174,213,129,0.2) 0%, transparent 70%)",
                        borderRadius: "50%",
                        animationDelay: "2s",
                    }}
                />
                <div
                    className="animate-float"
                    style={{
                        position: "absolute",
                        bottom: "80px",
                        left: "25%",
                        width: "250px",
                        height: "250px",
                        background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
                        borderRadius: "50%",
                        animationDelay: "4s",
                    }}
                />
                {/* خطوط زخرفية */}
                <div
                    style={{
                        position: "absolute",
                        top: "20%",
                        right: "20%",
                        width: "1px",
                        height: "160px",
                        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)",
                        transform: "rotate(45deg)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "30%",
                        left: "30%",
                        width: "1px",
                        height: "120px",
                        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)",
                        transform: "rotate(-12deg)",
                    }}
                />
            </div>

            {/* === المحتوى الرئيسي === */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: "1280px",
                    margin: "0 auto",
                    padding: "140px 24px 120px",
                    width: "100%",
                }}
            >
                <div style={{ maxWidth: "750px" }}>
                    {/* شارة */}
                    <div
                        className={isLoaded ? "animate-fade-in" : ""}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            backgroundColor: "rgba(255,255,255,0.12)",
                            backdropFilter: "blur(10px)",
                            color: "rgba(255,255,255,0.9)",
                            padding: "10px 20px",
                            borderRadius: "50px",
                            fontSize: "14px",
                            marginBottom: "28px",
                            border: "1px solid rgba(255,255,255,0.15)",
                        }}
                    >
                        <Icon name="leaf" size={18} color="#AED581" />
                        <span>منصة إعادة التدوير الأولى في مصر</span>
                    </div>

                    {/* العنوان الرئيسي */}
                    <h1
                        className={isLoaded ? "animate-fade-in-up" : ""}
                        style={{
                            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                            fontWeight: 900,
                            color: "#fff",
                            lineHeight: 1.3,
                            marginBottom: "24px",
                        }}
                    >
                        حوّل نفاياتك لفلوس
                        <br />
                        <span
                            style={{
                                background: "linear-gradient(to left, #8BC34A, #AED581, #CDDC39)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            .. وابني مستقبل أخضر
                        </span>
                    </h1>

                    {/* النص التوضيحي */}
                    <p
                        className={isLoaded ? "animate-fade-in-up delay-200" : ""}
                        style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            color: "rgba(255,255,255,0.8)",
                            lineHeight: 1.9,
                            marginBottom: "36px",
                            maxWidth: "650px",
                        }}
                    >
                        مع <strong style={{ color: "#AED581" }}>Green Loop</strong>، هنساعدك تحول
                        مخلفاتك لمصدر دخل من خلال الاقتصاد الدائري. جمّع، اكسب، وساهم في
                        بيئة أنظف لأولادك.
                    </p>

                    {/* === أزرار التحميل === */}
                    <div
                        className={isLoaded ? "animate-fade-in-up delay-300" : ""}
                        style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "60px" }}
                    >
                        {/* Google Play */}
                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                                backgroundColor: "rgba(255,255,255,0.12)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                color: "#fff",
                                padding: "14px 28px",
                                borderRadius: "16px",
                                cursor: "pointer",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)";
                                e.currentTarget.style.transform = "translateY(-3px)";
                                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <Icon name="googlePlay" size={30} color="white" />
                            <div style={{ display: "flex", flexDirection: "column", textAlign: "right" }}>
                                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>حمّل من</span>
                                <span style={{ fontSize: "16px", fontWeight: 700 }}>Google Play</span>
                            </div>
                        </button>

                        {/* App Store */}
                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                                backgroundColor: "rgba(255,255,255,0.12)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                color: "#fff",
                                padding: "14px 28px",
                                borderRadius: "16px",
                                cursor: "pointer",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)";
                                e.currentTarget.style.transform = "translateY(-3px)";
                                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <Icon name="apple" size={30} color="white" />
                            <div style={{ display: "flex", flexDirection: "column", textAlign: "right" }}>
                                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>حمّل من</span>
                                <span style={{ fontSize: "16px", fontWeight: 700 }}>App Store</span>
                            </div>
                        </button>
                    </div>

                    {/* === إحصائيات === */}
                    <div
                        className={isLoaded ? "animate-fade-in-up delay-400" : ""}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                            gap: "16px",
                        }}
                    >
                        {stats.map((stat) => (
                            <div
                                key={stat.id}
                                style={{
                                    textAlign: "center",
                                    backgroundColor: "rgba(255,255,255,0.08)",
                                    backdropFilter: "blur(8px)",
                                    borderRadius: "16px",
                                    padding: "20px 16px",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    transition: "all 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                <div style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "#AED581", marginBottom: "4px" }}>
                                    {stat.value}
                                </div>
                                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* === موجة سفلية === */}
            <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
                    <path
                        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
