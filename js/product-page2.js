import { products } from "./products-data.js";

const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

const product = products[productId];

if (!product) {

    document.body.innerHTML = `

    <style>

        @font-face {
            font-family: "Vazir";
            src: url("../../font/Vazir.woff2") format("woff2"),
                 url("../../font/Vazir.woff") format("woff"),
                 url("../../font/Vazir.ttf") format("truetype");
            font-weight: 400;
        }

        @font-face {
            font-family: "Vazir";
            src: url("../../font/Vazir-Black.woff2") format("woff2"),
                 url("../../font/Vazir-Black.woff") format("woff"),
                 url("../../font/Vazir-Black.ttf") format("truetype");
            font-weight: 900;
        }

        @font-face {
            font-family: "Vazir";
            src: url("../../font/Vazir-Medium.woff2") format("woff2"),
                 url("../../font/Vazir-Medium.woff") format("woff"),
                 url("../../font/Vazir-Medium.ttf") format("truetype");
            font-weight: 500;
        }

        html {
            font-family: Vazir;
        direction: rtl;
        }
  html,
body {
    overflow: hidden;
}

        * {
            box-sizing: border-box;
        }

        html,
        body {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }

        body {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        main {
            flex: 1;
        }

        header {
            background-color: #ffffff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e2e8f0;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            height: 60px;
            padding: 10px 30px;
        }

        .title1 {
            color: #f59e0b;
        }

        .title2 {
            color: #2563eb;
        }

        header h1 {
            font-size: xx-large;
            font-weight: bold;
        }

        nav a {
            margin: 0 10px;
            text-decoration: none;
            color: #475569;
        }

        nav a:last-child {
            margin-left: 20px;
        }

        .main-p {
            margin: 13rem 0 8rem;
            display: flex;
            justify-content: center;
            text-align: center;
            font-size: 1.1rem;
            color: #475569;
        }

        /* فوتر */

.footer {
    background-color: #1e3a8a;
    color: #fff;
    margin-top: 3rem;
    padding: 40px 30px 25px;
    height:auto;
}

.end-p {
    background-color: #1e3a8a;
    padding: 15px 20px;
    margin: 0;
    text-align: center;
    color: #fff;
    border-top: 1px solid #ffffff;
}

        .main-div-in-footer {
            width: 100%;
            max-width: 1200px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 60px;
            padding-bottom: 25px;
            border-bottom: 1px solid #fff;
        }

        .main-div-in-footer > div {
            flex: 1;
        }

        .footer-head {
            font-size: 1.1rem;
            font-weight: 900;
            line-height: 2;
        }

        .quick-access {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .quick-access a {
            text-decoration: none;
            color: #fff;
            transition: 0.2s;
        }

        .quick-access a:hover {
            opacity: 0.7;
        }

        .social-icons {
            display: flex;
            gap: 1rem;
            align-items: center;
            margin-top: 15px;
        }

        .social-icons a {
            color: #fff;
            display: flex;
        }

        .social-icons svg {
            width: 30px;
            height: 30px;
            cursor: pointer;
            transition: 0.2s;
        }

        .social-icons svg:hover {
            transform: scale(1.1);
        }

        /* لپ‌تاپ کوچک و تبلت */

        @media (max-width: 1100px) {

            header {
                padding: 10px 20px;
            }

            .main-div-in-footer {
                gap: 35px;
            }
        }

        /* تبلت */

        @media (max-width: 900px) {

            header {
                position: static;
                height: auto;
                flex-wrap: wrap;
                justify-content: center;
                gap: 15px;
                padding: 15px 20px;
            }

            header h1 {
                font-size: x-large;
            }

            nav {
                width: 100%;
                text-align: center;
            }

            nav a {
                margin: 0 7px;
            }

            .footer {
                padding: 35px 25px 20px;
            }

            .main-div-in-footer {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 35px;
            }
        }

        /* موبایل */

        @media (max-width: 600px) {

            header {
                padding: 15px;
            }

            header h1 {
                font-size: x-large;
            }

            nav {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 5px;
            }

            nav a {
                margin: 5px;
                font-size: 0.9rem;
            }

            .main-p {
                margin: 8rem 1rem 5rem;
            }

            .footer {
                margin-top: 2rem;
                padding: 30px 20px 20px;
            }

            .main-div-in-footer {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                gap: 30px;
                padding-bottom: 25px;
            }

            .main-div-in-footer > div {
                width: 100%;
            }

            .footer-head {
                margin-bottom: 8px;
            }

            .quick-access {
                align-items: center;
            }

            .social-icons {
                justify-content: center;
            }

            .end-p {
                padding: 12px 15px;
                font-size: 0.85rem;
                line-height: 1.8;
            }
        }

    </style>

    <header>

        <div>
            <h1>
                <span class="title1">A.R.Z toy</span><span class="title2">shop</span>
            </h1>
        </div>

        <nav>
            <a href="../../index.html">خانه</a>
            <a href="../../all/all products/">دسته‌بندی‌ها</a>
            <a href="../../all/all products/">محصولات</a>
            <a href="#footer">درباره ما</a>
        </nav>

    </header>


    <main class="main-p">

        <p>
            متأسفانه همچین صفحه‌ای پیدا نشد!
        </p>

    </main>


    <footer class="footer" id="footer">

        <div class="main-div-in-footer">

            <div>

                <h6 class="footer-head">
                    🧸A.R.Z toyshop
                </h6>

                <p>
                    فروشگاه آنلاین اسباب‌بازی با مجموعه‌ای از محصولات جذاب و سرگرم‌کننده برای کودکان.
                </p>

            </div>


            <div>

                <h6 class="footer-head">
                    دسترسی سریع
                </h6>

                <div class="quick-access">

                    <a href="../../index.html">
                        خانه
                    </a>

                    <a href="../../all/all products/">
                        محصولات
                    </a>

                    <a href="../../all/all products/">
                        دسته بندی ها
                    </a>

                </div>

            </div>


            <div>

                <h6 class="footer-head">
                    ارتباط با ما
                </h6>

                <a
                    href="tel:05133682848"
                    style="text-decoration: none; color: #fff;"
                >
                    تلفن: 05133682848
                </a>


                <div class="social-icons">

                    <a href="https://www.instagram.com/arz_toys?stkn=MTI5OXJsMmo5ZjV4Yw==">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >

                            <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5"
                            ></rect>

                            <circle
                                cx="12"
                                cy="12"
                                r="4"
                            ></circle>

                            <circle
                                cx="17.5"
                                cy="6.5"
                                r="1"
                            ></circle>

                        </svg>

                    </a>


                    <a href="https://t.me/joinchat/AAAAAD0H10K_He_VM_z60Q">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >

                            <path
                                d="M21.9 4.2 18.8 19c-.2 1-1.1 1.3-1.9.8l-5.4-4-2.6 2.5c-.3.3-.5.5-1 .5l.4-5.5 10-9c.4-.4-.1-.6-.6-.2L5.3 12.2.1 10.6c-1.1-.3-1.1-1.1.2-1.6L20.5 1.3c.9-.3 1.7.2 1.4 1.9z"
                            />

                        </svg>

                    </a>

                </div>

            </div>

        </div>

    </footer>


    <p class="end-p">
        © تمامی حقوق برای A.R.Z toyshop محفوظ است.
    </p>

    `;

    throw new Error("Product not found");
}



