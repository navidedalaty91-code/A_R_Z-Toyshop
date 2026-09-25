import { products } from "./products-data.js";


// گرفتن عناصر HTML
const productsGrid = document.querySelector("#productsGrid");
const searchInput = document.querySelector("#productSearch");
const categoryFilter = document.querySelector("#categoryFilter");
const noResult = document.querySelector("#noResult");


// تبدیل object به array
const productsArray = Object.values(products);


// محصولات فعلی بعد از فیلتر
let currentProducts = productsArray;


// تعداد محصولاتی که الان نمایش داده شده
let displayedCount = 0;


// جلوگیری از لود همزمان چند مرحله
let isLoading = false;


// تبدیل تعداد ردیف به تعداد محصول
const rowsPerLoad = 3;


// یکسان سازی متن فارسی
function normalizeText(text) {

    return text
        .toLowerCase()
        .trim()
        .replace(/ي/g, "ی")
        .replace(/ى/g, "ی")
        .replace(/ك/g, "ک")
        .replace(/آ/g, "ا")
        .replace(/\u200c/g, " ")
        .replace(/\s+/g, " ");

}


// ساخت کارت محصول
function createProductCard(product) {

    return `
        <div class="product-card">

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
                loading="lazy"
            >

            <div class="product-content">

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-bottom">

                    <span class="product-price">
                        ${product.price}
                    </span>

                    <a href="${product.link}" class="product-button">
                        مشاهده محصول
                    </a>

                </div>

            </div>

        </div>
    `;

}


// تشخیص تعداد ستون‌های گرید
function getColumnsCount() {

    const columns =
        getComputedStyle(productsGrid)
            .gridTemplateColumns
            .split(" ")
            .filter(Boolean)
            .length;

    return columns || 1;

}


// تعداد محصولاتی که در هر مرحله باید لود شوند
function getProductsPerLoad() {

    return getColumnsCount() * rowsPerLoad;

}


// لود کردن محصولات بعدی
function loadMoreProducts() {

    if (isLoading) return;

    if (displayedCount >= currentProducts.length) {
        return;
    }


    isLoading = true;


    const productsPerLoad =
        getProductsPerLoad();


    const nextProducts =
        currentProducts.slice(
            displayedCount,
            displayedCount + productsPerLoad
        );


    nextProducts.forEach(function(product) {

        productsGrid.insertAdjacentHTML(
            "beforeend",
            createProductCard(product)
        );

    });


    displayedCount += nextProducts.length;


    isLoading = false;

}


// نمایش محصولات
function renderProducts(productList) {

    productsGrid.innerHTML = "";


    displayedCount = 0;


    currentProducts = productList;


    if (productList.length === 0) {

        noResult.style.display = "block";

        return;

    }


    noResult.style.display = "none";


    loadMoreProducts();

}


// بررسی اسکرول
function checkScroll() {

    const scrollPosition =
        window.innerHeight + window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight;


    // وقتی به 500 پیکسل مانده به انتهای صفحه رسید
    if (
        scrollPosition >= pageHeight - 500 &&
        displayedCount < currentProducts.length
    ) {

        loadMoreProducts();

    }

}


// اعمال فیلترها
function applyFilters() {

    const searchValue =
        normalizeText(searchInput.value);


    const selectedCategory =
        categoryFilter.value;


    const searchWords =
        searchValue === ""
            ? []
            : searchValue.split(" ");


    const filteredProducts =
        productsArray.filter(function(product) {

            // بررسی دسته بندی
            const categoryMatch =
                selectedCategory === "all" ||
                product.category.includes(selectedCategory);


            // بررسی سرچ
            const productText =
                normalizeText(
                    product.name + " " +
                    product.description
                );


            const searchMatch =
                searchWords.length === 0 ||
                searchWords.every(function(word) {

                    return productText.includes(word);

                });


            return categoryMatch && searchMatch;

        });


    renderProducts(filteredProducts);

}


// وقتی کاربر سرچ می کند
searchInput.addEventListener(
    "input",
    applyFilters
);


// وقتی دسته بندی تغییر می کند
categoryFilter.addEventListener(
    "change",
    applyFilters
);


// وقتی کاربر اسکرول می کند
window.addEventListener(
    "scroll",
    checkScroll
);


// نمایش اولیه محصولات
renderProducts(productsArray);