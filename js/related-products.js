import { products } from "./products-data.js";


const popularProducts = [
    "wds8jdi8wsjsi982sj2w",
    "mje8is3ur3883wiikdx3",
    "fdvdxvcew9rwoj3ee02e",
    "dpkpe3ed3k0edpwd33ed",
    "w2se8dyhwsdi8jwwdiu8",
    "vf8d4v5cx546d5f78v5c",
    "sdj5ds25cds1cs2dx54c",
    "cx3v21df65v13cx2r2r1"
];


const relatedContainer =
    document.querySelector(".related-products");


if (relatedContainer) {

    // گرفتن ID محصول فعلی از URL
    const urlParams =
        new URLSearchParams(window.location.search);

    const currentProductId =
        urlParams.get("id");


    // گرفتن محصولات محبوب
    // حذف محصول فعلی
    // نمایش فقط ۴ محصول
    const relatedProducts =
        popularProducts
            .filter(id => id !== currentProductId)
            .map(id => products[id])
            .filter(product => product)
            .slice(0, 4);


    // ساخت کارت محصولات مرتبط
    relatedProducts.forEach(product => {

        relatedContainer.insertAdjacentHTML("beforeend", `
            <div class="related-card">

                <a href="${product.link}">
                    <img
                        src="${product.images?.[0] || product.image}"
                        alt="${product.name}"
                    >
                </a>

                <h3>${product.name}</h3>

                <p>${product.price}</p>

                <a
                    href="${product.link}"
                    class="button"
                >
                    مشاهده محصول
                </a>

            </div>
        `);

    });
}