   var cotizacion = {
          id:0,
          cantidad: "cantidad",
          tintas: "tintas",
          tamaño: "tamaño",
          categoria: "categoria",
          familia: "familia",
          gramaje: "gramaje",
          empaquetado: "empaquetado",
          estado: 0
    };
    var carrito = [cotizacion];
    function asignarValor(lista,valorABuscar, valorAsignar) {
        lista.forEach(function (elemento) { // recorremos el array
            //asignamos el valor del elemento dependiendo del valor a buscar, validamos que el valor sea el mismo y se reemplaza con el nuevo.
            elemento[valorABuscar] = valorAsignar;
        })
    };
    function operacion() {
        caja = document.forms["sumar"].elements;
        cotizacion.cantidad = Number(caja["cantidad"].value);
        cotizacion.tintas = Number(caja["tintas"].value);
        cotizacion.tamaño = Number(caja["tamaño"].value);
        cotizacion.categoria = Number(caja["categoria"].value);
        cotizacion.familia = Number(caja["familia"].value);
        cotizacion.gramaje = Number(caja["gramaje"].value);
        cotizacion.empaquetado = Number(caja["empaquetado"].value);
        console.log(cotizacion);
        var total = (cotizacion.cantidad * cotizacion.tamaño * cotizacion.categoria * cotizacion.familia * cotizacion.gramaje) + cotizacion.tintas + cotizacion.empaquetado;
        //var total = (cantidad1 * (tamaño1 * (categoria1 * familia1 * gramaje1))) + tintas1 + empaquetado1;
        var totalImpuestos = total * 1.21;
        document.getElementById('total').value = total;
        document.getElementById('totalImpuestos').value = totalImpuestos;



        // Guardo el objeto como un string

        localStorage.setItem('datos', JSON.stringify(cotizacion));
        // Obtengo el string previamente salvado y luego
        var guardado = localStorage.getItem('datos');
        console.log('objetoObtenido1: ', JSON.parse(guardado));
    };


    function AgregarCarrito(){
        cotizacion.estado = "1";
    };


      function SacarCarrito(){
        cotizacion.estado = "0";
    };
//    function agregarcarrito() {
  //      if (carrito.length )
    //    cotizacion.id = carrito.length+1;
    //}
