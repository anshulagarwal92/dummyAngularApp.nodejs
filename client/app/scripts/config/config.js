"use strict";

 angular.module('clientApp.config', [])

.constant('ENV', {
    name:'local',transferProtocol:'http://',
    apiEndpoint:'172.16.1.108:3000',
    siteName:'Dummy App',
    siteUrl:'172.16.1.108:4000/#/',
    // blogApi:'http://blog.weddingfolk.com/api/',
    // imagePath:'https://s3-us-west-2.amazonaws.com/weddingfolk/'
}).constant('reCaptchaKeys', {
    publicKey:'6LeYyQcTAAAAAM4oC3LZsALhjGW0EzIgVF-80khv'
});
