const firstName = document.querySelector('.header')
fetch('/header.html')
.then(res=>res.text())
.then(data=>{
    firstName.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
});

const secondName = document.querySelector('.footer')
fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    secondName.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
});

const thirdName = document.querySelector('.blogs')
fetch('/blogs.html')
.then(res=>res.text())
.then(data=>{
    thirdName.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
});

{/* Examples:
    <div class="header"></div>                Create (new-files): header.html
        <div class="footer"></div>
            <div class="blogs"></div>
                                         */}