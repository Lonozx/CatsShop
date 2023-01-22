const pets = [
    {
      name: "Скоттиш фолд", // Порода
      description: 'Золотой шотландский вислоухий кот ждет в гости кошечку для совместного времяпровождения. Одной встречи достаточно для получения красивого и здорового потомства. У полуторагодовалого',
      location: "Київ, Київська область",
      price: "4500 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/4ZN2o7krAB7SsGcJjX93.webp'
    },
    {
      name: "Скоттиш фолд", // Порода
      description: 'Гарний ,охайний котик. Привчений до лотка,їсть сухий корм. Любить гратися. Котику майже 4 місяці.( В подарунок 2 лоточка для туалету.',
      location: "Київ, Київська область",
      price: "1500 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/o4b5MCkz9QUV6sgVCPzV.webp'
    },
     {
      name: "Другая", // Порода
      description: 'Все вопросы обсуждаются в телефонном разговоре, а не в переписке. Большая просьба звонить с 10 до 20 часов.Елка - глазастая, красивая и яркая, но колкая, если хочешь прикоснуться. Елка из тех',
      location: "Київ, Київська область",
      price: "1 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/jKmG4ZOy05MmybPcazEl.webp'
    },
     {
      name: "Экзотическая короткошерстная", // Порода
      description: 'Великолепный малыш Экзот, 2 месяца Лоток и когтеточку знает без проблем. Очень ласковый и нежная мальчик. Питание : сухой корм премиум класса и натуралка. Больше фото и видео вышлю в',
      location: "Київ, Київська область",
      price: "5000 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/WZ0RZ4x6GQ2VUENFTPrm.webp'
    },
     {
      name: "Экзотическая короткошерстная", // Порода
      description: 'Экзотический мальчик медвежульного типа) Упитанный и классный! С отличным костяком Чистокровный, обучен лотку Пишите в вайбер вышлю больше фото, видео',
      location: "Київ, Київська область",
      price: "1300 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/iV8s1E5lPpU7wdJIAO7K.webp'
    },
    
  ]
  let breeds;
  // let uniqueBreed = breeds.filter(function(item, pos){
  //     return breeds.indexOf(item) == pos;
  //   })
  // function uniqueCat(){
  //   const uniqueNames = Array.from(new Set(pets.map((item)=>item.name)));
  //   console.log(uniqueNames);
  //   }
  // uniqueCat();
  
  //Змінні
  let petsEnter = document.querySelector('.pets__container');
  let addCart = document.querySelector('.addCart');
  let sort = document.querySelector('.sort');
  let sortReverse = document.querySelector('.sortReverse');
  let refresh = document.querySelector('.refresh');
  let inp = document.querySelector('.classicSearch');
  let btnS = document.querySelector('.btnCSearch');
  let selectel = document.querySelector('.selectel');
  let formed = document.querySelector('.formed');
  let add = document.querySelector('.add');
  let remove = document.querySelector('.remove');
  //Дані форми
  let name = document.querySelector('.name');
  let link = document.querySelector('.link');
  let price = document.querySelector('.price');
  let description = document.querySelector('.description');
  let city = document.querySelector('.city');
  
  function addCat(name, img, price, description, location){
   
  }
  
  add.addEventListener('click', addCat);
  
  
  //Рендер сторінки за замовчуванням
  pets.map((item)=>{
   addElement(item.name, item.url, 
                   item.price, item.description, 
                   item.location);
  })
  
  function reach(){
    formed.style.display = "flex";
  formed.style.visibility = "visible";
    
  }
  function reachBack(){
    formed.style.visibility = "hidden";
  }
  function removeAd(){
    formed.style.visibility = "hidden";
  }
  remove.addEventListener('click', removeAd);
  addCart.addEventListener('click', reach);
  
  // addCart.addEventListener('click', reachBack);
  
  //Намагався зробити рендер по своєму С:
  function setOption(){
     const uniqueNames = Array.from(new Set(pets.map((item)=>item.name)));
    let optionCall = document.createElement('option');
    for(let i=0;i<uniqueNames.length;i++){
      // uniqueNames.forEach
       console.log(uniqueNames[i]);
       optionCall.setAttribute('value', uniqueNames[i]);
      // optionCall.innerHTML(uniqueNames[i]);
   selectel.append(optionCall);
    }
     
  }
  
  // setOption();
  // Сортування по Select/Option
  function sorted(){
    petsEnter.innerHTML = '';
    pets.map((item=>{
      if(selectel.value===item.name){
         addElement(item.name, item.url, 
                   item.price,  item.description, 
                   item.location);
      }
    }))
  }
  
  // Сортування по Select/Option
  selectel.addEventListener('change', sorted);
  
  // Сортування по ціні
  function sortPrice(){
    petsEnter.innerHTML = '';
    const prices = pets.sort((a, b) => a.price.valueOf() > b.price.valueOf());
    prices.map((item) => addElement(item.name, item.url, item.price, item.description, item.location));
  }
  function sortPriceReverse(){
    petsEnter.innerHTML = '';
    const prices = pets.sort((a, b) => a.price.valueOf() < b.price.valueOf());
    prices.map((item) => addElement(item.name, item.url, item.price, item.description, item.location));
  }
  
  // Сортування по ціні
  sort.addEventListener('click', sortPrice);
  sortReverse.addEventListener('click', sortPriceReverse);
   
  //Звичайне оновлення карток, тому онклік
  refresh.onclick = () =>{
    petsEnter.innerHTML = '';
    pets.map((item)=>{
   addElement(item.name, item.url, 
                   item.price, item.description, 
                   item.location);
  })
  }
  
  //Пошук по породі
  function funS(){
     petsEnter.innerHTML = '';
    pets.map((item=>{
      let finds = item.name;
      let inputed = inp.value;
      if(item.name === inp.value && inp.value!=''){
        // Намагався зробити більш правильно, не вийшло поки
        // && finds.toString().toLowerCase().includes(inputed)
        addElement(item.name, item.url, 
                   item.price, item.description, 
                   item.location);
      } else btnS.innerHTML = 'Введіть текст!';
    }))
    inp.value = '';
  }
  
  //Пошук по породі
  btnS.addEventListener('click', funS);
  
  // function optionHolder(){
  //   const uniqueNames = Array.from(new Set(pets.map((item)=>item.name)));
  //   let optionCall = document.createElement('option');
  //   optionCall.setAttribute('value', uniqueNames);
  //   selectel.append(optionCall);
  // }
  // optionHolder();
  
  //Рендер карток
  function addElement(name, url, price, description, location){
    
    //Головний контейнер
     const div = document.createElement('div');
     div.setAttribute('class', 'pets__item');
    const h3 = document.createElement('h3');
    
    // Порода
     h3.setAttribute('class', 'pets__name');
    h3.innerHTML = name;
    
    // Картинка
    const img = document.createElement('img');
     img.setAttribute('class', 'pets__img');
    img.setAttribute('src', url);
    img.innerHTML = url;
    
    // Ціна
    const divprice = document.createElement('div');
     divprice.setAttribute('class', 'pets__price');
    divprice.innerHTML = price;
    
    // Опис
     const p = document.createElement('p');
     p.setAttribute('class', 'pets__description');
    p.innerHTML = description;
    
    // Локація знаходження
     const h5 = document.createElement('h5');
     h5.setAttribute('class', 'pets__loc');
    h5.innerHTML = location;
    
    // Введення елементів
     petsEnter.append(div);
     div.append(h3, img, img, divprice, p, h5);
    
   
  }
  