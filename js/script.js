function newItem() {
    let li = $('<li></li>'); // creates variable that stores a list item 
    let inputValue = $('#input').val(); // stores input value

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        li.append(inputValue); //appends value to list item
        let list = $('#list'); // How to assign the list to a variable with jQuery
        list.append(li); // appends the list item to the list (one way of doing it with variables)
        
    }
}



// crosses out item by clicking on it.
li.on('click', function () {
    li.addClass('strike');
})

// use this method maybe to hide elements
// newElement.hide();
// show with: newElement.show();
// there are more cool methods in the guide!! check them out. 

//use this each() method to iterate over li elements and cross them out. 
// $('input').each(function (i) {
//     let inputValue = $(this).val();
//     let inputName = $(this).attr('name');
//     if(inputValue().length < 1){
//         console.log('Please fill out the ' + inputName + ' field')
//     }
// });