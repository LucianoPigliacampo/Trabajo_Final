// Movimiento de los formularios
{
    const containerLoginRegister = document.querySelector(".container_login_register")
    const formLogin = document.querySelector(".form_login")
    const formRegister = document.querySelector(".form_register")
    const boxTraseraLogin = document.querySelector(".box_trasera_login")
    const boxTraseraRegister = document.querySelector(".box_trasera_register")
    const btnLogin = document.getElementById("btn-login")
    const btnRegister = document.getElementById("btn-register")

    function widthPage() {
        if(window.innerWidth > 850) {
            boxTraseraLogin.style.display = "block";
            boxTraseraRegister.style.display = "block";
        } else {
            boxTraseraRegister.style.display = "block";
            boxTraseraRegister.style.opacity = "1";
            boxTraseraLogin.style.display = "none";
            formLogin.style.display = "block";
            formRegister.style.display = "none";
            containerLoginRegister.style.left = "0px"
        }
    }

    function login () {
        if(window.innerWidth > 850){
            formRegister.style.display = "none";
            containerLoginRegister.style.left = "10px";
            formLogin.style.display = "block";
            boxTraseraRegister.style.opacity = "1";
            boxTraseraLogin.style.opacity = "0";
        } else {
            formRegister.style.display = "none";
            containerLoginRegister.style.left = "0px";
            formLogin.style.display = "block";
            boxTraseraRegister.style.display = "block";
            boxTraseraLogin.style.display = "none";
        }
    }
    btnLogin.addEventListener("click", login)

    function register () {
        if(window.innerWidth > 850){
            formRegister.style.display = "block";
            containerLoginRegister.style.left = "410px";
            formLogin.style.display = "none";
            boxTraseraRegister.style.opacity = "0";
            boxTraseraLogin.style.opacity = "1";
        } else {
            formRegister.style.display = "block";
            containerLoginRegister.style.left = "0px";
            formLogin.style.display = "none";
            boxTraseraRegister.style.display = "none";
            boxTraseraLogin.style.display = "block";
            boxTraseraLogin.style.opacity = "1";
        }
        
    }
    btnRegister.addEventListener("click", register)
    window.addEventListener("resize", widthPage)
    widthPage()
}
// Funcionalidad de los formularios
{
    const emailAddressLogin = document.getElementById("email-address-login")
    const passwordLogin = document.getElementById("password-login")
    const btnEntrarForm = document.getElementById("btn-entrar-form")
    const completName = document.getElementById("completName")
    const emailAddressRegister = document.getElementById("email-address-register")
    const username = document.getElementById("username")
    const passwordRegister = document.getElementById("password-register")
    const btnRegisterForm = document.getElementById("btn-register-form")
    const alertsLogin = document.getElementById('alerts_1')
    const alertsRegister = document.getElementById('alerts_2')

    let usuariosRegistrados = [];

    // Obtener los datos del Registro de Sesion
    btnRegisterForm.addEventListener("click", (e) => {
        e.preventDefault();
        const data = {
            completName: completName.value,
            emailAddressRegister: emailAddressRegister.value,
            username: username.value,
            passwordRegister: passwordRegister.value
        }
        if(completName.value == '' || emailAddressRegister.value == '' || username.value == '' || passwordRegister.value == '') {
            const agregarDatos = document.createElement('div')
            agregarDatos.className = 'agregarDatosRegister'
            const pAgregarDatos = document.createTextNode('Por favor, completar todos los datos')
            alertsRegister.appendChild(agregarDatos)
            agregarDatos.appendChild(pAgregarDatos)
            setTimeout(() => {
                alertsRegister.removeChild(agregarDatos)
            }, 3000);
        } else {
            const usuarioExistente = usuariosRegistrados.some((usuario) => usuario.emailAddressRegister === data.emailAddressRegister && usuario.username === data.username);
            if (usuarioExistente) {
                const elUsuarioExiste = document.createElement('div')
            elUsuarioExiste.className = 'elUsuarioExiste'
            const pElUsuarioExiste = document.createTextNode('El Usuario o Correo Electrónico ingresado ya existe')
            alertsRegister.appendChild(elUsuarioExiste)
            elUsuarioExiste.appendChild(pElUsuarioExiste)
            setTimeout(() => {
                alertsRegister.removeChild(elUsuarioExiste)
            }, 3000);
            } else {
                usuariosRegistrados.push(data)
                localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));
                const usuarioAgregado = document.createElement('div')
                usuarioAgregado.className = 'usuarioAgregado'
                const pUsuarioAgregado = document.createTextNode('Usuario registrado exitosamente')
                alertsRegister.appendChild(usuarioAgregado)
                usuarioAgregado.appendChild(pUsuarioAgregado)
                setTimeout(() => {
                    alertsRegister.removeChild(usuarioAgregado)
                }, 3000);
            } 
        }

        completName.value = "";
        emailAddressRegister.value = "";
        username.value = "";
        passwordRegister.value = "";
    });

    // OBtener datos del Login y guardarlos en el LocalStorage
    btnEntrarForm.addEventListener("click", (e) => {
        e.preventDefault();

        const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados"));
        if (usuariosRegistrados) {
            const emailAddress = emailAddressLogin.value;
            const password = passwordLogin.value;
            // Busca y Comparar los datos del Login con los datos guardados
            if (emailAddress && password) {
                const usuarioEncontrado = usuariosRegistrados.find((usuario) => usuario.emailAddressRegister === emailAddress && usuario.passwordRegister === password);
                if (usuarioEncontrado) {
                window.location.href = "../Pagina_principal/Pagina_principal.html";
                } else {
                    const datsoIncorrectos = document.createElement('div')
                datsoIncorrectos.className = 'datsoIncorrectos'
                const pDatsoIncorrectos = document.createTextNode('La contraseña o el Correo Electrónico son incorrectos')
                alertsLogin.appendChild(datsoIncorrectos)
                datsoIncorrectos.appendChild(pDatsoIncorrectos)
                setTimeout(() => {
                    alertsLogin.removeChild(datsoIncorrectos)
                }, 3000);
                }
            } else {
            const agregarDatos = document.createElement('div')
            agregarDatos.className = 'agregarDatos'
            const pAgregarDatos = document.createTextNode('Por favor, completar todos los datos')
            alertsLogin.appendChild(agregarDatos)
            agregarDatos.appendChild(pAgregarDatos)
            setTimeout(() => {
                alertsLogin.removeChild(agregarDatos)
            }, 3000);
            }
        } else {
            const sinUsuariosRegistrados = document.createElement('div')
            sinUsuariosRegistrados.className = 'sinUsuariosRegistrados'
            const pSinUsuariosRegistrados = document.createTextNode('No hay Usuarios Registrados en el sistema')
            alertsLogin.appendChild(sinUsuariosRegistrados)
            sinUsuariosRegistrados.appendChild(pSinUsuariosRegistrados)
            setTimeout(() => {
                alertsLogin.removeChild(sinUsuariosRegistrados)
            }, 3000);
        }
        emailAddressLogin.value = "";
        passwordLogin.value = "";
    });
}