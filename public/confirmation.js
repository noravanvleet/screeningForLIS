document.addEventListener('DOMContentLoaded', async() => {
    pastEntries();
});

async function pastEntries() {
    const response = await fetch('/form/formPastEntries').then(Response => Response.json())
        .then(Rows => { 
            Rows.map(Entry => {
                var newRow = document.createElement('tr');
                newRow.innerHTML =
                `<td>${Entry.name}</td>
                <td>${Entry.age}</td>
                <td>${Entry.title}</td>
                <td>${Entry.hometown}</td>`;
                document.getElementById('formResults').appendChild(newRow);
            });
            
        });
}
