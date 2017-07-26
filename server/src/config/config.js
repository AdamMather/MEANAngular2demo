var exports = module.exports = {};

var development = {
    "db": {
        "uri": process.env.MEAN_MONGO_BASE_URI ? process.env.MEAN_MONGO_BASE_URI : 'mongodb://localhost:27017/mean-quickstart'
    }
};

var test = {
    "db": {
        "uri": process.env.MEAN_MONGO_BASE_URI ? process.env.MEAN_MONGO_BASE_URI : 'mongodb://localhost:27017/mean-quickstart'
    }
};

var production = {
    "db": {
        "uri": process.env.MEAN_MONGO_BASE_URI ? process.env.MEAN_MONGO_BASE_URI : 'mongodb://localhost:27017/mean-quickstart'
    }
};

var openshift = {
    "db": {
        "uri": process.env.VCAP_SERVICES ? JSON.parse(process.env.VCAP_SERVICES).mongodb[0].credentials.uri : 'mongodb://localhost:27017/mean-quickstart'
    }
};

exports.configForEnv = function() {
    if (process.env.VCAP_SERVICES) {
        return openshift;
    } else {
        switch (process.env.NODE_ENV) {
            case "development": return development;
            case "test": return test;
            case "production": return production;
            default: return development;
        }
    }
}