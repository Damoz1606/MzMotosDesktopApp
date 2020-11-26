const remote = require('electron').remote;

function EnableButton(type) {
    if (type == "editBtn") {
        document.getElementById(type).setAttribute("class", "button disable");
        document.getElementById("readyBtn").setAttribute("class", "button");
        EnableDiv(type);
    } else if (type == "readyBtn") {
        if (Check()) {
            EnableDiv(type);
            document.getElementById(type).setAttribute("class", "button disable");
            document.getElementById("editBtn").setAttribute("class", "button");
        }
    }
}

function EnableDiv(type) {
    if (type == "editBtn") {
        document.getElementById("detailDiv").setAttribute("class", "detailContainer disable");
        document.getElementById("editDiv").setAttribute("class", "detailContainer");
    } else if (type == "readyBtn") {
        if (Check()) {
            document.getElementById("editDiv").setAttribute("class", "detailContainer disable");
            document.getElementById("detailDiv").setAttribute("class", "detailContainer");
        }
    }
}

function Save() {
    if (Check()) {
        console.log("Saving");
    }
}

function Close() {
    remote.getCurrentWindow().close();
    //remote.getCurrentWindow().close();
}

function Check() {
    console.log("Checking");
    return true;
}