document.addEventListener("DOMContentLoaded", function () {
    const orderButtons = document.querySelectorAll(".order-button");

    orderButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const dishNames = ["Milanesa", "Strogonof", "Feijoada", "Lasanha", "Costela", "Salada Grega"];
            const selectedDishName = dishNames[index];
            alert(`Você escolheu ${selectedDishName}`);
            
            window.location.href = "arquivo3.html";
        });
    });
});

