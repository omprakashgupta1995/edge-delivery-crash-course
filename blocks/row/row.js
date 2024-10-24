export default function decorate(block) {
    Array.from(block.children).forEach((row,index)=>{
        console.log(row, "row");
        row.classList.add((index+1) + "row")
        Array.from(row.children).forEach((column,index)=>{
            column.classList.add((index+1) + "column")
        })
    })
  }




//   [...block.children].forEach((row) => {
//     // decorate accordion item label
//     const label = row.children[0];
//     const summary = document.createElement('summary');
//     summary.className = 'accordion-item-label';
//     summary.append(...label.childNodes);
//     // decorate accordion item body
//     const body = row.children[1];
//     body.className = 'accordion-item-body';
//     // decorate accordion item
//     const details = document.createElement('details');
//     details.className = 'accordion-item';
//     details.append(summary, body);
//     row.replaceWith(details);
//   });