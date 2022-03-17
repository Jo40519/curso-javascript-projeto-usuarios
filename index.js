
var fields = document.querySelectorAll('#form-user-create [name]')
var user = {};

function addLine() {
    var tr = document.createElement('tr')
    
}

document.getElementById('form-user-create').addEventListener('submit', (event) => {
    event.preventDefault();
        fields.forEach(function (field, index) {
    
    if (field.name == 'gender') {
        if (field.checked) {
         user[field.name] = field.value
        }
        
        } else {
            user[field.name] = field.value
        }
   

})
    addLine(user)
})