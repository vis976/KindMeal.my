import { navbar, navbar2 } from "../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("navbar2").innerHTML = navbar2();

import { footer, bigfooter } from "../component/footer.js";
document.getElementById("footer").innerHTML = footer();
document.getElementById("bigfooter").innerHTML = bigfooter();
// -----------Navbar Imported---------

// For showing cap image and logged in person's name
let usrName = JSON.parse(localStorage.getItem("username"));
if (usrName !== null) {
	document.getElementById("left").innerHTML = null;
	let box = document.createElement("div");
    box.style="display:flex;justify-content:space-between;align-items:center;color:gray"

	let capImg = document.createElement("img");
	capImg.src = "https://www.kindmeal.my/images/icon_notice.png";
	capImg.style = "height:30px";

	let desc = document.createElement("p");
	desc.innerText = "Hi, " + usrName + "!";
    desc.style="padding-top: 15px;font-size:18px"

	box.append(capImg, desc);
	document.getElementById("left").append(box);
}
//********************************************************************************

let small = [
	"https://www.kindmeal.my/photos/shop/4/498-3527-m.jpg",
	"https://www.kindmeal.my/photos/shop/4/486-3307-m.jpg",
	"https://www.kindmeal.my/photos/shop/5/593-4434-m.jpg",
	"https://www.kindmeal.my/photos/shop/3/326-1891-m.jpg",
	"https://www.kindmeal.my/photos/shop/5/501-3385-m.jpg",
	"https://www.kindmeal.my/photos/shop/5/567-4252-m.jpg",
];

let i = 0;

let img = document.createElement("img");
img.setAttribute("class", "smallslide");

setInterval(() => {
	if (small.length === i) {
		i = 0;
	}
	img.src = small[i];
	document.getElementById("slide2").append(img);
	i++;
}, 2500);

document.getElementById("slide2").addEventListener("click", redirect);
function redirect() {
	window.location.href ="hotpicks.html" ;
	console.log("hi")
}

let big = [
	"https://www.kindmeal.my/photos/deal/6/610-3386-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/621-3576-m.jpg",
	"https://www.kindmeal.my/photos/deal/7/709-4950-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/696-4563-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/683-4718-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/627-3532-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/669-4206-m.jpg",
];

let text = [
	"Tasty Midas Touch,15% Off",
	"Nature Dining,10% Off-Camp Forest",
	"Tasty, Joyful Moments, 10% Off -Moment of Joy",
	"Mangga Natural Lifestyle,20% Off -Mangga Vegetarial Cafe",
	"Lei Cha & Organic Meals, 20% Off -- Green Talk Healthy Organic & Cafe",
	"wholesome Western Experience,20% Off -- Piccolo Cafe",
	"Plant-Based Culinary Experience, 15% Off --Pc Studio Cafe",
];
let disc = [
	"15% Discount",
	"10% Discount",
	"20% Discount",
	"10% Discount",
	"15% Discount",
	"20% Discount",
	"10% Discount",
];

let img1 = document.createElement("img");
img1.setAttribute("class", "big");

let textcon = document.createElement("p");
textcon.setAttribute("class", "textcon");
let dis = document.createElement("h3");
dis.setAttribute("class", "disc");
setInterval(() => {
	if (big.length === i && text.length == i && disc.length == 1) {
		i = 0;
	}
	img1.src = big[i];
	textcon.innerText = text[i];
	dis.innerText = disc[i];
	document.getElementById("discount").append(dis);
	document.getElementById("slidetext").append(textcon);
	document.getElementById("slide1").append(img1);
}, 2500);

document.getElementById("slide1").addEventListener("click", redirect1);
function redirect1() {
	window.location.href = "hotpicks.html";
}

big.map(function (ele) {
	let div = document.createElement("div");
	div.setAttribute("class", "downdiv");
	let img = document.createElement("img");
	img.src = ele;
	img.setAttribute("class", "divimage");
	div.append(img);
	document.getElementById("downslide").append(div);
});

