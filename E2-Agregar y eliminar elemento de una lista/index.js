const myButton = document.getElementById("btnClick");
const myUl = document.getElementById("contenedor");
const liReferences = [];
let contador = 0;


myButton.onclick = (event) => {
  const miLi =  document.createElement("li");
  const boton = document.createElement("button");
  boton.innerHTML = 'Borrar';
  
  miLi.innerText = `Elemento lista #${contador}`;
  
  miLi.appendChild(boton);
  
  liReferences.push(miLi);
  myUl.appendChild(miLi);

  contador++;

  borrar();
} 


const borrar = () => {
  for (let i = 0; i < liReferences.length; i++){
    liReferences[i].onclick = function(){
      /* alert(i); */
      liReferences[i].remove();    
    }
  }
}
