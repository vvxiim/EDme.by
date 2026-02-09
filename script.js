document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const GAS_URL = "https://script.google.com/macros/s/AKfycbylaftEQcaJRstywEzP4oEXr3oIy-NJ9ooObL1YV9-thNE9izGzNMawT249-YdjetY/exec";

    const fio = document.getElementById("fio").value.trim();
    const username = document.getElementById("username").value.trim();
    const study = document.getElementById("study").value.trim();
    const subject = document.getElementById("subject").value;

    if (!fio || !username || !study || !subject) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    const url =
        GAS_URL +
        "?fio=" + encodeURIComponent(fio) +
        "&username=" + encodeURIComponent(username) +
        "&study=" + encodeURIComponent(study) +
        "&subject=" + encodeURIComponent(subject) +
        "&t=" + Date.now();

    console.log("Отправка:", url);

    // *надежнейший способ* — загрузка через src картинки
    const img = new Image();
    img.src = url;

    // Через 250 мс можно переходить — запрос уже ушёл
    setTimeout(() => {
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    }, 250);
});
