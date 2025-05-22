
let counter = document.querySelectorAll(".counter")
let arr = Array.from(counter)
// console.log(arr);

arr.map((item) => {
    let count = 0

    function counterjs() {
        count++
        item.innerHTML = count
        if (count == item.dataset.numbere) {
            clearInterval(stop)
        }

    }

    let stop = setInterval(() => {
        counterjs()
        // console.log(count);

    },)


})

// // console.log(counter.dataset.numbere);























