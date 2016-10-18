(function($){
	$.fn.fixedTable=function(option){
		var $this=$(this);
		var $table=$this.find('table');
		var $thead=$table.find('thead');
		var $tbody=$table.find('tbody');
		var defaults={
			height:300,
		};
		option=$.extend(defaults,option)
		$this.css({
			position:"relative",
		})
		$("<div>").appendTo(this).append($table).css({
			height:option.height,
			'overflow-y':"auto"
		});
		$thead.css({
			'visibility':'hidden'
		});
		var theadHeight=$thead.outerHeight();
		var theadWidth=$thead.outerWidth();
		var fixedHead=$("<div class='fixedHead'>").prependTo($this);
		fixedHead.css({
			height:theadHeight,
			width:theadWidth,
			position:"absolute",
			zIndex:2,
			top:0,
			left:0,
			overflow:'hidden'
		}).html(function(){
			var $tr=$thead.find('tr').children();
			var span="";
			w=theadWidth/$tr.length;
			$tr.each(function(){
				var $el=$(this);
				span+="<span style=display:inline-block;text-align:center;width:"+(w)+"px;>"+$el.text()+"</span>"
			})
			return span
		})
	}
})(jQuery)