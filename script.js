// Создаю переменные с DOM элементами



let input = document.querySelector('.addingBlock__input');

let addingButton = document.querySelector('.addingBlock__button');

let list = document.querySelector('.goalsList');

let total = document.querySelector('.totalMenu__number');

let totalValue = 0;

let form = document.querySelector('.addingBlock__form');

let clearDayButton = document.querySelector('.totalMenu__clearDay');

let clearAllButton = document.querySelector('.totalMenu__clearAllBtn');

let totalInDayNAME = document.querySelector('.totalMenu__dayDay');

let totalInDayNUMBER = document.querySelector('.totalMenu__dayNumber');

total.textContent = totalValue;



// Создаю переменные с днями недели, выраженные в кнопках

let week = document.querySelector('.week');

let mondayButton = document.querySelector('.week__day_monday');
let tuesdayButton = document.querySelector('.week__day_tuesday');
let wednesdayButton = document.querySelector('.week__day_wednesday');
let thursdayButton = document.querySelector('.week__day_thursday');
let fridayButton = document.querySelector('.week__day_friday');
let saturdayButton = document.querySelector('.week__day_saturday');
let sundayButton = document.querySelector('.week__day_sunday');

// Создаю переменные-массивы в общем массиве itemsArray. Каждый массив - день недели

let mondayArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items'))[0] : [];
let tuesdayArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items'))[1] : [];
let wednesdayArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items'))[2] : [];
let thursdayArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items'))[3] : [];
let fridayArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items'))[4] : [];
let saturdayArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items'))[5] : [];
let sundayArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items'))[6] : [];

// Создаю переменную, в которой будет массив задач, и который будет хранится в LS;

let itemsArray = [
    mondayArray, 
    tuesdayArray, 
    wednesdayArray, 
    thursdayArray, 
    fridayArray, 
    saturdayArray,
    sundayArray
];


// Создаю ключ в LS, который отвечает за состояние кнопки дня недели
let dayButtonStatus = {
    active: 'week__day_active',
    passive: 'week__day_passive',
};

localStorage.setItem('dayButtonStatus', JSON.stringify(dayButtonStatus));

// Создаю переменные, которые будут соотвествовать кнопкам дней недели, и хранить инфу о своем статусе в LS

let mondayObject = localStorage.getItem('arrayOfDaysObject') ? JSON.parse(localStorage.getItem('arrayOfDaysObject'))[0] : {
    name: 'monday',
    status: dayButtonStatus.passive,
    array: [],
    button: '',
    dayRus: 'понедельник',
    totalLength: '',
    index: 0,
};
let tuesdayObject = localStorage.getItem('arrayOfDaysObject') ? JSON.parse(localStorage.getItem('arrayOfDaysObject'))[1] : {
    name: 'tuesday',
    status: dayButtonStatus.passive,
    array: [],
    button: '',
    dayRus: 'вторник',
    totalLength: '',
    index: 1,

};
let wednesdayObject = localStorage.getItem('arrayOfDaysObject') ? JSON.parse(localStorage.getItem('arrayOfDaysObject'))[2] : {
    name: 'wednesday',
    status: dayButtonStatus.passive,
    array: [],
    button: '',
    dayRus: 'среду',
    totalLength: '',
    index: 2,

};
let thursdayObject = localStorage.getItem('arrayOfDaysObject') ? JSON.parse(localStorage.getItem('arrayOfDaysObject'))[3] : {
    name: 'thursday',
    status: dayButtonStatus.passive,
    array: [],
    button: '',
    dayRus: 'четверг',
    totalLength: '',
    index: 3,

};
let fridayObject = localStorage.getItem('arrayOfDaysObject') ? JSON.parse(localStorage.getItem('arrayOfDaysObject'))[4] : {
    name: 'friday',
    status: dayButtonStatus.passive,
    array: [],
    button: '',
    dayRus: 'пятницу',
    totalLength: '',
    index: 4,

};
let saturdayObject = localStorage.getItem('arrayOfDaysObject') ? JSON.parse(localStorage.getItem('arrayOfDaysObject'))[5] : {
    name: 'saturday',
    status: dayButtonStatus.passive,
    array: [],
    button: '',
    dayRus: 'субботу',
    totalLength: '',
    index: 5,

};
let sundayObject = localStorage.getItem('arrayOfDaysObject') ? JSON.parse(localStorage.getItem('arrayOfDaysObject'))[6] : {
    name: 'sunday',
    status: dayButtonStatus.passive,
    array: [],
    button: '',
    dayRus: 'воскресенье',
    totalLength: '',
    index: 6,

};

// Создаю массив, который будет в LS хранить статус кнопки дня недели

let arrayOfDaysObject = [mondayObject, tuesdayObject, wednesdayObject, thursdayObject, fridayObject, saturdayObject, sundayObject];

