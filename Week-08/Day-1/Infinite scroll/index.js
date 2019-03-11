let listElm = document.getElementById('infinite-list');
console.log(listElm);

// Add 10 items.
let nextItem = 1;
let loadMore = function () {
  for (let i = 0; i < 10; i++) {
    let item = document.createElement('li');
    item.innerText = 'Item ' + nextItem++;
    item.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
    listElm.appendChild(item);
  }
}

// Detect when scrolled to bottom.
listElm.addEventListener('scroll', function () {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});

// Initially load some items.
loadMore();