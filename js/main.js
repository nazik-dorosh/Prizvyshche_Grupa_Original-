function buyProduct(productName) {
    alert("Дякуємо! Товар «" + productName + "» додано до кошика. Менеджер SmartPulse зв'яжеться з вами за 5 хвилин!");
    if (typeof gtag === "function") {
        gtag('event', 'purchase_click', {
            'item_name': productName
        });
    }
}