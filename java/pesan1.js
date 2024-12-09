const scriptURL = 'https://script.google.com/macros/s/AKfycbwj33M4OnKglC94uGn3LOMm1bELXSduMZ7ET3k2XeIXIxjq6hnOa2hnaP_lKdap2eqdMg/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Terima Kasih! Data Telah Terinput"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})