document.querySelector('#boton').addEventListener('click', traerDatos());

function Autenticar() {

	let usuario=document.getElementById("UsuarioLogin").value;
	let clave=document.getElementById("ClaveLogin").value;
	let UsuarioR="root";
	let ClaveR="root";
	if(usuario==UsuarioR && clave==ClaveR){
		alert("Bienvenido")
		window.location.href = "Principal.php";
		exit();

	}else{
		alert("Datos Incorrectos");
	}

}

function MostrarEstudiantes(){
		window.location.href = "ListaEstudiantes.php";
		exit();
	
}

function MostrarCurriculum(){
		window.location.href = "PaginaCurriculum.php";
		exit();
	
}

function MostrarCalculadora(){
		window.location.href = "Calculadora.php";
		exit();
	
}

function MostrarVideo(){
		window.location.href = "Principal.php";
		exit();
	
}

function RegresarPrincipal(){
		window.location.href = "Principal.php";
		exit();
	
}

function traerDatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'HorarioAcademico.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                //console.log(item.tercera_hora);
                res.innerHTML += `
                    <tr>
                        <td>${item.primer_dia}</td>
                        <td>${item.segundo_dia}</td>
                        <td>${item.tercer_dia}</td>
                        <td>${item.cuarto_dia}</td>
                        <td>${item.quinto_dia}</td>
                        <td>${item.sexto_dia}</td>
                    </tr>
                `
            }

        }
    }
}

function traerDatosJson(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'HorarioAcademico.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                //console.log(item.tercera_hora);
                res.innerHTML += `
                    <tr>
                        <td>${item.primer_dia}</td>
                        <td>${item.segundo_dia}</td>
                        <td>${item.tercer_dia}</td>
                        <td>${item.cuarto_dia}</td>
                        <td>${item.quinto_dia}</td>
                        <td>${item.sexto_dia}</td>
                    </tr>
                `
            }

        }
    }
}


function ContarEtiqueta(Etiqueta){
    var Contador;
    Contador = document.getElementsByTagName(Etiqueta);
    alert("Cantidad de "+Etiqueta+": "+Contador.length);
}

/*function Contador_Etiquetas(etiqueta){
	if(etiqueta=='h2'){
        document.getElementsById('contador_${etiqueta}_valor').textContent = ".....";
        document.getElementsById('botoncalcular${etiqueta}').textContent = "Calcular";
        document.getElementsById('botoncalcular${etiqueta}').style.background = '';
        document.getElementsById('botoncalcular${etiqueta}').style.color = black;
    } else {
        var contador;
        switch (etiqueta){
            case 'h1':
                contador = document.getElementsByTagName(etiqueta);
            break;
            case 'div':
                contador = document.getElementsByTagName(etiqueta);
            break;
            case 'a':
                contador = document.getElementsByTagName(etiqueta);
            break;
            case 'input':
                contador = document.getElementsByTagName(etiqueta);
            break;
            case 'br':
                contador = document.getElementsByTagName(etiqueta);
            break;
            default:
                alert('No se pudo encontrar la etiqueta '+etiqueta);
            break;
        }
        alert("Valor de h1 "+contador.length);
        document.getElementsById('botoncalcular${etiqueta}').textContent = "Ocultar";
        document.getElementsById('botoncalcular${etiqueta}').style.background = white;
        document.getElementsById('botoncalcular${etiqueta}').style.color = black;
        document.getElementsById('contador_${etiqueta}_valor').textContent = Contador_Etiquetas.length;
    }
    
}*/