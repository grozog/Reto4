// ------- FUNCIONES DE DISFRACES -------

function formularioDisfraz() {
    $.ajax({
        action: $('#divRegMensajes').hide(),
        action: $('#divRegClientes').hide(),
        action: $('#divTablaDisfraz').show(),
    }
    );
}

function consultarDisfraces() {
    $.ajax({
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume",
        type: "GET",
        dataType: "json",
        success: function (json) {
            $("#idDivConsultaDisfraz").empty();
            $("#idDivConsultaDisfraz").append("<table>");
            $("#idDivConsultaDisfraz").append("<tr><th>ID</th><th>MARCA</th><th>MODELO</th><th>CATEGORIA</th><th>NOMBRE</th><th>DETALLE</th></tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#idDivConsultaDisfraz").append("<tr>");
                $("#idDivConsultaDisfraz").append("<td>"+json.items[i].id+"</td>");
                $("#idDivConsultaDisfraz").append("<td>"+json.items[i].brand+"</td>");
                $("#idDivConsultaDisfraz").append("<td>"+json.items[i].model+"</td>");
                $("#idDivConsultaDisfraz").append("<td>"+json.items[i].category_id+"</td>");
                $("#idDivConsultaDisfraz").append("<td>"+json.items[i].name+"</td>");
                $("#idDivConsultaDisfraz").append('<td><button onclick="cargarDisfraz(' + json.items[i].id + ')">Cargar</button></td>');
                $("#idDivConsultaDisfraz").append("</tr>");
            }
            $("#idDivConsultaDisfraz").append("</table>");
        },
        error: function (xhr, status) {
            console.log(xhr);
        }
    });
}

function limpiarCeldasD(){
    var costume;
    costume = {
        id: $("#idDisfraz").val(""),
        brand:  $("#Brand").val(""),
        model: $("#Model").val(""),
        category_id: $("#Category").val(""),
        name: $("#NameDisfraz").val(""),
    }
    datosEnvio = JSON.stringify(costume);
}

function cargarDisfraz(idItem) {
    $.ajax({
        dataType: 'json',
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume/" + idItem,
        type: 'GET',
        success: function (response) {
            var item = response.items[0];
            $("#idDisfraz").val(item.id);
            $("#Brand").val(item.brand);
            $("#Model").val(item.model);
            $("#Category").val(item.category_id);
            $("#NameDisfraz").val(item.name);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    }
    );
    consultarDisfraces()
}

function ingresarDisfraz() {
    var costume;
    costume = { id: $("#idDisfraz").val(), brand: $("#Brand").val(), model: $("#Model").val(), category_id: $("#Category").val(), name: $("#NameDisfraz").val() };
    $.ajax({
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume",
        type: "POST",
        data: costume,
        success: function (response) {
            console.log(response);
            alert("Disfraz guardado exitosamente");
        },
        error: function (xhr, status) {
            console.log(xhr);
            alert("Disfraz no pudo ser guardado");
        }
    });
    limpiarCeldasD();
}

function actualizarDisfraz() {
    var costume;
    costume = {
        id: $("#idDisfraz").val(),
        brand:  $("#Brand").val(),
        model: $("#Model").val(),
        category_id: $("#Category").val(),
        name: $("#NameDisfraz").val(),
    }
    datosEnvio = JSON.stringify(costume);
    $.ajax({
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume",
        type: "PUT",
        data: datosEnvio,
        contentType: "application/json",
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            console.log(xhr);
            alert("Disfraz no pudo ser actualizado");
        }
    });
    consultarDisfraces();
    limpiarCeldasD();
}

function eliminarDisfraz() {
    var costume, datosEnvio;
    costume = { id:$("#idDisfraz").val()};
    datosEnvio = JSON.stringify(costume);
    $.ajax({
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume",
        type: "DELETE",
        data: datosEnvio,
        contentType: "application/json",
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            console.log(xhr);
            alert("Disfraz no pudo ser eliminado");
        }
    });
    consultarDisfraces();
    limpiarCeldasD();
}

// ------- FUNCIONES DE CLIENTES -------

function formularioClientes() {
    $.ajax({
        action: $('#divTablaDisfraz').hide(),
        action: $('#divRegMensajes').hide(),
        action: $('#divRegClientes').show(),
    }
    );
}

function consultarClientes() {
    $.ajax({
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        dataType: "json",
        success: function (json) {
            $("#idDivConsultaClientes").empty();
            $("#idDivConsultaClientes").append("<table>");
            $("#idDivConsultaClientes").append("<tr><th>ID</th><th>NOMBRE</th><th>EMAIL</th><th>EDAD</th><th>DETALLE</th></tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#idDivConsultaClientes").append("<tr>");
                $("#idDivConsultaClientes").append("<td>"+json.items[i].id+"</td>");
                $("#idDivConsultaClientes").append("<td>"+json.items[i].name+"</td>");
                $("#idDivConsultaClientes").append("<td>"+json.items[i].email+"</td>");
                $("#idDivConsultaClientes").append("<td>"+json.items[i].age+"</td>");
                $("#idDivConsultaClientes").append('<td><button onclick="cargarCliente(' + json.items[i].id + ')">Cargar</button></td>');
                $("#idDivConsultaClientes").append("</tr>");
            }
            $("#idDivConsultaClientes").append("</table>");
        },
        error: function (xhr, status) {
            console.log(xhr);
        }
    });
}