let latest = [
	{
		picture:
			"https://scontent-xsp1-3.xx.fbcdn.net/v/t15.5256-10/118936299_337625310935276_3997630193772583091_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=i6NbZqy_1hYAX_50k9f&_nc_ht=scontent-xsp1-3.xx&edm=ALdPpPkEAAAA&oh=00_AT8j9lwcSqinZNhi5qxhTYpkhXwjuVQp3INlY1MXqm_FoA&oe=62B1BCAA",
		title: "Pw&j Brownies!",
	},

	{
		picture:
			"https://scontent-xsp1-3.xx.fbcdn.net/v/t39.30808-6/287041754_5446098342117073_6660978878986206579_n.jpg?stp=dst-jpg_p720x720&_nc_cat=111&ccb=1-7&_nc_sid=8024bb&_nc_ohc=h4V1bePMEu0AX_AQBv0&_nc_ht=scontent-xsp1-3.xx&edm=ALdPpPkEAAAA&oh=00_AT90B2UaSZYA1ix-aRxARnDub2ziHpg4cdZWyB0zgZek0w&oe=62B1224A",
		title: "Happy Mother''s Day To All The Amazing Human And Animal Moms..",
	},

	{
		picture:
			"https://scontent-xsp1-1.xx.fbcdn.net/v/t15.5256-10/284925776_1066489664296820_5272832431046710659_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=4RZ-5ZKDWgMAX9HoO5T&_nc_ht=scontent-xsp1-1.xx&edm=ALdPpPkEAAAA&oh=00_AT9Do9Jkyvi64g9t1GahuAZAbpgg-BG6VrkWIXx2sbtgLQ&oe=62B0DE4E",
		title: "Funny Alapacas",
	},
	{
		picture:
			"https://scontent-xsp1-3.xx.fbcdn.net/v/t15.5256-10/286690993_1106565880203074_4958130869355862733_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=DCTkMILl3FEAX8qmqYy&_nc_ht=scontent-xsp1-3.xx&edm=ALdPpPkEAAAA&oh=00_AT9UFON4oukm-JGyCgj38Y_5IQh7Qt5in29SejYpi6Wgdw&oe=62B13C9A",
		title: "Vegan Food Adventures With Raw Chef Yin Vegielicious..",
	},
	{
		picture:
			"https://scontent-xsp1-1.xx.fbcdn.net/v/t15.5256-10/283210376_505164994685720_366849823846066202_n.jpg?stp=dst-jpg_s720x720&_nc_cat=105&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=Vuau1O3Up0cAX-sMOzV&_nc_ht=scontent-xsp1-1.xx&edm=ALdPpPkEAAAA&oh=00_AT8KtDfvIwtidpf8fqCS7oTlWJVx-64lxqehb0pGaQF9lg&oe=62B09B3D",
		title: "Swedish Millballs with Mash and Gravy",
	},
];

latest.map(function (ele) {
	let div = document.createElement("div");
	div.setAttribute("class", "newsdiv");
	let div1 = document.createElement("div");
	div1.setAttribute("class", "imgdiv");
	let img = document.createElement("img");
	img.src = ele.picture;
	img.setAttribute("class", "livepic");
	let title = document.createElement("p");
	title.innerHTML = ele.title;
	title.setAttribute("class", "comment");
	div1.append(img);
	div.append(div1, title);
	document.getElementById("news2").append(div);
});
let moment = [
	{
		picture: "https://www.kindmeal.my/photos/moment/23/23882-45290-s.jpg",
		title: "The Hungry Tapir karenkhong",
	},

	{
		picture: "https://www.kindmeal.my/photos/moment/23/23881-45285-s.jpg",
		title: "Soul Kitchen Cheras C180 VyVian",
	},

	{
		picture: "https://www.kindmeal.my/photos/moment/23/23880-45282-s.jpg",
		title: "Jujube Vegetarian House Yulek VyVian",
	},

	{
		picture: "https://www.kindmeal.my/photos/moment/23/23879-45278-s.jpg",
		title: "好地方素食 Niche Vegetarian Restaurant FatJedi",
	},
	{
		picture: "https://www.kindmeal.my/photos/moment/23/23878-45277-s.jpg",
		title: "Jujube Vegetarian House 枣子树Yulek VyVian",
	},
];

