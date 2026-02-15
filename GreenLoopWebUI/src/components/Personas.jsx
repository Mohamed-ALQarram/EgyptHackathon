import { useState, useEffect } from "react";
import { fetchPersonas } from "../services/api";
import Icon from "../commons/Icon";
import Button from "../commons/Button";

const Personas = () => {
    const [personas, setPersonas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        const loadPersonas = async () => {
            try {
                const data = await fetchPersonas();
                setPersonas(data);
            } catch (e) { console.error(e); }
            finally { setIsLoading(false); }
        };
        loadPersonas();
    }, []);

    const styles = [
        { grad: "linear-gradient(135deg,#4CAF50,#8BC34A)", border: "#4CAF50", shadow: "0 25px 60px rgba(76,175,80,0.2)", num: "01", bg: "rgba(76,175,80,0.04)" },
        { grad: "linear-gradient(135deg,#1B5E20,#2E7D32)", border: "#1B5E20", shadow: "0 25px 60px rgba(27,94,32,0.2)", num: "02", bg: "rgba(27,94,32,0.04)" },
        { grad: "linear-gradient(135deg,#8BC34A,#AED581)", border: "#8BC34A", shadow: "0 25px 60px rgba(139,195,74,0.2)", num: "03", bg: "rgba(139,195,74,0.04)" },
    ];

    return (
        <section id="personas" style={{ padding: "100px 0", background: "linear-gradient(180deg,#fff 0%,#f4faf5 100%)" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
                <div style={{ textAlign: "center", marginBottom: "70px" }}>
                    <span style={{ display: "inline-block", backgroundColor: "rgba(27,94,32,0.08)", color: "#1B5E20", fontWeight: 700, fontSize: "14px", padding: "10px 24px", borderRadius: "50px", marginBottom: "20px" }}>ابدأ رحلتك</span>
                    <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 900, color: "#3E2723", marginBottom: "16px" }}>
                        مين تكون في{" "}
                        <span style={{ background: "linear-gradient(to left,#1B5E20,#4CAF50)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Green Loop</span>؟
                    </h2>
                    <p style={{ color: "#777", fontSize: "17px", maxWidth: "550px", margin: "0 auto", lineHeight: 1.8 }}>سواء كنت فرد، شركة، أو سائق — عندنا مسار مخصص ليك</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "30px" }}>
                    {isLoading
                        ? [1, 2, 3].map(i => (
                            <div key={i} style={{ backgroundColor: "#fff", borderRadius: "28px", padding: "44px 36px" }}>
                                <div className="animate-shimmer" style={{ width: 56, height: 56, borderRadius: 16, marginBottom: 24 }} />
                                <div className="animate-shimmer" style={{ height: 20, borderRadius: 8, marginBottom: 12, width: "50%" }} />
                                <div className="animate-shimmer" style={{ height: 22, borderRadius: 8, marginBottom: 16, width: "75%" }} />
                                <div className="animate-shimmer" style={{ height: 14, borderRadius: 8, marginBottom: 24 }} />
                                <div className="animate-shimmer" style={{ height: 48, borderRadius: 14 }} />
                            </div>
                        ))
                        : personas.map((p, i) => {
                            const s = styles[i]; const hov = hoveredCard === i;
                            return (
                                <div key={p.id} className="animate-fade-in-up"
                                    style={{
                                        backgroundColor: hov ? s.bg : "#fff", borderRadius: "28px", padding: "44px 36px",
                                        border: `2px solid ${hov ? s.border : "transparent"}`,
                                        boxShadow: hov ? s.shadow : "0 4px 20px rgba(0,0,0,0.05)",
                                        transform: hov ? "translateY(-12px)" : "translateY(0)",
                                        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                                        position: "relative", overflow: "hidden", cursor: "pointer", animationDelay: `${i * 0.15}s`,
                                    }}
                                    onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <span style={{ position: "absolute", top: 20, left: 24, fontSize: 72, fontWeight: 900, color: hov ? "rgba(76,175,80,0.08)" : "rgba(0,0,0,0.03)", lineHeight: 1, userSelect: "none", pointerEvents: "none", transition: "color 0.5s" }}>{s.num}</span>
                                    <div style={{ width: 60, height: 60, borderRadius: 18, background: s.grad, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28, transform: hov ? "scale(1.1) rotate(6deg)" : "scale(1)", transition: "transform 0.5s", boxShadow: `0 8px 25px ${s.border}33` }}>
                                        <Icon name={p.icon} size={28} color="white" />
                                    </div>
                                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#3E2723", marginBottom: 8 }}>{p.title}</h3>
                                    <p style={{ fontSize: 16, fontWeight: 700, color: "#1B5E20", marginBottom: 12 }}>{p.subtitle}</p>
                                    <p style={{ color: "#888", fontSize: 14, lineHeight: 1.9, marginBottom: 32 }}>{p.description}</p>
                                    <Button variant="primary" fullWidth size="md" icon={<Icon name="arrowRight" size={18} className="rotate-180" />}>{p.cta}</Button>
                                </div>
                            );
                        })}
                </div>

                {/* CTA Banner */}
                <div style={{ marginTop: 80, textAlign: "center", background: "linear-gradient(135deg,#1B5E20 0%,#4CAF50 50%,#2E7D32 100%)", borderRadius: 28, padding: "clamp(40px,6vw,80px) clamp(24px,4vw,60px)", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, background: "rgba(255,255,255,0.06)", borderRadius: "50%", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", bottom: -40, left: -40, width: 200, height: 200, background: "rgba(255,255,255,0.04)", borderRadius: "50%", pointerEvents: "none" }} />
                    <div style={{ position: "relative", zIndex: 10 }}>
                        <h3 style={{ fontSize: "clamp(1.5rem,3.5vw,2.2rem)", fontWeight: 900, color: "#fff", marginBottom: 16 }}>جاهز تبدأ رحلتك الخضراء؟</h3>
                        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, marginBottom: 32, maxWidth: 550, margin: "0 auto 32px", lineHeight: 1.8 }}>حمّل التطبيق دلوقتي وابدأ اجمع نقاط واستبدلها بكوبونات خصم من شركاءنا</p>
                        <Button variant="outline" size="lg">حمّل التطبيق مجاناً</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Personas;
