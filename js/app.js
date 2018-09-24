var contenido=document.getElementById('display');
console.log('funcionando');
fetch('pkmnlist.php')
//Transformar respuesta a json
.then(res => res.json())
.then(data =>{
    console.log(data);
    contenido.innerHTML = `
<div id="pokemon">
    <img src="${data[0].imagen}">
    </div>
    <div id="panel">
    <div id="datos">
        <span id="name">Nombre: ${data[0].nombre}</span>
        <span>Tipo: ${data[0].tipo}</span>
        <span>Habilidad: <select name="hability" id="hability">
                            <option value="${data[0].habilidad}">${data[0].habilidad}</option>
                        </select></span>
        <span>Descripcion: ${data[0].descripcion}</span>
    </div>
    <div id="characteristics">
        <span id="number">Numero: ${data[0].id}</span>
        <span id="hp">HP: ${data[0].hp}</span>
        <span id="at">Ataque: ${data[0].at}</span>
        <span id="def">Defensa: ${data[0].def}</span>
        <span id="ats">Ataque Esp: ${data[0].ats}</span>
        <span id="defs">Defensa Esp: ${data[0].defs}</span>
        <span id="vel">Velocidad: ${data[0].vel}</span>
    </div>
</div>`
})    