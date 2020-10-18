window.onload = async function () {
    let params = (new URL(document.location)).searchParams;
    if (params.has('pack')) {
        var pack = params.get('pack');
        var elem = document.getElementById("planSelect");
        var priceElem = document.getElementById("priceVPS");
        var totalElem = document.getElementById("priceTotal");
        elem.value = pack;
        var price = elem.value === "basic" ? '10' : elem.value === "advanced" ? '20' : '50';
        priceElem.innerHTML = `$${price}<small>USD</small>`;
        totalElem.innerHTML = `$${+price + 6}<small>USD</small>`;
        }
}