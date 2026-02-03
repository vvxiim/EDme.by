document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const GAS_URL = "https://script.google.com/macros/s/AKfycbz5WNGjLIU5a2UpubvQBgSw47MDJIpYKBXS7cnaI3apvnJRGjFDFqTGMJDIZhFJYEQ/exec";
    
    // Получаем значения
    const fio = document.getElementById("fio").value.trim();
    const username = document.getElementById("username").value.trim();
    const subject = document.getElementById("subject").value;
    
    // Проверяем, что все поля заполнены
    if (!fio || !username || !subject) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }
    
    // Создаем URL с параметрами
    const url = GAS_URL + 
                "?fio=" + encodeURIComponent(fio) + 
                "&username=" + encodeURIComponent(username) + 
                "&subject=" + encodeURIComponent(subject) + 
                "&t=" + Date.now();
    
    console.log("Отправка запроса:", url);
    
    // Создаем скрытый iframe
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.style.position = 'absolute';
    iframe.style.left = '-9999px';
    iframe.src = url;
    
    // Добавляем iframe на страницу
    document.body.appendChild(iframe);
    
    // Сразу делаем редирект - не ждем загрузки iframe
    console.log("Редирект на Битрикс...");
    setTimeout(() => {
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    }, 100);
});


























