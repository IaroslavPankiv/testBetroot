let cross = document.querySelector('.popap_hide span'); // берем кнопку закрити в popap
let buttonPopap = document.querySelector('.btn-check').onclick = openPopap; // кнопка оформити заказ

let popap = document.querySelector('.popap'); // popap
let hide = document.createElement('div'); 
let allPrice = document.querySelector('.red-info');// берем на суму.
let summa = document.querySelector('#summa');//берем на суму.
let masSumma = [];
let masNumber = [];
let allItems = document.querySelectorAll('.product-box__item'); //берем всі айтеми.

cross.onclick = hidePopap;

let btnSend = document.querySelector('.button');// берем send (popap)

btnSend.onclick = sendForm;



// функція кнопки send
function sendForm() {
   validatorName();
   validatorEmail();
}

//вадідатор name
function validatorName() {
   let name = document.querySelector('.name');// берем input name (popap)
   if ( isNaN(name.value) && name.value.length > 3) {
      

   }else {
      alert('невірний формат введення імені')
    
   }
   
}
//валідатор email та закривання popap і обнулення товарів в корзині
function validatorEmail() {

   let email = document.querySelector('.email'); // берем input email (popap)
   let re = /\S+@\S+\.\S+/;
  
   if (re.test(email.value)) {
      alert('Дякуємо за покупку!!!');
      localStorage.clear();
      checksum();
      mNumber();
      hidePopap();

      
      
   }else {
      alert('невірний формат введення поля email')
   }
   
    
   
    

   
}

// відкриває popap
function openPopap() {
   hide.classList.add('hide');
   document.body.appendChild(hide)
   let height = popap.offsetHeight;
   popap.style.marginTop = - height / 2 + 'px';
   popap.style.top = '50%';


      // document.body.style.overflow = 'hidden'ж
  };
  
// закриває popap
hide.onclick = hidePopap;
function hidePopap() {
   popap.style.top = '-100%'
   hide.classList.remove('hide');
}

// берем селекти сортування по виду страви
let sorDdish = document.querySelector('#sorDdish');
   sorDdish.addEventListener('change', function(){
      console.log(sorDdish.value);
      
      if (sorDdish.value==0) {
         
         allItemss(1000)
         
      }else {
         let d = parseInt(sorDdish.value);
         console.log(d);
         
         sorDdishh(d);

      }
   })

   // фільтер по страві
function sorDdishh(m) {
   console.log(m);
   
   for (let i = 0; i < allItems.length; i++) {
      if (allItems[i].getAttribute('data-dish') == m) {

      allItems[i].style="display:gride";
      }else {
         allItems[i].style="display:none";
      }      
   }
}

//ціна
let sortPrice = document.querySelector('#sortPrise');// берем селекти сортування по ціні
   sortPrice.addEventListener('change', function(){
      if (sortPrice.value==0) {
         allItemss(1000)
      }else {
         let a = parseInt(sortPrice.value);
      allItemss(a);
      }
   })

   // фільтер по ціні
function allItemss(n) {
   for (let i = 0; i < allItems.length; i++) {
      if (allItems[i].getAttribute('data-sort') >= n) {
         allItems[i].style="display:none";
      }else {
         allItems[i].style="display:grid";
      }      
   }
}

//берем всі кнопки добавити
let allButton = document.querySelectorAll('.product-box__btn')
for (let i = 0; i < allButton.length; i++) {
   allButton[i].addEventListener('click', addCurent);
}

let allInput = document.querySelectorAll('.qty__item');
function onInput() {
   for (let i = 0; i < allInput.length; i++) {
         if (allInput[i].value > 0) {
            let a = allInput[i].value;
            let b = allInput[i].getAttribute('data-price')
            let c = a*b;
            masSumma.push(c)
            localStorage.setItem('sum', JSON.stringify(masSumma))
            masNumber.push(a);
            localStorage.setItem('number',  JSON.stringify(masNumber))
            return allInput[i].value = false;
         };  
      }
}

//фукція вираховує кількість товарів в корзині()
function mNumber() {
   let getNumber = JSON.parse(localStorage.getItem('number'));
   console.log(getNumber);
   if (getNumber == null) {
      allPrice.innerHTML= 'XXX';
   }else{
   let r = getNumber.map(function(value) {return parseInt(value)})
    
    let result = r.reduce(function(suma, current) {
      return suma + current;
    }, 0);
    allPrice.innerHTML = result 
   }
}
mNumber();

//функція вираховує загальну суму товарів в корзині
function checksum() {
   let getItems = JSON.parse(localStorage.getItem('sum'));
   if (getItems == null) {
      summa.innerHTML = 'XXX'
   }else{
   let result = getItems.reduce(function(suma, current) {
      return suma + current;
    }, 0);
   //  console.log(result);
    summa.innerHTML = result;
}
}
checksum();

// кнопка добавити
function addCurent() {
   onInput();
   checksum();
   mNumber();
}

// фільтер по ціні
function allItemss(n) {
   for (let i = 0; i < allItems.length; i++) {
      if (allItems[i].getAttribute('data-sort') >= n) {
         allItems[i].style="display:none";
      }else {
         allItems[i].style="display:grid";
      }      
   }
}





