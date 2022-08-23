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
      FocusOnPlaceName();
    }, 300);
  	setTimeout(function () {
      selectOnline();
    }, 2000);
}
else if (window.location.toString().search("https://www.familysearch.org/search/catalog/results")>-1)
{
      setTimeout(function () {
      OpenChurchRecords();
    }, 1000);

}

function FocusOnPlaceName()
{
  document.querySelector("#placeName").focus();
}

function selectOnline()
{
  document.getElementById("availability-online").checked=true;
}

function OpenChurchRecords()
{
  for (var i=3; expandGroup = document.getElementsByClassName("expand-group")[i]; i++)
	{
		if(expandGroup.innerHTML.search("Church records")>-1)
    {
      expandGroup.click();
      break;
    }
  }
}