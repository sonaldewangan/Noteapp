// console.log("Magic note app");

showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    showNotes();
});

function showNotes() {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    html = "";
    notesObj.forEach(function (element, index) {

        html += `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">Note${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id=${index} onclick ="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
                        </div>
                 </div>`
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.lenght != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to here who i can show so please go to "Add note" and add note..!`
    }
}

function deleteNote(index) {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener('input', function (e) {

    let inputVal = search.value.toLowerCase();
    // console.log("I am searching", inputVal)

    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerHTML;
        
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})