$(function(){
	var $win = $(window),
		$doc = $(document);
	var proJ3 = {
		init:function(){
			this.showJ3Img();
			this.showJ3Antenna();
			this.showJ3Chip();
			this.showJ3Body()
		},
		checkImgLoaded:function(src,callback){
			var img = new Image();
			img.src = src;
			img.error = function(){
				// arguments.callee(src);
			}
			img.onload = function(){
				if(img.complete === true){
					callback();
				}else{
					// arguments.callee(src);
				}
			}
		},
		showJ3Img:function(){
			// 跑车线条加载完毕后的回调
			var $sportCar = $(".j3-sports-car"),
				$j3MainImg = $(".j3-img-1");
			this.checkImgLoaded("./../static/images/j3-mask.png",function(){
				$sportCar.animate({
					opacity:0
				},600,function(){
					$j3MainImg.animate({
						opacity:1
					},600,function(){
						$sportCar.animate({
							opacity:1
						},500)
					})
				})
			})
		},
		showJ3Antenna:function(){
			var $antenna = $(".j3-img-2"),
				$j3LineTwo = $(".j3-line-two"),
				$j3Signal = $(".j3-signal"),
				j3LineTwoTop = $j3LineTwo.offset().top,
				flag;
			if(flag) return;
			$doc.scroll(function(){
				var docTop = $doc.scrollTop();
					distance = j3LineTwoTop - docTop;
				if(distance < 200){
					flag = true;
					$antenna.animate({
						opacity:1,
						bottom:0
					},800,function(){
						$j3Signal.removeClass("hide").addClass("aniexpand");
					})
				}
			})
		},
		showJ3Chip:function(){
			var $j3ChipLeft = $(".j3-chip.left"),
				$j3ChipRight = $(".j3-chip.right"),
				$j3LineThree = $(".j3-line-three"),
				j3LineThreeTop = $j3LineThree.offset().top,
				flag;
			if(flag) return;
			$doc.scroll(function(){
				var docTop = $doc.scrollTop(),
					distance = j3LineThreeTop - docTop;
				if(distance < 200){
					$j3ChipLeft.animate({
						opacity:1,
						left:"94px"
					},1500)
					$j3ChipRight.animate({
						opacity:1,
						right:"94px"
					},1500,function(){
						$(".j3-kit").removeClass("hide").addClass("zoomIn")
					})
				}
			})
		},
		showJ3Body:function(){
			var $j3Body = $(".j3-img-4"),
				$j3lineFour = $(".j3-line-four"),
				$j3Plolish = $(".j3-dull-polish"),
				j3LineFourTop = $j3lineFour.offset().top,
				flag;
			if(flag) return;
			$doc.scroll(function(){
				var docTop = $doc.scrollTop(),
					distance = j3LineFourTop - docTop;
				if(distance < 200){
					$j3Body.animate({
						opacity:1,
						top:0
					},1000,function(){
						$j3Plolish.removeClass("hide").addClass("zoomIn")
					})
				}
			})
		}
	}
	proJ3.init();
})