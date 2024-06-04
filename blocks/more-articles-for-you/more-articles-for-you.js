/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
    // load footer as fragment
    // const footerMeta = getMetadata('footer');
    // const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
    // const fragment = await loadFragment(footerPath);

    // // decorate footer DOM
    // block.textContent = '';
    // const footer = document.createElement('div');
    // while (fragment.firstElementChild) footer.append(fragment.firstElementChild);
    // block.append(footer);
    fetchAPI("GET", "https://main--edge-delivery-crash-course--omprakashgupta1995.hlx.page/more-articles-for-you.json?nocache=1717489105241")
        .then(function (data) {
            debugger;
            if (typeof data === "string") {
                data = JSON.parse(data);
            }
            var parentDiv = document.createElement("div");
            data.data.forEach(function (eachdata) {
                // var div = document.createElement(div)
                // div.innerHTML = ;
                block.querySelectorAll("picture > source").forEach(function (picture) {
                    var srcset = picture.srcset.split("?");
                    picture.srcset = eachdata.image + "?" + srcset[1];
                })
                block.querySelector("h2").innerText = eachdata.title;
                block.querySelector("p").innerText = eachdata.date;
                block.querySelector("a").innerText = eachdata.cta_text;
                block.querySelector("a").href = eachdata.cta_url;
                parentDiv.innerHTML += block.outerHTML;
                // console.log(eachdata);
                // block.appendChild(eachdata)
            });
            block.innerHTML = parentDiv.innerHTML;
            // console.log(data);
        }).catch(function (err) {
            console.log(err);
        })
}
