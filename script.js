// let arr = ['дом', 'учавствовать', 'опасность', 'смятение', 'давать', 'идти', 'стыд', 'жертва', 'успех', 'раб', 'скрывать', 'сон', 'отвращение', 'приспособиться', 'вина', 'гомосексуальность', 'горе', 'мудрый', 'неприязнь', 'голый', 'внешность', 'позор', 'глупец', 'потерпеть неудачу', '  ', 'босс', 'отступать', 'радость', 'скука', 'твердый', 'борьба за власть', 'тревога', 'измученный', 'угроза', 'сопротивляться', 'любить', 'жесткий', 'ребёнок', 'цикл', 'нарушать', 'ждать', 'сломать', 'чудесный', 'привычка', 'вцепиться', 'боль', 'игра', 'гнев', 'женщины', 'отец', 'отпускать', 'саморазрушение', 'устранять', 'ложь', 'надежда', 'незнакомцы', 'привлекательный', 'унижать', 'одинокий', 'соперник', 'недоумение', 'привязанность', ' ', 'смешной', 'вытеснять', 'неправильный', 'начало', 'страх', 'запугивать', 'очарование', 'быть в долгу', 'смех', 'хвастаться', 'принуждение', 'изменять', 'знаток', 'брать', 'извинение', 'гниение', 'обязан', 'уродливый', 'мать', 'сомнение', 'ненависть', 'мужчины', 'атака', 'зависимый', 'эротический', 'поза', 'остановиться'];

// let imgTable = document.querySelector('.img-table');

// let imgBtn = document.querySelector('.btn-img');
// let descBtn = document.querySelector('.btn-desc');
// let reBtn = document.querySelector('.btn-refresh');

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// imgBtn.addEventListener('click', () => {
//   let metaCard = document.createElement('div');
//   metaCard.classList.add('card-img');
//   let desc = document.createElement('span');
//   desc.style.cursor = 'pointer';
//   desc.style.zIndex = 1000;
//   desc.classList.add('card-desc');
//   desc.textContent = '';
//   metaCard.appendChild(desc);
//   imgTable.appendChild(metaCard);
//   metaCard.style.backgroundImage = 'url(img/' + getRandomIntInclusive(1, 88) + '.webp)';
// })

// descBtn.addEventListener('click', () => {
//   let textArr = imgTable.querySelectorAll('.card-desc');
//   textArr.forEach((item) => {

//     if (item.innerText === '') {
//       item.innerText = arr[getRandomIntInclusive(0, 89)];
//     }
//   })

//   handler();
// })

// reBtn.addEventListener('click', () => {
//   if (imgTable.innerHTML === '') {
//     console.log('Nothing to clean')
//   }
//   imgTable.innerHTML = '';
// })

// function handler() {
//   let items = document.querySelectorAll('.card-desc');

//   items.forEach((item) => {

//     item.onmousedown = function(e) {
//       e.preventDefault();
//       var coords = getCoords(item);
//       var shiftX = e.pageX - coords.left;
//       var shiftY = e.pageY - coords.top;
//       // console.log(item)

//       item.style.position = 'absolute';
//       imgTable.appendChild(item);
//       moveAt(e);

//       item.style.zIndex = 1000;

//       function moveAt(e) {
//         item.style.left = e.pageX - shiftX + 'px';
//         item.style.top = e.pageY - shiftY + 'px';
//       }

//       document.onmousemove = function(e) {
//         moveAt(e);
//       };

//       item.onmouseup = function() {
//         document.onmousemove = null;
//         item.onmouseup = null;
//       };

//     }


//     item.ondragstart = function() {
//       // e.preventDefault();
//       return false;
//     };
//   })
// }

// function getCoords(elem) { // кроме IE8-
//   var box = elem.getBoundingClientRect();

//   return {
//     top: box.top + scrollY,
//     left: box.left + scrollX + 124
//   };

// }

let arr=["дом","учавствовать","опасность","смятение","давать","идти","стыд","жертва","успех","раб","скрывать","сон","отвращение","приспособиться","вина","гомосексуальность","горе","мудрый","неприязнь","голый","внешность","позор","глупец","потерпеть неудачу","  ","босс","отступать","радость","скука","твердый","борьба за власть","тревога","измученный","угроза","сопротивляться","любить","жесткий","ребёнок","цикл","нарушать","ждать","сломать","чудесный","привычка","вцепиться","боль","игра","гнев","женщины","отец","отпускать","саморазрушение","устранять","ложь","надежда","незнакомцы","привлекательный","унижать","одинокий","соперник","недоумение","привязанность"," ","смешной","вытеснять","неправильный","начало","страх","запугивать","очарование","быть в долгу","смех","хвастаться","принуждение","изменять","знаток","брать","извинение","гниение","обязан","уродливый","мать","сомнение","ненависть","мужчины","атака","зависимый","эротический","поза","остановиться"],imgTable=document.querySelector(".img-table"),imgBtn=document.querySelector(".btn-img"),descBtn=document.querySelector(".btn-desc"),reBtn=document.querySelector(".btn-refresh");function getRandomIntInclusive(e,t){return e=Math.ceil(e),Math.floor(Math.random()*((t=Math.floor(t))-e+1)+e)}function handler(){document.querySelectorAll(".card-desc").forEach(e=>{e.onmousedown=function(t){t.preventDefault();var n=getCoords(e),l=t.pageX-n.left,r=t.pageY-n.top;function o(t){e.style.left=t.pageX-l+"px",e.style.top=t.pageY-r+"px"}e.style.position="absolute",imgTable.appendChild(e),o(t),e.style.zIndex=1e3,document.onmousemove=function(e){o(e)},e.onmouseup=function(){document.onmousemove=null,e.onmouseup=null}},e.ondragstart=function(){return!1}})}function getCoords(e){var t=e.getBoundingClientRect();return{top:t.top+scrollY,left:t.left+scrollX+124}}imgBtn.addEventListener("click",()=>{let e=document.createElement("div");e.classList.add("card-img");let t=document.createElement("span");t.style.cursor="pointer",t.style.zIndex=1e3,t.classList.add("card-desc"),t.textContent="",e.appendChild(t),imgTable.appendChild(e),e.style.backgroundImage="url(img/"+getRandomIntInclusive(1,88)+".webp)"}),descBtn.addEventListener("click",()=>{imgTable.querySelectorAll(".card-desc").forEach(e=>{""===e.innerText&&(e.innerText=arr[getRandomIntInclusive(0,89)])}),handler()}),reBtn.addEventListener("click",()=>{""===imgTable.innerHTML&&console.log("Nothing to clean"),imgTable.innerHTML=""});