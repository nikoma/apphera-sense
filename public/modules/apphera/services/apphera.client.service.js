(function () {
    'use strict';


    var apphera = function ($http) {
        var base_url = '/api/';

        var dashboardApi = 'http://localhost:3000/api/';
        //Accounts

        var getAccounts = function () {
            return $http.get(base_url + 'accounts')
                .then(function (response) {
                    return response.data;
                });
        };

        var createAccount = function (account) {
            return $http.post(base_url + 'accounts', account)
                .then(function (response) {
                    return response.data;
                });
        };

        //Analytics

        var getNamedQueries = function () {
            return $http.get(base_url + 'analytics')
                .then(function (response) {
                    return response.data;
                });
        };
        var createNamedQuery = function (namedQuery) {
            return $http.post(base_url + 'analytics', namedQuery)
                .then(function (response) {
                    return response.data;
                });
        };
        var execueNamedQuery = function (queryId, queryParams) {
            return $http.post(base_url + 'analytics/' + 'query/' + queryId, queryParams)
                .then(function (response) {
                    return response.data;
                });
        };


        //Campaigns

        var getCampaigns = function () {
            return $http.get(base_url + 'campaigns')
                .then(function (response) {
                    return response.data;
                });
        };

        var createCampaign = function (campaign) {
            return $http.post(base_url + 'campaigns', campaign)
                .then(function (response) {
                    return response.data;
                });
        };

        var editCampaign = function (campaign, campaignId) {
            return $http.put(base_url + 'campaigns/' + campaignId + '/edit', campaign)
                .then(function (response) {
                    return response.data;
                });
        };


        var addKeywordsToCampaign = function (keywords, campaignId) {
            return $http.post(base_url + 'campaigns/keywords/' + campaignId, keywords)
                .then(function (response) {
                    return response.data;
                });
        };

        var changeCampaignKeywords = function (keywords, campaignId) {
            return $http.put(base_url + 'campaigns/' + campaignId, keywords)
                .then(function (response) {
                    return response.data;
                });
        };

        var deleteCampaign = function (campaignId) {
            return $http.delete(base_url + 'campaigns/' + campaignId)
                .then(function (response) {
                    return response.data;
                });
        };


        //Categories

        var getCategories = function () {
            return $http.get(base_url + 'categories', { cache: true})
                .then(function (response) {
                    return response.data;
                });
        };

        var getCountries = function () {
            return $http.get(base_url + 'country_codes', { cache: true})
                .then(function (response) {
                    return response.data;
                });
        };

        //Competitors - Get system identified competitors

        var getCompetitors = function (account_id, organization_id) {
            return $http.get(base_url + 'competitors/' + account_id + '/' + organization_id)
                .then(function (response) {
                    return response.data;
                });
        };
        //Find competitors by geography and category. Need to use either Apphera API or have a rich dataset
        var getGeoCompetitors = function (radius, latitude, longitude, category_id) {
            return $http.get(base_url + 'geocomps', {
                params: { r: radius, lat: latitude, lon: longitude, cat: category_id}})
                .then(function (response) {
                    return response.data;
                });
        };


        //Content Providers

        var getContentProviders = function () {
            return $http.get(base_url + 'content_providers', { cache: true})
                .then(function (response) {
                    return response.data;
                });
        };

        //Facebook

        var createFacebookPost = function (facebookPost) {
            return $http.post(base_url + 'facebook/post', facebookPost)
                .then(function (response) {
                    return response.data;
                });
        };

        var createFacebookPageCredentials = function (credentialsObject) {
            return $http.post(base_url + 'facebook/credentials', credentialsObject)
                .then(function (response) {
                    return response.data;
                });
        };

        //Foursquare

        //Keywords

        var getKeywords = function () {
            return $http.get(base_url + 'keywords')
                .then(function (response) {
                    return response.data;
                });
        };

        var createKeyword = function (keyword) {
            return $http.post(base_url + 'keywords', keyword)
                .then(function (response) {
                    return response.data;

                });
        };

        //Links

        var getLinks = function (account_id, organization_id) {
            return $http.get(base_url + 'links/' + account_id + '/' + organization_id)
                .then(function (response) {
                    return response.data;
                });
        };
        var getReviews = function (organizationId) {
            return $http.get(base_url + 'reviews/' + organizationId)
                .then(function (response) {
                    return response.data;
                });

        };
        //Markets

        var getMarkets = function () {
            return $http.get(base_url + 'markets', { cache: true})
                .then(function (response) {
                    return response.data;
                });
        };

        //Tracks

        var getTracks = function () {
            return $http.get(base_url + 'tracks', { cache: true})
                .then(function (response) {
                    return response.data;
                });
        };

        var getTrackResults = function (track, keywordId, market) {
            if (market !== undefined && track === 'search') {
                return $http.get(base_url + 'tracks/' + keywordId + '/' + track + '/' + market)
                    .then(function (response) {
                        return response.data;
                    });

            } else {
                return $http.get(base_url + 'tracks/' + keywordId + '/' + track)
                    .then(function (response) {
                        return response.data;
                    });
            }
        };


        //Organizations

        var getOrganizations = function () {
            return $http.get(base_url + 'organizations/')
                .then(function (response) {
                    return response.data;
                });
        };

        var getOrganization = function(organizationId){
            return $http.get(base_url + 'organization/' + organizationId)
                .then(function(response){
                    return response.data;
                });
        };

        var createOrganization = function (organization) {
            return $http.post(base_url + 'organizations', organization)
                .then(function (response) {
                    return response.data;
                });
        };
        var updateOrganization = function (organization) {
            return $http.put(base_url + 'organizations', organization)
                .then(function (response) {
                    return response.data;
                });
        };


        // Available methods

        return {
            createAccount: createAccount,

            getAccounts: getAccounts,

            getCampaigns: getCampaigns,

            createCampaign: createCampaign,

            editCampaign: editCampaign,

            addKeywordsToCampaign: addKeywordsToCampaign,

            changeCampaignKeywords: changeCampaignKeywords,

            deleteCampaign: deleteCampaign,

            getContentProviders: getContentProviders,

            getCompetitors: getCompetitors,

            getGeoCompetitors: getGeoCompetitors,

            getCategories: getCategories,

            getCountries: getCountries,

            createFacebookPost: createFacebookPost,

            createFacebookPageCredentials: createFacebookPageCredentials,

            getKeywords: getKeywords,

            getNamedQueries: getNamedQueries,

            createNamedQuery: createNamedQuery,

            executeNamedQuery: execueNamedQuery,

            getLinks: getLinks,

            getTrackResults: getTrackResults,

            getReviews: getReviews,

            getMarkets: getMarkets,

            getOrganizations: getOrganizations,

            getOrganization: getOrganization,

            createOrganization: createOrganization,

            updateOrganization: updateOrganization,

            createKeyword: createKeyword,

            dashboardApi: dashboardApi

        };
    };
    var module = angular.module('apphera');
    module.factory('apphera', apphera);
}());