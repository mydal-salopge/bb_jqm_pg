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
        this.limit = 11;
        this.fetchMorePosts();
    },

    fetchMorePosts: function() {
        console.log('fetchMorePosts');
        console.log(this.offset);
        console.log(this.limit);
        
        this.add([
            {
                image_url: 'img/dal_test_img1.png',
                bg_color: '#000000',
                title: 'TestImage1',
                category: 'testimg',
                post_id: 1
            },
            {
                image_url: 'img/dal_test_img2.png',
                bg_color: '#000000',
                title: 'TestImage2',
                category: 'testimg',
                post_id: 2
            },
            {
                image_url: ' ',
                bg_color: '#000000',
                title: 'TestColor',
                category: 'testColor',
                post_id: 1
            },
            {
                image_url: 'img/dal_logo.png',
                bg_color: '#000000',
                title: 'DalLogo',
                category: 'logo',
                post_id: 1
            }
        ]);
    }
});
