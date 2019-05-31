
// This displays the expanded info section when the relevant link is clicked.
function showMore(sectionClicked, isDisplayed) {
    if (isDisplayed === "true") {
        document.getElementById(sectionClicked).style.display = "none";
        document.getElementById(sectionClicked + '-button').value="false";
        document.getElementById(sectionClicked + '-button').innerText="Click to Show Info";
    }
    else {
        document.getElementById(sectionClicked).style.display = "inherit";
        document.getElementById(sectionClicked + '-button').value="true";
        document.getElementById(sectionClicked + '-button').innerText="Click to Hide Info";
        document.getElementById(sectionClicked).style.backgroundColor="#F4F7EF";
    }
}

