document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const inputs = form.querySelectorAll("input");
            let allFilled = true;

            inputs.forEach((input) => {
                if (input.value.trim() === "") {
                    allFilled = false;
                    alert(`Por favor, completa el campo: ${input.previousElementSibling.innerText}`);
                }
            });

            if (allFilled) {
                alert("Formulario enviado exitosamente.");
                form.reset();  // Limpiar el formulario después de enviarlo
            }
        });
    });
});
