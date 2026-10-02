const searchProducts = [
    {
        name: "موتور کودک مدل وسپی",
        price: "۳,۲۵۰,۰۰۰ تومان",
        image: "../../images/Musical_Vespa_style_ride_on_motorcycle_with_working_lights.jpg",
        link: "../../products/product/?id=ds45d454e54d5x4cscsx",
    },
    {
        name: "شخصیت پی جی مکس",
        price: "۲,۳۰۰,۰۰۰ تومان",
        image: "images/PJ_Masks_character.jpg",
        link: "products/product/?id=sf74ds561cx3256dxc57",
    },
    {
        name: "موتور شارژی چراغ دار",
        price: "۷,۳۰۰,۰۰۰ تومان",
        image: "images/Rechargeable_motorcycle_with_lights.jpg",
        link: "products/product/?id=vf8d4v5cx546d5f78v5c",
    },
    {
        name: "اسکوتر شارژی بلوتوث دار",
        price: "۴۹,۰۰۰,۰۰۰ تومان",
        image: "images/Bluetooth_enabled_drifting_electric_scooter.jpg",
        link: "products/product/?id=dfg87546cv1vx32c1vfd",
    },
    {
        name: "لگو شطرنج‌هری پاتر ۸۷۶ قطعه",
        price: "۶,۵۰۰,۰۰۰ تومان",
        image: "images/Harry_Potter_Chess_LEGO__Set_876_Pieces.jpg",
        link: "products/product/?id=df12vcdr54d6g45sd4fg",
    },
    {
        name: "اردک برند هالی تویز",
        price: "۳,۵۰۰,۰۰۰ تومان",
        image: "images/Hulie_Toys_brand_duck.jpg",
        link: "products/product/?id=wds8jdi8wsjsi982sj2w",
    },
    {
        name: "اسکوتر توربو چراغ دار",
        price: "۶,۶۰۰,۰۰۰ تومان",
        image: "images/Light_up_musical_Turbo_scooter.jpg",
        link: "products/product/?id=sd56v4cx321fs65df4sc",
    },
    {
        name: "هواپیما کنترلی",
        price: "۳,۰۰۰,۰۰۰ تومان",
        image: "images/photo_2026-09-13_22-49-35.jpg",
        link: "products/product/?id=fdvdxvcew9rwoj3ee02e"
    },
    {
        name: "بوکسینگ شارژی بلوتوث",
        price: "۵,۱۰۰,۰۰۰ تومان",
        image: "images/photo_2026-09-13_22-49-33.jpg",
        link: "products/product/?id=dpkpe3ed3k0edpwd33ed"
    },
    {
        name: "تفنگ ۲ کاره توپی و ابپاش",
        price: "۲,۲۰۰,۰۰۰ تومان",
        image: "images/photo_2026-09-13_22-49-25.jpg",
        link: "products/product/?id=w2se8dyhwsdi8jwwdiu8"
    },
    {
        name: "ست نجاری دلر باتری خور",
        price: "۲,۷۰۰,۰۰۰ تومان",
        image: "images/photo_2026-09-13_22-49-22.jpg",
        link: "products/product/?id=f45s6r4e54fv5hf454b4"
    },
    {
        name: "کنسول بازی ۵۰۰ بازی",
        price: "۲,۸۰۰,۰۰۰ تومان",
        image: "images/photo_2026-09-13_22-49-28.jpg",
        link: "products/product/?id=fse6rf45e4g8v454v5vd"
    },
    {
        name: "ست بافت مو",
        price: "۱,۳۰۰,۰۰۰ تومان",
        image: "images/Untitled-1.png",
        link: "products/product/?id=df8g74df5gd123dg6465"
    },
    {
        name: "ست ناخن و ارایشی",
        price: "۲,۰۰۰,۰۰۰ تومان",
        image: "images/photo_2026-09-13_22-49-19.jpg",
        link: "products/product/?id=fh8g7h5fh42gb2g4h545"
    },
    {
        name: "دوربین عکاسی چاپدار",
        price: "۴,۵۰۰,۰۰۰ تومان",
        image: "images/photo_2026-09-13_22-49-30.jpg",
        link: "products/product/?id=mje8is3ur3883wiikdx3"
    },
    {
        name: "اتوبوس اموزشی هالی تویز",
        price: "۶,۸۰۰,۰۰۰ تومان",
        image: "images/Holly_Toys_educational_bus.jpg",
        link: "products/product/?id=edr9efds54f48er4f2d5"
    },
    {
        name: "ربات بازلایتر موزیکال",
        price: "۲,۸۰۰,۰۰۰ تومان",
        image: "images/Musical_Buzz_Lightyear_Robot.jpg",
        link: "products/product/?id=fd454rf1de45wr9f44re",
    },
    {
        name: "ست بوکسینگ دیجیتال شارژی",
        price: "۸,۰۰۰,۰۰۰ تومان",
        image: "images/Rechargeable_Digital_6_Piece_Boxing_Set.jpg",
        link: "products/product/?id=sesc8dfced5s8cfe48es",
    },
    {
        name: "شخصیت های پپاپیگ 25 تایی",
        price: "۳,۵۰۰,۰۰۰ تومان",
        image: "images/Pepapic_Family_Set.jpg",
        link: "products/product/?id=xrfl43n4w3kn3wfk3kme",
    },
    {
        name: "ست میز ارایشی کامل",
        price: "۲,۵۰۰,۰۰۰ تومان",
        image: "images/Complete_vanity_set.jpg",
        link: "products/product/?id=euj992e9xxoj3293uedx",
    },
    {
        name: "سگ موزیکال هولا تویز",
        price: "۵,۴۰۰,۰۰۰ تومان",
        image: "images/Hola_Toys_Musical_Dog.jpg",
        link: "products/product/?id=weru89938u9idu093dui",
    },
    {
        name: "لگو موتور کاوازاکی H2R",
        price: "۴,۳۰۰,۰۰۰ تومان",
        image: "images/LEGO_Kawasaki_H2R_Motorcycle.jpg",
        link: "products/product/?id=ddxwsdwd0iw032elkw2s",
    },
    {
        name: "ست مینی فیگور لگو",
        price: "۶۵۰,۰۰۰ تومان",
        image: "images/Minecraft_figure.jpg",
        link: "products/product/?id=u456tyhjliu65resxli8",
    },
    {
        name: "کرم فشاری هالی تویز",
        price: "۳,۲۰۰,۰۰۰ تومان",
        image: "images/Hola_Toys_Musical_Push_Down_Worm.jpg",
        link: "products/product/?id=ic9dc8djc9wjdw9djsi2",
    },
    {
        name: "لگو جت جنگنده ۶۴۴ قطعه",
        price: "۲,۵۰۰,۰۰۰ تومان",
        image: "images/Fighter_Jet_LEGO_Set.jpg",
        link: "products/product/?id=cx3v21df65v13cx2r2r1",
    },
    {
        name: "اسکوتر حرفه ای کوپر",
        price: "۵,۶۰۰,۰۰۰ تومان",
        image: "images/Cooper_Professional_Scooter.jpg",
        link: "products/product/?id=sdj5ds25cds1cs2dx54c",
    },
    {
        name: "لگو سیتی پلیس خارجی",
        price: "۳,۰۰۰,۰۰۰ تومان",
        image: "images/LEGO_City_Police_(International_Version).jpg",
        link: "products/product/?id=s93eixwodke3w9idwso9",
    },
];
