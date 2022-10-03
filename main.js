const listBox = document.querySelector('.list-box')
const listItems = document.querySelectorAll('.list-item')

let arrIndex = []

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener('click', function(event){
//         if(event.target === listItems[i]){
//             console.log(listItems[i]); 
//             listItems[i].style.background = 'red'
//             console.log(event.target[i]);
//         }
//     })
// } сначала написал чистым фориком , потом попробовал форИч взять , гугл подсказал и да так лучше читается код 

let clearItem = function(arr){
    console.log('clear in progress');
    arr.forEach((item) => {
        item.style.background = 'black'
    })

    // написать написал , читаю код и не понимаю как эта функция будет добираться до моих li элементов(типа думал если запущу в нижней фунции должен сработать) , но так как условие не смог придумать нормальое не проверить.
}

listItems.forEach(function(items, index){
    items.addEventListener('click', function(event){
        arrIndex.push(index)
        if(event.target === items){
            items.style.background = 'aqua'
            console.log('идет покраска , индекс элементов записвается в новый массив');
        }
        console.log(arrIndex);

        // тут думал ещё один иф сделать чтобы смотрел если все элементы окрашены , тогда мол запускай функцию чистку с растворителем. подскажи правильно ли я размышляю?
    })
})
