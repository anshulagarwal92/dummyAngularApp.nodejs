
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise("/404.html");
    var routes = [
        {
            name:"home",
            url: "/",
            views: {
                "main":   { templateUrl: "views/main.html" }
            },
            title : 'Dummy App | Home',
            description : "Your true Folk in Wedding Ceremony to assist you. We help people in negotiating with vendors of their choice. We build App-Card and free wedding website.",
            activeNav: 'home'
        },{
            name:"about",
            url: "/about",
            views: {
                "main":   { templateUrl: "views/about.html" }
            },
            title : 'Dummy App | About Us',
            description : "Your true Folk in Wedding Ceremony to assist you. We help people in negotiating with vendors of their choice. We build App-Card and free wedding website.",
            activeNav: 'about'
        },{
            name:"contact",
            url: "/contact",
            views: {
                "main":   { templateUrl: "views/contact.html" }
            },
            title : 'Dummy App | Contact Us',
            description : "Your true Folk in Wedding Ceremony to assist you. We help people in negotiating with vendors of their choice. We build App-Card and free wedding website.",
            activeNav: 'contact'
        }
    ];
    $.each(routes,function(k,v){
        var defaultOption = {
            url : '/home', // root route
            name : 'name',
            views : {
                'header' : {
                    templateUrl : 'views/header/header.html'
                },
                'main' : {
                    templateUrl : 'views/main.html'
                },
                'footer' : {
                    templateUrl : 'views/footer/footer.html'
                }
            }
        };
        var route = $.extend(true,defaultOption,v );
        $stateProvider.state(v.name, route);
    });

    if(window.location.search != "") {
        var fragmentArr =  window.location.search.split("/");
        if(fragmentArr.length > 0 && fragmentArr[0] == '?_escaped_fragment_=') {
            var url = window.location.search.replace('?_escaped_fragment_=', '#!');
            window.location.href = url;
        }
    } else if(window.location.pathname === "/" && !window.location.hash.length) {
        window.location.href = '#!/';
    }

});
