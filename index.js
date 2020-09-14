(function setup() {
  "use strict";

  var fNameElem = document.getElementById("fName");
  var lNameElem = document.getElementById("lName");
  var genderElem = document.getElementById("gender");
  var ageElem = document.getElementById("age");
  var tableElem = document.getElementById("table");
  document.getElementById("display").addEventListener("click", function() {
    var newRow = tableElem.insertRow(-1);
    var newCell = newRow.insertCell(0);
    var newText = document.createTextNode(lNameElem.value + ", " + fNameElem.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(1);
    newText = document.createTextNode(genderElem.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(2);
    newText = document.createTextNode(ageElem.value);
    newCell.appendChild(newText);
    fNameElem.value = "";
    lNameElem.value = "";
    ageElem.value = "";
    tableElem.value = "";
  });
})();
