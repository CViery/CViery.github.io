const users = [
    {
        name:"Cristian",
        password:"viery2312"
    },
    {
        name:"Admin",
        password:"admin"
    }
]
   function validar() {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    for(i of users){
        const iName = i.name
        const iPass = i.password
        if (userName == iName && password == iPass) {
            alert(`Olá! ${userName}, sejá bem vindo!`);
            window.location.href = './home.html';
        }
    }}
    

    