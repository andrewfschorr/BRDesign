var BRD = BRD || {};

BRD.mosaic = (function(){
		var config = {
			
		};
		var init = function () {
			$('.project img').each(function(key, value){
				$this = $(value);
				if( $this.width() > 571 ){
					$this.css('width', '100%');
				}else{
					$this.css('width', '49%');
					if( key % 2 == 1 ){
						$this.css('margin-right', '2%');
					}
				}
			});
		}
        return {
                init: init
        };
        
})();
