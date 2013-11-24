window.LandingPage = Backbone.View.extend({
    initialize:function () {
        console.log('LandingPage initialize');
        this.template = _.template(tpl.get('landing'));
    },

    render:function (eventName) {
        console.log('LandingPage render');
        $(this.el).html(this.template(this.model.toJSON()));
        this.gridView = new PostGridView({el: $('#post-grid', this.el), model: this.model});
        this.gridView.render();
        return this;
    }
});

window.PostGridView = Backbone.View.extend({
    render:function (eventName) {
        console.log('PostGridView render');
        //$(this.el).empty();
        //TODO: insert the Dal logo at the left-top cell
        _.each(this.model.models, function (post_summ, idx) {
            $(this.el).append(new PostGridItemView({model:post_summ, index:idx}).render().el);
        }, this);

        console.log('el: ' + this.el.innerHTML);
        return this;
    }
});

window.PostGridItemView = Backbone.View.extend({
    tagName:"div",

    initialize:function () {
        console.log('PostGridItemView initialize');
        console.log(tpl.get('post-grid-item'));
        this.template = _.template(tpl.get('post-grid-item'));
        console.log('initialized');
    },

    render:function (eventName) {
        console.log('PostGridItemView render');
        console.log(this.model);
        this.$el.attr('class', 'post-summ-cell grid-cell');
        $(this.el).html(this.template(this.model.toJSON()));
        console.log('el: ' + this.el.innerHTML);
        return this;
    }

});
