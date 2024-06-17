// import { range } from "../../scripts/scripts";

export default function decorate(block) {
    console.log("block :: ", block);
    [...block.children].forEach(element => {
        let input = range({
            label: "EMI"
        })
        element.append(input)
    });
}



export function range(data) {
    let input = document.createElement("input");
    input.type = "range";
    input.label = data.label;
    return input;
}