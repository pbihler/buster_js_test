var config = module.exports;

config["Browser Tests"] = {
    rootPath: "../",
    environment: "browser", // or "node"
    sources: [ // only required for "browser"
        "src/**/*.js"
    ],
    tests: [
        "test/*-test.js"
    ]
};