function limpiarCeldasC(){
    var client;
    client = {
        id: $("#idCliente").val(""),
        name:  $("#NameCliente").val(""),
        email: $("#Email").val(""),
        age: $("#Edad").val(""),
    }
    datosEnvio = JSON.stringify(client);
}

function cargarCliente(idItem) {
    $.ajax({
        dataType: 'json',
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/" + idItem,
        type: 'GET',
        success: function (response) {
            var item = response.items[0];
            $("#idCliente").val(item.id);
            $("#NameCliente").val(item.name);
            $("#Email").val(item.email);
            $("#Edad").val(item.age);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    }
    );
}

function crearCliente() {
    var client;
    client = { id: $("#idCliente").val(), name: $("#NameCliente").val(), email: $("#Email").val(), age: $("#Edad").val() };
    $.ajax({
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: client,
        success: function (response) {
            console.log(response);
            alert("Cliente creado exitosamente");
        },
        error: function (xhr, status) {
            console.log(xhr);
            alert("Cliente no pudo ser creado");
        }
    });
    consultarClientes();
    limpiarCeldasC();
}

function actualizarCliente() {
    var client;
    client = {
        id: $("#idCliente").val(),
        name:  $("#NameCliente").val(),
        email: $("#Email").val(),
        age: $("#Edad").val(),
    }
    datosEnvio = JSON.stringify(client);
    $.ajax({
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: datosEnvio,
        contentType: "application/json",
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            console.log(xhr);
            alert("Cliente no pudo ser actualizado");
        }
    });
    consultarClientes();
    limpiarCeldasC();
}

function eliminarCliente() {
    var client, datosEnvio;
    client = { id:$("#idCliente").val()};
    datosEnvio = JSON.stringify(client);
    $.ajax({
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: datosEnvio,
        contentType: "application/json",
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            console.log(xhr);
            alert("Cliente no pudo ser eliminado");
        }
    });
    consultarClientes();
    limpiarCeldasC();
}

// ------- FUNCIONES DE MENSAJES -------

function formularioMensajes() {
    $.ajax({
        action: $('#divRegClientes').hide(),
        action: $('#divTablaDisfraz').hide(),
        action: $('#divRegMensajes').show(),
    }
    );
}

function consultarMensajes() {
    $.ajax({
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        dataType: "json",
        success: function (json) {
            $("#idDivConsultaMensajes").empty();
            $("#idDivConsultaMensajes").append("<table>");
            $("#idDivConsultaMensajes").append("<tr><th>ID</th><th>MENSAJE</th><th>DETALLE</th></tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#idDivConsultaMensajes").append("<tr>");
                $("#idDivConsultaMensajes").append("<td>"+json.items[i].id+"</td>");
                $("#idDivConsultaMensajes").append("<td>"+json.items[i].messagetext+"</td>");
                $("#idDivConsultaMensajes").append('<td><button onclick="cargarMensaje(' + json.items[i].id + ')">Cargar</button></td>');
                $("#idDivConsultaMensajes").append("</tr>");
            }
            $("#idDivConsultaMensajes").append("</table>");
        },
        error: function (xhr, status) {
            console.log(xhr);
        }
    });
}

function limpiarCeldasM(){
    var message;
    message = {
        id: $("#idMessage").val(""),
        messagetext:  $("#MessageText").val(""),
    }
    datosEnvio = JSON.stringify(message);
}

function cargarMensaje(idItem) {
    $.ajax({
        dataType: 'json',
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/" + idItem,
        type: 'GET',
        success: function (response) {
            var item = response.items[0];
            $("#idMessage").val(item.id);
            $("#MessageText").val(item.messagetext);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    }
    );
}

function crearMensaje() {
    var message;
    message = {
        id: $("#idMessage").val(),
        messagetext: $("#MessageText").val() };
    $.ajax({
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data: message,
        success: function (response) {
            console.log(response);
            alert("Mensaje creado exitosamente");
        },
        error: function (xhr, status) {
            console.log(xhr);
            alert("Mensaje no pudo ser creado");
        }
    });
    consultarMensajes();
    limpiarCeldasM();
}

function actualizarMensaje() {
    var message;
    message = {
        id: $("#idMessage").val(),
        messagetext:  $("#MessageText").val(),
    }
    datosEnvio = JSON.stringify(message);
    $.ajax({
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data: datosEnvio,
        contentType: "application/json",
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            console.log(xhr);
            alert("Mensaje no pudo ser actualizado");
        }
    });
    consultarMensajes();
    limpiarCeldasM();
}

function eliminarMensaje() {
    var message, datosEnvio;
    message = { id:$("#idMessage").val()};
    datosEnvio = JSON.stringify(message);
    $.ajax({
        url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: datosEnvio,
        contentType: "application/json",
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            console.log(xhr);
            alert("Mensaje no pudo ser eliminado");
        }
    });
    limpiarCeldasM();
    consultarMensajes();
}

//-------FIN-----

function consultarId() {
    var codigo = $("#idDisfraz").val();
    $.ajax(
        { //al link le agregamos / y + el codigo
            url: "https://g7893aa318851bb-basedatos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume/" + codigo,
            type: "GET",
            dataType: "json",
            success: function (json) {
                $("#idDivConsulta").empty();
                for (i = 0; i < json.items.length; i++) {
                    $("#idDivConsulta").append(json.items[i].id + json.items[i].brand + " ");
                }
                console.log(json); //asi imprimimos en consola
            },
            error: function (xhr, status) {
                console.log(xhr);
            }
        });
}