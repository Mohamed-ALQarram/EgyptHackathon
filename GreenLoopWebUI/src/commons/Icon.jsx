/**
 * Icon.jsx - مكتبة الأيقونات SVG
 * أيقونات مخصصة بدون أي مكتبات خارجية
 */

// === SVG Paths الخاصة بكل أيقونة ===
const ICONS = {
    // أيقونة المنزل
    home: (
        <path
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),

    // أيقونة المبنى / الشركة
    building: (
        <path
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),

    // أيقونة إعادة التدوير
    recycle: (
        <>
            <path
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </>
    ),

    // أيقونة الشاحنة / السائق
    truck: (
        <path
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h2m6-2h4l2 2h1a1 1 0 001-1v-5a1 1 0 00-.3-.7l-4-4A1 1 0 0016 7h-3m-1 9a2 2 0 104 0m-8 0a2 2 0 104 0"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),

    // أيقونة الهاتف
    phone: (
        <path
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),

    // أيقونة البريد
    mail: (
        <path
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),

    // أيقونة الموقع
    location: (
        <path
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M14.121 13.121A3 3 0 109.879 8.879a3 3 0 004.242 4.242z"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),

    // فيسبوك
    facebook: (
        <path
            d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),

    // تويتر / X
    twitter: (
        <path
            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),

    // إنستجرام
    instagram: (
        <>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </>
    ),

    // القائمة (hamburger)
    menu: (
        <path
            d="M4 6h16M4 12h16M4 18h16"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),

    // إغلاق
    close: (
        <path
            d="M6 18L18 6M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),

    // سهم لأسفل
    chevronDown: (
        <path
            d="M19 9l-7 7-7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),

    // نجمة
    star: (
        <path
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),

    // ورقة شجر
    leaf: (
        <path
            d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.5S2 11.5 2 13.5s1.75 3.75 1.75 3.75"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),

    // سهم يمين
    arrowRight: (
        <path
            d="M5 12h14M12 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),

    // Google Play
    googlePlay: (
        <path d="M3 3v18l9-9L3 3zm12 9l4.5-4.5L6 1l9 11zm0 0l4.5 4.5L6 23l9-11z" />
    ),

    // Apple
    apple: (
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    ),

    // تحقق / صح
    check: (
        <path
            d="M5 13l4 4L19 7"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    ),
};

/**
 * Icon Component
 * @param {string} name - اسم الأيقونة
 * @param {number} size - حجم الأيقونة (px)
 * @param {string} className - كلاسات إضافية
 * @param {string} strokeWidth - سمك الخط
 * @param {string} color - لون الأيقونة
 */
const Icon = ({
    name,
    size = 24,
    className = "",
    strokeWidth = 2,
    color = "currentColor",
}) => {
    const iconContent = ICONS[name];

    if (!iconContent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    // أيقونات Google Play و Apple تستخدم fill بدلاً من stroke
    const isFilled = ["googlePlay", "apple"].includes(name);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={isFilled ? color : "none"}
            stroke={isFilled ? "none" : color}
            strokeWidth={isFilled ? 0 : strokeWidth}
            className={className}
        >
            {iconContent}
        </svg>
    );
};

export default Icon;
