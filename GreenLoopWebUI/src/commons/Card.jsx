/**
 * Card.jsx - بطاقة قابلة لإعادة الاستخدام
 * تدعم تأثيرات hover, glass-morphism، وعرض أيقونة
 */

const Card = ({
    children,
    className = "",
    hover = true,
    glass = false,
    bordered = false,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className={`
        rounded-2xl p-6
        transition-all duration-500 ease-out
        ${glass
                    ? "bg-white/10 backdrop-blur-md border border-white/20"
                    : "bg-white"
                }
        ${hover
                    ? "hover:-translate-y-2 hover:shadow-2xl hover:shadow-leaf/10 cursor-pointer"
                    : ""
                }
        ${bordered ? "border border-gray-100" : "shadow-lg shadow-gray-100/50"}
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default Card;
