/*//////////////////////////////////////////////////////////
//
//  - Auth: ekkun.com [eiji@ekkun.com]
//  - 2013-06-24 (MON)
//
//////////////////////////////////////////////////////////*/


$(document).ready(function(){

	// スクロールフロー
	$('#aside').scrollFollow({
		speed: 300,
		offset: 50
	});

	// リンクアニメーション
	 $('#g-navi li a').hover(
		function(){
			$(this).stop().animate({'backgroundPosition': '0'},200);
		},
		function () {
			$(this).stop().animate({'backgroundPosition': '-300px'},300);
		}
	);

	// サイドナビゲーション
	$('#side-menu').pageslide({ modal: true });

});

