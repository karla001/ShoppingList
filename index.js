
var form = document.addItem;
var listArr = [];

//checking for localstorage key value
if(localStorage.list){
    listArr = JSON.parse(localStorage.list);
}
// calling function to display items in local storage
displayList();
//adding items to localstorage and displaying on page on click
form.submit.addEventListener("click", function(event){
    event.preventDefault();

    listArr.push({'message': form.title.value, 'id': listArr.length});
    localStorage.list = JSON.stringify(listArr);
    listArr = JSON.parse(localStorage.list);
    console.log(localStorage.list,listArr)
    form.title.value = "";
    displayList();
})
// adds list item to page html within <ul>
function displayList(){
    let itemLabel= '';

    for(let i=0;i<listArr.length;i++){
        itemLabel += '<li><div class="listLabel">'+ listArr[i].message+ '</div><div class="listButtons"><button onclick="edit('+listArr[i].id+')">edit</button><button onclick="remove('+listArr[i].id+')">X</button></div></li> '; 
    }
    document.getElementById("list").innerHTML =  itemLabel;

}
//removes item from localstorage and displays updated list
function remove(id){

    listArr= listArr.filter(function(value, index, arr){ 
        return value.id != id;
    });
    localStorage.list = JSON.stringify(listArr);

    displayList();
}
// displays value to be edited in input box to be resubmitted as a new item and removes the current outdated item
function edit(id){
    let item = listArr.filter(function(value, index, arr){ 
        return value.id == id;
    });
    form.title.value = item[0].message;

    remove(id);
}