const multiplicationIndex = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    ];
    const table = document.createElement("table");
    for (let i of multiplicationIndex) {
      let row = document.createElement("tr");
      for (let j = 1; j <= 20; j++) {
        let cell = document.createElement("td");
        let result = i * j;
        cell.textContent = (`${i} x ${j} = ${result}`);    
        cell.style.fontSize = '11.9px';
        cell.style.border = '1px solid black';
        
        row.appendChild(cell);
      }
        document.body.appendChild(table)
      table.appendChild(row);
      table.style.backgroundColor = 'pink'
    
    }
