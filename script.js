// container-card / card = card
// container-buttons = rating
// btn-submit = submit-btn
// container-submit = submitted
// rate-selected = total

const container_submit = document.getElementById('container-submit');
const container_card = document.getElementById('container-card');
const btn = document.getElementById('container-buttons').value;
let visibility = true;

let rate_value = '0';

function rate_one () {
    rate = '1';
}

function rate_two () {
    rate = '2';
}

function rate_three () {
    rate = '3';
}

function rate_four () {
    rate = '4';
}

function rate_five () {
    rate = '5';
}


function submitBtn() {
    document.getElementById('container-card').style.display = 'none';
    document.getElementById('container-submit').style.display = 'block';
    
    document.getElementById('rate-selected').innerHTML = rate;
    
}


