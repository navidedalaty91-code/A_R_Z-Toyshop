import { products } from "./products-data.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products[productId];

if (product) {
    const productUrl = new URL(window.location.href);
    productUrl.search = `?id=${encodeURIComponent(productId)}`;

    const productImages = product.images || product.image;

    const images = (Array.isArray(productImages)
        ? productImages
        : [productImages]
    ).filter(Boolean)
        .map(image => new URL(image, window.location.href).href);

    const price = product.price
        ? product.price
            .replace(/[۰-۹]/g, digit =>
                String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
            )
            .replace(/[^\d]/g, "")
        : "";

    const priceInRial = price
        ? String(Number(price) * 10)
        : "";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",

        "name": product.name,

        "description": product.fullDescription ||
            product.shortDescription ||
            product.description ||
            "",

        "image": images,

        "sku": productId,

        "brand": {
            "@type": "Brand",
            "name": "A.R.Z Toyshop"
        },

        "offers": {
            "@type": "Offer",
            "url": productUrl.href,
            "priceCurrency": "IRR",
            "price": priceInRial,
            "availability": product.Inventory &&
                product.Inventory.includes("موجود در انبار")
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",

            "seller": {
                "@type": "Organization",
                "name": "A.R.Z Toyshop"
            }
        }
    };

    const script = document.createElement("script");

    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);

    document.head.appendChild(script);
}