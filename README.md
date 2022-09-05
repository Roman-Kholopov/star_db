1. Создание нового пустого React приложения.
2. На ветке **basic-project-structure** написана базовая структура приложения, так же создан отдельный swapi-service.js, в котором даные получаются с сервера.
3. На ветке **api-for-comp-random-planet** данные берутся из swapi-service и передаются в компонент random-planet.
4. На ветке **create-spinner-component** создан спиннер загрузки.
5. На ветке **create_logic_for_spinner** написана логика для копонента `<Spinner/>`, произведён рефакторинг `<RandomPlanet/>`.
6. На ветке **create_error-indicator_component** создан новый компонент `<ErrorIndicator/>`. В `<RandomPlanet/>` написана логика для отлавливания ошибки и отображения компонента с ошибкой.
7. На ветке **lifecycle-component** просто изучал жизненный цикл компонента + подключил **axios** для практики.
8. На ветке **use_component_did_mount** подключил метод жизненного цикла, записал в него сетевой запрос, создал в нём `setInterval(() => (), sec)`.