localStorage.setItem('arrayOfDaysObject', JSON.stringify(arrayOfDaysObject));

// Назначаю свойствам обьектов значения, к которым в дальнейшем обращусь в функции


    mondayObject.array = mondayArray;
    tuesdayObject.array = tuesdayArray;
    wednesdayObject.array = wednesdayArray;
    thursdayObject.array = thursdayArray;
    fridayObject.array = fridayArray;
    saturdayObject.array = saturdayArray;
    sundayObject.array = sundayArray;
    
    mondayObject.button = mondayButton;
    tuesdayObject.button = tuesdayButton;
    wednesdayObject.button = wednesdayButton;
    thursdayObject.button = thursdayButton;
    fridayObject.button = fridayButton;
    saturdayObject.button = saturdayButton;
    sundayObject.button = sundayButton;
    
    mondayObject.totalLength = mondayArray.length;
    tuesdayObject.totalLength = tuesdayArray.length;
    wednesdayObject.totalLength = wednesdayArray.length;
    thursdayObject.totalLength = thursdayArray.length;
    fridayObject.totalLength = fridayArray.length;
    saturdayObject.totalLength = saturdayArray.length;
    sundayObject.totalLength = sundayArray.length;



// Создаю переменную, что бы обращаться к дочерним элементам(дням) недели

let daysOfWeek = week.children;

// Функция, которая показывает количество элементов в нужном массиве

function getElementsAmount(array) {
    return array.length;
}

// Создаю функцию, которая при загрузке страницы првоеряет статус кнопки

function checkDayButtonStatus() {
    [].forEach.call(arrayOfDaysObject, (element) =>{
        if (element.status === 'week__day_active') {
            element.array.forEach(item => {
                createGoalInList(element.array, item.element, item.status, item.id);
            });

            element.button.classList.add(dayButtonStatus.active);


            form.addEventListener('submit', (e) => {

                if (element.button.className == 'week__day week__day_' + element.name + ' week__day_active') {
                     e.preventDefault();
                     if (input.value === '') {
                         return;
                     } else {
                         createDeleteListElement(element.array, input.value, element.dayRus);
                         totalInDayNAME.textContent = `Итого за ${element.dayRus}:`;
                         totalInDayNUMBER.textContent = JSON.parse(localStorage.getItem('items'))[element.index].length; //correct THIS
                         input.value = '';
                     };
                 };
             });


            addingButton.addEventListener('click', () => {
                if (element.button.className == 'week__day week__day_' + element.name + ' week__day_active') { 
                    if (input.value === '') {
                        return;
                    } else {
                    createDeleteListElement(element.array, input.value, element.dayRus);
                    totalInDayNAME.textContent = `Итого за ${element.dayRus}:`;
                    totalInDayNUMBER.textContent = JSON.parse(localStorage.getItem('items'))[element.index].length; //correct THIS
                    input.value = '';
                    };
                };
            
            });

            totalInDayNAME.textContent = `Итого за ${element.dayRus}:`;
            totalInDayNUMBER.textContent = element.totalLength;
            total.textContent = sumElementLengthInArray(itemsArray);

        }; 
    });
};

// Запускаю функцию, согласно которой если кнопка АКТИВНА - отобразить содержимое связанного с ней массива

checkDayButtonStatus();

// Создаю функцию, которая суммирует длинну элементов массива (для totalValue)

function sumElementLengthInArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i].length;
        
    }
    return sum;
};


// Создаю функцию по добавлению элементов в массив

function pushToArray(array, element, status, key) {
    array.push({
        element,
        status,
        id: key,
    });
};

// Создаю функцию по поиску элемента в массиве, функция возвращает index искомого элемента

function findElementInArray(array, id) {
    let elementToFind = array.find(arrayElement => {
        return arrayElement.id === id;

    });

     return array.indexOf(elementToFind);
    
};

// Создаю функцию по изменению статуса элемента, для того что бы менять и сохранить СТАТУС (выполнен/невыполен)

function changeElementStatus(array, id, status) {
    let index = findElementInArray(array, id);
    array[index].status = status;
    localStorage.setItem('items', JSON.stringify(itemsArray));
};

// Прописываю функцию, что отвечает за создание и отображение html составляющей в list


