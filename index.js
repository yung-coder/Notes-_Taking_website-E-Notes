

shownotes();

// if adds a note
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtext = document.getElementById('floatingTextarea');
    let addtitle = document.getElementById('addTitle');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myobj = {
        title: addtitle.value,
        text: addtext.value
    }
    notesObj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtext.value = "";
    addtitle.value = "";
    console.log(notesObj);
    shownotes();
})

// function to show notes
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card my-2 mx-2 notecard" style="width: 18rem; background-color: black; color: white;">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onclick="deletNote(this.id)" class="btn btn-primary">Delet note</button>
                </div>
            </div>
        `
    });
    let noteselm = document.getElementById('notes');
    if (notesObj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = ` Nothing to show ! `;
        noteselm.style.color = 'black';
        noteselm.style.fontSize = '24px';
        noteselm.style.display = 'flex';
        noteselm.style.justifyContent = 'center';
        noteselm.style.marginTop = '222px';

    }
}


// function to delet node

function deletNote(index) {
    console.log('deleting', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}

// searching through all
search = document.getElementById('searchtxt');
search.addEventListener("input", function () {
    let input = search.value.toLowerCase();
    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(input)) {
            elemen.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})