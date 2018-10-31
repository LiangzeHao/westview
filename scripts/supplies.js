var categories = [
	{
		name: "cate1"
	},
	{
		name: "cate2"
	},
	{
		name: "cate3"
	}
]

var products = [
	{
		id: 1,
		name: "prod1",
		category: "cate1"
	},	
	{
		id: 2,
		name: "prod2",
		category: "cate2"
	},	
	{
		id: 3,
		name: "prod3",
		category: "cate3"
	},
	{
		id: 4,
		name: "prod4",
		category: "cate1"
	},	
	{
		id: 5,
		name: "prod5",
		category: "cate2"
	},
	{
		id: 6,
		name: "prod6",
		category: "cate3"
	},
	{
		id: 7,
		name: "prod7",
		category: "cate1"
	}

];


for (j in categories){
	$(".category_collection").append(
		"<li id='"+categories[j].name+"' class='category_block' onclick=filterSelection('"+categories[j].name+"')>" + categories[j].name + "</li>");
}



filterSelection("all")

function filterSelection(c){	
	$(".product_collection").html("");
	for (i in products){
		if(c == "all"){
			$(".product_collection").append(
				"<div class = 'product_block' style = \"background-image: url('images/products/" + products[i].id + ".jpg')\"><span>" + products[i].name + "</span></div>");
		}
		if(products[i].category == c){
			$(".product_collection").append(
				"<div class = 'product_block' style = \"background-image: url('images/products/" + products[i].id + ".jpg')\"><span>" + products[i].name + "</span></div>");
		}
	}
	if(c != "all"){
		$("li.active_category").removeClass("active_category");
		$('#'+c).addClass("active_category");
	}
}
