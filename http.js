let nameElement = document.querySelector('.name');
let surnameElement = document.querySelector('.surname')
const getmyname = async ()=> {
    let res = await fetch ('http://127.0.1:3000/')
    console.log(res);
    if(!res.ok){
        alert('failed to get name');
        return;
    }
    let name = await res.text();
    nameElement.textContent = name;
}
const postsurname = async () => {
    let res = await fetch('http://127.0.0.1:3000/',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({surname: 'kumar'})
    }
)

console.log(res)
if(!res.ok){
    alert('Failed to post surname');
    return;
}
let{ surname}= await res.json();
surnameElement.textContent = surname;
}