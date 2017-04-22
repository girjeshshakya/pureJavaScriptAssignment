var peopledata;
window.onload = function () {

    $.getJSON('people.json', function (data) {
        peopledata = data;
        fillpage(data);
    });

    var searchBox = document.getElementById('search-text-input');
    searchBox.addEventListener('keyup', selectedItems, false);

    var element = document.getElementById("button-holder");
    element.addEventListener("click", alertme, false);
};



function fillpage(data) {
    var idtag = 'p';
    var count = 1;

    var listt = document.getElementsByClassName('personName');
    Array.prototype.forEach.call(listt, function (item) {
        item.childNodes[1].innerHTML = '';
    });
    for (var key in data) {
        var elementId = idtag + count;

        var element = document.getElementById(elementId);
        element.innerHTML = data[key].name;
        element.setAttribute("index", key);

        (function (index) {
            element.addEventListener("click", function () {
                show(index);
            }, false);
        })(key);

        count++;
    }
}


function show(index) {
    console.log("you are here");
    document.getElementById("description").innerHTML = peopledata[index].name + peopledata[index].Description;
    document.getElementById("prof-pic").src = "./public/img/"+peopledata[index].img;
    document.getElementById("rating").src = "./public/img/" + peopledata[index].rating + "rating.png";
}



var selectedData = peopledata;

function selectedItems() {
    var text = this.value;
    selectedData = peopledata.filter(checkMatch.bind(this, text));
    fillpage(selectedData);
}

function checkMatch(text, person) {
    return person.name.includes(text);
}



function alertme() {
    alert("clicked");
}





