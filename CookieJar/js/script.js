const addCookies = document.querySelector('#add-cookies')
const clearCookies = document.querySelector('#clear-cookies')
const textInput = document.querySelector('#text-input')
const output = document.querySelector('#output')

const savedNotes = getCookie();

if(savedNotes === '') {
    output.textContent = "[Empty]";
} else {
    output.textContent = savedNotes;
}

addCookies.addEventListener('click', addCookie);

function addCookie(e) {
    const noteText = textInput.value;

    if(noteText === "") {
        alert("It's empty. Try to input something in the Text input")
        return;
    }

    const existingNotes = getCookie();
    let combined;

    if(existingNotes === "") {
        combined = "-> " + noteText
    } else {
        combined = existingNotes + "\n" + "-> " + noteText
    }

    output.textContent = combined;

    const now = new Date();
    now.setDate(now.getDate() + 30)
    now.toUTCString()

    document.cookie = `notes=${encodeURIComponent(combined)}; expires=${now.toUTCString()}` 
}

function getCookie() {
    const cookieString = document.cookie;

    if(cookieString === '') {
        return "";
    } else {
        const equalsIndex = cookieString.indexOf("=");
        const value = decodeURIComponent(cookieString.slice(equalsIndex + 1));
        return value;
    }
}

clearCookies.addEventListener('click', clearCookie);

function clearCookie(e) {
    const userSaid = confirm("Are you sure?"); 
    if(userSaid === true) {
        output.textContent = '';
        document.cookie = "notes=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}