document.getElementById("refForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    
    const GAS_URL = "https://script.google.com/macros/s/AKfycbyPQgTNjbJKUcqjTq-FpEL1YfYgrIzxSKzELaXEl6WIuedFk4hEcBGZcfBR7qGYTCc/exec";
    
    // Собираем данные
    const fio = document.getElementById("fio").value;
    const username = document.getElementById("username").value;
    const subject = document.getElementById("subject").value;
    try {
        // Отправляем данные через FormData (лучше работает с GAS)
        const formData = new FormData();
        formData.append('fio', fio);
        formData.append('username', username);
        formData.append('subject', subject);
        // Отправляем запрос с обработкой CORS
        const response = await fetch(GAS_URL, {
            method: 'POST',
            mode: 'no-cors', // Важно для GAS в режиме Web App
            body: formData
        });
        
        // Редирект происходит независимо от результата запроса
        console.log("Данные отправлены. Редирект на Битрикс...");
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
        
    } catch (error) {
        // Даже если ошибка - все равно делаем редирект
        console.error("Ошибка при отправке данных:", error);
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    }
});






















