function add() {
    var list = document.getElementById('list');
    var task = document.getElementById('input').value;
    
    if (task === '') {
        alert('Please Enter Task!');
    } else {
        list.innerHTML += `
        <tr class="bg-slate-500">
            <td class="number">1</td>
            <td class="text-start task p-2">${task}</td>
            <td class="text-start p-2 cursor-pointer">
                <button onclick="editTask(this)">Edit</button>
                <button onclick="this.closest('tr').remove(); updateNumbers();">X</button>
            </td>
        </tr>`;
        
        document.getElementById('input').value = '';
        updateNumbers(); // Fixed: Added missing semicolon on the line above so this executes cleanly
    }
}

function editTask(btn) {
    var row = btn.closest('tr');
    // Fix 1: Added the dot (.) to target the class name "task", and scoped it to the current row
    var taskcell = row.querySelector('.task'); 
    
    var newTask = prompt('Edit Your Task', taskcell.textContent);
    
    // Fix 2: Changed logical OR (||) to AND (&&) and verified it isn't an empty string
    if (newTask !== null && newTask.trim() !== '') {
        taskcell.textContent = newTask.trim();
    }
}

// Automatic Serial Numbers
function updateNumbers() {
    // Fix 3: Changed ".list tr" to "#list tr" to match your HTML ID 'list'
    var rows = document.querySelectorAll("#list tr"); 
    rows.forEach(function(row, i) {
        row.querySelector('.number').textContent = i + 1;
    });
}
