

export default function decorate(block) {
    console.log(block.children)
    // debugger;
    Array.from(block.children).forEach((row,index)=>{
        console.log(row)
        row.classList.add((index+1) + "row")

        Array.from(row.children).forEach((column,index)=>{
            column.classList.add((index+1) + "column")

        })
    })
}

  