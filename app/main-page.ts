import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Observable } from "data/observable";
import { ObservableArray } from "data/observable-array"
import {File, Folder, knownFolders} from "file-system"

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    var observable:Observable=<Observable> new Observable();
        var documents = knownFolders.currentApp();
        var jsonFile:File = documents.getFile('files/studentDetails.json');
        var jsonData;
        jsonFile.readText()
            .then(function (content) {
                    jsonData = JSON.parse(content);
                    // console.log(content);
                    // console.dump(jsonData);
                    observable.set("info",jsonData);
            }, function (error) {
                throw new Error('Could not read JSON file');
            });
    page.bindingContext = observable;
}


function readJSONFile():Observable{
    
    return new Observable();
}