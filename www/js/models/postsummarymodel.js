window.PostSummary = Backbone.Model.extend({
    defaults: {
        image_url:  '',
        bg_color: '',
        title: '',
        category: '',
        post_id: -1
    },
    initialize:function () {
        console.log('PostSummary Model Initializer');
    }
});

window.PostSummaryCollection = Backbone.Collection.extend({
    model:PostSummary,

    initialize: function() {
        console.log('PostSummaryCollection initialize');
        this.offset = 0;
        this.limit = 17;
        this.fetchMorePosts();
    },

    fetchMorePosts: function() {
        console.log('fetchMorePosts');
        console.log(this.offset);
        console.log(this.limit);
        var i,
            images = ['', 'img/dal_test_img1.png', 'img/dal_test_img2.png'],
            titles = ['글 내용의 머릿자들이 이 사진 밑에', '사진이 없는 경우 색박스', '생각의 지도'],
            categories = ['first', 'second', 'third'],
            colors = ['#13d394', '#c37b62', '#9bc7dd'],
            rnd_idx,
            data = [];

        for (i = 0; i < this.limit; i +=1 ) {
            img_idx = Math.floor(Math.random() * 3);
            color_idx = Math.floor(Math.random() * 3);
            title_idx = Math.floor(Math.random() * 3);
            category_idx = Math.floor(Math.random() * 3);
            data.push({
                image_url: images[img_idx],
                bg_color: colors[color_idx],
                title: titles[title_idx],
                category: categories[category_idx],
                post_id: i
            });
        }
        this.add(data);
    }
});
