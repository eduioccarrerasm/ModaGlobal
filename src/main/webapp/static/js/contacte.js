
window.addEventListener(
    'load',
    function () {
        let envia = document.getElementById('envia');
        envia.addEventListener(
            'click',
            function () {
                let nom = document.getElementById('nom');
                let email = document.getElementById('email');
                let missatge = document.getElementById('missatge');
                if (
                    nom.value.trim() === ''
                    || email.value.trim() === ''
                    || missatge.value.trim() === ''
                ) {
                    alert('Nom, Email i Missatge són camps obligatoris.');
                } else {
                    nom.value = '';
                    email.value = '';
                    missatge.value = '';
                    setTimeout(
                        function () {
                            alert('Missatge enviat.');
                        },
                        1000
                    );
                }
            }
        );
    }
);
