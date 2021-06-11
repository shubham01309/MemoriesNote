const addBtn = document.getElementById('addBtn');
const titleBtn = document.getElementById('notestitle');
const txtBtn = document.getElementById('notestext');

addBtn.addEventListener('click', (e) => {

    if (titleBtn.value == "" || txtBtn.value == "") {
        return alert("please fill the both details");
    }

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        title: titleBtn.value,
        text: txtBtn.value
    }

    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    titleBtn.value = "";
    txtBtn.value = "";


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

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="note2">
                    <p class="noteNumber">Memories ${index + 1}</p>
                    <h3 class="noteTitle">${element.title}</h3>
                    <p class="noteTxt">${element.text}</p>
                    <button id="${index}" onclick="deleteNotes(this.id)" class="noteBtn">Delete</button>
        </div>
        `;
    });
    let noteElement = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteElement.innerHTML = html;
    }
    else {
        noteElement.innerHTML = "no notes!!"
    }


}

function deleteNotes(index) {
    
    
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
        

}



showNotes();