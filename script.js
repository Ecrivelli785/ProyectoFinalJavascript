 var cotizacion = {
          producto: "folleto",
          cantidad: "cantidad",
          tintas: "tintas",
          tamaño: "tamaño",
          categoria: "categoria",
          familia: "familia",
          gramaje: "gramaje",
          empaquetado: "empaquetado",
          estado:0
    };

    var carrito = JSON.parse(localStorage.getItem('itemsArray')) || [];

    function asignarValor(lista,valorABuscar, valorAsignar) {
        lista.forEach(function (elemento) { // recorremos el array
            //asignamos el valor del elemento dependiendo del valor a buscar, validamos que el valor sea el mismo y se reemplaza con el nuevo.
            elemento[valorABuscar] = valorAsignar;
        })
    };
    function operacion() {
        item = document.forms["sumar"].elements;
        cotizacion.cantidad = Number(item["cantidad"].value);
        cotizacion.tintas = Number(item["tintas"].value);
        cotizacion.tamaño = Number(item["tamaño"].value);
        cotizacion.categoria = Number(item["categoria"].value);
        cotizacion.familia = Number(item["familia"].value);
        cotizacion.gramaje = Number(item["gramaje"].value);
        cotizacion.empaquetado = Number(item["empaquetado"].value);
        console.log(cotizacion);
        var total = (cotizacion.cantidad * cotizacion.tamaño * cotizacion.categoria * cotizacion.familia * cotizacion.gramaje) + cotizacion.tintas + cotizacion.empaquetado;
        console.log(cotizacion.cantidad);
        //var total = (cantidad1 * (tamaño1 * (categoria1 * familia1 * gramaje1))) + tintas1 + empaquetado1;
        var totalImpuestos = total * 1.21;
        console.log(totalImpuestos);
        document.getElementById('total').value = total;
        document.getElementById('totalImpuestos').value = totalImpuestos;
        // Obtengo el string previamente salvado y luego
        localStorage.getItem('datos');
    };


function AgregarCarrito(){
        cotizacion.estado=1;

        carrito.push(cotizacion);

        localStorage.setItem('presupuesto', JSON.stringify(carrito));

        alert("Se agregó un nuevo producto al carrito");
        location.reload(true);
        console.log(carrito);

        ItemsArray = localStorage.getItem('presupuesto');
        console.log("objetoobtenido: ", JSON.parse(ItemsArray))

    };

function VerCarrito(){


}


  function ShowLocalStorage() {
  var x = localStorage.getItem("presupuesto");
  document.getElementById("demo").innerHTML = x;
}
