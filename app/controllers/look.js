var animation = require('alloy/animation');
var articleTop = [];
var articleBottom = [];
var articleShoes = [];

articleTop[0] = '/top.png';
articleTop[1] = '/bottom.png';
articleTop[2] = '/shoes.png';

articleBottom[0] = '/top.png';
articleBottom[1] = '/bottom.png';
articleBottom[2] = '/shoes.png';

articleShoes[0] = '/top.png';
articleShoes[1] = '/bottom.png';
articleShoes[2] = '/shoes.png';


// handle the swipe event -- change the liner notes 
// to a random member of the notes array
$.articleTop.addEventListener('swipe',function(){
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	$.articleTopImg.image = articleTop[Math.floor(Math.random()*3)];
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
});

$.articleBottom.addEventListener('swipe',function(){
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	$.articleBottomImg.image = articleBottom[Math.floor(Math.random()*3)];
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
});



$.articleShoes.addEventListener('swipe',function(){
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
	$.articleShoesImg.image = articleShoes[Math.floor(Math.random()*3)];
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
});


// handle the swipe event -- change the liner notes 
// to a random member of the notes array
$.articleBottom.addEventListener('swipe',function(){
	$.articleBottomImg.image.animation = articleTop[Math.floor(Math.random()*3)];
});

// handle the swipe event -- change the liner notes 
// to a random member of the notes array
$.articleShoesImg.addEventListener('swipe',function(){
	$.articleShoesImg.image = articleTop[Math.floor(Math.random()*3)];
});


// Show task list based on selected status type
function showArticle() {
	//console.log(e);
		Alloy.createController("article").getView().open();
}



