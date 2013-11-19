window.PostGridPage = Backbone.View.extend({
    initialize:function () {
        this.template = _.template(tpl.get('landing'));
    },

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        this.girdView = new PostGridView({el: $('#post-grid', this.el), model: this.model});
        this.gridView.render();
        return this;
    }
});

window.PostGridView = Backbone.View.extend({
    initialize:function () {
        this.model.bind("reset", this.render, this);
    },

    render:function (eventName) {
        $(this.el).empty();

        //TODO: insert the Dal logo at the left-top cell
        _.each(this.model.models, function (post, idx) {
            $(this.el).append(new PostGridItemView({model:post, index:idx}).render().el);
        }, this);

        return this;
    }
});

window.EmployeeListItemView = Backbone.View.extend({
    tagName:"div",

    initialize:function () {
        this.template = _.template(tpl.get('post-grid-item'));
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render:function (eventName) {
        //TODO: add class 'ui-block-a', 'ui-block-b' or 'ui-block-c' 
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});
