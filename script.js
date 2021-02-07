


    let detallesProducto = ["cantidad", "tamaño", "tintas", "papel", "familia", "gramaje", "empaquetado", "total"]
    let caracteristicasProducto = [];

    function operacion() {
        caja = document.forms["sumar"].elements;
        var cantidad1 = Number(caja["cantidad"].value);
        var tamaño1 = Number(caja["tamaño"].value);
        var tintas1 = Number(caja["tintas"].value);
        var papel1 = Number(caja["papel"].value);
        var familia1 = Number(caja["familia"].value);
        var gramaje1 = Number(caja["gramaje"].value);
        var empaquetado1 = Number(caja["empaquetado"].value);
        var total = (cantidad1 * (tamaño1 * (papel1 * familia1 * gramaje1))) + tintas1 + empaquetado1;
        var totalImpuestos = total * 1.21;
        document.getElementById('total').value = total;
        document.getElementById('totalImpuestos').value = totalImpuestos;

        caracteristicasProducto.push(cantidad1, tamaño1, tintas1, papel1, familia1, empaquetado1, total)

        var show = (detallesProducto[0].concat(caracteristicasProducto[0]));
    };




var AgregarCarrito = function(){
        let datosTrabajo = document.getElementsByClassName("infoPresupuesto"),
            carrito = [];
        for (var i = 0; i < datosTrabajo.length; i++) {
            carrito[i] = datosTrabajo[i].value;
            console.log (datosTrabajo[i].value);
            }
        }
