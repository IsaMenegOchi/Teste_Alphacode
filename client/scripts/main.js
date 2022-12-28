"use strict"
import {fulfillTable, configureActionButtons, registerContact, cancelUpdate, saveUpdate} from "./utils/index.js";

await fulfillTable();
configureActionButtons()

document.getElementById("btn_register-contact").addEventListener("click", registerContact)

document.getElementById("btn_cancel-edition").addEventListener("click", cancelUpdate)

document.getElementById("btn_save-edition").addEventListener("click", saveUpdate)
