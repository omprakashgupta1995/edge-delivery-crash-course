export default function decorate(blog) {
Array.from(blog.children).forEach((blog, index) => {
    blog.classList.add('row-'+ (index + 1));
    Array.from(blog.children).forEach((col, index) => col.classList.add('col-'+ (index+1)))
}) 
}