'use strict';

module.exports = function (app) {

    var api = require('../controllers/api');
    //var request = require('request');

//var authorization = require('./middlewares/authorization');
    var account_id = 0;
// Article authorization helpers
    var hasAuthorization = function (req, res, next) {
        if (!req.user) {
            return res.send(401, 'User is not authorized');
        }
        account_id = 1;//req.user.account_id;
        next();
    };
    var users = require('../../app/controllers/users');
    app.route('/api**').get(hasAuthorization);

    //Analytics

    app.route('api/analytics')
        .get(api.getNamedQueries);

    app.route('api/analytics')
        .post(api.createNamedQuery);

    app.route('api/analytics/:queryId')
        .post(api.executeNamedQuery);


    //Campaigns
    app.route('/api/campaigns')
        .get(api.getCampaigns);

    app.route('/api/campaigns')
        .post(api.createCampaign);

    app.route('/api/campaigns/:campaignId/edit')
        .put(api.editCampaign);

    app.route('/api/campaigns/:campaignId')
        .delete(api.deleteCampaign);

    app.route('/api/campaigns/keywords/:campaignId')
        .post(api.addKeywordToCampaign);

    app.route('/api/campaigns/:campaignId')
        .put(api.changeKeywordsInCampaign);
    // Facebook
    // post to wall
    app.route('/api/facebook/post')
        .post(api.facebookPost);

    app.route('/api/facebook/credentials')
        .post(api.createFacebookPagesCredentials);
    //Twitter Routes


    app.route('/api/twitter/newest')
        .get(api.getNewestTweets);

    app.route('/api/twitter/users/count')
        .get(api.getUsersCountTweets);

    app.route('/api/twitter/count')
        .get(api.getCountTweets);

    app.route('/api/twitter/followers_count')
        .get(api.getFollowersCountTweets);

    app.route('/api/twitter/followers_average')
        .get(api.getFollowersAvgTweets);

    app.route('/api/twitter/user_followers_ranking')
        .get(api.getUserFollowersRanking);

    app.route('/api/twitter')
        .get(api.getTweets);

    app.route('/api/twitter/tweet')
        .post(api.Tweet);

    app.route('/api/twitter/app/credentials')
        .get(api.getTwitterAppCredentials);

    app.route('/api/twitter/app/credentials')
        .post(api.createTwitterAppCredentials);

    app.route('/api/twitter/app/credentials')
        .put(api.updateTwitterAppCredentials);

    app.route('/api/twitter/app/credentials')
        .delete(api.deleteTwitterAppCredentials);

    app.route('/api/twitter/credentials')
        .post(api.createTwitterUserCredentials);

    app.route('/api/twitter/timeline')
        .get(api.getTwitterUserTimeLine);


    //Organizations Routes

    app.route('/api/categories')
        .get(api.getCategories);

    app.route('/api/country_codes')
        .get(api.getCountryCodes);

    app.route('/api/organizations')
        .post(api.createOrganization);

    app.route('/api/organizations')
        .get(users.requiresLogin, api.getOrganizations);


    // TODO: Need to clean up API to prevent route 'stunts' like this- account_id in body?
    app.route('/api/organization/:organizationId')
        .get(api.getOrganization);

    app.route('/api/organizations/:organizationId')
        .delete(api.deleteOrganization);

    app.route('/api/organizations/:organizationId')
        .put(api.updateOrganization);

    app.param('organizationId', api.organization);

    app.route('/api/keywords')
        .get(api.getKeywords);

    app.route('/api/reviews/:organizationId')
            .get(api.getReviews);

    app.route('/api/items')
        .get(api.getItems);
//    app.route('/api/keywords/' + 1)
//        .get(api.get_keywords);
    app.route('/api/keywords')
        .post(api.createKeyword);

    app.route('/api/tracks/:id/facebook')
        .get(api.getTracksFaceboook);

    app.route('/api/tracks/:id/search/:market')
        .get(api.getTracksSearch);

    app.route('/api/markets')
        .get(api.getMarkets);

    //youtube api

    app.route('/api/tracks/:id/youtube')
        .get(api.getYoutube);
    app.route('/api/tracks/:id/instagram')
        .get(api.getInstagram);
    app.route('/api/tracks/:id/twitter')
        .get(api.getTweetsByTrack);
    //Markets api
    app.route('/api/markets')
        .get(api.getMarkets);

};
