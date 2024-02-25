В приложении необходимо создать кнопку, при клике на которую выполняется запрос на получение данных по ссылке https://jsonplaceholder.typicode.com/todos. Пока запрос выполняется, кнопка должна быть заблокирована, а так же отображен preloader для пользователя.

После успешного получения данных, полученный список вывести следующим образом:
·        Необходимо сгруппировать данные по полю `userId`;
·        Отобразить все `title` у пользователя списком.

На первом месте в списке должен быть UserId тот, у кого самое большое количество `completed = true`; На последнем месте, соответственно, должен стоять UserId с наименьшим количеством `completed = true `; если у двух и более пользователей оказывается одинаковое кол-во, сортируем по полю `UserId`; В углу необходимо отобразить количество у пользователя значений true/false по полю `completed`.

Постройте график – гистограмму (можно использовать стороннюю библиотеку или фреймворк по построению графиков), где ось Х - `userId`, а ось Y – общее количество успешных/неуспешных `title` по полю `completed`.

Реализация задачи на Vue - https://github.com/krlmari/vue-todos

#https://krlmari.github.io/react-todos/
