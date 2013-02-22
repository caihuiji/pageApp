<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>hello-backbonejs</title>
<script src="lib/jquery-1.7.2.min.js"></script>
<script src="lib/underscore.js"></script>
<script src="lib/backbone.js"></script>
</head>
<body>

	<script type="text/javascript">
(function (){
	
	Backbone.sync = function (method,model,success,error){
		success();
	};
	
	var Item = Backbone.Model.extend({
		defaults : {
			part1 : 'hello',
			part2 : 'world'
		}
		
	});
	
	var List = Backbone.Collection.extend({
		model : Item
	});
	
	var ItemView = Backbone.View.extend({
		tagName:'li',
		
		events : {
			'click span.swap': 'swap',
			'click span.delete':'remove'
		},
		
		initialize : function () {
			_.bindAll(this,'render','unrender','swap','remove');
			
			this.model.bind('change',this.render);
			this.model.bind('remove',this.unrender);
			
		},
		render : function (){
			$(this.el).html('<span>' + this.model.get('part1') + ' '+this.model.get('part2')+'</span>'+
					'&nbsp; &nbsp; <span class="swap" style="font-family:sans-serif; color:blue; cursor:pointer;">[swap]</span>' + 
					'<span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">[delete]</span>');
			return this;
		},
		
		unrender : function (){
			$(this.el).remove();
		},
		
		swap : function (){
			var swapped = {
					part1:this.model.get('part2'),
					part2:this.model.get('part1')
			};
			this.model.set(swapped);
			
		},
		
		remove : function (){
			this.model.destroy();
		}
	});
	
	var ListView = Backbone.View.extend({
		el : "body",
		
		events : {
			'click button#add' : 'addItem'
		} ,
		
		initialize : function (){
			_.bindAll (this,'render','addItem','appendItem');
			
			this.counter = 0;
			
			this.collection = new List();
			this.collection.bind('add',this.appendItem);
		},
		render : function (){
			var self = this;
			
			$(this.el)
				.append('<button id="add">Add list item</button>')
				.append('<ul></ul>');
			
			_(this.collection.models).each(function (Item){
				self.appendItem(item);
			},this);
		},
		
		addItem : function (){
			this.counter ++;
			
			var item = new Item();
			item.set({
				part2:item.get('part2') + this.counter
			})
			this.collection.add(item);
		},
		
		appendItem : function (item){
			var itemView = new ItemView ({
				model:item
			})
			this.$('ul').append(itemView.render().el);
		}
	});
	
	var listView = new ListView();
	listView.render();
})(jQuery);
</script>


</body>
</html>