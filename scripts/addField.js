
// salecionando o botão
document.querySelector("#add-time")

// chamando a função 'cloneField'
// quando o evento click for disparado

.addEventListener('click', cloneField)

function cloneField() {
        
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // node > nó
    const fields = newFieldContainer.querySelectorAll('input')

    /* um laço que eu não entendi muito bem
    [!] perguntar no discord depois */

    fields.forEach(function(field){
        field.value = ""

    })

    /*
    seleciona o elmento e add o resultado no final
    
    fieldset (parenet)
        ...
        [outrso filhos] 
        ...
        add+ newFieldConateiner (child)
    */

    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

