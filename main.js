import "./src/scss/index.scss";


const button = document.querySelector('.card button')
const q = document.querySelector('.card q')
const small = document.querySelector('.card small') 


const changeQuote = async () => {
    try {

        button.classList.add('loading');
        button.classList.remove('error');
        const res = await fetch('https://api.adviceslip.com/advice');
        if (!res.ok) throw Error('an error occured')
        const json = await res.json()
        console.log(json);
        
        if (!json?.slip?.advice) throw Error('an error occured')
        
        
        q.textContent = String(json?.slip?.advice ?? "It's easy to sit up and take notice, what's difficult is getting up and taking action")
        small.textContent = `ADVICE #${json?.slip?.id ?? 117}`
        button.classList.remove('loading');
    
    }
    catch(e) {

        button.classList.remove('loading');
        button.classList.add('error');

        q.textContent = "It's easy to sit up and take notice, what's difficult is getting up and taking action"
        small.textContent = `ADVICE #117`
        // alert(e)

    }
}




button.addEventListener('click', changeQuote)

changeQuote()