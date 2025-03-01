let openshoping = document.querySelector('.openshoping');
let closeshoping = document.querySelector('.closeshoping');
let body = document.querySelector('body');
let list= document.querySelector('.list');
let listcard= document.querySelector('.listcard');
let quantity= document.querySelector('.quantity');
let total= document.querySelector('.total');

openshoping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeshoping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
      id:1,
      Image:'https://cdn.shopify.com/s/files/1/0094/6326/7379/files/Choose_Shirt_Fabric_480x480.jpg?v=1632827551',
      name:'mens',
      price:9000,
    },
      {
      id:2,
      Image:' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cRu2__06C5dAtihw3mQ5J-gD7iv6DVD7Rw&s',
      name:'womans',
      price:8000,
    },
      {
      id:3,
      Image:'https://minitaq.com/cdn/shop/files/1-LT121S112.jpg?v=1735026157 ',
      name:'kids',
      price:7000,
    },
      {
      id:4,
      Image:'https://3.imimg.com/data3/TP/PX/MY-11752594/mobile-500x500.png ',
      name:'phones',
      price:25000,
    },
      {
      id:5,
      Image:'https://img77.uenicdn.com/image/upload/v1568297735/business/7150310d-22d0-4947-ac31-a163f872371f/images--2-jpeg.jpg',
      name:'grocery',
      price:10000,
    },
      {
      id:6,
      Image:'https://southindiajewels.com/wp/wp-content/uploads/2022/11/OSR.png',
      name:'jewelleries',
      price:15000,
    },
    
];

let listcards=[];

function intiAPP(){
  products.forEach((value,key)=>{
    let newdiv = document.createElement('newdiv')
    newdiv.classList.add('item')
    newdiv.innerHTML = `
                        <img src ="${value.Image}"/>
                        <div class ="name">${value.name}</div>
                        <div class = "price">${value.price.toLocaleString()}</div>
                        <button onClick ="addTOcart(${key})">addTOcart</button>

                       `;
                       list.appendChild(newdiv);
  })
}
intiAPP();
function addTOcart(key){
  if(listcards[key] == null){
    listcards[key] = products[key]
    listcards[key].quantity = 1
  }
  reloadcard();
}
 function reloadcard(){
   listcard.innerHTML = '';
   let count = 0;
   let totalprice = 0;

  listcards.forEach((value,key)=>{
    count = count + value.quantity;
    totalprice = totalprice+value.price;

    if(value!=null){
      let newdiv = document.createElement('li');
      newdiv.innerHTML = `
                     <div><img src ="${value.Image} "/></div>
                     <div>${value.name} </div>
                     <div>${value.price.toLocaleString()} </div>
                     <div>
                          <button onClick="changeQuantity(${key} , ${value.quantity -1})">-</button>
                          <div class="count">${value.quantity}</div>
                          <button onClick="changeQuantity(${key} , ${value.quantity +1})">+</button>
                      </div>
                         `;
                    listcard.appendChild(newdiv)

    }
  })
  total.innerText =totalprice.toLocaleString();
  quantity.innerText = count;
 }

 function changeQuantity(key,quantity){
  if(quantity == 0){
    delete listcards[key]
  }else{
    listcards[key].quantity = quantity;
    listcards[key].price = quantity*products[key].price;
  }
  reloadcard();
 }