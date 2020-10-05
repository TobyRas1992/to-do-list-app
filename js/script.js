function newItem() {
    let li = $('<li></li>'); // creates variable that stores a list item 
    let inputValue = $('#input').val(); // stores input value

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        let list = $('#list'); // How to assign the list to a variable with jQuery
        list.append(li); // appends the list item to the list (one way of doing it with variables)
        li.append(inputValue); //appends value to list item
    }
}
