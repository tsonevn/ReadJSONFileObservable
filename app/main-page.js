"use strict";
var observable_1 = require("data/observable");
var file_system_1 = require("file-system");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    var observable = new observable_1.Observable();
    var documents = file_system_1.knownFolders.currentApp();
    var jsonFile = documents.getFile('files/studentDetails.json');
    var jsonData;
    jsonFile.readText()
        .then(function (content) {
        jsonData = JSON.parse(content);
        // console.log(content);
        // console.dump(jsonData);
        observable.set("info", jsonData);
    }, function (error) {
        throw new Error('Could not read JSON file');
    });
    page.bindingContext = observable;
}
exports.navigatingTo = navigatingTo;
function readJSONFile() {
    return new observable_1.Observable();
}
//# sourceMappingURL=main-page.js.map