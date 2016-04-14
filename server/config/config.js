/**
 * Environment dependent configuration properties
 */
var config = {
    local: {
        env : 'local',
        root: require('path').normalize(__dirname + '/..'),
        app: {
            name: 'ankPayRoll-local'
        },
        host: '172.16.1.108',
        port: '7000',
        tokenSecret: "ankPayRoll-app-v01",
        db_url: 'mongodb://172.16.1.108:27017/ankPayRoll_demo',
        clientUrl: 'http://172.16.1.108:4000',
        version: '1.0.0',
        perPageLimit:10,
        support_emails : ['anshul.agarwal@anktech.co.in']
    },
    development: {
        env : 'development',
        root: require('path').normalize(__dirname + '/..'),
        app: {
            name: 'ankPayRoll-local'
        },
        host: '172.16.1.108',
        port: '7000',
        tokenSecret: "ankPayRoll-app-v01",
        db_url: 'mongodb://172.16.1.108:27017/ankPayRoll_demo',
        clientUrl: 'http://172.16.1.108:4000',
        version: '1.0.0',
        perPageLimit:10,
        support_emails : ['anshul.agarwal@anktech.co.in']
    },
    production: {
        env : 'production',
        root: require('path').normalize(__dirname + '/..'),
        app: {
            name: 'ankPayRoll-local'
        },
        host: '172.16.1.108',
        port: '7000',
        tokenSecret: "ankPayRoll-app-v01",
        db_url: 'mongodb://172.16.1.108:27017/ankPayRoll_demo',
        clientUrl: 'http://172.16.1.108:4000',
        version: '1.0.0',
        perPageLimit:10,
        support_emails : ['anshul.agarwal@anktech.co.in']
    }
},
env = process.env.NODE_ENV || 'local';
module.exports = config[env];
