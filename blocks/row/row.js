export default function decorate(block) {
console.log(block);

// setup image columns
[...block.children].forEach((row,index) => {
    debugger;
    console.log(row)
    row.classList.add(`row-${index + 1}`);
   
  [...row.children].forEach((col,index) => {
    col.classList.add(`columns-${index + 1}`);
   
  });
});
}

