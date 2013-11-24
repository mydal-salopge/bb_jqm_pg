window.LandingPage = Backbone.View.extend({
    initialize:function () {
        console.log('LandingPage initialize');
        this.template = _.template(tpl.get('landing'));
    },

    render:function (eventName) {
        console.log('LandingPage render');
        $(this.el).html(this.template(this.model.toJSON()));
        this.listView = new PostListView({el: $('#post-list', this.el), model: this.model});
        this.listView.render();
        return this;
    }
});

window.PostListView = Backbone.View.extend({
    render:function (eventName) {
        console.log('PostListView render');
        $(this.el).empty();
        //TODO: insert the Dal logo at the left-top cell
        _.each(this.model.models, function (post_summ, idx) {
            $(this.el).append(new PostListItemView({model:post_summ, index:idx}).render().el);
        }, this);

        console.log('el: ' + this.el.innerHTML);
        return this;
    }
});

window.PostListItemView = Backbone.View.extend({
    tagName:"div",

    initialize:function () {
        console.log('PostListItemView initialize');
        console.log(tpl.get('post-list-item'));
        this.template = _.template(tpl.get('post-list-item'));
        console.log('initialized');
    },

    render:function (eventName) {
        console.log('PostListItemView render');
        console.log(this.model);
        this.$el.attr('class', 'post-summ-box');
        $(this.el).html(this.template(this.model.toJSON()));
        console.log('el: ' + this.el.innerHTML);
        return this;
    }

});
