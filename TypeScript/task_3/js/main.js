"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud");
var row = {
    firstName: "Guillaume",
    lastName: "Salva"
};
var newRowId = CRUD.insertRow(row);
var updatedRow = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);
