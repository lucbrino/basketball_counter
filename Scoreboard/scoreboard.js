let home = document.getElementById("home-counter");

let guest = document.getElementById("guest-counter");

let count_home  = 0;
let count_guest = 0; 


function incr_home1() {
    count_home += 1;
    home.textContent = count_home;
}

function incr_home2() {
    count_home += 2;
    home.textContent = count_home;
    
}

function incr_home3() {
    count_home += 3;
    home.textContent = count_home;
}

function incr_guest1() {
    count_guest += 1;
    guest.textContent = count_guest;
}

function incr_guest2() {
    count_guest += 2;
    guest.textContent = count_guest;
}

function incr_guest3() {
    count_guest += 3;
    guest.textContent = count_guest;
}

function dec_home1() {
    count_home -= 1;
    home.textContent = count_home;
}

function dec_home2() {
    count_home -= 2;
    home.textContent = count_home;
}

function dec_home3() {
    count_home -= 3;
    home.textContent = count_home;
}

function dec_guest1() {
    count_guest -= 1;
    guest.textContent = count_guest;
}

function dec_guest2() {
    count_guest -= 2;
    guest.textContent = count_guest;
}

function dec_guest3() {
    count_guest -= 3;
    guest.textContent = count_guest;
}

function reset_counters() {
    count_home = 0;
    home.textContent = 0;
    count_guest = 0;
    guest.textContent = 0;
}