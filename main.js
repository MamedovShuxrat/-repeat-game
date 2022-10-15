const listItems = document.querySelectorAll('.list-item')
const listBox = document.querySelector('.list-box')
const btn = document.querySelector('.btn')
const btnContainer = document.querySelector('.box')

let arrIndex = []


let clearItem = function () {
    arrIndex.forEach((item, index) => {
        setTimeout(() => {
            listItems[item].classList.remove('clicked')
        }, 1000 * (index + 1))
        arrIndex = []
    })
}

listItems.forEach(function (items, index) {
    items.addEventListener('click', function (event) {
        if (!arrIndex.includes(index)) {
            arrIndex.push(index)
            items.classList.add('clicked')
        }
        if (listItems.length === arrIndex.length) {
            clearItem()
        }
    })
})

btn.addEventListener('click', function () {
    listBox.classList.add('animate')
    btnContainer.classList.add('hide')
})



