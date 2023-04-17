




// import products from "../../data.json" assert{type:'json'}
import products from "https://dudwlswmd.github.io/dataTest/data.json" assert{type:'json'}//절대값으로 바꿈
//assert{type:'json}-외부파일이 json이라고 확실하게 명시//서버에서만 보인다.
console.log(products);

const button = document.querySelector('button');

//li만들어서 ul에 넣어주는 함수
const createItem = function(a){
     // console.log(a);
     const ul = document.querySelector('ul');
     const li = document.createElement('li');
     const img = document.createElement('img');
     const p = document.createElement('p');
     const span = document.createElement('span');

       //각국에 맞는 숫자 서식을 지원하는 객체의 생성자
     const price = new Intl.NumberFormat('ko-KR', { 
          style: 'currency',  //통화단위
          currency: 'KRW'     //원화
     }).format(a.price);    //포맷을 바꿀 데이터

     img.setAttribute('src',a.img);
     li.id = a.id;
     p.className = 'name';//css적용때문에 이름썼다.
     p.innerHTML = a.name;
     span.className = 'price';
     span.innerHTML = price;

     li.append(img,p,span)//추가
     ul.append(li)

     console.log(li)

}
//만든 li들을 반복
const importData = function(){
     products.data.map(function(product){
          if( !document.getElementById(product.id) ){//계속 추가되는거 방지 //아이디 값이 이미 있을때는 작동❌
               createItem( product );
          }else{
               //alert('끝!!!');
          }
     })
}

button.addEventListener('click',importData);

/*

*/




































