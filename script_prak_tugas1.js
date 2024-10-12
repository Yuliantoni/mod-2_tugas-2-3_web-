let display = document.getElementById("display");

// Fungsi untuk menambahkan nilai ke layar
function appendToDisplay(value) {
    display.value += value;
}

// Fungsi untuk menghitung hasil ekspresi di layar
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Fungsi untuk membersihkan layar
function clearDisplay() {
    display.value = "";
}