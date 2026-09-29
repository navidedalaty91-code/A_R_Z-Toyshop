import { products } from "./products-data.js";

// صبر تا تمام صفحه و منابع آن کاملاً لود شوند
window.addEventListener("load", () => {

    // پیدا کردن محصول بر اساس آدرس صفحه
    const currentPath = decodeURIComponent(window.location.pathname);

    const product = Object.values(products).find(item => {

        const productPath =
            new URL(item.link, window.location.origin).pathname;

        return productPath === currentPath;
    });

    if (!product) {
        return;
    }

    // تبدیل اعداد فارسی به انگلیسی
    function persianToEnglishNumbers(value) {

        return value
            .replace(/[۰-۹]/g, digit =>
                "۰۱۲۳۴۵۶۷۸۹".indexOf(digit)
            )
            .replace(/[٬،,]/g, "");
    }

    // تبدیل قیمت تومان به ریال
    function getPriceInRial(price) {

        const number = persianToEnglishNumbers(price)
            .replace(/[^\d]/g, "");

        return Number(number) * 10;
    }

    const jsonLd = {

        "@context": "https://schema.org",

        "@type": "Product",

        "name": product.name,

        "description": product.description,

        "image": [
            new URL(
                product.image,
                window.location.href
            ).href
        ],

        "brand": {
            "@type": "Brand",
            "name": "A.R.Z toyshop"
        },

        "offers": {

            "@type": "Offer",

            "url": window.location.href,

            "priceCurrency": "IRR",

            "price": getPriceInRial(product.price),

            "availability":
                product.Inventory === "✓ موجود در انبار"
                    ? "https://schema.org/InStock"
                    : "https://schema.org/OutOfStock"
        }
    };

    // ساخت تگ JSON-LD
    const script = document.createElement("script");

    script.type = "application/ld+json";

    script.textContent = JSON.stringify(
        jsonLd,
        null,
        2
    );

    document.head.appendChild(script);

});