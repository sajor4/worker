console.log('sono connesso');

function calculateResult(){
    const inputValue = document.getElementById('number').value;
    const number = parseFloat(inputValue);
    workerCalculus(number);
    const resultSpan = document.getElementById('result');
    resultSpan.innerText = 'sto lavorando, abbi pazienza...';
}


function workerCalculus(nbr){
    const worker = new Worker('./lavoratore-salariato.js');

    worker.postMessage(nbr)

    worker.onmessage = (msg) => {
        const resultSpan = document.getElementById('result');
        resultSpan.innerText = msg.data;
    };

}

// function strangeCalculus(nbr){
//     let res = 0;

//     for (let i = 0; i <= nbr; i++) {
//         if (i % 2 === 0) {
//             res += i;
//         }
//         if (i % 3 === 0) {
//             res -= i;
//         }
        
//     }

//     return res;
// }

// 0 => 0
// 1 => 0
// 2 => 2
// 3 => -1
// 4 => 3
// 5 => 3
// 6 => 3
// 7 => 3
// 8 => 11
// 9 => 2
// 10 => 12

//5000000000
