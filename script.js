document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const GAS_URL = "https://script.google.com/macros/s/AKfycbz5WNGjLIU5a2UpubvQBgSw47MDJIpYKBXS7cnaI3apvnJRGjFDFqTGMJDIZhFJYEQ/exec";
    
    // Получаем и кодируем значения
    const fio = document.getElementById("fio").value.trim();
    const username = document.getElementById("username").value.trim();
    const subject = document.getElementById("subject").value;
    
    // Проверяем, что все поля заполнены
    if (!fio || !username || !subject) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }
    
    // Кодируем для URL
    const encodedFio = encodeURIComponent(fio);
    const encodedUsername = encodeURIComponent(username);
    const encodedSubject = encodeURIComponent(subject);
    
    console.log("Отправка данных:", fio, username, subject);
    
    // Вариант 1: Используем fetch для большей надежности
    const url = `${GAS_URL}?fio=${encodedFio}&username=${encodedUsername}&subject=${encodedSubject}&time=${Date.now()}`;
    
    fetch(url, {
        method: 'GET',
        mode: 'no-cors'
    })
    .then(() => {
        console.log("Данные отправлены успешно");
    })
    .catch(err => {
        console.log("Ошибка отправки:", err);
    })
    .finally(() => {
        // Все равно делаем редирект
        console.log("Редирект на Битрикс...");
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    });
});

























