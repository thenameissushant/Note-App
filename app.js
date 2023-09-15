const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = [];

function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    }
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    const inputBox = document.createElement("p");
    const img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    img.className = "delete-btn";
    notesContainer.appendChild(inputBox).appendChild(img);
    notes.push(inputBox);
    updateStorage();
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.className === "delete-btn") {
        const noteToRemove = e.target.parentElement;
        const noteIndex = notes.indexOf(noteToRemove);
        if (noteIndex !== -1) {
            notes.splice(noteIndex, 1);
        }
        noteToRemove.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        // Handle the content editing if needed
    }
});