function createGoalInList(array, value, status, key) {

    totalValue = sumElementLengthInArray(itemsArray);
    total.textContent = totalValue;
    totalInDayNAME.innerHTML = `Итого за : `;


    // Создаю задачу

    let goal = document.createElement('div');
    goal.className = 'goal';
    list.appendChild(goal);

    // Определение статуса задачи

    if (status == 'complete') {
        goal.classList.add('goal_completed');
    };
    if (status == 'fail') {
        goal.classList.add('goal_failed');
    };

    // Создаю текстовый блок задачи

    let goalText = document.createElement('div');
    goalText.className = 'goal__text';
    goalText.textContent = value;
    goal.appendChild(goalText);

    // Устанавливаю значение дата-атрибута в HTML, что бы оно равнялось ID из LS

    goal.dataset.key = key;

    // Создаю div для изображений

    let imagesBox = document.createElement('div');
    imagesBox.className = 'goal__imagesBox';
    goal.appendChild(imagesBox);

    // Создаю кнопку для отметки задания выполненым
    let completeBtn = document.createElement('img');
    completeBtn.className = 'goal__img';
    completeBtn.setAttribute('src', 'img/main/checkedNewSize2.png');
    imagesBox.appendChild(completeBtn);

    // Создаю кнопку для отметки задания НЕвыполненым
    let failBtn = document.createElement('img');
    failBtn.className = 'goal__img';
    failBtn.setAttribute('src', 'img/main/uncheckedNewSize2.png');
    imagesBox.appendChild(failBtn);

    // Создаю кнопку для удаления задания

    let deleteBtn = document.createElement('img');
    deleteBtn.className = 'goal__img';
    deleteBtn.setAttribute('src', 'img/main/delete.png')
    imagesBox.appendChild(deleteBtn);

    // Событие на нажатие кнопки "Выполнено"

    completeBtn.addEventListener('click', () => {

        changeElementStatus(array, key, 'complete');

        goal.classList.remove('goal_failed');
        goal.classList.add('goal_completed');
    });

    // Добавляю событие на нажатие кнопки 'НЕ выполнено'

    failBtn.addEventListener('click', () => {


        changeElementStatus(array, key, 'fail');

        goal.classList.remove('goal_completed');
        goal.classList.add('goal_failed');
    });

    // Добавляю событие на нажатие кнопки 'Удалить задание'

    deleteBtn.addEventListener('click', () => {
        list.removeChild(goal);
        
        totalValue--;
        total.textContent =totalValue;


        // Что бы при удалении одной задачи, ее отсутствие сохранялось в LS, использую след. код...

        let indexOfDeletedElement = findElementInArray(array, key);

        if (indexOfDeletedElement != -1) {
            array.splice(indexOfDeletedElement, 1);
            localStorage.setItem('items', JSON.stringify(itemsArray));
        };

        totalInDayNUMBER.textContent = array.length;


    });
    

};


// Создаю основную функцию - создание HTML элемента

function createDeleteListElement(array, value, status = null) {

    key = Date.now();
    totalValue++
    total.textContent = totalValue;
    pushToArray(array, value, status, key);
    localStorage.setItem('items', JSON.stringify(itemsArray));

    // Функция по отображению задачи

    createGoalInList(array, value, status, key);
};

// Создаю функцию, которая управляет наполнением каждого дня задачами (конкретно ивенты на добавление)

function setGoalsInDays(button, array, object, day, dayRus, index) {

    // Событие по клику на кнопку дня недели

    button.addEventListener('click', () => {


        // Обнуляю класс кнопки до состояния ПАССИВНЫХ

        [].forEach.call(daysOfWeek, (element) =>{
            element.classList.remove(dayButtonStatus.active);
            element.classList.add(JSON.parse(localStorage.getItem('dayButtonStatus')).passive); 

        });

        // Обнуляю статус объекта каждой кнопки до состояния ПАССИВНОГО

        [].forEach.call(arrayOfDaysObject, (element) => {
            element.status = dayButtonStatus.passive;
            localStorage.setItem('arrayOfDaysObject', JSON.stringify(arrayOfDaysObject));
        });
    
        // Придаю нажатой кнопки состояние АКТИВНОЙ

        button.classList.remove(dayButtonStatus.passive);
        button.classList.add(dayButtonStatus.active);
        
        // Добавляю объекту существующего дня статус АКТИВНОГО

        object.status = dayButtonStatus.active;
        localStorage.setItem('arrayOfDaysObject', JSON.stringify(arrayOfDaysObject));

        list.textContent = '';
    
        // Событие по нажатию на ENTER

        form.addEventListener('submit', (e) => {

           if (button.className == 'week__day week__day_' + day + ' week__day_active') {
                e.preventDefault();
                if (input.value === '') {
                    return;
                } else {
                    createDeleteListElement(array, input.value, dayRus);
                    totalInDayNAME.textContent = `Итого за ${object.dayRus}:`;
                    totalInDayNUMBER.textContent = JSON.parse(localStorage.getItem('items'))[index].length; //correct THIS
                    input.value = '';
                };
            };
        });
    
        // Событие по добавлению задачи по клику на кнопке
    
        addingButton.addEventListener('click', () => {
            if (button.className == 'week__day week__day_' + day + ' week__day_active') { 
                if (input.value === '') {
                    return;
                } else {
                createDeleteListElement(array, input.value, dayRus);
                totalInDayNAME.textContent = `Итого за ${object.dayRus}:`;
                totalInDayNUMBER.textContent = JSON.parse(localStorage.getItem('items'))[index].length; //correct THIS
                input.value = '';
                };
            };
        
        });
    
        // Перебор элементов из LS для отображения их на странице
    
        array.forEach(item => {
            createGoalInList(array, item.element, item.status, item.id);    
        });

        localStorage.setItem('items', JSON.stringify(itemsArray)); //!!! Нужно разобраться
        totalInDayNAME.innerHTML = `Итого за ${dayRus}: ` // correct THIS

        if ( JSON.parse(localStorage.getItem('items'))[index] ) {
            totalInDayNUMBER.textContent = JSON.parse(localStorage.getItem('items'))[index].length; //correct THIS
        } else {
            totalInDayNUMBER.textContent = 0;
        }
    });


};

