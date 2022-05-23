let myLeads = [];
var input = document.querySelector('#inputEl');
var btn = document.querySelector('#btn');
var ul = document.querySelector('#store');
var deleteBtn = document.querySelector('#del-btn');
var tabBtn = document.querySelector('#tab-btn');

btn.addEventListener("click", function(){
    myLeads.push(input.value);
    input.value = "";
    localStorage.setItem("Leads", JSON.stringify(myLeads));
    // var stored = JSON.parse(localStorage.getItem("Leads"));
    // console.log (stored);
    render(myLeads);
})

function render(leads){
    let listItems = '';
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]} '> 
                    ${leads[i]} 
                </a>
            </li>`;
        ul.innerHTML = listItems;
    }
}


tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

deleteBtn.addEventListener("click", ()=>{
    localStorage.clear();
    myLeads = [];
    ul.innerHTML = "";
})