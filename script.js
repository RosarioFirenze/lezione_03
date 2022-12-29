// Eventi e Funzioni 
const eve = document.getElementById('myBtn');
eve.addEventListener('click',aggiungiElemento);

function aggiungiElemento(){
let text = document.getElementById('myInput').value;
let mylist = document.getElementById('myList');
let parag = document.createElement('p');
mylist.appendChild(parag);
parag.innerHTML = text;
document.getElementById("myInput").value = ""
};

const eve2 = document.getElementById('myBtn2');
eve2.addEventListener('click',eliminaTutto)

function eliminaTutto(){
    let mylist = document.getElementById('myList');
    while(mylist.firstChild){   
        mylist.removeChild(mylist.firstChild)  /* questa parte non l'ho capita*/
    }
}
const eve3 = document.getElementById('myBtn3');
eve3.addEventListener('click',eliminaElemento)

function eliminaElemento(){
    let mylist = document.getElementById('myList');
        if(mylist.hasChildNodes){
        mylist.removeChild(mylist.lastChild)
        }    
}

