'use strict';

app.service('initService', function($rootScope, $cookieStore, $window, $location, requestService, ENV){
    var url = $location.url();
    var apiUrl = ENV.transferProtocol+ENV.apiEndpoint;
    //$rootScope.metaDescription = "Your true Folk in Wedding Ceremony to assist you. We help people in negotiating with vendors of their choice. We build App-Card and free wedding website.";

    // $rootScope.metaKeywords = "wedding planner in India, wedding planner India, wedding planners in India, best wedding planner in India, top wedding planners in India, wedding planners India, best wedding planners in India, famous wedding planners in India, bridal jewellery sets, bridal necklace sets, bridal ring sets, indian bridal jewelry sets, bridal jewellery set, bridal jewellery, invitation marriage card, wedding planner in Jaipur, wedding planner in pink city rajasthan, online wedding cards, online wedding planner, marriage invitation for friends, wedding photography, asian wedding photography, indian wedding decorations, wedding decorators, wedding invitation wording samples, wedding reception venues, wedding planner website, images of wedding cards online, friend invitation for wedding, online event management, christian matrimony, home interior design, decoration for marriage, wedding caterers, marriage wedding cards, wedding invitation message, indian wedding card, indian wedding site, hindu wedding cards, wedding card designs, wedding planning, banquet halls in jaipur, corporate event management companies, invitation cards wedding online, interior design online, wedding fireworks in Jaipur, wedding furnitures in jaipur, ghori wala and band in Jaipur, wedding beauty services, car buses on rent service in Jaipur, wedding dance studio, catering service in Jaipur, lighting service in Jaipur, tent house service in Jaipur, wedding sound and music services, wedding mehandi services, wedding marriage garden, wedding lighting services";
    $rootScope.errorHandler = function(errorCode) {
        switch(errorCode) {
            case 401:
                $window.location.href = '/#!/';
                break;
            case 0:
                $window.location.href = '/#!/500.html';
                break;
            case 404:
                $window.location.href = '/#!/404.html';
                break;
            default:
                $window.location.href = '/#!/500.html';
                break;
        }
    };
});
