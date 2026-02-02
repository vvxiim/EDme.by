document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const GAS_URL = "https://script.google.com/macros/s/AKfycbw48PAqURtO4VUL5SXt6g5dSBTpd0WAMAdybsLLlhkvzVn58CxAijDtykO2BgA2yg/exec";
    
    // Кодируем данные
    const fio = encodeURIComponent(document.getElementById("fio").value);
    const username = encodeURIComponent(document.getElementById("username").value);
    const subject = encodeURIComponent(document.getElementById("subject").value);
    
    // Создаем URL с параметрами
    const trackingImg = new Image();
    trackingImg.src = GAS_URL + "?fio=" + fio + "&username=" + username + "&subject=" + subject + "&t=" + Date.now();
    
    // Сразу делаем редирект
    console.log("Запрос отправлен. Редирект на Битрикс...");
    setTimeout(() => {
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    }, 100);
});