// نام محصول
document.querySelectorAll(".product-name").forEach(element => {
    element.textContent = product.name;
});


// قیمت
document.querySelector(".product-price").textContent =
    product.price;


// تصویر
// تصاویر محصول
const image = document.querySelector(".product-image");
const thumbnailsContainer = document.querySelector("#productThumbnails");

// اگر محصول چند تصویر داشته باشد از images استفاده می‌شود
// اگر فقط یک تصویر داشته باشد از image استفاده می‌شود
const productImages = product.images || [product.image];


// نمایش تصویر اصلی
image.src = productImages[0];
image.alt = product.name;


// اگر قسمت تصاویر کوچک وجود داشت
if (thumbnailsContainer) {

    thumbnailsContainer.innerHTML = "";

    productImages.forEach((imageSrc, index) => {

        const thumbnail = document.createElement("img");

        thumbnail.src = imageSrc;
        thumbnail.alt = `${product.name} - تصویر ${index + 1}`;
        thumbnail.className = "product-thumbnail";

        // تصویر اول فعال باشد
        if (index === 0) {
            thumbnail.classList.add("active");
        }

        // با کلیک روی تصویر کوچک
        thumbnail.addEventListener("click", () => {

            image.src = imageSrc;

            document
                .querySelectorAll(".product-thumbnail")
                .forEach(img => {
                    img.classList.remove("active");
                });

            thumbnail.classList.add("active");
        });

        thumbnailsContainer.appendChild(thumbnail);
    });
}


// موجودی
const inventory = document.querySelector(".product-Inventory");

inventory.textContent = product.Inventory;

if (product.Inventory !== "✓ موجود در انبار") {
    inventory.classList.add("out-of-stock");
}


// توضیح کوتاه
const shortDescription =
    document.querySelector(".product-short-description");

if (shortDescription) {
    shortDescription.textContent =
        product.shortDescription || product.description;
}


// توضیحات کامل
const description =
    document.querySelector(".product-description");

if (description) {
    description.textContent =
        product.fullDescription || product.description;
}


// ویژگی‌ها
const featuresContainer =
    document.querySelector(".product-features");

if (featuresContainer && product.features) {

    featuresContainer.innerHTML = "";

    product.features.forEach(feature => {

        const box = document.createElement("div");

        box.className = "div-under-i-need-grid-in-it";

        box.innerHTML = `
            <h6>${feature.title}</h6>
            <p>${feature.value}</p>
        `;

        featuresContainer.appendChild(box);
    });
}


// مشخصات
const specsContainer =
    document.querySelector(".product-specs");

if (specsContainer && product.specs) {

    specsContainer.innerHTML = "";

    product.specs.forEach(spec => {

        const box = document.createElement("div");

        box.className = "div-div-div-main";

        box.innerHTML = `
            <h6>${spec.title}</h6>
            <p>${spec.value}</p>
        `;

        specsContainer.appendChild(box);
    });
}
// عنوان صفحه
document.title =
    `A.R.Z toyshop | ${product.name}`;
const metaDescription = document.querySelector('meta[name="description"]');

if (metaDescription) {
    metaDescription.setAttribute("content", product.description);
}