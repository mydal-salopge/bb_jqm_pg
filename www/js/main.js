var AppRouter = Backbone.Router.extend({
    routes:{
        "":"grid",
    },

    initialize: function () {
        console.log('initialize');
        this.firstPage = true;
    },

    grid: function() {
       this.changePage(new PostGridPage({model: this.searchResults})); 
    },

    changePage: function (page) {
        console.log('changePage');

        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.defaultPageTransition;
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    }

});

$(document).ready(function () {
    console.log('starts app');

    tpl.loadTemplates(['landing', 'post-grid-item'],
        function () {
            app = new AppRouter();
            Backbone.history.start();
        });
});
