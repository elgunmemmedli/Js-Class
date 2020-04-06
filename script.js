
class Enterprise {

  employees = [
    ["Elgün Məmmədli" , "Elvin Salmanov" , "Emil İslamov" , " Cahadar Quliyev"],
    ["Back-en Developer" , "React Developer" , "Frot-end Developer" , "Full Satck Developer"],
    [2400,2000,1500,3200],
  ]

  constructor(Name, Filial){
    this.CompanyName = Name;
    this.CompanyFilial = Filial;
  }

  SendTo(){
    let data = this.employees;
    let name = document.getElementById("recipient-name").value;
    let duty = document.getElementById("recipient-duty").value;
    let salary = document.getElementById("recipient-salary").value;

    data[0].push(name);
    data[1].push(duty);
    data[2].push(salary);
  }

List(){
 let tbl=`<table class="table">
    <tr>
      <th scope="col">Row</th>
      <th scope="col">Name</th>
      <th scope="col">Duty</th>
      <th scope="col">Salary</th>
    </tr>`;
let data = this.employees
    for(let i=0; i<data[0].length; i++){
      tbl+= ` <tr>
      <th scope="row">${1+i}</th>
      <td>${data[0][i]}</td>
      <td>${data[1][i]}</td>
      <td>${data[2][i]}</td>
    </tr>`
    }
    tbl+="</table>";
    return tbl;
    
}

} 

let EM = new Enterprise("EM-Tech" , "Nizami");
document.getElementsByTagName("h1")[0].innerHTML = EM.CompanyName;
document.getElementsByTagName("main")[0].innerHTML = EM.List();

function Send(){
  document.getElementsByTagName("main")[0].innerHTML = EM.SendTo();
  document.getElementsByTagName("main")[0].innerHTML = EM.List();
  for(i=0; i<=2;i++){
    document.getElementsByTagName("input")[i].value="";
  }
}