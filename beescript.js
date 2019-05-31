
// This displays the expanded info section when the relevant link is clicked.
function showMore(sectionClicked, isDisplayed) {
    console.log("sectionClicked: " + sectionClicked);
    console.log("isDisplayed: " + isDisplayed);
    if (isDisplayed === "true") {
        document.getElementById(sectionClicked).style.display = "none";
        document.getElementById(sectionClicked + '-button').value="false";
        document.getElementById(sectionClicked + '-button').innerText="Click to Show Info";
        console.log("Section " + sectionClicked + " was visible, now it is hidden.");
        console.log("Button info: " + document.getElementById(sectionClicked + '-button').value);
    }
    else {
        document.getElementById(sectionClicked).style.display = "inherit";
        document.getElementById(sectionClicked + '-button').value="true";
        document.getElementById(sectionClicked + '-button').innerText="Click to Hide Info";
        document.getElementById(sectionClicked).style.backgroundColor="#F4F7EF";
        console.log("Section " + sectionClicked + " was hidden, now it is shown.");
        console.log("Button info: " + document.getElementById(sectionClicked + '-button').value);
    }
}