moment.map(function (ele) {
	let div = document.createElement("div");
	div.setAttribute("class", "momentdiv");
	let div1 = document.createElement("div");
	div1.setAttribute("class", "momimgdiv");
	let img = document.createElement("img");
	img.src = ele.picture;
	img.setAttribute("class", "mompic");
	let title = document.createElement("p");
	title.innerHTML = ele.title;
	title.setAttribute("class", "momcomment");
	div1.append(img);
	div.append(div1, title);
	document.getElementById("moment2").append(div);
});
let restra = [
	{
		picture: "https://www.kindmeal.my/photos/item/0/387-4299-s.jpg",
		title: "Gailan with Ginger",
	},

	{
		picture: "https://www.kindmeal.my/photos/item/0/539-7147-s.jpg",
		title: "Button Mushroom",
	},

	{
		picture: "https://www.kindmeal.my/photos/item/0/180-1742-s.jpg",
		title: "Jeera Aloo",
	},

	{
		picture: "https://www.kindmeal.my/photos/item/0/270-3094-s.jpg",
		title: "Chickpea Salad 鷹嘴豆沙律",
	},
	{
		picture: "https://www.kindmeal.my/photos/item/0/281-2884-s.jpg",
		title: "Latte",
	},
];

restra.map(function (ele) {
	let div = document.createElement("div");
	div.setAttribute("class", "momentdiv");
	let div1 = document.createElement("div");
	div1.setAttribute("class", "resdiv");
	let img = document.createElement("img");
	img.src = ele.picture;
	img.setAttribute("class", "mompic");
	let title = document.createElement("p");
	title.innerHTML = ele.title;
	title.setAttribute("class", "momcomment");
	div1.append(img);
	div.append(div1, title);
	document.getElementById("res3").append(div);
});

let superhero = [
	{
		picture: "https://www.kindmeal.my/photos/member/41/41211-m.jpg",
		title: "RichelAng",
	},

	{
		picture: "https://www.kindmeal.my/photos/member/14/14012-m.jpg",
		title: "ChungChun",
	},

	{
		picture: "https://www.kindmeal.my/photos/member/23/23328-m.jpg",
		title: "JeleneTeow1",
	},

	{
		picture: "https://www.kindmeal.my/photos/member/37/37767-m.jpg",
		title: "KooTY",
	},
	{
		picture: "https://www.kindmeal.my/photos/member/41/41236-m.jpg",
		title: "FoodLover425",
	},
];

superhero.map(function (ele) {
	let div = document.createElement("div");
	div.setAttribute("class", "momentdiv");
	let div1 = document.createElement("div");
	div1.setAttribute("class", "resdiv");
	let img = document.createElement("img");
	img.src = ele.picture;
	img.setAttribute("class", "mompic");
	let title = document.createElement("p");
	title.innerHTML = ele.title;
	title.setAttribute("class", "momcomment");
	div1.append(img);
	div.append(div1, title);
	document.getElementById("super").append(div);
});
let deals = [
	{
		picture: "https://www.kindmeal.my/images/intro_deal.png",
		title: "Get Great Deals",
		dis: "Show our FREE digital coupons to instantly enjoy exciting deals",
	},
	{
		picture: "https://www.kindmeal.my/images/intro_kindmoment.png",
		title: "Share KindMoments",
		dis: "Spread the joy by sharing your yummy dining moments",
	},
	{
		picture: "https://www.kindmeal.my/images/intro_menu.png",
		title: "Discover Delicious Food",
		dis: "Explore the latest exquisite offerings and creative menus",
	},
	{
		picture: "https://www.kindmeal.my/images/intro_friends.png",
		title: "Meet Food Lovers",
		dis: "Make new, compassionate friends and share great food tips",
	},
];

deals.map(function (ele) {
	let div = document.createElement("div");
	div.setAttribute("class", "dealbox");
	let div1 = document.createElement("div");
	div1.setAttribute("class", "dealdiv");
	let img = document.createElement("img");
	img.src = ele.picture;
	img.style.width = "60%";
	img.style.height = "80%";
	img.style.marginTop = "20px";

	let title = document.createElement("h5");
	title.innerHTML = ele.title;
	let disc = document.createElement("p");
	disc.innerHTML = ele.dis;
	disc.style.padding = "3px";

	div1.append(img);
	div.append(div1, title, disc);
	document.getElementById("deal").append(div);
});
