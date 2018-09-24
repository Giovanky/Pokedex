var contenido=document.getElementById('display');
console.log('funcionando');
fetch('pkmnlist.php')
//Transformar respuesta a json
.then(res => res.json())
.then(data =>{
    let num = 0;
    console.log(data);
    contenido.innerHTML = `
    <div id="pokemon">
    <img src='data:image/png;base64,base64_encode(${data[num].imagen}')>
    </div>
    <div id="panel">
    <div id="datos">
        <span id="name">Nombre: ${data[num].nombre}</span>
        <span>Tipo: ${data[num].tipo}</span>
        <span>Habilidad: <select name="hability" id="hability">
                            <option value="${data[num].habilidad}">${data[num].habilidad}</option>
                        </select></span>
    </div>
    <div id="characteristics">
        <span id="number">Numero: ${data[num].id}</span>
        <span id="hp">HP: ${data[num].hp}</span>
        <span id="at">Ataque: ${data[num].at}</span>
        <span id="def">Defensa: ${data[num].def}</span>
        <span id="ats">Ataque Esp: ${data[num].ats}</span>
        <span id="defs">Defensa Esp: ${data[num].defs}</span>
        <span id="vel">Velocidad: ${data[num].vel}</span>
    </div>
    </div>`
})    