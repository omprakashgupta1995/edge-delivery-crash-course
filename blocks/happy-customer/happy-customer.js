/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */


export default async function decorate(block) {
    function fetchAPI(method, url, data) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        resolve(this.responseText);
                    } else {
                        reject(this.responseText);
                    }
                }
            }
            xhr.send();
        })
    
    }
    fetchAPI("GET", "/assets/api/happy-customer.json")
        .then(function (data) {
           
            if (typeof data === "string") {
                data = JSON.parse(data);
            }
            var parentDiv = document.createElement("div");
            parentDiv.classList.add('happy-customer-container');
            data.data.forEach(function (eachdata,ind) {
              block.querySelector('picture img').src=eachdata.custimages;
                block.querySelector("h2").innerText = eachdata.custname;
                block.querySelector("p").innerText = eachdata.custprofession;
                block.querySelector("h4").innerText = eachdata.custcomments;
                block.classList.add('customerclass'+ind);
                parentDiv.innerHTML += block.outerHTML;
            });
            block.innerHTML = parentDiv.innerHTML;
        }).catch(function (err) {
            console.log(err);
        })
}
