
// ---------------------------------------------------------------------------FILTRO


const url = new URLSearchParams(window.location.search)
const idCharacter=url.get("q")
// title page
const title=document.querySelector('#main__container')
const h1=document.createElement('h1')
h1.classList.add('text-title','fs-1')
const b=document.createElement('b')
b.textContent=`Search results for ${idCharacter}`
h1.appendChild(b)
title.appendChild(h1)

const printCard=(data)=>{
    const { avatar, comments, content, date, imagecontent, name, reactions, symbols, timeread, title}= data
    const cardAll= document.querySelector('#allCards')
    const Card= document.createElement('div')
    Card.classList.add('card')
    cardAll.appendChild(Card)
    // bodycard
    const cardbody= document.createElement('div')
    cardbody.classList.add('card-body')
    Card.appendChild(cardbody)

    const container= document.createElement('div')
    container.classList.add('container')
    cardbody.appendChild(container)

    const content2= document.createElement('div')
    content2.classList.add('container')
    container.appendChild(content2)

    const imagen= document.createElement('img')
    imagen.src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    imagen.classList.add('rounded-circle', 'float-start', 'me-4')
    imagen.style.width='4rem'
    imagen.style.height='3rem'
    content2.appendChild(imagen)

    const content3= document.createElement('div')
    content3.classList.add('container')
    container.appendChild(content3)

    const h5= document.createElement('h5')
    h5.textContent=name
    h5.classList.add('name')
    content3.appendChild(h5)
    

    const small= document.createElement('small')
    small.textContent= `${date} Originally published at ${name}`
    content3.appendChild(small)

    const h1= document.createElement('h1')
    h1.classList.add('card-title','mt-2')
    // h1.textContent=title
    cardbody.appendChild(h1)
    const b=document.createElement('b')
    b.textContent=title
    h1.appendChild(b)

    // const aref4= document.createElement('a')
    // aref.href='../articule.html'
    // aref.textContent=title
    // h1.appendChild(aref4)

    const cardbody2= document.createElement('div')
    cardbody2.classList.add('card-body')
    cardbody.appendChild(cardbody2)

    const aref= document.createElement('a')
    aref.classList.add('card-link','text-muted','text-decoration-none')
    cardbody2.appendChild(aref)

    const row= document.createElement('div')
    row.classList.add('row')
    cardbody.appendChild(row)

    const col1= document.createElement('div')
    col1.classList.add('col','d-flex')
    row.appendChild(col1)

    const aref2= document.createElement('a')
    aref2.classList.add('text-muted','text-decoration-none','ms-2','d-flex')
    col1.appendChild(aref2)

    const span= document.createElement('span')
    span.classList.add('d-none','d-md-block')
    span.textContent=`${reactions} Reactions ${comments} Comments`
    aref2.appendChild(span)

    const aref3= document.createElement('a')
    aref3.classList.add('text-muted','text-decoration-none','d-flex')
    col1.appendChild(aref3)


    const col2= document.createElement('div')
    col2.classList.add('col','d-flex','justify-content-end')
    row.appendChild(col2)

    const row50= document.createElement('div')
    row50.classList.add('row','w-50')
    col2.appendChild(row50)

    const small2= document.createElement('small')
    small2.textContent= `${timeread} min read`
    row50.appendChild(small2)
    
}

const get = async () => {
    const response = await fetch('https://javascript-38da6-default-rtdb.firebaseio.com/.json');
    const result = await response.json();
    const data = parseInfo(result);
    return data   
  };
get()

const parseInfo = (info) => {
    const list = Object.entries(info);
    const newList = list.map((element) => {
      const infoParsed = {
        id: element[0],
        ...element[1],
      };
    //   printCard(infoParsed)
      const title =infoParsed.title
        const vector=title.split(" ")
        let cont=0
        console.log(vector, 'vector on el titulo')
        for(const newWord of vector){ 
            if(newWord===idCharacter){
                cont++
                printCard(infoParsed)
            }  
        }            
    // console.log(idCharacter, 'se usa ' + cont + ' veces')    
    //   console.log(title)
      return infoParsed;
    });
    return newList;
  };


// printCard()
