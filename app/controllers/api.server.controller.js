'use strict';

/**
 * Module dependencies.
 */

var request = require('request').defaults({headers: {
    'api-token': process.env.APPHERA_API_TOKEN || 'or token here - not recommended'
}});

var URL_API = 'https://api.apphera.com/api/v1/';
var status = 200;

//Analytics

exports.getNamedQueries = function (req, res) {
    var newurl = URL_API + 'analytics/' + req.user.account_id;
    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });
};

exports.createNamedQuery = function (req, res) {
    var newurl = URL_API + 'analytics/' + req.user.account_id;
    request.post({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(200, body);
        } else {
            res.send(500);
        }
    });

};
exports.executeNamedQuery = function (req, res) {
    var newurl = URL_API + 'analytics/' + req.user.account_id + '/query/' + req.params.queryId;
    request.post({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(200, body);
        } else {
            res.send(500);
        }
    });

};


//Campaigns

exports.getCampaigns = function (req, res) {
    var newurl = URL_API + 'campaigns/' + req.user.account_id;
    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });
};


exports.createCampaign = function (req, res) {
    var newurl = URL_API + 'campaigns/' + req.user.account_id;
    request.post({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(200, body);
        } else {
            res.send(500);
        }
    });
};

exports.editCampaign = function (req, res) {
    var newurl = URL_API + 'campaigns/' + req.user.account_id + '/' + req.params.campaignId + '/edit';
    request.put({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(200, body);
        } else {
            res.send(500);
        }
    });
};

exports.deleteCampaign = function (req, res) {
    var newurl = URL_API + 'campaigns/' + req.user.account_id + '/' + req.params.campaignId;
    request.del({
            headers: {'content-type': 'application/json'},
            url: newurl
        },
        function (error, response, body) {
            if (!error) {
                res.send(200, body);
            } else {
                res.send(500);
            }
        });
};

exports.addKeywordToCampaign = function (req, res) {
    var newurl = URL_API + 'campaigns/' + req.user.account_id + '/keywords/' + req.params.campaignId;
    request.post({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(200, body);
        } else {
            res.send(500);
        }
    });
};
exports.changeKeywordsInCampaign = function (req, res) {
    var newurl = URL_API + 'campaigns/' + req.user.account_id + '/keywords/' + req.params.campaignId;
    request.put({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(200, body);
        } else {
            res.send(500);
        }
    });
};
//youtube api


exports.getYoutube = function (req, res) {
    var newurl = URL_API + 'tracks/' + req.params.id + '/youtube';
    request({ url: newurl, headers: { 'Range': req.headers.range, 'Range-Unit': 'items'} }, function (error, response, body) {
        if (req.status === 204)
            res.send([]);
        res.setHeader('Content-Range', response.headers['content-range']);
        res.status(status).send(body);
    });
};
// twitter
exports.getTweetsByTrack = function (req, res) {
    var newurl = URL_API + 'tracks/' + req.params.id + '/twitter';
    console.log(req.headers.range);
    request({ url: newurl, headers: { 'Range': req.headers.range, 'Range-Unit': 'items'} }, function (error, response, body) {
        if (req.status === 204)
            res.send([]);
        res.setHeader('Content-Range', response.headers['content-range']);
        res.status(status).send(body);
    });
};
// instagram api
exports.getInstagram = function (req, res) {
    var newurl = URL_API + 'tracks/' + req.params.id + '/instagram';
    request({ url: newurl, headers: { 'Range': req.headers.range, 'Range-Unit': 'items'} }, function (error, response, body) {
        if (req.status === 204)
            res.send([]);
        res.setHeader('Content-Range', response.headers['content-range']);
        res.status(status).send(body);
    });
};


//markets api


exports.getMarkets = function (req, res) {
    var newurl = URL_API + 'markets';
    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });
};


//Keywords

exports.getKeywords = function (req, res) {
    var newurl = URL_API + 'keywords/' + req.user.account_id;
    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });
};

exports.createKeyword = function (req, res) {
    var newurl = URL_API + 'keywords/' + req.user.account_id;

    request.post({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(200, body);
        } else {
            res.send(500);
        }
    });
};

// Reviews

exports.getReviews = function (req, res) {
    var newurl = URL_API + 'reviews/' + req.user.account_id + '/' + req.organizationId;

    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });
};
//Facebook


exports.getItems = function (req, res) {
    var newurl = URL_API + 'items/' + req.user.account_id;
    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });
};
exports.getTracksFaceboook = function (req, res) {
    var newurl = URL_API + 'tracks/' + req.param('id') + '/facebook';
    request({ url: newurl, headers: { 'Range': req.headers.range, 'Range-Unit': 'items'} }, function (error, response, body) {
        if (req.status === 204)
            res.send([]);
        res.setHeader('Content-Range', response.headers['content-range']);
        res.status(status).send(body);
    });
};
exports.getTracksSearch = function (req, res) {
    var newurl = URL_API + 'tracks/' + req.param('id') + '/search/' + req.param('market');
    console.log(newurl);
    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });
};


