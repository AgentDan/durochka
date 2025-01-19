// Функция для изменения цвета фона
const button = document.getElementById('changeColorBtn'); //Мы ищем элемент на странице с id="changeColorBtn". Это будет кнопка, при нажатии на которую изменится цвет фона.

const colors = ['#FFAFAC', '#FFD2AC', '#FFEFAC', '#BBFFAC', '#ADFBFF', '#B9BAFF', '#DFB2FF', '#FFFFFF']; //Создаётся массив с набором цветов. Каждый элемент в этом массиве — это цвет в формате HEX

button.addEventListener('click', () => { //Мы говорим: "Когда кнопка будет нажата, выполните действие внутри этой функции".


    const randomColor = colors[Math.floor(Math.random() * colors.length)]; //Это генерирует случайный индекс (число), которое выбирает один из цветов в массиве colors.
    document.body.style.backgroundColor = randomColor; //Когда цвет выбран, мы меняем стиль фона страницы. Свойство backgroundColor меняет цвет фона на тот, который был выбран случайным образом.
});


// Функция для вывода случайной цитаты
const quotes = [ //Создаётся массив с цитатами. В этом массиве каждая строка — это отдельная цитата.
    'Секрет успеха в том, чтобы начать.',
    'Будущее принадлежит тем, кто верит в красоту своей мечты.',
    'Каждое утро — это шанс начать заново.',
    'Делай то, что ты можешь, с тем, что у тебя есть, там, где ты есть.',
    'Не жди. Время никогда не будет подходящим.',
    'Будущее зависит от того, что мы делаем сегодня.',
    'Тот, кто не делает ошибок, никогда не делает ничего нового.',
    'Каждый день — это шанс стать лучше.',
    'Лучше маленький шаг в правильном направлении, чем гигантский шаг в неверном.',
    'Секрет успеха — начать делать.',
    'Никогда не поздно стать тем, кем ты мог бы быть.',
    'Ты не потеряешь, если продолжишь двигаться вперёд.',
    'Не бойтесь совершать ошибки — это часть пути к успеху.',
    'Будьте изменениями, которые вы хотите увидеть в мире.',
    'Не ждите момента, чтобы начать, создавайте его.'
];

let currentQuoteIndex = 0; //Это переменная, которая отслеживает текущий индекс (порядковый номер) цитаты, которую мы показываем на странице. Изначально она установлена на 0, то есть на первую цитату.

document.getElementById('quoteButton').addEventListener('click', () => { //Мы говорим: "Когда будет нажата кнопка с id="quoteButton", выполните действие внутри функции". Это действие — сменить цитату.
    currentQuoteIndex++; //Каждый раз, когда кнопка нажимается, индекс текущей цитаты увеличивается на 1 (переходим к следующей цитате).

    if (currentQuoteIndex >= quotes.length) {
        currentQuoteIndex = 0;
    }//Мы проверяем, если индекс становится больше или равен длине массива (то есть если мы дошли до конца массива цитат), то сбрасываем индекс на 0, чтобы начать показывать цитаты с самого начала.

    document.getElementById('quote').textContent = quotes[currentQuoteIndex];
}); //Эта строка меняет текст на странице (в элементе с id="quote") на новую цитату, которая соответствует текущему индексу.

//Каждый раз, когда ты нажимаешь кнопку с id="quoteButton", на странице будет показываться новая цитатя=а. Если ты дойдёшь до конца списка цитат, то начнётся показ с первой цитаты.
