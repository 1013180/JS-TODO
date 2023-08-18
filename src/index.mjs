import "./styles.css";

const onclickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (Target) => {

  document.getElementById("incomplete-list").removeChild(Target);
};


const createIncompleteList = (text) => {
  　const div = document.createElement("div");
  div.className = "list-row";
  
  const li = document.createElement("li");
  li.innerText = text;

  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    deleteFromIncompleteList(complateButton.parentNode);

    const addTarget = complateButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    
    const li = document.createElement("li");
    li.innerText = text;
    
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () =>{
      const deleteTarget = backButton.parentNode;
      document.getElementById("complate-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);   
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    
    document.getElementById("complate-list").appendChild(addTarget);

    
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  

   div.appendChild(li);
   div.appendChild(complateButton);
   div.appendChild(deleteButton);


   document.getElementById("incomplete-list").appendChild(div);



};




document
.getElementById("add-button")
.addEventListener("click", () => onclickAdd());