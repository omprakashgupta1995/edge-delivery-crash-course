export default function decorate(block) {
   Array.from(block.children).forEach((row, rowIndex) => {
        row.classList.add(`row-${rowIndex + 1}`);        
        Array.from(row.children).forEach((column, colIndex) => {
          column.classList.add(`column-${colIndex + 1}`);
        });
    })
}