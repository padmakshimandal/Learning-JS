let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);

function inputMsg() {
    let name = prompt('What is your name?');
    namasteBtn.textContent = name;
}