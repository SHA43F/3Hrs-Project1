let addBtn = document.getElementById('forms');
let amt = document.getElementById('Amount');
let desc = document.getElementById('Description');
let cate = document.getElementById('category');
let listNodes = document.getElementById('groupId');
let delBtn = document.createElement('button')
let editBtn = document.createElement('button')
let listVal = document.createElement('li');
delBtn.textContent = 'Delete'
delBtn.id = 'delId'
delBtn.className = 'delClass'
editBtn.textContent = 'Edit'
editBtn.id = 'editId'
editBtn.className = 'editClass'

addBtn.addEventListener('submit', addFun)

function addFun(e)
{
    e.preventDefault();
    let key = {amount: amt.value, description: desc.value, catalog: cate.value}
    let keySerial = JSON.stringify(key)
    localStorage.setItem(key.amount+key.description, keySerial)
    let li_items = document.getElementById('groupId');
    let lists = `<li id=${key.description}>${amt.value} ${desc.value} ${cate.value}
                <button onClick=delFun('${key.amount}${key.description}','${key.description}')>Delete</button> 
                <button onClick=editFun('${key.amount}${key.description}','${amt.value}','${desc.value}','${cate.value}')>Edit</button></li>`;
    li_items.innerHTML +=lists;
    amt.value = null
    desc.value = ""
}

Object.keys(localStorage).forEach((key) => 
{
    let keyes = localStorage.getItem(key);
    let vals = JSON.parse(keyes);
    let li_items = document.getElementById('groupId');
    let lists = `<li id=${vals.description}>${vals.amount} ${vals.description} ${vals.catalog}
                <button onClick=delFun('${vals.amount}${vals.description}','${vals.description}')>Delete</button> 
                <button onClick=editFun('${vals.amount}${vals.description}','${vals.amount}','${vals.description}')>Edit</button></li>`;
    li_items.innerHTML += lists;
});

function delFun(delVal,id)
{
    localStorage.removeItem(delVal)
    remove(id)
}

function editFun(editVal,amts,des)
{
    document.getElementById('Amount').value = amts;
    document.getElementById('Description').value = des;
    localStorage.removeItem(editVal)
    remove(des)
}

function remove(id)
{
    let lists = document.getElementById('groupId')
    let remov = document.getElementById(id)
    if(remov)
    {
        lists.removeChild(remov)
    }
}
