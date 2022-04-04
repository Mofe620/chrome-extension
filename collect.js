let myLeads = [];
var input = document.querySelector('#inputEl');
var btn = document.querySelector('#btn');
var ul = document.querySelector('#store');


btn.addEventListener("click", function(){
    myLeads.push(input.value);
    input.value = "";
    renderLeads();
})

function renderLeads(){
    let listItems = '';
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]} '> 
                    ${myLeads[i]} 
                </a>
            </li>`;
        ul.innerHTML = listItems;
    }
}
