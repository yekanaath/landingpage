
function enableEdit() {
    document.getElementById('name').contentEditable = true;
    document.getElementById('email').contentEditable = true;
    document.getElementById('phone').contentEditable = true;
    document.getElementById('mobile').contentEditable = true;
    document.getElementById('address').contentEditable = true;

    document.getElementById('editButton').style.display = 'none';
    document.getElementById('saveButton').style.display = 'block';
}

function saveChanges() {
    document.getElementById('name').contentEditable = false;
    document.getElementById('email').contentEditable = false;
    document.getElementById('phone').contentEditable = false;
    document.getElementById('mobile').contentEditable = false;
    document.getElementById('address').contentEditable = false;
    document.getElementById('editButton').style.display = 'block';
    document.getElementById('saveButton').style.display = 'none';

    // Here, you can send the updated data to a server using AJAX or perform any other necessary actions.
}
