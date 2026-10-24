function add(){
    var list = document.getElementById('dynamicList');
    var task = document.getElementById('input').value;


    if(task === ''){
        alert('Please Enter Task!');
    }else{
        list.innerHTML += `
         <tr class="bg-slate-500 ">
                <td class="text-start p-2">${task}</td>
                <td class="text-start p-2 cursor-pointer" 
                onclick="this.closest('tr').remove()"><button>X</button></td>
            </tr>
        
        `;
       document.getElementById('input').value = ''
    }
}