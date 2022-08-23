// ==UserScript==
// @name     FamilySearch tweaks
// @version  1
// @grant    none
// @namespace   fs
// @include     https://*.familysearch.org/*
// @match     	https://*.familysearch.org/*
// ==/UserScript==


if(window.location=="https://www.familysearch.org/search/catalog")
{  

    setTimeout(function () {
      selectPlaceName();
    }, 700);
}

//have place name field focused after opening page
//select "Online" as default
function selectPlaceName()
{
  document.querySelector("#placeName").focus();
  document.getElementById("availability-online").checked=true;
}

