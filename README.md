[
[![Build Status](https://travis-ci.org/meanjs/mean.svg?branch=master)](https://travis-ci.org/meanjs/mean)

## The Apphera Sense Dashboard or Cockpit is your starting point for social media monitoring and engagement. It is one of the most
## important endpoints to Apphera Core, the main Apphera API

Add your Apphere API token as environment variable before using Apphera Sense

export APPHERA_API_TOKEN=o8wd5o23479hkejhiwr87r898775pdm37dp (example)



## Before You Begin 
Before you begin we recommend you read about the basic building blocks that assemble this MEAN.JS application: 
* MongoDB - Go through [MongoDB Official Website](http://mongodb.org/) and proceed to their [Official Manual](http://docs.mongodb.org/manual/), which should help you understand NoSQL and MongoDB better.
* Express - The best way to understand express is through its [Official Website](http://expressjs.com/), particularly [The Express Guide](http://expressjs.com/guide.html); you can also go through this [StackOverflow Thread](http://stackoverflow.com/questions/8144214/learning-express-for-node-js) for more resources.
* AngularJS - Angular's [Official Website](http://angularjs.org/) is a great starting point. You can also use [Thinkster Popular Guide](http://www.thinkster.io/), and the [Egghead Videos](https://egghead.io/).
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.

## Prerequisites
Make sure you have installed all these prerequisites on your development machine.
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager, if you encounter any problems, you can also use this [Github Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:

```
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process, in order to install it make sure you've installed Node.js and npm, then install grunt globally using npm:

```
$ sudo npm install -g grunt-cli
```


## Quick Install
Once you have installed Apphera Sense you need to download the very heart of the application: Apphera Core V2 and create an API key on Apphera Core
 which you then add to app/controller/api.server.controller.js.
 This way your dashboard should start communicating with the main Apphera Core server. 
```
$ npm install
```


## Running Your Application
After the install process is over, you'll be able to run your application using Grunt, just run grunt default task:

```
$ grunt
```

Your application should run on the 3000 port so in your browser just go to [http://localhost:3000](http://localhost:3000)
                            
That's it! your application should be running by now, to proceed with your development check the other sections in this documentation. 
If you encounter any problem try the Troubleshooting section.

## License
Installation & FAQ

For questions and documentation and discussions please use our main website: http://www.apphera.com

Licensing

Apphera is distributed under a dual license: an open source license, and a commercial license. The open source license under which Apphera is distributed is the Version 3 of the AGPL with the addition that it also applies to SaaS (Software as a service companies). The AGPL is one of the world's most popular open source software license.

For many users, the AGPLv3 license suits their use of Apphera completely. These users are not distributing proprietary modifications, additions to, or derivatives of Apphera and they do not require the legal protections of a commercial license.

For other users, the AGPLv3 does not suit their use of Apphera. These users wish to use Apphera in ways, products, markets or have other requirements that are not compatible with the AGPLv3. To satisfy these demands, Apphera, as the worldwide exclusive licensor of Apphera, offers commercial licensing of Apphera.

A commercial license to Apphera provides customers the legal means both to modify Apphera and to incorporate it into a product, without the obligation of providing the resulting code under the AGPLv3 license. License fees are priced competitively and offer tremendous value for the capabilities delivered. Fees vary depending on the application and the scale of its use. For more information about software licensing, please contact the Apphera Sales department.

Apphera remains the premier open source social media monitoring and engagement project and development for both Apphera and its components follows the open source model. Apphera provides ongoing commitment and contributions to open source. Apphera's commercial licensing option provides customers with the best possible choice - the innovation and creativity of the open source model, and the protections and flexibility available with traditional, commercial software.