exports.facebookPost = function (req, res) {
    var newurl = URL_API + 'facebook/post';

    request.post({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(200, body);
        } else {
            res.send(500);
        }
    });
};
exports.createFacebookPagesCredentials = function (req, res) {
    var newurl = URL_API + 'facebook/pages/credentials';
    //  var token = req.user.additionalProvidersData. TODO - get token - just need to look up properties

    request.post({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(200, body);
        } else {
            res.send(500);
        }
    });
};
//export
//exports.

//Twitter Functions

exports.getTweets = function (req, res) {

    var newurl = URL_API + 'twitter/newest';

    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });

};

exports.getNewestTweets = function (req, res) {

    var newurl = URL_API + 'twitter/newest';

    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });

};

exports.getUsersCountTweets = function (req, res) {

    var newurl = URL_API + 'twitter/users_count';

    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });

};

exports.getCountTweets = function (req, res) {

    var newurl = URL_API + 'twitter/users_count';

    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });

};

exports.getFollowersCountTweets = function (req, res) {

    var newurl = URL_API + 'twitter/followers_count';

    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });

};

exports.getFollowersAvgTweets = function (req, res) {

    var newurl = URL_API + 'twitter/followers_average';

    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });

};

exports.getUserFollowersRanking = function (req, res) {

    var newurl = URL_API + 'twitter/user_followers_ranking';

    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });

};

exports.createTwitterAppCredentials = function (req, res) {
    var newurl = URL_API + 'twitter/app/credentials';

    request.post({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(200, body);
        } else {
            res.send(500);
        }
    });
};

exports.updateTwitterAppCredentials = function (req, res) {
    var newurl = URL_API + 'twitter/app/credentials';

    request.put({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(200, body);
        } else {
            res.send(500);
        }
    });
};

exports.getTwitterAppCredentials = function (req, res) {
    var newurl = URL_API + 'twitter/app/credentials';

    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });
};

exports.deleteTwitterAppCredentials = function (req, res) {
    var newurl = URL_API + 'twitter/app/credentials';

    request.delete(newurl, function (error, response, body) {
        res.status(status).send(body);
    });
};
exports.createTwitterUserCredentials = function (req, res) {
    var newurl = URL_API + 'twitter/credentials';

    request.post({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(200, body);
        } else {
            res.send(500);
        }
    });
};

// The Tweet method can be used for regular tweets, re-tweets and replies based
// on body
exports.Tweet = function (req, res) {
    var newurl = URL_API + 'twitter/tweet';

    request.post({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(200, body);
        } else {
            res.send(500);
        }
    });
};

// In order for this to work the dashboard user id has to be in the Apphera system!
exports.getTwitterUserTimeLine = function (req, res) {
    var newurl = URL_API + 'twitter/timeline/' + req.user.id;
    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });
};

exports.getOrganizations = function (req, res) {

    var newurl = URL_API + 'organizations/' + req.user.account_id;

    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });
};
exports.getOrganization = function(req, res){
    var newurl = URL_API + 'organizations/' + req.user.account_id + '/' + req.organizationId;
    request(newurl, function(error, response, body){
        res.status(status).send(body);
    });
};



exports.getCategories = function (req, res) {

    var newurl = URL_API + 'categories/228';

    request(newurl, function (error, response, body) {
        res.status(status).send(body);
    });
};

exports.getCountryCodes = function (req, res) {

    var newurl = URL_API + 'countries';

    request.get(newurl, function (error, response, body) {
        res.status(status).send(body);
    });
};
exports.getMarkets = function (req, res) {

    var newurl = URL_API + 'markets';
    request.get(newurl, function (error, response, body) {
        res.status(status).send(body);
    });
};


exports.organization = function (req, res, next, id) {
    req.organizationId = id;
    next();
};


exports.deleteOrganization = function (req, res) {
    var newurl = URL_API + 'organizations/' + req.organizationId + '/delete';

    request.del(newurl, function (error, response) {
        if (!error) {
            res.send(204);
        } else {
            res.send(500);
        }
    });
};

exports.createOrganization = function (req, res) {
    var newurl = URL_API + 'organizations/create/' + req.user.account_id;
    request.post({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(204);
        } else {
            res.send(500);
        }
    });
};

exports.updateOrganization = function (req, res) {
    var newurl = URL_API + 'organizations/' + req.organizationId;
    request.put({
        headers: {'content-type': 'application/json'},
        url: newurl,
        json: req.body
    }, function (error, response, body) {
        if (!error) {
            res.send(204);
        } else {
            res.send(500);
        }
    });
};

