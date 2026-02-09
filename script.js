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

    console.log("Отправка запроса:", url);

    // Отправляем запрос fetch — он НЕ блокируется браузерами
    fetch(url, { mode: "no-cors" })
        .catch(err => console.error("Ошибка отправки:", err));

    // Даем запросу 200 мс — fetch уже успевает отправить его
    setTimeout(() => {
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    }, 200);
});




























