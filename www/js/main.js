var AppRouter = Backbone.Router.extend({
    routes:{
        "":"landing"
    },

    initialize: function () {
        this.firstPage = true;
        this.latestposts = new PostSummaryCollection();
        console.log(this.latestposts);
        console.log('initialized');
    },

    landing: function() {
        console.log('landing');
        new LandingPage({model: this.latestposts});
        this.changePage(new LandingPage({model: this.latestposts}));
    },

    changePage: function (page) {
        console.log('changePage');
        $(page.el).attr('data-role', 'page');
        page.render();

        console.log('page.el: ' + page.el.innerHTML);

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
    //TODO: remove setTimeout for release   
    setTimeout(function() {
        tpl.loadTemplates(['landing', 'post-list-item'],
            function () {
                app = new AppRouter();
                Backbone.history.start();
            });
    }, 1000);
});
