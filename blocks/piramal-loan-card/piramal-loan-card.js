export default function decorate(block) {
    [...block.children].forEach(function (eachBlock) {
        var a = eachBlock.querySelector("a");
        eachBlock.addEventListener("click", function () {
            location.href = a.href;
        })
    })
    return block
}