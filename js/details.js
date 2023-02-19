const url = new URLSearchParams(window.location.search)
const idCharacter=url.get("q")
// alert(idCharacter)
const myGetFunctionID = async (id) => {
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

  myGetFunctionID(idCharacter)

  const myDeleteFunction = async (id) => {
    try {
      const response = await fetch(
        `https://javascript-38da6-default-rtdb.firebaseio.com/${id}.json`,
        {
          method: "DELETE",
          headers: { 'Content-type': 'application/json;' },
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
      // console.log("edit button clicked");
      window.location.href= `../views/new.html?=id${idCharacter}`
    });
  
    //* delete button event
    deleteButton.addEventListener("click", () => {
      myDeleteFunction(idCharacter)
      window.location.href='../index.html'
    });
  
    // ! me falta definir como el botton me va a dirigir a la vista de antonio ()
  
    // ! me falta definir como el boton borraria el post con el id que ya tengo
  };
  


  