const listItems = document.querySelectorAll('.list-item')
let arrIndex = []

let clearItem = function () {
    arrIndex.forEach((item, index) => {
        setTimeout(() => {
            item.classList.toggle('clicked')
        }, 1000 * (index + 1))
    })
}

listItems.forEach(function (items) {
    items.addEventListener('click', function (event) {
        arrIndex.push(event.target)
        items.classList.add('clicked')
        if (listItems.length === arrIndex.length) {
            clearItem()
        }
    })
})
