/**
 * Button.jsx - زرار قابل لإعادة الاستخدام
 * يدعم أنماط مختلفة وأحجام متعددة مع تأثيرات hover
 */
import { useState } from "react";

const Button = ({ children, variant = "primary", size = "md", onClick, className = "", icon, fullWidth = false, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);

    const baseStyle = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        borderRadius: "14px",
        fontWeight: 700,
        fontFamily: "'Cairo', sans-serif",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        border: "none",
        outline: "none",
        width: fullWidth ? "100%" : "auto",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
    };

    const variantStyles = {
        primary: {
            background: isHovered
                ? "linear-gradient(135deg, #2E7D32, #66BB6A)"
                : "linear-gradient(135deg, #1B5E20, #4CAF50)",
            color: "#fff",
            boxShadow: isHovered
                ? "0 12px 35px rgba(76, 175, 80, 0.35)"
                : "0 6px 20px rgba(76, 175, 80, 0.25)",
        },
        secondary: {
            background: isHovered ? "#4CAF50" : "transparent",
            color: isHovered ? "#fff" : "#4CAF50",
            border: "2px solid #4CAF50",
        },
        ghost: {
            background: isHovered ? "#E8F5E9" : "transparent",
            color: isHovered ? "#2E7D32" : "#1B5E20",
        },
        outline: {
            background: isHovered ? "rgba(255,255,255,0.15)" : "transparent",
            color: "#fff",
            border: "2px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(8px)",
        },
    };

    const sizeStyles = {
        sm: { padding: "10px 20px", fontSize: "14px" },
        md: { padding: "14px 28px", fontSize: "15px" },
        lg: { padding: "18px 36px", fontSize: "17px" },
    };

    const combined = {
        ...baseStyle,
        ...variantStyles[variant],
        ...sizeStyles[size],
    };

    return (
        <button
            onClick={onClick}
            style={combined}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={className}
            {...props}
        >
            {icon && <span style={{ flexShrink: 0, display: "flex" }}>{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
