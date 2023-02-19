-------//Firebase URL
//const URL = "https://javascript-38da6-default-rtdb.firebaseio.com/.json";

//console.log(window.location.search)
//query Params

//const postHash = querySelector



//DELETE METHOD
const myDeleteFunction = async (id) => {
    try {
      const response = await fetch(
        `https://javascript-38da6-default-rtdb.firebaseio.com/${id}.json`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };




const createDomElements = (post) => {
  const imageTag = document.querySelector("#postImage");
  imageTag.src = post.imagecontent;

  const creatorNameTag = document.querySelector("#userName");
  creatorNameTag.textContent = post.name;

  const postTitleTag = document.querySelector("#title-link");
  postTitleTag.textContent = post.title;

  const commentsSection = document.querySelector("#comments");
  const postContent = document.createElement("p");
  postContent.textContent = post.content;
  commentsSection.before(postContent);

  // edit and delete buttons
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-danger");
  deleteButton.textContent = "Delete";
  postTitleTag.before(deleteButton);

  const editButton = document.createElement("button");
  editButton.classList.add("btn");
  editButton.classList.add("btn-secondary");
  editButton.textContent = "Edit";
  postTitleTag.before(editButton);

  //* edit button event

  editButton.addEventListener("click", () => {
    console.log("edit button clicked");
    // window.location.href= 'ANONIOS INX.HTML'
  });

  //* delete button event
  deleteButton.addEventListener("click", () => {
    //myDeleteFunction(postHash)
  });

  // ! me falta definir como el botton me va a dirigir a la vista de antonio ()

  // ! me falta definir como el boton borraria el post con el id que ya tengo
};

//GET METHOD FOR ALL POSTS
const myGetFunction = async () => {
  try {
    const response = await fetch(URL);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//GET METHOD ONLY ONE POST
const myGetFunctionID = async (id) => {
  // const url = new URLSearchParams(window.location.search)
  // const postID = url.get(POST_ID_HERE)

  try {
    const response = await fetch(
      `https://javascript-38da6-default-rtdb.firebaseio.com/${id}.json`
    );
    const result = await response.json();
    createDomElements(result);
  } catch (error) {
    console.log(error);
  }
};

//POST METHOD
const myPostFunction = async () => {
  try {
    const response = await fetch(URL);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//PUT METHOD
const myPutFunction = async (id) => {
  try {
    const response = await fetch(
      `https://javascript-38da6-default-rtdb.firebaseio.com/${id}.json`,
      {
        method: "PUT",
        headers: { "Content-type": "appplication/json;charset=UTF-8" },
        body: JSON.stringify({ name: "GOKU" }),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//Patch METHOD
const myPatchFunction = async (id) => {
  try {
    const response = await fetch(
      `https://javascript-38da6-default-rtdb.firebaseio.com/${id}.json`,
      {
        method: "PUT",
        headers: { "Content-type": "appplication/json;charset=UTF-8" },
        body: JSON.stringify(
          "AQUI TENDRÍAN QUE EXISTIR LOS PARAMETROS QUE QUEREMOS REEMPLAZAR EN NUESTRO FIREBASE "
        ),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};



// -NMfwgECTncfFOouvhDE -->

//myGetFunction()

//myGetFunctionID("-NMkmto-DHassJlAQGM3");

//myPatchFunction(" ")

myDeleteFunction("-NMkmto-DHassJlAQGM3")
