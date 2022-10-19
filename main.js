const listItems = document.querySelectorAll('.list-item')
const listBox = document.querySelector('.list-box')
const btn = document.querySelector('.btn')
const btnContainer = document.querySelector('.box')

let arrIndex = []

let clearItem = function () {
    for (let i = 0; i < arrIndex.length; i++) {
        setTimeout(() => {
            let temp = arrIndex.shift()
            listItems[temp].classList.remove('clicked')
        }, 500 * (i + 1))
    }
}

listItems.forEach(function (items, index) {
    items.addEventListener('click', function () {
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



