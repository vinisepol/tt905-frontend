let url = "https://tt905-backend-paulo-vinicius.herokuapp.com"

async function callFetchWithGet(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json");
    const response = await fetch(url, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

async function callFetchWithPost(Nome, Estado, Sigla){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
                "capital":{
                    "Nome": Nome,
                    "Estado": Estado,
                    "Sigla": Sigla   
                }
        })
    }
    await fetch(url, options);
}

async function callFetchWithPut(id, Nome, Estado, Sigla){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'            
        }, 
        body :JSON.stringify({
            "capital":{
                "Nome": Nome,
                "Estado": Estado,
                "Sigla": Sigla   
            }
        })
    }
    await fetch(`${url}${id}`, options);
}

async function callFetchWithDelete(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
    await fetch(`${url}${id}`, options);
}

/*
    Formulários
*/

function submitPost(){
    console.log("entrei na função");
    
    const form = document.forms['postForm'];    
    const Nome = form["nome_cap"].value;
    const Estado = form["estado_cap"].value;
    const Sigla = form["sigla_cap"].value;

    if((Nome != '') && (Estado != '') && (Sigla != '')){
        callFetchWithPost(Nome, Estado, Sigla);}
        else{ alert('Preencha todos os campos!');}

    return false; // Evitar o reload da tela.
}

function submitPut(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;  
    const Nome = form["nome_cap"].value;
    const Estado = form["estado_cap"].value;
    const Sigla = form["sigla_cap"].value;

    if((id != '') && (Nome != '') && (Estado != '') && (Sigla != '')){
        callFetchWithPost(id, Nome, Estado, Sigla);}
        else{ alert('Preencha todos os campos!');}

    return false; // Evitar o reload da tela.
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id = form["id"].value;  
    callFetchWithDelete(id);
    return false; // Evitar o reload da tela.
}