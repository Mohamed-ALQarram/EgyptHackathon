/**
 * Services.jsx - قسم الخدمات
 * يجلب الخدمات من api.js باستخدام useEffect ويعرضها في كروت
 */
import { useState, useEffect } from "react";
import { fetchServices } from "../services/api";
import Icon from "../commons/Icon";

const Services = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadServices = async () => {
            try {
                setIsLoading(true);
                const data = await fetchServices();
                setServices(data);
            } catch (error) {
                console.error("خطأ في جلب الخدمات:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadServices();
    }, []);

    const cardAccents = [
        { gradient: "linear-gradient(135deg, #4CAF50, #8BC34A)", borderColor: "#4CAF50" },
        { gradient: "linear-gradient(135deg, #1B5E20, #2E7D32)", borderColor: "#1B5E20" },
        { gradient: "linear-gradient(135deg, #8BC34A, #AED581)", borderColor: "#8BC34A" },
    ];

    return (
        <section
            id="services"
            style={{
                padding: "100px 0",
                backgroundColor: "#fff",
            }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
                {/* === عنوان القسم === */}
                <div style={{ textAlign: "center", marginBottom: "70px" }}>
                    <span
                        style={{
                            display: "inline-block",
                            backgroundColor: "#E8F5E9",
                            color: "#1B5E20",
                            fontWeight: 700,
                            fontSize: "14px",
                            padding: "10px 24px",
                            borderRadius: "50px",
                            marginBottom: "20px",
                        }}
                    >
                        خدماتنا
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                            fontWeight: 900,
                            color: "#3E2723",
                            marginBottom: "16px",
                        }}
                    >
                        حلول متكاملة لإدارة{" "}
                        <span
                            style={{
                                background: "linear-gradient(to left, #1B5E20, #4CAF50)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            المخلفات
                        </span>
                    </h2>
                    <p style={{ color: "#777", fontSize: "17px", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
                        نقدم مجموعة متنوعة من الخدمات المصممة لتسهيل عملية إعادة التدوير للأفراد والشركات
                    </p>
                </div>

                {/* === كروت الخدمات === */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "30px",
                    }}
                >
                    {isLoading
                        ? [1, 2, 3].map((i) => (
                            <div
                                key={i}
                                style={{
                                    backgroundColor: "#f9f9f9",
                                    borderRadius: "24px",
                                    padding: "40px 32px",
                                }}
                            >
                                <div className="animate-shimmer" style={{ width: "64px", height: "64px", borderRadius: "18px", marginBottom: "24px" }} />
                                <div className="animate-shimmer" style={{ height: "24px", borderRadius: "8px", marginBottom: "16px", width: "70%" }} />
                                <div className="animate-shimmer" style={{ height: "16px", borderRadius: "8px", marginBottom: "8px" }} />
                                <div className="animate-shimmer" style={{ height: "16px", borderRadius: "8px", width: "85%" }} />
                            </div>
                        ))
                        : services.map((service, index) => (
                            <div
                                key={service.id}
                                className="animate-fade-in-up"
                                style={{
                                    backgroundColor: "#fff",
                                    borderRadius: "24px",
                                    padding: "40px 32px",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                    borderTop: `4px solid ${cardAccents[index]?.borderColor || "#4CAF50"}`,
                                    position: "relative",
                                    overflow: "hidden",
                                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                                    cursor: "pointer",
                                    animationDelay: `${index * 0.15}s`,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-10px)";
                                    e.currentTarget.style.boxShadow = "0 20px 50px rgba(76, 175, 80, 0.15)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                                }}
                            >
                                {/* أيقونة */}
                                <div
                                    style={{
                                        width: "64px",
                                        height: "64px",
                                        borderRadius: "18px",
                                        background: cardAccents[index]?.gradient || "linear-gradient(135deg, #4CAF50, #8BC34A)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "24px",
                                        transition: "transform 0.5s",
                                    }}
                                >
                                    <Icon name={service.icon} size={28} color="white" />
                                </div>

                                {/* العنوان */}
                                <h3
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: 800,
                                        color: "#3E2723",
                                        marginBottom: "12px",
                                        transition: "color 0.3s",
                                    }}
                                >
                                    {service.title}
                                </h3>

                                {/* الوصف */}
                                <p
                                    style={{
                                        color: "#888",
                                        fontSize: "15px",
                                        lineHeight: 1.8,
                                        marginBottom: "24px",
                                    }}
                                >
                                    {service.description}
                                </p>

                                {/* رابط اعرف أكثر */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        color: "#4CAF50",
                                        fontWeight: 700,
                                        fontSize: "14px",
                                        transition: "gap 0.3s",
                                    }}
                                >
                                    <span>اعرف أكثر</span>
                                    <Icon name="arrowRight" size={16} className="rotate-180" />
                                </div>

                                {/* زخرفة خلفية */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "-40px",
                                        left: "-40px",
                                        width: "120px",
                                        height: "120px",
                                        background: "rgba(232, 245, 233, 0.5)",
                                        borderRadius: "50%",
                                        transition: "opacity 0.5s, transform 0.5s",
                                        opacity: 0,
                                        pointerEvents: "none",
                                    }}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
