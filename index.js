const adviceNumber = document.querySelector('.advice-num') 
const adviceText = document.querySelector('.advice-content') 
const Btn = document.querySelector('.button') 
const loader = document.querySelector('.loader') 
const circle = document.querySelectorAll('.loader .circle') 


async function getData(url){
    return await fetch(url).then(response => {
        return response.json()
    });
}

async function fetchPosts(){
    show()
    try{
        const responseData = await getData('https://api.adviceslip.com/advice')
        if(responseData){
            hide()
        }
        const data = (responseData.slip)
        const {id, advice} = data
        adviceNumber.textContent = `ADVICE #${id}`
        adviceText.textContent = `${advice}`
    }
    catch(error){
        hide()
        adviceNumber.textContent = ``
        adviceText.textContent = "Please try again!"
    }
}

Btn.addEventListener('click', fetchPosts)


function show(){
       loader.classList.remove('hide')
}

function hide(){
    loader.classList.add('hide')
}












































