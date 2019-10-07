Page({
	data: {
		showtab: 0, //顶部选项卡索引
		tabnav: {
			tabnum: 5,
			tabitem: [
				{
					"id": 0,
					"text": "LOGO设计"
				},
				{
					"id": 1,
					"text": "APP开发"
				},
				{
					"id": 2,
					"text": "网站建设"
				},
				{
					"id": 3,
					"text": "品牌营销"
				},
				{
					"id": 4,
					"text": "小程序开发"
				},
				{
					"id": 5,
					"text": "命名取名"
				},
				{
					"id": 6,
					"text": "PPT设计"
				},
				{
					"id": 7,
					"text": "代运营"
				},
				{
					"id": 8,
					"text": "公众平台开发"
				},
				{
					"id": 9,
					"text": "工业设计"
				},
				{
					"id": 10,
					"text": "动漫游戏"
				},
				{
					"id": 11,
					"text": "视频制作"
				},
				{
					"id": 12,
					"text": "更多"
				},
			]
		},
		productList: [],
		// tab切换
		currentTab: 0,
	},
	onLoad: function () {
	},
	setTab: function (e) {
		var that = this
		that.setData({
			showtab: e.currentTarget.dataset.tabindex
		})
		if (this.data.currentTab === e.currentTarget.dataset.tabindex) {
			return false;
		} else {
			that.setData({
				currentTab: e.currentTarget.dataset.tabindex
			})
		}
	},
	/**
	* 滑动切换tab
	*/
	bindChange: function (e) {
		var that = this;
		that.setData({
			currentTab: e.detail.current,
			showtab: e.detail.current
		});
	},
})