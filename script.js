function pourCoffee() {
    const coffee = document.getElementById("coffee");
    let currentHeight = parseFloat(window.getComputedStyle(coffee).height);
    let mugHeight = parseFloat(
        window.getComputedStyle(coffee.parentElement).height
    );

    let newHeight = currentHeight + mugHeight * 0.1;
    coffee.style.height = `${newHeight}px`;
}
