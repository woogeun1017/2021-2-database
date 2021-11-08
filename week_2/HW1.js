const range = document.getElementById("js-range");
const rangeset = document.getElementById("rg");
const guess = document.getElementById("js-guess");
const result = document.getElementById("js-result");
const input1 = document.getElementById("input1");
const display = document.getElementById("game");
const output = document.getElementById("output");
const end = document.getElementById("result");

range.oninput = function() {
    rangeset.innerHTML = this.value;
}

const handlePrint = (e) => {
    e.preventDefault();

    const max = range.value;
    const min = 5;
    const RN = Math.floor(Math.random() * (max - min + 1)) + min;
    const UN = input1.value;

   // const RN = rand(5, RAN);

    const diplayspan = result.querySelector("span");
    diplayspan.innerHTML = 'You choose : ' + UN 
                            + ' the machine choose : ' + RN
                            + '<br>';

    if((RN > parseInt(UN))){
        end.innerHTML = 'You Lost!';
    }else if ((RN === parseInt(UN))){
        end.innerHTML = 'Draw!';
    }else{
        end.innerHTML = 'You Win!';
    }

};

display.addEventListener("submit", handlePrint);