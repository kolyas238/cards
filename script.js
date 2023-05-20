const WORDS = ['дом', 'участвовать', 'опасность', 'смятение', 'давать', 'идти', 'стыд', 'жертва', 'успех', 'раб', 'скрывать', 'сон', 'отвращение', 'приспособиться', 'вина', 'гомосексуальность', 'горе', 'мудрый', 'неприязнь', 'голый', 'внешность', 'позор', 'глупец', 'потерпеть неудачу', '   ', 'босс', 'отступать', 'радость', 'скука', 'твердый', 'борьба за власть', 'тревога', 'измученный', 'угроза', 'сопротивляться', 'любить', 'жесткий', 'ребёнок', 'цикл', 'нарушать', 'ждать', 'сломать', 'чудесный', 'привычка', 'вцепиться', 'боль', 'игра', 'гнев', 'женщины', 'отец', 'отпускать', 'саморазрушение', 'устранять', 'ложь', 'надежда', 'незнакомцы', 'привлекательный', 'унижать', 'одинокий', 'соперник', 'недоумение', 'привязанность', '   ', 'смешной', 'вытеснять', 'неправильный', 'начало', 'страх', 'запугивать', 'очарование', 'быть в долгу', 'смех', 'хвастаться', 'принуждение', 'изменять', 'знаток', 'брать', 'извинение', 'гниение', 'обязан', 'уродливый', 'мать', 'сомнение', 'ненависть', 'мужчины', 'атака', 'зависимый', 'эротический', 'поза', 'остановиться'];

let imgTable = document.querySelector('.img-table');
let imgBtn = document.querySelector('.btn-img');
let descBtn = document.querySelector('.btn-desc');
let reBtn = document.querySelector('.btn-refresh');
let usedNums = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

imgBtn.addEventListener('click', () => {
  if (usedNums.length === 88) {
    console.log('All images have been used');
    return;
  }

  let metaCard = document.createElement('div');
  metaCard.classList.add('card-img');
  let desc = document.createElement('span');
  desc.style.cursor = 'pointer';
  desc.style.zIndex = 1000;
  desc.classList.add('card-desc');
  desc.textContent = '';
  metaCard.appendChild(desc);
  imgTable.appendChild(metaCard);

  let randomNum;
  do {
    randomNum = getRandomIntInclusive(1, 88);
  } while (usedNums.includes(randomNum));

  metaCard.style.backgroundImage = `url(img/${randomNum}.webp)`;
  usedNums.push(randomNum);
});

descBtn.addEventListener('click', () => {
  let textArr = imgTable.querySelectorAll('.card-desc');
  textArr.forEach((item) => {
    if (item.innerText === '') {
      if (WORDS.length === 0) {
        console.log('All words have been used');
        return;
      }
      let randomIndex = getRandomIntInclusive(0, WORDS.length - 1);
      item.innerText = WORDS.splice(randomIndex, 1)[0];
    }
  });
  handler();
});

reBtn.addEventListener('click', () => {
  imgTable.innerHTML = '';
  usedNums = [];
});

function handler() {
  let items = document.querySelectorAll('.card-desc');

  items.forEach((item) => {
    item.onmousedown = function (e) {
      e.preventDefault();
      var coords = getCoords(item);
      var shiftX = e.pageX - coords.left;
      var shiftY = e.pageY - coords.top;

      item.style.position = 'absolute';
      imgTable.appendChild(item);
      moveAt(e);

      item.style.zIndex = 1000;

      function moveAt(e) {
        item.style.left = e.pageX - shiftX + 'px';
        item.style.top = e.pageY - shiftY + 'px';
      }

      document.onmousemove = function (e) {
        moveAt(e);
      };

      item.onmouseup = function () {
        document.onmousemove = null;
        item.onmouseup = null;
      };
    };

    item.ontouchstart = function (e) {
      e.preventDefault();
      var touch = e.touches[0];
      var coords = getCoords(item);
      var shiftX = touch.pageX - coords.left;
      var shiftY = touch.pageY - coords.top;

      item.style.position = 'absolute';
      imgTable.appendChild(item);
      moveAt(touch);

      item.style.zIndex = 1000;

      function moveAt(touch) {
        item.style.left = touch.pageX - shiftX + 'px';
        item.style.top = touch.pageY - shiftY + 'px';
      }

      document.ontouchmove = function (e) {
        var touch = e.touches[0];
        moveAt(touch);
      };

      item.ontouchend = function () {
        document.ontouchmove = null;
        item.ontouchend = null;
      };
    };

    item.ondragstart = function () {
      return false;
    };
  });
}

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  let offset = 0;
  if (window.screen.width < 768) {
    offset = 80
  } else {
    offset = 124;
  }

  return {
    top: box.top + scrollY,
    left: box.left + scrollX + offset
  };
}


