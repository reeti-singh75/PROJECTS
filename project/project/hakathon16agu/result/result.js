// Save note in localStorage
function saveNote() {
    let note = document.getElementById("noteArea").value;
    localStorage.setItem("myNote", note);
    alert("Note Saved! ✅");
}

// Edit note (cursor वापस end में ले जाकर edit karna)
function editNote() {
    let noteArea = document.getElementById("noteArea");
    noteArea.focus();
    noteArea.selectionStart = noteArea.selectionEnd = noteArea.value.length;
}

// Delete note from localStorage
function deleteNote() {
    localStorage.removeItem("myNote");
    document.getElementById("noteArea").value = "";
    alert("Note Deleted! ❌");
}

// Load note when page opens
window.onload = function() {
    let savedNote = localStorage.getItem("myNote");
    if (savedNote) {
        document.getElementById("noteArea").value = savedNote;
    }
}