"use strict"

import {getContacts, getContactById, postContact, deleteContact, putContact} from "../contacts/contacts.js";

const formElementsIds = [
    'input-full-name',
    'input-date-of-birth',
    'input-occupation',
    'input-email',
    'input-phone-contact',
    'input-cellphone-contact',
    'check-whatsapp', 
    'check-sms-notification', 
    'check-email-notification'
]

const cleanInput = (id) => {
    if(id.includes('check')) {
        document.getElementById(id).checked = 0
    }
    else {
        document.getElementById(id).value = null
    }
}

const createLine = ({idPerson, fullName, dateOfBirth, email, contactCellPhone}) => {
    
    var arrDateOfBirth = dateOfBirth.split('-');
    var formatedStringDateOfBirth = arrDateOfBirth[2] + '/' + arrDateOfBirth[1] + '/' +
    arrDateOfBirth[0];

    const line = document.createElement('tr');
    line.innerHTML = 
    `<td>${fullName}</td>
    <td>${formatedStringDateOfBirth}</td>
    <td>${email}</td>
    <td>${contactCellPhone}</td>
    <td>
        <button type="button" class="btn-actions btn_edit" data-idcontact="${idPerson}">
            <img src="./assets/editar.png" alt="">
        </button>
        <button type="button" class="btn-actions btn_delete" data-idcontact="${idPerson}">
            <img src="./assets/excluir.png" alt="">
        </button>
    </td>`;

    return line;
}

const fulfillTable = async() => {
    const conteiner = document.querySelector(".table tbody");
    const contacts = await getContacts();
    const lines = contacts.data.map(createLine);
    conteiner.replaceChildren(...lines);
}

const registerContact= async () => {
    
    var inputDateValue = document.getElementById('input-date-of-birth').value
    var arrDateOfBirth = inputDateValue.split('/');
    var formatedStringDateOfBirth = arrDateOfBirth[2] + '-' + arrDateOfBirth[1] + '/' +
    arrDateOfBirth[0];

    const contact = {
        fullName: document.getElementById('input-full-name').value, 
        dateOfBirth: formatedStringDateOfBirth, 
        occupation: document.getElementById('input-occupation').value, 
        email: document.getElementById('input-email').value, 
        contactPhone: document.getElementById('input-phone-contact').value, 
        contactCellPhone: document.getElementById('input-cellphone-contact').value, 
        cellPhoneNumberWhatsApp: document.getElementById('check-whatsapp').checked ? 1 : 0, 
        sendSMSNotification: document.getElementById('check-sms-notification').checked ? 1 : 0, 
        sendEmailNotification: document.getElementById('check-email-notification').checked  ? 1 : 0
    };
    await postContact(contact);
    await fulfillTable();
    configureActionButtons();
    formElementsIds.map((id) => cleanInput(id));
}

const fillInputs = async (idcontact) => {

    const contacts = await getContactById(idcontact);
    var inputDateValue = contacts.data[0].dateOfBirth
    var arrDateOfBirth = inputDateValue.split('-');
    var formatedStringDateOfBirth = arrDateOfBirth[2] + '/' + arrDateOfBirth[1] + '/' +
    arrDateOfBirth[0];

    document.getElementById('input-id-person').value = contacts.data[0].idPerson
    document.getElementById('input-full-name').value = contacts.data[0].fullName
    document.getElementById('input-date-of-birth').value = formatedStringDateOfBirth
    document.getElementById('input-occupation').value = contacts.data[0].occupation
    document.getElementById('input-email').value = contacts.data[0].email
    document.getElementById('input-phone-contact').value = contacts.data[0].contactPhone
    document.getElementById('input-cellphone-contact').value = contacts.data[0].contactCellPhone
    document.getElementById('check-whatsapp').checked = contacts.data[0].cellPhoneNumberWhatsApp == 1? true : false
    document.getElementById('check-sms-notification').checked = contacts.data[0].sendSMSNotification == 1? true : false
    document.getElementById('check-email-notification').checked = contacts.data[0].sendEmailNotification == 1? true : false

    //setting buttons to apeer ou disapeer
    changeButtonsVisualization('flex', 'none');
}

const updateContact =  async () => {

    var inputDateValue = document.getElementById('input-date-of-birth').value
    var arrDateOfBirth = inputDateValue.split('/');
    var formatedStringDateOfBirth = arrDateOfBirth[2] + '-' + arrDateOfBirth[1] + '-' +
    arrDateOfBirth[0];

    const contact = {
        idPerson: document.getElementById('input-id-person').value, 
        fullName: document.getElementById('input-full-name').value, 
        dateOfBirth: formatedStringDateOfBirth, 
        occupation: document.getElementById('input-occupation').value, 
        email: document.getElementById('input-email').value, 
        contactPhone: document.getElementById('input-phone-contact').value, 
        contactCellPhone: document.getElementById('input-cellphone-contact').value, 
        cellPhoneNumberWhatsApp: document.getElementById('check-whatsapp').checked ? 1 : 0, 
        sendSMSNotification: document.getElementById('check-sms-notification').checked ? 1 : 0, 
        sendEmailNotification: document.getElementById('check-email-notification').checked  ? 1 : 0
    }; 

    changeButtonsVisualization('none', 'flex')
    await putContact(contact);
}
const changeButtonsVisualization = (editionButtonsStatus, registrationButtonsStatus) => {
    document.getElementById("container-edit-buttons").style.display = editionButtonsStatus
    document.getElementById("container-register-button").style.display = registrationButtonsStatus
}
const cancelUpdate = () =>{
    let confirmation = confirm("Deseja descartar alterações?");
    
    if(confirmation){   
        changeButtonsVisualization("none", "flex")
        formElementsIds.map((id) => cleanInput(id));
    }
}

const saveUpdate = async () =>{
    let confirmation = confirm("Deseja salvar alterações?");
    
    if(confirmation){
        changeButtonsVisualization('none', 'flex');
        await updateContact()
        await fulfillTable()
        configureActionButtons()
        alert("Alterações salvas com sucesso!")
    
        formElementsIds.map((id) => cleanInput(id));
    }
}

const configureActionButtons = () => {

    var btns_delete = Array.prototype.slice.call(document.getElementsByClassName("btn_delete"))
        btns_delete.map((btn) => {btn.addEventListener("click", async () => {
            let confirmation = confirm("Deseja apagar contato?");
    
            if(confirmation){
                await deleteContact(btn.dataset.idcontact);
                fulfillTable();
                configureActionButtons();
                alert("Contato apagado com sucesso!")
            }
            
        })})

    var btns_edit = Array.prototype.slice.call(document.getElementsByClassName("btn_edit"))
        btns_edit.map((btn) => {btn.addEventListener("click", async () => {
            await fillInputs(btn.dataset.idcontact);
        })})
}

export{fulfillTable, configureActionButtons, registerContact, cancelUpdate, saveUpdate}