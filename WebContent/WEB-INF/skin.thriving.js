(function(){
	if (APS.ThrivingPortletView) return;
	
	APS.ThrivingPortletView = APS.PortletView.extend({
		initialize : function(options) {
			APS.ThrivingPortletView.__super__.initialize.apply(this, arguments);
		},
		renderControl: function() {
			var control = $('.aps-portlet-control', this.el);
			var supports = this.model.attr('supports');
			var modes = supports.modes;
			var states = supports.states;
			var self = this;
			
			var modePanel = $('<div class="modes"></div>');
			control.append(modePanel);
			
			var modesListView = control.data('modesListView');
			
			var portletHeader = control.parents('.aps-portlet-header').first();
			portletHeader.click(function() {
				if (null != modesListView) {
					modesListView.hide();
				}
			});
			
			// modesListView被缓存, 第一次点击后生成列表并缓存起来, 后续操作的逻辑是:
			// 在已经存在的条件下, 如果显示, 点击后隐藏, 否则显示
			modePanel.click(function() {
				if (null != modesListView) {
					if (modesListView.is(':visible')) {
						modesListView.hide();
					} else {
						modesListView.show();
					}
				} else {
					// TODO Add by LiuXiaotian on 2012-09-17
					// orderedModes是定义的所支持的mode: view edit edit_defaults config print help
					// 这里有个比较严峻的Bug, 它是写死在aps.page.js中的静态数组, 如果有用户自定义的模式就无法正确支持
					modesListView = $('<div class="aps-portlet-modes"></div>');
					control.append(modesListView);
					//modePanel.append(modesListView);
					for (var index = 0; index < self.orderedModes.length; index++) {
						var mode = self.orderedModes[index];
						if (null != modes[mode]) {
							var modeDisplayname = modes[mode];
							var modeItem = $('<div />');
							modeItem.attr({'name': mode})
									.appendTo(modesListView)
									.append('<span>' + modeDisplayname + '</span>')
									.click(function(event){
										modesListView.hide();
										var m = $(event.currentTarget).attr('name');
										self.setDisplayMode(m);
									});
						}
					}
					control.data('modesListView', modesListView);
				}
				
				return false;
			});
			
			for (var i = 0; i < this.orderedStates.length; i++) {
				var state = this.orderedStates[i];
				if (null != states[state]) {
					var stateDisplayname = states[state];
					var stateItem = $('<div />').addClass('aps-state aps-nav-items');
					control.append(stateItem);
					stateItem.addClass(state);
					stateItem.attr({'name': state, title: stateDisplayname})
							 .click(function(event){
								 var s = $(event.currentTarget).attr('name');
								 self.setDisplayState(s);
							 });
				}
			}
			
			// TODO Add by LiuXiaotian on 2012-09-17, 此处应该考虑国际化功能扩展
			if (APS.rootLayout.attr('editable')) {
				var removeItem = $('<div />').addClass('remove aps-nav-items');
				control.append(removeItem);
				removeItem.attr({'name': 'remove', title: '删除'})
					      .click(function(){
					    	  self.remove();
					      });
			}
		}
	});
})();