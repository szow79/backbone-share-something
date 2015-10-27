// https://cdnjs.com/libraries/backbone.js/tutorials/what-is-a-router
// Paste this code into the console to play around with it
var AppRouter = Backbone.Router.extend({
    routes: {
        "posts/:id": "getPost",
        "cool": "awesome",
        "*actions": "defaultRoute"
        // Backbone will try to match the route above first
    },

    // you can define your route functions within the Router
    awesome: function() {
      alert("thats awesome");
    }
});
// Instantiate the router
var router = new AppRouter;
// you can also define your route functions in the event listener
router.on('route:getPost', function (id) {
    // Note the variable in the route definition being passed in here
    alert( "Get post number " + id );
});
router.on('route:defaultRoute', function (actions) {
    alert( 'Your route was ' + actions );
});
// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();
