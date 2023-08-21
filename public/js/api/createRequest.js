/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = () => {
    const xhr = new XMLHttpRequest;
    xhr.open( 'GET', 'https://example.com?mail=ivan@poselok.ru&password=odinodin' ); // открываем новое соединение и отправляем данные пользователя для авторизации на сервере
    xhr.send();                                                                      // отправляем запрос на сервер
    xhr.responseType = 'json';                                                       // устанавливаем что ответ сервера будет в формате json
  
    callback = (err, response) => {
      if(!xhr.response.err) {                                                        // если нет ошибки, то выводим в консоль данные с сервера
        response = console.log(xhr.response.data);
      } else {
        err = console.log(xhr.response.err);                                         // если есть ошибка, то выводим в консоль ошибку
      }
    }
  };
