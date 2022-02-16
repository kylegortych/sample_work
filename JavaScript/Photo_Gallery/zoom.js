/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case
 *
 *    Photo zoom
 *    Variables and functions
 *    Author: Kyle Gortych
 *    Date:   10-30-2021
 *
 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
    // assign filename to img element
    createEventListener();
}



/* close window */
function closeWin(){
    window.close();
}

/* create event listeners for slose button */
function createEventListeners(){
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    if(closeWindowDiv.addEventListener){
        closeWindowDiv.addEventListener("click", closeWin, false);
    }else if(closeWindowDiv.attachEvent){
        closeWindowDiv.attachEvent("onclick", closeWin);
    }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;