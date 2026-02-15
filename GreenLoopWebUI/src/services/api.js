/**
 * api.js - Mock API Service
 * يحتوي على الدوال التي تحاكي الاتصال بالـ Backend
 * استبدل BASE_URL بالعنوان الحقيقي للـ API لاحقاً
 */

// Base URL - غيّره للعنوان الحقيقي لاحقاً
export const BASE_URL = "https://api.greenloop.com/api/v1";

/**
 * محاكاة تأخير الشبكة
 */
const simulateDelay = (ms = 800) =>
    new Promise((resolve) => setTimeout(resolve, ms));

/**
 * جلب قائمة الخدمات
 */
export const fetchServices = async () => {
    await simulateDelay(600);
    return [
        {
            id: 1,
            title: "تجميع من المنزل",
            description:
                "نوصلك لحد البيت ونجمع منك المخلفات القابلة لإعادة التدوير. خدمة سهلة ومريحة وبتوفر وقتك.",
            icon: "home",
        },
        {
            id: 2,
            title: "خدمات الشركات",
            description:
                "حلول متكاملة لإدارة مخلفات الشركات والمطاعم والفنادق بكفاءة عالية وأسعار تنافسية.",
            icon: "building",
        },
        {
            id: 3,
            title: "بيع مواد خام",
            description:
                "بنوفر لك سوق لبيع المواد الخام المعاد تدويرها بأفضل الأسعار مباشرة للمصانع.",
            icon: "recycle",
        },
    ];
};

/**
 * جلب إحصائيات المنصة
 */
export const fetchStats = async () => {
    await simulateDelay(400);
    return [
        { id: 1, label: "طن تم إعادة تدويرها", value: "١٢,٥٠٠+" },
        { id: 2, label: "مستخدم نشط", value: "٥٠,٠٠٠+" },
        { id: 3, label: "شريك أعمال", value: "٣٠٠+" },
        { id: 4, label: "كابتن توصيل", value: "١,٢٠٠+" },
    ];
};

/**
 * جلب بيانات شرائح المستخدمين (Personas)
 */
export const fetchPersonas = async () => {
    await simulateDelay(500);
    return [
        {
            id: 1,
            type: "households",
            title: "للأفراد والمنازل",
            subtitle: "اطلب تجميع واحصل على كوبونات",
            description:
                "سجّل في التطبيق، حدد موعد التجميع، وسيبنا نعمل الباقي. كل كيلو بتسلمه بيتحول لنقاط وكوبونات خصم.",
            cta: "سجل الآن",
            icon: "home",
            gradient: "from-leaf to-lime",
        },
        {
            id: 2,
            type: "business",
            title: "للشركات والمطاعم",
            subtitle: "حلول إدارة مخلفات للمطاعم والشركات",
            description:
                "عقود مرنة، تقارير دورية، والتزام بالمعايير البيئية. وفّر في تكاليف التخلص من المخلفات.",
            cta: "تعاقد معنا",
            icon: "building",
            gradient: "from-forest to-leaf",
        },
        {
            id: 3,
            type: "drivers",
            title: "للسائقين (الكباتن)",
            subtitle: "زود دخلك وانضم لأسطولنا",
            description:
                "انضم لفريقنا كسائق تجميع. دخل إضافي، مواعيد مرنة، وشغل بيفرق في البيئة.",
            cta: "انضم ككابتن",
            icon: "truck",
            gradient: "from-lime to-leaf-light",
        },
    ];
};
