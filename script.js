let radio_btn = document.querySelectorAll("input[name='type']");

const form = document.querySelector("#form");
const budgets = [];

const income = document.querySelector("#income-value");
const expence = document.querySelector("#expense-value");
const balance = document.querySelector("#balance-value");

const grid = document.querySelector("#grid");

// form start
form.addEventListener("submit", (e) => {
  const income_innerhtml = parseInt(income.innerHTML);
  const expence_innerhtml = parseInt(expence.innerHTML);
  const balance_innerhtml = parseInt(balance.innerHTML);
  console.log(expence_innerhtml);
  e.preventDefault();
  const formdata = new FormData(form);
  const budget = {};
  formdata.forEach((value, key) => {
    budget[key] = value;
  });
  budgets.push(budget);
  /*budgets.map((e)=>{
 const e_value=e.type;

    if (e_value=="income") {
      income.innerHTML=income_innerhtml+parseInt(e.number);
      
      balance.innerHTML=balance_innerhtml+parseInt(e.number);
      
      expence.innerHTML=expence_innerhtml;
      
    }else{
      
      balance.innerHTML=balance_innerhtml-parseInt(e.number);
      
      expence.innerHTML=expence_innerhtml+parseInt(e.number);
      
      income.innerHTML=income_innerhtml;
    }

});*/
  budgets.forEach((e) => {
    const e_value = e.type;
    if (e_value == "income") {
      income.innerHTML = income_innerhtml + parseInt(e.number);

      balance.innerHTML = balance_innerhtml + parseInt(e.number);

      expence.innerHTML = expence_innerhtml;
    } else {
      balance.innerHTML = balance_innerhtml - parseInt(e.number);

      expence.innerHTML = expence_innerhtml + parseInt(e.number);

      income.innerHTML = income_innerhtml;
    }
  });

  let random_id = Date.now().toString();
  let div = document.createElement("div");
  const budget_type = budget.type;

  if (budget_type == "income") {
    div.innerHTML += `<div class="card flex justify-between my-4 bg-gray-300 p-4 rounded-md">        
          <div>
            <h3 id="items-name" class="text-purple-700 font-bold">${budget.text}</h3>
            <h4 id="items-amount" class="text-lg">${budget.number}</h4>
            <h4 id="items-icon">${budget_type}</h4>
          </div>  
          <div>
            <div class="flex justify-end">
              <i
                id="modify-icon"
                class="fa-solid fa-pen-to-square mr-4 text-green-500 cursor-pointer"
              ></i>
              <i
                id="delete-icon"
                class="fa-solid fa-trash text-red-500 cursor-pointer"
              ></i>
            </div>
            <p class="mt-8">time 10:20min</p>
          </div> 
        </div> `;
    grid.appendChild(div);
    div.id = random_id;
    //list button
    const delete_icon = div.querySelector("#delete-icon");
    const modify_icon = div.querySelector("#modify-icon");

    delete_icon.addEventListener("click", () => {
      // let parent = delete_icon.parentElement.parentElement.parentElement;
      const con = confirm("are you shoure to delete");
      if (con) {
        grid.removeChild(div);
        income.innerHTML = income.innerHTML - budget.number;
        balance.innerHTML = balance.innerHTML - budget.number;
      }
    });
    //list button
  } else {
    div.innerHTML += `<div class="card flex justify-between my-4 bg-gray-300 p-4 rounded-md">      
    <div>
      <h3 id="items-name" class="text-purple-700 font-bold">${budget.text}</h3>
      <h4 id="items-amount" class="text-lg">${budget.number}</h4>
      <h4 id="items-icon">${budget_type}</h4>
    </div>
    <div>
      <div class="flex justify-end">
        <i
          id="modify-icon"
          class="fa-solid fa-pen-to-square mr-4 text-green-500 cursor-pointer"
        ></i>
        <i
          id="delete-icon"
          class="fa-solid fa-trash text-red-500 cursor-pointer"
        ></i>
      </div>
      <p class="mt-8">time 10:20min</p>
    </div>
  </div> `;
    grid.appendChild(div);
    div.id = random_id;
    //list button
    const delete_icon = div.querySelector("#delete-icon");
    const modify_icon = div.querySelector("#modify-icon");

    delete_icon.addEventListener("click", () => {
      // let parent = delete_icon.parentElement.parentElement.parentElement;
      const con = confirm("are you shoure to delete");
      if (con) {
        grid.removeChild(div);
        expence.innerHTML = expence.innerHTML - budget.number;
        balance.innerHTML =
          parseInt(balance.innerHTML) + parseInt(budget.number);
      }
    });
    //list button
  }
});
// form end
