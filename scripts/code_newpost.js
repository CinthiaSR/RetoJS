const URL_POST = 'https://javascript-38da6-default-rtdb.firebaseio.com/.json';

// Función para enviar los datos del formulario al servidor de firebase
const postItem = async (postNew) => {
    try{
        const response = await fetch(URL_POST, {
            method: 'POST',
            headers: {  'Content-Type': 'application/json;charset=UTF-8' },
            body: JSON.stringify(postNew)
        });
        window.location.href = `../index.html`;
    }catch(error){
        alert('Error al enviar los datos')
    }
};

const formIndex = document.querySelector('#formPostNew');
formIndex.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputsList = document.querySelectorAll('#formPostNew input[type="text"],input[type="url"], textarea');
    const dataPost = {};
    
    inputsList.forEach((input) => {
        dataPost[input.name] = input.value;
    });
    postItem(dataPost);
});

const previewButton = () =>{
    const formPreview = document.querySelector('#btnPreview');
    formPreview.addEventListener('click',() => {
        extractData();
    });
};

const extractData = () =>{
    const inputsList = document.querySelectorAll('#formPostNew input[type="text"],input[type="url"], textarea');
    const dataPost = {};
    
    inputsList.forEach((input) => {
        dataPost[input.name] = input.value;
    });
    drawPreview(dataPost);
};

const drawPreview = (data) =>{
    clearForm();
    const indexPost = document.querySelector('#formPostNew');
    const articlePost = document.createElement('article');
    articlePost.classList.add('articleNew');
    indexPost.appendChild(articlePost);
    const headerArticle = document.createElement('header');
    articlePost.appendChild(headerArticle);
    const divHeader = document.createElement('div');
    headerArticle.appendChild(divHeader);
    const imgTitle = document.createElement('img');
    imgTitle.styleList = 'height: 100%; width: 100%; object-fit: contain;';
    imgTitle.src= data.avatar;
    divHeader.appendChild(imgTitle);
    const h1Div = document.createElement('h1');
    h1Div.textContent = data.title;
    divHeader.appendChild(h1Div);
    const divSymbols = document.createElement('div');
    headerArticle.appendChild(divSymbols);
    const h4Symbols = document.createElement('h4');
    h4Symbols.textContent = data.symbols;
    divSymbols.appendChild(h4Symbols);
    const divArticle = document.createElement('div');
    articlePost.appendChild(divArticle);
    const pName = document.createElement('p');
    pName.textContent = data.author;
    divArticle.appendChild(pName);
    const pContent = document.createElement('p');
    pContent.textContent = data.content;
    divArticle.appendChild(pContent);
    const pComments = document.createElement('p');
    pComments.textContent = data.comments;
    divArticle.appendChild(pComments);
    const pDate = document.createElement('p');
    pDate.textContent = data.date;
    divArticle.appendChild(pDate);
    const imgContent = document.createElement('img');
    imgContent.styleList = 'height: 100%; width: 100%; object-fit: contain;';
    imgContent.src= data.imagecontent;
    divArticle.appendChild(imgContent);
    const pReactions = document.createElement('p');
    pReactions.textContent = data.reactions;
    divArticle.appendChild(pReactions);
    const pTimeRead = document.createElement('p');
    pTimeRead.textContent = data.timeread;
    divArticle.appendChild(pTimeRead);
};

const clearForm = () =>{
    const removeElement = document.querySelectorAll('div.formPost');
    removeElement.forEach((element) => {
        element.remove();
    });
};

const editButton = () =>{
    const formPreview = document.querySelector('#btnEdit');
    formPreview.addEventListener('click',() => {
        fillData();
    });
};

const fillData = () =>{
    alert('fillData');
    clearPreview();
};


const clearPreview = () =>{
    alert('clearPreview');
};

const closeButton = () =>{
    const formPreview = document.querySelector('#btnClose');
    formPreview.addEventListener('click',() => {
        confirmClose();
    });
};

const confirmClose = () =>{
    if (confirm('¿Estás seguro que deseas cerrar el formulario?')) {
        window.location.href = `../index.html`;
    }else{
        alert('No se cerrará el formulario');
    }
};

previewButton();
editButton();
closeButton();


// --------------------------------EDIT
const url = new URLSearchParams(window.location.search);
const mentorId = url.get('id');

const getHash = async(id) =>{
    try {
        const response = await fetch(`https://javascript-38da6-default-rtdb.firebaseio.com/${id}.json`,{
            method: "GET",
        })
        const result = await response.json()
        
        setValueToInputs(result)
        return result
    } catch (error){}
}
// getHash(idCharacter)

const myPatchFunction = async(data,id) => {
    try {
    const results = await getHash(id)
    // console.log(results)
    const response = await fetch(`https://javascript-38da6-default-rtdb.firebaseio.com/${id}.json`,{
    method: "PATCH",
    headers: {"Content-type":"application/json;charset=UTF-8"},
    body: JSON.stringify({
        ...{results},
        content: data.content,
        avatar: data.avatar,
        title:data.title,
    })
    })
    const result = await response.json()
    console.log(result)
    } catch(error) {
    console.log(error)
    }
    }

const setValueToInputs = (data) => {
    console.log(data)
    const { avatar, title, content } = data;
    document.querySelector('#avatar').value = avatar;
    document.querySelector('#title').value = title;
    document.querySelector('#content').value = content;
    myPatchFunction(data, mentorId)
};