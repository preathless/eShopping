//- Expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '232450040604252', //- your App ID
        'clientSecret'  : '4a99f7c2f48d97987d087fcceb051308', //- your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }
};