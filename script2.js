document.addEventListener("DOMContentLoaded", function () {
    const productInputs = document.querySelectorAll(".product input[type='number']");
    const totalElement = document.querySelector("#total .price");

    const productPrices = [40, 45, 30, 45, 58, 16 ];

    function updateTotal() {
        let total = 0;

        productInputs.forEach((input, index) => {
            const quantity = parseInt(input.value);
            total += quantity * productPrices[index];
        });

        totalElement.textContent = `R$ ${total.toFixed(2)}`;
    }

    productInputs.forEach((input) => {
        input.addEventListener("input", updateTotal);
    });
});




