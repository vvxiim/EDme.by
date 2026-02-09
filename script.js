document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const GAS_URL = "https://script.google.com/macros/s/AKfycbylaftEQcaJRstywEzP4oEXr3oIy-NJ9ooObL1YV9-thNE9izGzNMawT249-YdjetY/exec";

    const fio = document.getElementById("fio").value.trim();
    const username = document.getElementById("username").value.trim();
    const study = document.getElementById("study").value.trim();     // ← НОВОЕ ПОЛЕ
    const subject = document.getElementById("subject").value;

    if (!fio || !username || !subject || !study) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    const url =
        GAS_URL +
        "?fio=" + encodeURIComponent(fio) +
        "&username=" + encodeURIComponent(username) +
        "&subject=" + encodeURIComponent(subject) +
        "&study=" + encodeURIComponent(study) +
        "&t=" + Date.now();

    console.log("Отправка запроса:", url);

    // Создаём iframe
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = url;

    document.body.appendChild(iframe);

    // ЖДЁМ 400 мс — iframe гарантированно успевает обратиться к Google Script
    setTimeout(() => {
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    }, 400);
});



























