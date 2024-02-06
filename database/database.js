const { Sequelize } = require("sequelize");
const userModel = require("./model/user.model");
const dressModel = require("./model/dresses.model");
// const categoryModel = require("./model/categoryModel");

const Dress = [
  {
    dress_name: "Checked Polo Mens TShirt",
    category_name: "Mens TShirt",
    brand: "netplay",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220309/inTn/6227b81faeb26921afcde577/-286Wx359H-441137362-white-MODEL.jpg",
    price: 699,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Heathered Crew-Neck Mens TShirt",
    category_name: "Mens TShirt",
    brand: "performax",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220120/lLur/61e981aef997dd66232f4792/-286Wx359H-441036730-charcoal-MODEL.jpg",
    price: 599,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Fastdry Active Crew-Neck Mens TShirt",
    category_name: "Mens TShirt",
    brand: "performax",
    size: ["XS", "S", "M", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220125/5ENA/61eef659aeb2695cdd2acad3/-286Wx359H-441128501-jetblack-MODEL.jpg",
    price: 499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Heathered Crew-Neck Mens TShirt",
    category_name: "Mens TShirt",
    brand: "teamspirit",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/h97/h0d/13480454914078/-286Wx359H-441000453-red-MODEL.jpg",
    price: 399,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Leaf Print Polo Mens TShirt",
    category_name: "Mens TShirt",
    brand: "netplay",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220301/DDoY/621e35edaeb26921afbf005b/-286Wx359H-441137352-olive-MODEL.jpg",
    price: 699,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Heathered Polo Mens TShirt",
    category_name: "Mens TShirt",
    brand: "teamspirit",
    size: ["XS", "S", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/hf3/h40/15590223183902/-286Wx359H-441000674-maroon-MODEL.jpg",
    price: 599,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Crew-Neck Mens TShirt with Brand Icon",
    category_name: "Mens TShirt",
    brand: "puma",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210828/0ozJ/61297a6f7cdb8cb8240b1361/-286Wx359H-460856330-black-MODEL.jpg",
    price: 1499,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Striped Polo Mens TShirt with Ribbed Hems",
    category_name: "Mens TShirt",
    brand: "netplay",
    size: ["XS", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210225/Q90z/6037be57f997dd5c40fbf0bf/-286Wx359H-441120075-navy-MODEL.jpg",
    price: 899,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Core Varsity Polo Mens TShirt with Contrast Tipping",
    category_name: "Mens TShirt",
    brand: "teamspirit",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211019/U4It/616dda2eaeb26901109a9256/-286Wx359H-441113673-navy-MODEL.jpg",
    price: 499,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Striped Button-Down Mens TShirt",
    category_name: "Mens TShirt",
    brand: "netplay",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220125/ljAP/61eeffc1f997dd66233822f4/-286Wx359H-441136051-red-MODEL.jpg",
    price: 699,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Polo Mens TShirt with Signature Branding",
    category_name: "Mens TShirt",
    brand: "dnmx",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/hdd/h04/10247919534110/-286Wx359H-440762638-turquoise-OUTFIT.jpg",
    price: 499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Jacquard-Woven Slim Fit Polo Mens TShirt",
    category_name: "Mens TShirt",
    brand: "netplay",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211228/7icQ/61ca2db2aeb26901101f06b5/-286Wx359H-441134733-olive-MODEL.jpg",
    price: 799,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Core Rib V-Neck Mens TShirt",
    category_name: "Mens TShirt",
    brand: "teamspirit",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220429/T2dg/626af683aeb26921af49a0c7/-286Wx359H-441113102-jetblack-MODEL.jpg",
    price: 499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Ombre-Dyed Henley Mens TShirt",
    category_name: "Mens TShirt",
    brand: "campus-sutra",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210709/LI7n/60e79a30f997ddb312226dfa/-286Wx359H-462617340-green-MODEL.jpg",
    price: 899,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Polo Mens TShirt with Signature Branding",
    category_name: "Mens TShirt",
    brand: "dnmx",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/he4/h8c/10247893057566/-286Wx359H-440762638-offwhite-OUTFIT.jpg",
    price: 499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Polo Mens TShirt with Contrast Tipping",
    category_name: "Mens TShirt",
    brand: "netplay",
    size: ["XS", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210814/hgf4/6116cc7b7cdb8cb824f77b8d/-286Wx359H-441120433-white-MODEL.jpg",
    price: 699,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Typographic Print Crew-Neck Mens TShirt",
    category_name: "Mens TShirt",
    brand: "teamspirit",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210731/NfDJ/61044965aeb269a9e35b76e6/-286Wx359H-441123101-grey-MODEL.jpg",
    price: 499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Polo Mens TShirt with Cut & Sew Panels",
    category_name: "Mens TShirt",
    brand: "teamspirit",
    size: ["XS", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211202/BFOk/61a7d0d0f997ddf8f12cadf3/-286Wx359H-441124990-green-MODEL.jpg",
    price: 699,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Brand Print Ombre Crew-Neck Mens TShirt",
    category_name: "Mens TShirt",
    brand: "teamspirit",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220303/XHc2/621fc406f997dd03e2fd5b6f/-286Wx359H-441133307-darkblue-MODEL.jpg",
    price: 599,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Graphic Print Crew-Neck Mens TShirt",
    category_name: "Mens TShirt",
    brand: "puma",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210827/ZKvd/61291801aeb269a26880a959/-286Wx359H-460856331-white-MODEL.jpg",
    price: 1499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Core Varsity Polo Mens TShirt with Contrast Tipping",
    category_name: "Mens TShirt",
    brand: "teamspirit",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210907/RUuG/61368478f997ddce89be383b/-286Wx359H-441113673-pink-MODEL.jpg",
    price: 499,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Reflective Colourblock Crew-Neck Mens TShirt",
    category_name: "Mens TShirt",
    brand: "teamspirit",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220303/Wnd2/621fba29f997dd03e2fd2c32/-286Wx359H-441136539-olive-MODEL.jpg",
    price: 599,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Polo Mens TShirt",
    category_name: "Mens TShirt",
    brand: "netplay",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210609/G4jn/60bfc532f997ddb312c0fd1d/-286Wx359H-441126569-maroon-MODEL.jpg",
    price: 699,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Crew-Neck Mens TShirt with Contrast Stripes",
    category_name: "Mens TShirt",
    brand: "ausk",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220121/ihND/61ea59caaeb2695cdd244489/-286Wx359H-461085141-blue-MODEL.jpg",
    price: 999,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Striped Polo Mens TShirt",
    category_name: "Mens TShirt",
    brand: "netplay",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220301/eVU3/621e376baeb26921afbf074c/-286Wx359H-441137366-red-MODEL.jpg",
    price: 699,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Crew-Neck Mens TShirt with Thumbhole Sleeves",
    category_name: "Mens TShirt",
    brand: "teamspirit",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211103/uiiT/61818e88aeb2690110b7665a/-286Wx359H-441125913-ecru-MODEL.jpg",
    price: 699,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Crew-Neck Mens TShirt with Brand Icon",
    category_name: "Mens TShirt",
    brand: "puma",
    size: ["S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210827/ET7z/612920f57cdb8cb8240a8df3/-286Wx359H-460856318-black-MODEL.jpg",
    price: 1299,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Fastdry Active Crew-Neck Mens TShirt",
    category_name: "Mens TShirt",
    brand: "performax",
    size: ["M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220126/bb1Z/61f048fdf997dd66233c6c5d/-286Wx359H-441128501-offwhite-MODEL.jpg",
    price: 499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Striped Crew-Neck Mens TShirt",
    category_name: "Mens TShirt",
    brand: "dnmx",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211027/Wwki/61784cf2f997ddf8f1ea629a/-286Wx359H-441126178-gold-MODEL.jpg",
    price: 799,
    rating: 4,
    gender: "Men",
  },

  {
    dress_name: "Tapered Fit Flat-Front Trousers",
    category_name: "Trousers",
    brand: "netplay",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210907/vQKt/6136775cf997ddce89bddeea/-286Wx359H-441124497-navy-MODEL.jpg",
    price: 1499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Flat-Front Trousers",
    category_name: "Trousers",
    brand: "netplay",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20201202/lCKV/5fc68ccdaeb269d56324fbe2/-286Wx359H-441103100-jetblack-MODEL.jpg",
    price: 899,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Tapered Fit Flat-Front Trousers",
    category_name: "Trousers",
    brand: "netplay",
    size: ["XS", "S", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210913/pvPy/613f6dd8f997ddce89c3d07a/-286Wx359H-441124497-ltgrey-MODEL.jpg",
    price: 1499,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Flat-Front Trousers with Insert Pockets",
    category_name: "Trousers",
    brand: "john-players",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210814/fOPB/6116c8b9aeb269a2687241ee/-286Wx359H-441125999-navy-MODEL.jpg",
    price: 1499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Flat Front Trousers with Insert Pockets",
    category_name: "Trousers",
    brand: "john-players",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211202/8jDL/61a7cc74f997ddf8f12c7f28/-286Wx359H-441130014-brown-MODEL.jpg",
    price: 1799,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Flat-Front Trousers",
    category_name: "Trousers",
    brand: "netplay",
    size: ["XS", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211112/UewY/618e8292aeb2690110c23808/-286Wx359H-441130007-blue-MODEL.jpg",
    price: 1299,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Flat-Front Trousers with Insert Pockets",
    category_name: "Trousers",
    brand: "john-players",
    size: ["S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210810/9kux/61117d7aaeb269a2686c92f8/-286Wx359H-441122675-grey-MODEL.jpg",
    price: 1499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Flat-Front Trousers",
    category_name: "Trousers",
    brand: "netplay",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211112/HGYN/618e85abf997ddf8f1035aae/-286Wx359H-441130009-black-MODEL.jpg",
    price: 1499,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Checked Slim Fit Flat-Front Trousers",
    category_name: "Trousers",
    brand: "mchenry",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220114/pGvm/61e1a49df997dd6623224ddc/-286Wx359H-441130821-grey-MODEL.jpg",
    price: 1499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Pack of 2 Flat-Front Relaxed Fit Trousers",
    category_name: "Trousers",
    brand: "netplay",
    size: ["S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211209/x1LL/61b10d34aeb269011004517f/-286Wx359H-462523823-grey-MODEL.jpg",
    price: 4998,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Flat-Front Trousers",
    category_name: "Trousers",
    brand: "john-players",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220224/rhO5/62169705f997dd03e2ebefe5/-286Wx359H-441137061-mediumblue-MODEL.jpg",
    price: 999,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Flat Front Trousers with Insert Pockets",
    category_name: "Trousers",
    brand: "john-players",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211202/9YEy/61a7e791aeb2690110eaa91b/-286Wx359H-441130014-navy-MODEL.jpg",
    price: 1799,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Flat-Front Trousers",
    category_name: "Trousers",
    brand: "mchenry",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211123/zDNQ/619bf417aeb2690110d0bae6/-286Wx359H-441130007-jetblack-MODEL.jpg",
    price: 1299,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Mid-Rise Straight Fit Trousers",
    category_name: "Trousers",
    brand: "netplay",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220117/jblK/61e51bc4aeb2695cdd1782c6/-286Wx359H-461682459-beige-MODEL.jpg",
    price: 2499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Flat-Front Trousers",
    category_name: "Trousers",
    brand: "netplay",
    size: ["XS", "S", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20201117/j8Xv/5fb3e85faeb269d56310ad79/-286Wx359H-441103082-navy-MODEL.jpg",
    price: 1299,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Checked Flat-Front Trousers with Insert Pockets",
    category_name: "Trousers",
    brand: "netplay",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210526/WRIx/60ad4650f997ddb312a8cbb3/-286Wx359H-441119388-olivegreen-MODEL.jpg",
    price: 1299,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Flat-Front Trousers with Insert Pockets",
    category_name: "Trousers",
    brand: "netplay",
    size: ["XS", "S", "M", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210803/el4y/61084471aeb269a9e35ea2fe/-286Wx359H-441124624-grey-MODEL.jpg",
    price: 1499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Checked Slim Fit Flat-Front Trousers",
    category_name: "Trousers",
    brand: "ketch",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210526/3mcX/60ad4920aeb269a9e3c8d0b9/-286Wx359H-441117297-grey-MODEL.jpg",
    price: 1299,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Flat-Front Chino Trousers",
    category_name: "Trousers",
    brand: "netplay",
    size: ["S", "M", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211029/Qcex/617b2d02aeb2690110b09439/-286Wx359H-469034697-multi-MODEL.jpg",
    price: 1649,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Heathered Slim Fit Flat-Front Trousers",
    category_name: "Trousers",
    brand: "netplay",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210401/XSGP/6065e49caeb269a9e32f2076/-286Wx359H-441117294-grey-MODEL.jpg",
    price: 1299,
    rating: 4,
    gender: "Men",
  },

  {
    dress_name: "Leaf Print Shirt with Patch Pocket",
    category_name: "Shirt",
    brand: "netplay",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220224/uLAB/62168f18f997dd03e2ebc98e/-286Wx359H-441136451-mintgreen-MODEL.jpg",
    price: 999,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Striped Slim Fit Shirt with Patch Pocket",
    category_name: "Shirt",
    brand: "netplay",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210528/LfCo/60aff947f997ddb312abfc84/-286Wx359H-441119286-navy-MODEL.jpg",
    price: 999,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Shirt with Patch Pocket",
    category_name: "Shirt",
    brand: "dennislingo-premium-attire",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210403/SFRS/606869e37cdb8c1f14754d55/-286Wx359H-461118587-white-MODEL.jpg",
    price: 1849,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Checked Slim Fit Shirt with Welt Pocket",
    category_name: "Shirt",
    brand: "the-indian-garage-co",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210316/jYvS/604fabf97cdb8c1f14632857/-286Wx359H-460552756-navyblue-MODEL.jpg",
    price: 1749,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Shirt with Spread Collar",
    category_name: "Shirt",
    brand: "dennislingo-premium-attire",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210420/1o3B/607eccfeaeb269a9e39729ee/-286Wx359H-462323964-purple-MODEL.jpg",
    price: 1849,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Checked Cotton Shirt with Patch Pocket",
    category_name: "Shirt",
    brand: "netplay",
    size: ["XS", "S", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210831/LMbD/612d5a347cdb8cb8240f523c/-286Wx359H-441123902-navy-MODEL.jpg",
    price: 999,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Cotton Shirt with Patch Pocket",
    category_name: "Shirt",
    brand: "netplay",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/hde/h9d/13003351818270/-286Wx359H-440971113-purple-MODEL.jpg",
    price: 899,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Checked Slim Fit Shirt with Patch Pocket",
    category_name: "Shirt",
    brand: "the-indian-garage-co",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211125/mQQ3/619e8bd4f997ddf8f119e953/-286Wx359H-460353507-green-MODEL.jpg",
    price: 1749,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Geometric Print Slim Fit Shirt",
    category_name: "Shirt",
    brand: "the-indian-garage-co",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210909/UNKr/613a00467cdb8cb8241ea1f6/-286Wx359H-460815165-white-MODEL.jpg",
    price: 1749,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Cotton Shirt with Flap Pockets",
    category_name: "Shirt",
    brand: "lee-cooper",
    size: ["XS", "S", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220125/Cpay/61ef1cc2f997dd6623398639/-286Wx359H-441213670-navy-MODEL.jpg",
    price: 1499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Cotton Shirt with Patch Pocket",
    category_name: "Shirt",
    brand: "netplay",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/hce/hfe/14383102591006/-286Wx359H-440971113-ltgrey-MODEL.jpg",
    price: 899,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Denim Slim Fit Shirt with Flap Pockets",
    category_name: "Shirt",
    brand: "dennislingo-premium-attire",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210403/dKML/6068678df997dd7b645d965e/-286Wx359H-461117395-blue-MODEL.jpg",
    price: 2499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Shirt with Band Collar",
    category_name: "Shirt",
    brand: "dennislingo-premium-attire",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210403/Cvwo/60686ecfaeb269a9e33218f5/-286Wx359H-461119027-pink-MODEL.jpg",
    price: 1849,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Cotton Shirt with Patch Pocket",
    category_name: "Shirt",
    brand: "netplay",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/h46/hea/13001739894814/-286Wx359H-440971113-white-MODEL.jpg",
    price: 899,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Shirt with Patch Pocket",
    category_name: "Shirt",
    brand: "dennislingo-premium-attire",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475201d/-286Wx359H-461117376-purple-MODEL.jpg",
    price: 1849,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Classic Slim Fit Shirt with Full Sleeves",
    category_name: "Shirt",
    brand: "dennislingo-premium-attire",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210420/E2zl/607eccd6aeb269a9e397277f/-286Wx359H-462323964-blue-MODEL.jpg",
    price: 1849,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Slim Fit Checked Shirt with Patch Pocket",
    category_name: "Shirt",
    brand: "the-indian-garage-co",
    size: ["XS", "S", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211125/X1Qp/619e9702f997ddf8f11a1941/-286Wx359H-460353521-khaki-MODEL.jpg",
    price: 1749,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Striped Shirt with Patch Pocket",
    category_name: "Shirt",
    brand: "netplay",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210814/7Ctc/6116daf67cdb8cb824f7b20d/-286Wx359H-441123872-white-MODEL.jpg",
    price: 999,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Printed Cotton Shirt with Patch Pocket",
    category_name: "Shirt",
    brand: "netplay",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210831/hKG1/612d318af997ddce89b27a82/-286Wx359H-441125841-white-MODEL.jpg",
    price: 999,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Checked Shirt with Patch Pocket",
    category_name: "Shirt",
    brand: "netplay",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211020/G0t7/616f1139aeb26901109c0a31/-286Wx359H-441124083-offwhite-MODEL.jpg",
    price: 999,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Lightly Washed Skinny Jeans",
    category_name: "Jeans",
    brand: "john-players-jeans",
    size: ["XS", "S", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220419/etUg/625dc2e3aeb26921af2989fe/-286Wx359H-441139484-jetblack-MODEL.jpg",
    price: 2199,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Mid-Rise Slim Fit Jeans",
    category_name: "Jeans",
    brand: "levis",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220224/zVaa/621680faaeb26921afb2eb53/-286Wx359H-469084060-blue-MODEL.jpg",
    price: 2599,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Skinny Fit Mid-Rise Jeans",
    category_name: "Jeans",
    brand: "john-players-jeans",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210727/xUga/60ff0e29aeb269a9e3532c69/-286Wx359H-441128532-jetblack-MODEL.jpg",
    price: 999,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Mid Wash Slim Fit Jeans",
    category_name: "Jeans",
    brand: "levis",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211005/nc3V/615c2ed4aeb2692b85adf61d/-286Wx359H-460977751-blue-MODEL.jpg",
    price: 2499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Mid-Rise Skinny Jeans",
    category_name: "Jeans",
    brand: "dnmx",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/hf5/h17/14876616327198/-286Wx359H-441038478-indigoblue-MODEL.jpg",
    price: 799,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Lightly Washed Slim Fit Jeans",
    category_name: "Jeans",
    brand: "lee-cooper",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220125/s2rg/61ef19c9f997dd662339584b/-286Wx359H-441209093-indigo-MODEL.jpg",
    price: 2399,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Mid-Wash Mid-Rise 5-Pocket Slim Jeans",
    category_name: "Jeans",
    brand: "u-s-polo-assn-",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220106/86iP/61d7083aaeb2695cdd075432/-286Wx359H-469079340-blue-MODEL.jpg",
    price: 2299,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Washed Slim Fit Jeans",
    category_name: "Jeans",
    brand: "john-players-jeans",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220104/qfR3/61d350d4aeb2695cdd040818/-286Wx359H-441131292-charcoal-MODEL.jpg",
    price: 1999,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Mid-Wash Mid-Rise Skinny Jeans",
    category_name: "Jeans",
    brand: "john-players-jeans",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211118/Q0pg/61956841aeb2690110cacbb2/-286Wx359H-441128534-ltgrey-MODEL.jpg",
    price: 999,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Mid-Rise Slim Fit Jeans",
    category_name: "Jeans",
    brand: "levis",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220224/3pMD/62169351f997dd03e2ebddc3/-286Wx359H-469084059-blue-MODEL.jpg",
    price: 2599,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Mid-Rise Slim Fit Jeans",
    category_name: "Jeans",
    brand: "dnmx",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/h95/hae/16496490643486/-286Wx359H-441038490-navy-MODEL.jpg",
    price: 999,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "513 Straight Fit Washed Jeans",
    category_name: "Jeans",
    brand: "levis",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220423/HmKs/6262f6a1f997dd03e27b3a48/-286Wx359H-469114453-black-MODEL.jpg",
    price: 3699,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Mid-Rise Straight Fit Jeans",
    category_name: "Jeans",
    brand: "lee-cooper",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220301/GpYG/621d1ea4aeb26921afbc4ce4/-286Wx359H-441243525-black-MODEL.jpg",
    price: 1499,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Washed Slim Fit Jeans",
    category_name: "Jeans",
    brand: "levis",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220212/BKjL/6206bdfeaeb26921af951a97/-286Wx359H-469084017-blue-MODEL.jpg",
    price: 2899,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Lightly Washed Slim Fit Jeans",
    category_name: "Jeans",
    brand: "lee-cooper",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211027/Efcu/6179482bf997ddf8f1ecc331/-286Wx359H-441192143-indigo-MODEL.jpg",
    price: 1699,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "Mid-Rise Slim Fit Jeans",
    category_name: "Jeans",
    brand: "lee-cooper",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211231/2XW0/61ce52e6aeb2695cddffa5f3/-286Wx359H-441192146-grey-MODEL.jpg",
    price: 1699,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Heavily Washed Skinny Jeans",
    category_name: "Jeans",
    brand: "john-players-jeans",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220419/vZS2/625db3f3f997dd03e266c875/-286Wx359H-441139481-grey-MODEL.jpg",
    price: 2199,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Mid-Wash Straight Jeans",
    category_name: "Jeans",
    brand: "lee-cooper",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211027/w0JC/617948b2aeb2690110acadb4/-286Wx359H-441192142-darkgrey-MODEL.jpg",
    price: 1699,
    rating: 5,
    gender: "Men",
  },
  {
    dress_name: "Light-Wash Skinny Fit Jeans",
    category_name: "Jeans",
    brand: "dnmx",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220208/VLMh/62016f34aeb26921af8d5d43/-286Wx359H-441128805-grey-MODEL.jpg",
    price: 1049,
    rating: 3,
    gender: "Men",
  },
  {
    dress_name: "Washed Slim Fit Jeans",
    category_name: "Jeans",
    brand: "levis",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220212/Aj6X/6206b96df997dd03e2ccad5e/-286Wx359H-469084057-blue-MODEL.jpg",
    price: 2899,
    rating: 4,
    gender: "Men",
  },
  {
    dress_name: "CL Oversized Crew-Neck Sweatshirt",
    category_name: "Sweatshirt",
    brand: "superdry",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211203/0FEa/61aa5e93aeb2690110f2ff2a/-286Wx359H-410307193-07q-MODEL.jpg",
    price: 5999,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Brand Print Crew-Neck Sweatshirt with Drop-Shoulder Sleeves",
    category_name: "Sweatshirt",
    brand: "levis",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211007/bPIN/615e69c6f997ddce8906792f/-286Wx359H-460971597-pink-MODEL.jpg",
    price: 2299,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Typographic Print Crew-Neck Sweatshirt",
    category_name: "Sweatshirt",
    brand: "dnmx",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210727/eRge/60ff3c36f997ddb312395e0f/-286Wx359H-441120878-pink-MODEL.jpg",
    price: 499,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Colour-Block Round-Neck Sweatshirt",
    category_name: "Sweatshirt",
    brand: "popster",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211005/6j7e/615ba6beaeb2692b85a62ee6/-286Wx359H-463049307-multi-MODEL.jpg",
    price: 1499,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Typographic Sweatshirt With Kangaroo Pockets",
    category_name: "Sweatshirt",
    brand: "dillinger",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211223/33Of/61c393f0f997ddf8f15cefeb/-286Wx359H-463538851-olive-MODEL.jpg",
    price: 1499,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Zip-Front Sweatshirt with Brand Icon",
    category_name: "Sweatshirt",
    brand: "puma",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211208/PoKe/61b0c885aeb2690110034917/-286Wx359H-460979277-black-MODEL.jpg",
    price: 5999,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Heathered Sweatshirt with Short Zip-Placket",
    category_name: "Sweatshirt",
    brand: "performax",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220326/J2RP/623e2d0baeb26921aff9226d/-286Wx359H-441139061-jetblack-MODEL.jpg",
    price: 999,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Typographic Print Crew-Neck Sweatshirt with Lace Panels",
    category_name: "Sweatshirt",
    brand: "rio",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210903/xOn7/61323e69aeb269a268895f77/-286Wx359H-441121973-ltgreen-MODEL.jpg",
    price: 699,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Typographic Print Crew-Neck Sweatshirt",
    category_name: "Sweatshirt",
    brand: "levis",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211005/DXdV/615c1739aeb2692b85ad6805/-286Wx359H-460971604-beige-MODEL.jpg",
    price: 2299,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Polka-Dot Print Sweatshirt with Tie-Up",
    category_name: "Sweatshirt",
    brand: "ginger-by-lifestyle",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211024/2Qi7/61757558f997ddf8f1e65b94/-286Wx359H-463212544-purple-MODEL.jpg",
    price: 999,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Hooded Sweatshirt with Front Zip Closure",
    category_name: "Sweatshirt",
    brand: "instafab-plus",
    size: ["XS", "S", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210813/WKWD/6116b8ba7cdb8cb824f71c10/-286Wx359H-462694882-yellow-MODEL.jpg",
    price: 2399,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Daisy Print Sweatshirt with Ripped Hems",
    category_name: "Sweatshirt",
    brand: "kazo",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210403/splG/606931197cdb8c1f1482bcf0/-286Wx359H-462028980-black-MODEL.jpg",
    price: 2790,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Typographic Print Crew-Neck Sweatshirt",
    category_name: "Sweatshirt",
    brand: "zivame",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220316/TIIG/6230f81ef997dd03e2157449/-286Wx359H-464015728-grey-MODEL.jpg",
    price: 1295,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Graphic Print Hooded Sweatshirt",
    category_name: "Sweatshirt",
    brand: "dnmx",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210810/Ghod/611179c5f997ddce8997dab6/-286Wx359H-441122096-white-MODEL.jpg",
    price: 899,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Typographic Sweatshirt With Kangaroo Pockets",
    category_name: "Sweatshirt",
    brand: "dillinger",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211223/G3V5/61c39317aeb2690110184040/-286Wx359H-463538846-blue-MODEL.jpg",
    price: 1499,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Graphic Print Round-Neck Sweatshirt",
    category_name: "Sweatshirt",
    brand: "ginger-by-lifestyle",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211117/48R2/61953a25f997ddf8f10ac33a/-286Wx359H-463327408-navy-MODEL.jpg",
    price: 999,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "T & F Logo Print Crew-Neck Sweatshirt",
    category_name: "Sweatshirt",
    brand: "superdry",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211006/D2Ad/615d2facf997ddce8902781f/-286Wx359H-410294704-6cy-MODEL.jpg",
    price: 4999,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Merlyn Animal Print Heathered Sweatshirt",
    category_name: "Sweatshirt",
    brand: "denizen-womens",
    size: ["XS", "S", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20201028/zMVT/5f986f94f997dd8c8379e3ef/-286Wx359H-441009653-greymelange-MODEL.jpg",
    price: 1599,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Embellished Hooded Sweatshirt",
    category_name: "Sweatshirt",
    brand: "dnmx",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210811/bUJd/6112d0efaeb269a2686ebd14/-286Wx359H-441122286-grey-MODEL.jpg",
    price: 899,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Checked Sweatshirt with Puff Sleeves",
    category_name: "Sweatshirt",
    brand: "fig",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211026/DNBS/617827fdf997ddf8f1ea36c9/-286Wx359H-441123528-ltpink-MODEL.jpg",
    price: 999,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Maternity Cami Top",
    category_name: "Top",
    brand: "mothercare",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211009/Y0YF/61613e9caeb2692b85c01496/-286Wx359H-410258455-black-MODEL.jpg",
    price: 999,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Women Floral Halter-Neck Top",
    category_name: "Top",
    brand: "outryt",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210810/foHz/611182407cdb8cb824efdf12/-286Wx359H-460859485-black-MODEL.jpg",
    price: 1299,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Colourblock Ribbed Top with Raglan Sleeves",
    category_name: "Top",
    brand: "teamspirit",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211217/89k0/61bcb504f997ddf8f1559d1a/-286Wx359H-441134394-ltpink-MODEL.jpg",
    price: 699,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Lace High-Neck Top",
    category_name: "Top",
    brand: "kraus",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211231/mN1c/61cefdf0aeb2695cdd00b264/-286Wx359H-441185759-peach-MODEL.jpg",
    price: 1299,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Lace Round-Neck Top",
    category_name: "Top",
    brand: "fig",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220315/XEt2/622f8bddf997dd03e211c2a9/-286Wx359H-441133177-ltpink-MODEL.jpg",
    price: 799,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Leaf Print V-neck Fitted Top",
    category_name: "Top",
    brand: "iscenery-by-vero-moda",
    size: ["S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220426/rIRr/6266eee7f997dd03e2800a41/-286Wx359H-441297362-black-MODEL.jpg",
    price: 1299,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Micro Print Top with Tie-Up Neckline",
    category_name: "Top",
    brand: "fig",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210225/eSQS/60374bc77cdb8c1f144d5121/-286Wx359H-441116581-olivegreen-MODEL.jpg",
    price: 599,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Ribbed Round-Neck Top",
    category_name: "Top",
    brand: "jdy-by-only",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220331/FFpf/6244b1a4f997dd03e23e2cb8/-286Wx359H-441308895-pink-MODEL.jpg",
    price: 949,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Lace Top with Raglan Sleeves",
    category_name: "Top",
    brand: "fig",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20201208/SX2Y/5fce83ecaeb269d56331db60/-286Wx359H-441112903-jetblack-MODEL.jpg",
    price: 899,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Numeric-Schiffli Round-Neck Twofer Top",
    category_name: "Top",
    brand: "teamspirit",
    size: ["S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220304/5ko7/62210f12f997dd03e20098fc/-286Wx359H-441137189-lavender-MODEL.jpg",
    price: 599,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Geometric Print Twofer Top",
    category_name: "Top",
    brand: "fig",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20201110/QzMA/5faabde5aeb269d56307c7cc/-286Wx359H-441100982-khaki-MODEL.jpg",
    price: 699,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Button-Down Shirt Top with Band-Collar",
    category_name: "Top",
    brand: "levis",
    size: ["S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220415/CPJY/62586aa6aeb26921af21f15b/-286Wx359H-469110111-green-MODEL.jpg",
    price: 2799,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Solid Collar Neck Regular Top",
    category_name: "Top",
    brand: "draax-fashions",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211001/2VqU/6156fef7f997ddce89eb631d/-286Wx359H-463041194-green-MODEL.jpg",
    price: 2200,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Ribbed Round-Neck Top with Puff Sleeves",
    category_name: "Top",
    brand: "rio",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220128/kJNj/61f405fbf997dd662345fd15/-286Wx359H-441137020-white-MODEL.jpg",
    price: 599,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Printed Button-Front Top",
    category_name: "Top",
    brand: "rio",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211109/fD8o/618a96b2f997ddf8f1fefecd/-286Wx359H-441125181-jetblack-MODEL.jpg",
    price: 699,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Ribbed Scoop-Neck Thermal Top",
    category_name: "Top",
    brand: "urban-hug",
    size: ["S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220114/PU77/61e1708df997dd662321ebdc/-286Wx359H-460923909-navy-MODEL.jpg",
    price: 1299,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "V-Neck Top with Puffed Sleeves",
    category_name: "Top",
    brand: "vero-moda",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210120/tt8V/60084d4baeb26969815187a8/-286Wx359H-441047691-navy-MODEL.jpg",
    price: 2799,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Block Print Top with Roll-Up Sleeves",
    category_name: "Top",
    brand: "divena",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210811/DicK/6112e92af997ddce899adc4c/-286Wx359H-462767419-yellow-MODEL.jpg",
    price: 1599,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Floral Print Boat-Neck Top",
    category_name: "Top",
    brand: "iscenery-by-vero-moda",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220407/BZ50/624df688f997dd03e24c48dc/-286Wx359H-441297408-peacockgreen-MODEL.jpg",
    price: 1299,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Tiered Top with Tie-Up Neckline",
    category_name: "Top",
    brand: "dnmx",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211112/2T5o/618e8d41f997ddf8f1038a3d/-286Wx359H-441125316-mustard-MODEL.jpg",
    price: 699,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Embellished Anarkali Kurta",
    category_name: "Kurta",
    brand: "kvs-fab",
    size: ["S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210923/3LgK/614bba53aeb269a268a145b9/-286Wx359H-463006701-purple-MODEL.jpg",
    price: 4299,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Embroidered Straight Kurta Set with Dupatta",
    category_name: "Kurta",
    brand: "shewill",
    size: ["S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211005/5558/615b9aabaeb2692b85a59ded/-286Wx359H-463058975-cream-MODEL.jpg",
    price: 4299,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Embroidered Straight Kurta Set with Dupatta",
    category_name: "Kurta",
    brand: "shewill",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211005/N6iQ/615b9c1ef997ddce89f7a670/-286Wx359H-463058977-green-MODEL.jpg",
    price: 3212,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Indian Straight Kurta Set",
    category_name: "Kurta",
    brand: "shewill",
    size: ["S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211005/WZ2a/615bee7df997ddce89fce404/-286Wx359H-463058781-beige-MODEL.jpg",
    price: 3212,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Embellished A-line Kurta Sets",
    category_name: "Kurta",
    brand: "gulmohar-jaipur",
    size: ["XS", "S", "M"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220117/ig1s/61e55e95f997dd662324fdd6/-286Wx359H-463669997-navy-MODEL.jpg",
    price: 3212,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Embroidered Flared Kurta",
    category_name: "Kurta",
    brand: "kimayra",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220201/tYvC/61f85bfbf997dd03e2b8d888/-286Wx359H-463750220-red-MODEL.jpg",
    price: 2299,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Embroidered Straight Kurta Set with Dupatta",
    category_name: "Kurta",
    brand: "shewill",
    size: ["S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211012/JemP/61648a45aeb2692b85cb6551/-286Wx359H-463099861-pink-MODEL.jpg",
    price: 1799,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Floral Printed Straight Kurta Set",
    category_name: "Kurta",
    brand: "gulmohar-jaipur",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220124/8ATC/61eeae7af997dd662337bae2/-286Wx359H-463263507-yellow-MODEL.jpg",
    price: 3212,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Jaipuri Print Angrakha Kurta with Tie-Up",
    category_name: "Kurta",
    brand: "avaasa-mix-n-match",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210830/cyER/612cf8697cdb8cb8240c45d0/-286Wx359H-441126353-magntafusha-MODEL.jpg",
    price: 1499,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Embroidered Sleeveless A-line Kurta with Dipped Hemline",
    category_name: "Kurta",
    brand: "avaasa-mix-n-match",
    size: ["S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211009/INAw/61612256f997ddce89115fca/-286Wx359H-441126520-darkred-MODEL.jpg",
    price: 999,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Floral Print Straight Kurta Set",
    category_name: "Kurta",
    brand: "kurtipedia",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210701/HhQ0/60dce948f997ddb312165aa8/-286Wx359H-462576649-maroon-MODEL.jpg",
    price: 3499,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Floral Print Straight Kurta Set",
    category_name: "Kurta",
    brand: "gulmohar-jaipur",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220124/IYjE/61eeadd8f997dd662337b153/-286Wx359H-463136342-maroon-MODEL.jpg",
    price: 2499,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Woven Sleeveless Kurta with High-Low Hemline",
    category_name: "Kurta",
    brand: "avaasa-mix-n-match",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210906/tV5d/61364437f997ddce89bd65bb/-286Wx359H-441125429-ltpeach-MODEL.jpg",
    price: 899,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Block Print Buton-Down Straight Kurta",
    category_name: "Kurta",
    brand: "avaasa-mix-n-match",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210810/LZXe/611184fff997ddce8997fd3c/-286Wx359H-441128870-black-MODEL.jpg",
    price: 999,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Floral Print Sleeveless Flared Kurta with Godet",
    category_name: "Kurta",
    brand: "avaasa-mix-n-match",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210922/hkFC/614b4bc1aeb269a2689f1a71/-286Wx359H-441124092-coral-MODEL.jpg",
    price: 4148,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Floral Print Straight Kurta Set",
    category_name: "Kurta",
    brand: "prakhya",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210721/G2fi/60f85bd9aeb269a9e34bbb97/-286Wx359H-462659342-black-MODEL.jpg",
    price: 599,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Floral Embroidered Straight Kurta",
    category_name: "Kurta",
    brand: "avaasa-mix-n-match",
    size: ["S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220302/1Hh4/621e7d32aeb26921afbfc3b8/-286Wx359H-441137101-mustard-MODEL.jpg",
    price: 1498,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Floral Print Round-Neck Straight Kurta",
    category_name: "Kurta",
    brand: "four-seasons",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210828/RGqM/612a031aaeb269a2688150d1/-286Wx359H-462851158-blue-MODEL.jpg",
    price: 899,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Floral Print Flared Kurta",
    category_name: "Kurta",
    brand: "avaasa-mix-n-match",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210614/lz58/60c7774daeb269a9e3e710f4/-286Wx359H-441124095-red-MODEL.jpg",
    rating: 5,
    gender: "Women",
  },

  {
    dress_name: "Minnie Print Crew-Neck Sweatshirt",
    category_name: "Women TShirt",
    brand: "dnmx",
    size: ["S", "M", "L"],
    image:
      "https://drive.google.com/file/d/1VwY5ck9WMLoIKVhKJF28CooDaPHqk8Fg/view?usp=drive_linkg",
    price: 599,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "T-shirt mint xs",
    category_name: "Women TShirt",
    brand: "fig",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210316/o4Ud/604fbd1caeb2696981866766/-286Wx359H-441117944-mint-MODEL.jpg",
    price: 399,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Vero women T-Shirt white s",
    category_name: "Women TShirt",
    brand: "vero-moda",
    size: ["S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211115/QUDX/61927922f997ddf8f105adc1/-286Wx359H-460996940-white-MODEL.jpg",
    price: 1299,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name:
      "Crew-Neck Panelled Slim Mens TShirt with Drop-Shoulder Sleeves",
    category_name: "Women TShirt",
    brand: "trendyol",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210921/Hsvf/6149f438f997ddce89d4543b/-286Wx359H-469008856-purple-MODEL.jpg",
    price: 1699,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Graphic Print Crew-Neck Tshirt",
    category_name: "Women TShirt",
    brand: "quarantine",
    size: ["S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211116/ndN5/6193ee8daeb2690110c80218/-286Wx359H-463323070-green-MODEL.jpg",
    price: 1399,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Typographic Printed Crew-Neck Tshirts",
    category_name: "Women TShirt",
    brand: "quarantine",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211119/qn6j/6197da09f997ddf8f10fc01f/-286Wx359H-463340347-blue-MODEL.jpg",
    price: 1399,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Typographic Print Round-Neck Tshirts",
    category_name: "Women TShirt",
    brand: "quarantine",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211117/FGte/6195442baeb2690110c9f97c/-286Wx359H-463325577-pink-MODEL.jpg",
    price: 1399,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Typographic Print Round-Neck Tshirts",
    category_name: "Women TShirt",
    brand: "quarantine",
    size: ["S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211117/4Tpc/619541b1aeb2690110c9d594/-286Wx359H-463325576-pink-MODEL.jpg",
    price: 1399,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Printed V-neck Tshirts",
    category_name: "Women TShirt",
    brand: "marks-spencer",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210607/TdCA/60bd7709f997ddb312b97256/-286Wx359H-462465792-green-MODEL.jpg",
    price: 1799,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Typographic Print Crew-Neck Tshirt",
    category_name: "Women TShirt",
    brand: "quarantine",
    size: ["S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211116/BXr4/6193eca9aeb2690110c7dfc6/-286Wx359H-463323073-purple-MODEL.jpg",
    price: 1399,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Floral Print Scoop-Neck Tshirts",
    category_name: "Women TShirt",
    brand: "yoonoy",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210809/SH23/61112f53f997ddce89975e2a/-286Wx359H-462752833-orange-MODEL.jpg",
    price: 790,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Tropical Print A-line Dress",
    category_name: "Dress",
    brand: "fashfun-clothing",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220425/b6UJ/62668a5df997dd03e27dd6f8/-286Wx359H-463494970-navy-MODEL.jpg",
    price: 1999,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Printed A-line Dress with Tasselled Tie-Up",
    category_name: "Dress",
    brand: "fusion",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210401/p1jM/6065e503f997dd7b645b46c3/-286Wx359H-441118513-fuchsia-MODEL.jpg",
    price: 999,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Floral Print Fit & Flare Dress",
    category_name: "Dress",
    brand: "rare",
    size: ["S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210403/bsM4/606867797cdb8c1f147522b2/-286Wx359H-461088032-blue-MODEL.jpg",
    price: 2099,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Printed Maxi Fit & Flare Dress",
    category_name: "Dress",
    brand: "fusion",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210426/hIpd/6086d741aeb269a9e3a15fd2/-286Wx359H-441118508-grey-MODEL.jpg",
    price: 1299,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Striped Printed Fit and Flare Dress",
    category_name: "Dress",
    brand: "jaipur-kurti",
    size: ["S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211023/kDbb/61732384f997ddf8f1e3a9d1/-286Wx359H-463203934-blue-MODEL.jpg",
    price: 2499,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Panelled A-line Dress with Waist Tie-up",
    category_name: "Dress",
    brand: "rare",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210406/U58D/606c557ef997dd7b64a52717/-286Wx359H-460359016-black-MODEL.jpg",
    price: 1799,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Colour-block V-neck Maxi Dress",
    category_name: "Dress",
    brand: "kvs-fab",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220321/DIAS/623887efaeb26921afe65417/-286Wx359H-464036147-yellow-MODEL.jpg",
    price: 3369,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Floral Print Scoop-Neck Shift Dress",
    category_name: "Dress",
    brand: "fig",
    size: ["S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210826/XglL/6126acf8aeb269a2687d6545/-286Wx359H-441125585-black-MODEL.jpg",
    price: 999,
    rating: 5,
    gender: "Women",
  },
  {
    dress_name: "Printed A-line Dress",
    category_name: "Dress",
    brand: "fusion",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211009/VJyK/61616377aeb2692b85c0b98a/-286Wx359H-441127445-olive-MODEL.jpg",
    price: 999,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Printed Flared Maxi Dress",
    category_name: "Dress",
    brand: "fusion",
    size: ["XS", "S", "M", "L"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210324/8FDw/605a42e6f997dd7b64537533/-286Wx359H-441117829-seagreen-MODEL.jpg",
    price: 999,
    rating: 4,
    gender: "Women",
  },
  {
    dress_name: "Indian Print A-line Dress with Tie-Up",
    category_name: "Dress",
    brand: "deewa",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211012/UZXp/6165c538aeb2692b85d1ec7e/-286Wx359H-462076821-maroon-MODEL.jpg",
    price: 1649,
    rating: 5,
    gender: "Women",
  },
];

const db = {};
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);
sequelize
  .authenticate()
  .then(() => console.log("DATABASE CONNECTED"))
  .catch((err) => console.log("ERROR: " + err));
// Define models
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = userModel(sequelize);
db.Dress = dressModel(sequelize);
// db.Category = categoryModel(sequelize);

//Don't Touch

//Sync database

// sequelize.sync({ force: true });
// console.log("Tables synchronized!");

// db.User.sync({ force: true });
// console.log("Tables synchronized!");

// db.Category.sync({ force: true });
// console.log("Tables synchronized!");

// db.Dress.sync({ force: true });
//   console.log("Tables synchronized!");

// Dress Creation

// db.Dress.bulkCreate(Dress)
//   .then((bulkCreate) => {
//     console.log(
//       "Dress Created :",
//       bulkCreate.map((category) => category.toJSON())
//     );
//   })
//   .catch((error) => {
//     console.error("Error creating Dress:", error);
//   })
//   .finally(() => {
//     sequelize.close(); // Close the Sequelize connection when done
//   });

module.exports = db;
