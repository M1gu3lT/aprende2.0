document.addEventListener('DOMContentLoaded',() => {

    const emailE = {
        email: '',
        mensaje: ''
    }

    const inputEmail = document.querySelector('#email');
    const inputMensaje = document.querySelector('#mensaje');
    // const btnSend = document.querySelector('#formulario button[type="submit"]');

    //validacion email con expreciones regulares
    const validarEmail = (email) => {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

        const result = regex.test(email);
        return result;
        
    };

    //avilitar boton enviar
    // const comprobarEmail = () =>{
    //     if(Object.values(emailE).includes('')){

    //     }else{
    //         btnSend.disabled = false;
    //     }
        
    // };
    
        //funcion de alertas
    const alerta = (mensaje) => {
        alert(mensaje);
    }
    //Alerta si esta vacio el input y email
    const validar = (e) => {
        if(e.target.value.trim() === ""){
            alerta(`El campo de ${e.target.id} se encuentra vacio`);
            
        }else{
            console.log('hay algo');
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            alerta(`El email ingresado no es valido, favor de ingresarlo correctamente`);
        }

        emailE[e.target.name] = e.target.value.trim().toLowerCase();
        
        // comprobarEmail();
        
    
    }
    inputEmail.addEventListener('blur',validar);
    inputMensaje.addEventListener('blur',validar);
    

})