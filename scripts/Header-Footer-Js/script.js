// document.addEventListener('DOMContentLoaded', function () {

//     // Footer Api Call Funtion
//     function footer_apicall(method, url) {

//         var xhr = new XMLHttpRequest();

//         xhr.open(method, url);

//         xhr.onreadystatechange = function () {

//             if (this.readyState == 4 && this.status == 200) {
//                 footer_render(this.responseText);
//             } else if (this.status == 404) {
//                 console.log(`File not Found`)
//             }
//         }

//         xhr.send();
//     }

//     footer_apicall('GET', 'https://publish-p133703-e1305981.adobeaemcloud.com/content/experience-fragments/piramalfinance/in/en/site/footer/master.html');
//     // Footer Api Call Funtion

//     // Footer Render Function
//     function footer_render(footer_data) {
//         var flag = 0;
//         footer_data = footer_data.replace(/\/etc.clientlibs\/piramalfinance/g, "https://publish-p133703-e1305981.adobeaemcloud.com/etc.clientlibs/piramalfinance");
//         footer_data = footer_data.replace(/\/content\/dam\/piramalfinance/g, "https://publish-p133703-e1305981.adobeaemcloud.com/content/dam/piramalfinance");
//         document.addEventListener('scroll', function () {
//             if (flag == 0) {
//                 flag = 1;
//                 document.querySelector('.footer').innerHTML = footer_data
//             }
//         })
//     }
//     // Footer Render Function
// })
