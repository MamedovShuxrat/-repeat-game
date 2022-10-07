const listItems = document.querySelectorAll('.list-item')
const listBox = document.querySelector('.list-box')
const btn = document.querySelector('.btn')
const btnContainer = document.querySelector('.box')

let arrIndex = []

let clearItem = function () {
    arrIndex.forEach((item, index) => {
        setTimeout(() => {
            listItems[item].classList.toggle('clicked')
        }, 1000 * (index + 1))
        arrIndex = []
    })
}

listItems.forEach(function (items, index) {
    items.addEventListener('click', function (event) {
        items.classList.add('clicked')
        arrIndex.push(index)
        if (listItems.length === arrIndex.length) {
            clearItem()
        }
    })
})


btn.addEventListener('click', function () {
    animate()
})
let marginPlus = -100

function animate() {
    marginPlus += 1.5

    btnContainer.style.display = 'none'
    listBox.style.marginTop = `${marginPlus}%`
    if (marginPlus < 0) {
        requestAnimationFrame(animate)
    }
}


