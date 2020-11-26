// const remote = require('electron').remote;

const { truncateSync } = require("fs");

function ChangePage(type) {
    var container = document.getElementById(type);
    if (container.getAttribute("class") != "active" || container.hasAttribute("class") != null) {
        var active = document.getElementsByClassName("active");
        for (index = 0; index < active.length; index++) {
            active[index].removeAttribute("class");
        }
        container.setAttribute("class", "active");
        SetPage(type);
    }
}

function SetPage(type) {
    if (type == "home") {
        document.getElementById("banner").className = "banner";
        document.getElementById("listContainer").className = "container disable";
        NavigationBackground(type);
    } else if (type == "parts" || type == "motorcycle") {
        document.getElementById("banner").className = "banner disable";
        document.getElementById("listContainer").setAttribute("class", "container");
        NavigationBackground(type);
    }
    // else {
    //     remote.getCurrentWindow().close();
    // }
}

function NavigationBackground(type) {
    if (type == "home") {
        document.getElementById("sidebar").setAttribute("style", "background: rgb(255, 66, 66, 0.1);");
    } else {
        document.getElementById("sidebar").setAttribute("style", "background: rgb(255, 66, 66, 0.75);");
        if (type == "parts") {
            document.getElementById("addBtn").setAttribute("name", "parts");
        } else if (type == "motorcycle") {
            document.getElementById("addBtn").setAttribute("name", "motorcycle");
        }
        SetList(type)
    }
}


function SetList(type) {
    var header = document.getElementById("tableHeader");
    removeChilds(header);
    var trHeader = document.createElement("tr");
    trHeader.setAttribute("class", "headerItem");
    var th = document.createElement("th");
    th.textContent = "Header"
    trHeader.appendChild(th);
    th = document.createElement("th");
    th.textContent = "Header 1"
    trHeader.appendChild(th);
    th = document.createElement("th");
    th.textContent = "Header 2"
    trHeader.appendChild(th);
    th = document.createElement("th");
    th.textContent = "Header 3"
    trHeader.appendChild(th);
    header.appendChild(trHeader);

    if (type == "parts") {
        var table = document.getElementById("itemsBox");
        removeChilds(table);

        for (var i = 0; i <= 10; i++) {
            var tr = trContainer(i);
            tr.appendChild(tdContainer("Example " + i));
            tr.appendChild(tdContainer("Example " + i));
            tr.appendChild(tdContainer("Example " + i));
            tr.appendChild(tdContainer("Example " + i));
            table.appendChild(tr);
        }
    } else {
        var table = document.getElementById("itemsBox");
        removeChilds(table);

        for (var i = 0; i <= 5; i++) {
            var tr = trContainer(i);
            tr.appendChild(tdContainer("Example " + i));
            tr.appendChild(tdContainer("Example " + i));
            tr.appendChild(tdContainer("Example " + i));
            tr.appendChild(tdContainer("Example " + i));
            table.appendChild(tr);
        }
    }
}

function trContainer(id) {
    var tr = document.createElement("tr");
    tr.setAttribute("class", "item");
    tr.setAttribute("id", id);
    tr.setAttribute("onclick", "OpenDetails(" + id + ")");
    return tr;
}

function tdContainer(text) {
    var td = document.createElement("td");
    td.textContent = text;
    return td;
}

function removeChilds(parent) {
    var child = parent.lastElementChild;
    while (child) {
        parent.removeChild(child);
        child = parent.lastElementChild;
    }
}