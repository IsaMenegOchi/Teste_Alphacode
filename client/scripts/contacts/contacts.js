"use strict"

const url = "http://localhost/isabelle/teste-alphacode-oficial/api/";

const getContacts = async () => {
    const response = await fetch(url);
    return response.json();
}

const postContact = async (contact) => {
    const options ={
        method: 'POST',
        //tranforma jason em string
        body: JSON.stringify(contact),
        headers: {
            'content-type' : 'application/json',
        }
    }
    await fetch(url, options)
}

const deleteContact = async (idcontact) => {
    const options = {
        method: 'DELETE',
        body: JSON.stringify({idPerson: Number(idcontact)}),
        header: { 
            'content-Type' : 'application/json',
        }
    }
    await fetch(url, options);

}

const putContact = async (contact) =>{
    const options = {
        method: 'PUT',
        body: JSON.stringify(contact),
        header: { 
            'content-Type' : 'application/json',
        }
    }
    
    await fetch(url, options);

}

const getContactById = async (idcontact) => {

    const response = await fetch(`${url}?idPerson=${idcontact}`);
    return response.json();
}

export{getContacts, postContact, deleteContact, putContact, getContactById}