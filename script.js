let ultask = $('#ultask')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpNewTask = $('#inpNewTask')
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')
//function to add element in the items
function value() {
    let item = $('<li>',{
        'class' : ' list-group-item',
        text    :   inpNewTask.val()
        })
        ultask.append(item)
        item.click(()=>{
            item.toggleClass('done')
        })     
        console.log(inpNewTask.val())    // for checking code reaches here or not
        inpNewTask.val(" ")
}
//button press from keyboard basically enter
inpNewTask.keypress((e)=>{
    console.log(e.which)    //print on console which key is pressed on keyboard  
if(e.which == 13){  
    if(inpNewTask.val()==(" ")){
        alert("Enter Task")
    }
    else
    value()
}
})
// add button
btnAdd.click(()=> {
    if(inpNewTask.val()==(" ")){
        alert("Enter Task")
    }
    else
    value()
})
//Reset button
btnReset.click(()=>{
    inpNewTask.val(" ")
})
// Cleanup button
btnCleanup.click(()=>{
    console.log($('#ultask .done')) //print value that has been done
    $('#ultask .done').remove()
})
//sort button
btnSort.click(()=>{
    $('#ultask .done').appendTo(ultask)
})