// Elementos do DOM
const musicFotm = document.getElementByld('musicForm');
const musicTableBody = document.querySelector('musicTable tbody');
const exportBtn = document.getElementByld('exportBtn')

// Função para adicionar uma linha ma tabela
musicFotm.addEventListener('submit', funcition(event)){
   event.preventDefault();

   const numero = documet.getElementByld('numero').value;
   const musica = documet.getElementByld('musica').value;
   const genero = documet.getElementByld('genero').value;
   const cantor = documet.getElementByld('cantor').value;
   const autoria = documet.getElementByld('autoria').value;

   const newRow = document.createElement('tr');
   newRow.innerHTML =`
     <td>${numero}</td>
     <td>${musica}</td>
     <td>${genero}</td>
     <td>${cantor}</td>
     <td>${autoria}</td>
   `;

   musicTableBody.appendChild(newRow);

   // Limpar o formulário
   musicForm.reset();
   });

   //Função para exportar a tabela como planilha dinâmica
   exportBtn.adEventListener('click', function(){
    const tableRows = document.querySelectorAll('#musicTable tr')
    const csvContent = [];

    //Extrair dados da tabela
    tableRows.forEach(row=>{
    const rowData = Array.from(row.cells).map(cell => cell.innerText).join(',')
    csvContent.push(rowData);
    });

    //Criar arquivo CSV
    const csvBlob = new Blob([csvContent.join('/n')], {type: 'text/csv'});