// Вызов функции с ивентами для каждого дня недели

setGoalsInDays(mondayButton, mondayArray, mondayObject, 'monday', 'понедельник', 0);
setGoalsInDays(tuesdayButton, tuesdayArray, tuesdayObject, 'tuesday', 'вторник', 1);
setGoalsInDays(wednesdayButton, wednesdayArray, wednesdayObject, 'wednesday', 'среду', 2);
setGoalsInDays(thursdayButton, thursdayArray, thursdayObject, 'thursday', 'четверг', 3);
setGoalsInDays(fridayButton, fridayArray, fridayObject, 'friday', `п'ятницу`, 4);
setGoalsInDays(saturdayButton, saturdayArray, saturdayObject, 'saturday', 'субботу', 5);
setGoalsInDays(sundayButton, sundayArray, sundayObject, 'sunday', 'воскресенье', 6);

// Событие по нажатию кнопки "Удалить день"

clearDayButton.addEventListener('click', () => {

    [].forEach.call(arrayOfDaysObject, (element) => {
        if (element.status == dayButtonStatus.active) {
            let index = element.index;
            itemsArray[index].splice(0, itemsArray[index].length);
            localStorage.setItem('items', JSON.stringify(itemsArray));
            list.textContent = '';
            totalInDayNUMBER.textContent = sumElementLengthInArray(itemsArray[index]);
            total.textContent = sumElementLengthInArray(itemsArray);
        };
    });


});

// Событие по нажатию кнопки "Удалить все задания";

clearAllButton.addEventListener('click', () => {

    itemsArray.forEach((element) => {
        element.splice(0, element.length);
    });
    localStorage.setItem('items', JSON.stringify(itemsArray));


    while (list.firstChild) {
        list.removeChild(list.firstChild);
    };

    totalValue = 0;
    total.textContent = totalValue;


    if (totalInDayNAME.textContent = '') {

        totalInDayNUMBER.textContent = '';
    } else {
        totalInDayNUMBER.textContent = '';
    };

});



// Ниже идет код, по которому на наведение мыши лого соц. сети и текст подсвечивается в белый цвет
// Данную идею можно было реализовать через CSS, и менять цвет svg картинки путем изменения background-image

let contactLinkGitHub = document.querySelector('#gitHubItem');
let contactLogoGitHub = document.querySelector('#gitHubLogo');
let contactLogoGitHubWhite = document.querySelector('#gitHubLogoWhite');
let contactTextGitHub = document.querySelector('#gitHubText');

let contactLinkInstagram = document.querySelector('#instagramItem');
let contactLogoInstagram = document.querySelector('#instagramLogo');
let contactLogoInstagramWhite = document.querySelector('#instagramLogoWhite');
let contactTextInstagram = document.querySelector('#instagramText');

let contactLinkFacebook = document.querySelector('#facebookItem');
let contactLogoFacebook = document.querySelector('#facebookLogo');
let contactLogoFacebookWhite = document.querySelector('#facebookLogoWhite');
let contactTextFacebook = document.querySelector('#facebookText');

function contactHover(link, logo, whiteLogo, text) {
    link.addEventListener('mouseover', () => {
        text.classList.toggle('linksText_active');
        logo.classList.add('linksImage_displayOff')
        whiteLogo.classList.remove('linksImage_displayOff');
        });

    link.addEventListener('mouseout', () => {
        text.classList.remove('linksText_active');
        logo.classList.remove('linksImage_displayOff');
        whiteLogo.classList.add('linksImage_displayOff');
    });
    
};
contactHover(contactLinkGitHub, contactLogoGitHub, contactLogoGitHubWhite, contactTextGitHub);
contactHover(contactLinkInstagram, contactLogoInstagram, contactLogoInstagramWhite, contactTextInstagram);
contactHover(contactLinkFacebook, contactLogoFacebook, contactLogoFacebookWhite, contactTextFacebook);
