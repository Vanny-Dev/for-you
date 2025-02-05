fetch('../text-content.json')
    .then(response => response.json())
    .then(data => {
        /*========== HOME ==========*/
        document.querySelector("#home-title").innerText = data.home.heading;
        document.querySelector("#letter-text").innerText = data.home.letter;
        /*========== HOME ==========*/

        /*========== GALLERY ==========*/
        document.querySelector("#gallery-title").innerText = data.gallery.heading;
        document.querySelector("#caption1").innerText = data.gallery.date[0];
        document.querySelector("#caption2").innerText = data.gallery.date[0];
        document.querySelector("#caption3").innerText = data.gallery.date[1];
        document.querySelector("#caption4").innerText = data.gallery.date[2];
        document.querySelector("#caption5").innerText = data.gallery.date[3];
        document.querySelector("#caption6").innerText = data.gallery.date[3];
        /*========== GALLERY ==========*/

        /*========== NOTES ==========*/
        document.querySelector("#notes-title").innerText = data.notes.heading;
        document.querySelector("#title1").innerText = data.notes.title[0];
        document.querySelector("#title2").innerText = data.notes.title[1];
        document.querySelector("#title3").innerText = data.notes.title[2];
        document.querySelector("#title4").innerText = data.notes.title[3];
        document.querySelector("#title5").innerText = data.notes.title[4];
        document.querySelector("#title6").innerText = data.notes.title[5];
        document.querySelector("#title7").innerText = data.notes.title[6];

        document.querySelector("#text1").innerText = data.notes.text[0];
        document.querySelector("#text2").innerText = data.notes.text[1];
        document.querySelector("#text3").innerText = data.notes.text[2];
        document.querySelector("#text4").innerText = data.notes.text[3];
        document.querySelector("#text5").innerText = data.notes.text[4];
        document.querySelector("#text6").innerText = data.notes.text[5];
        document.querySelector("#text7").innerText = data.notes.text[6];
        /*========== NOTES ==========*/

        /*========== PLAYLISTS ==========*/
        document.querySelector("#playlist-title").innerText = data.playlists.heading;
        /*========== PLAYLISTS ==========*/

    })
    .catch(error => console.error("Error loading JSON:", error));