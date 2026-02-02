document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // ВСТАВЬТЕ СЮДА НОВЫЙ URL ИЗ ШАГА 1
    const GAS_URL = "https://script.google.com/macros/s/AKfycbw48PAqURtO4VUL5SXt6g5dSBTpd0WAMAdybsLLlhkvzVn58CxAijDtykO2BgA2yg/exec";
    
    // 1. Собираем данные
    const fio = encodeURIComponent(document.getElementById("fio").value);
    const username = encodeURIComponent(document.getElementById("username").value);
    
    // 2. ОТПРАВЛЯЕМ ДАННЫЕ через GET-запрос в URL (самый простой способ)
    const trackingImg = new Image(); // Создаем "невидимую" картинку
    trackingImg.src = GAS_URL + "?fio=" + fio + "&username=" + username + "&t=" + Date.now();
    
    // 3. СРАЗУ делаем редирект пользователя (не ждем ответа от GAS)
    console.log("Запрос отправлен. Редирект на Битрикс...");
    window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
});



















