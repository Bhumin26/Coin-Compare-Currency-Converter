console.log("Main.js working")

const populate = async (value, currency) => {
    let myStr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_ujLbdtv09LnUI5DDzzbYQtmtwXFrgbRuB9AYbmwF&base_currency=" + currency
    let response = await fetch(url)
    let rJson = await response.json()
    document.querySelector(".output").style.display = "block"

    for (let key of Object.keys(rJson["data"])) {
        myStr += ` <tr>
                        <td>${key}</td>
                        <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                    </tr> 
                `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

}

const button = document.querySelector('.convert-button');
button.addEventListener('click', (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value
    populate(value, currency)

});

document.querySelectorAll(href = "/contact-form.html").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

