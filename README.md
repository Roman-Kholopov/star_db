1. Создание нового пустого React приложения.
2. На ветке **basic-project-structure** написана базовая структура приложения, так же создан отдельный swapi-service.js, в котором даные получаются с сервера.
3. На ветке **api-for-comp-random-planet** данные берутся из swapi-service и передаются в компонент random-planet.
4. На ветке **create-spinner-component** создан спиннер загрузки.
5. На ветке **create_logic_for_spinner** написана логика для копонента `<Spinner/>`, произведён рефакторинг `<RandomPlanet/>`.
6. На ветке **create_error-indicator_component** создан новый компонент `<ErrorIndicator/>`. В `<RandomPlanet/>` написана логика для отлавливания ошибки и отображения компонента с ошибкой.
7. На ветке **lifecycle-component** просто изучал жизненный цикл компонента + подключил **axios** для практики.
8. На ветке **use_component_did_mount** подключил метод жизненного цикла, записал в него сетевой запрос, создал в нём `setInterval(() => (), sec)`.
9. На ветке **create_logic_for_item-list** написана логика для получения данных с сервера и отрисовки их на странице.
10. На ветке **logic_for_person-details** написана логика для получения данных с сервера и отрисовки их на странице для компонента `<PersonDetails />`. ***ВАЖНО!!!*** Дописать логику для ***спиннера*** и для ***обработки ошибок***!
11. На ветке **people-page_component** создан компонент `<PeoplePage/>`, в него перенесенны компоненты ***item-list*** и ***person-details***. Так же в нём написан улавливатель ошибок ***componentDidCatch()***. Теперь приложение крашэтся не полностью и локально.
12. На ветке **refactor_people_and_item_comp** добавлен пропс `getData` в компонт `<ItemList/>`, теперь он не зависот от полученных данных, а просто рендерит их. Это даёт возможность переиспользовать компонент не копирую его.
13. На ветке **element_properties** в качестве пропсов для компонентов `<Row/>` и `<ItemList/>` исппользованны элементы и функции.
14. На ветке **children** используется `this.props.children` в новом компоненте `<ErrorBoundry/>`, который теперь служит обёрткой для `<PersonDetails/>`.
15. На ветке **cloning_elements** сделаны карточки с разными сущностями.
16. На ветке **cloning_element_1** ...
17. **higher_order_components** использован компонент высшего порядка (папка hoc-helpers).
18. **hoc-composition** sw-components.
19. **use_context** swapi-service-context.
20. **hoc_context** StarshipDetails, PlanetDetails, StarshipDetails.
21. На ветке **dynamic_context_switch** реализована кнопка переключения сервисов, из которых приходят данные.
22. На ветке **refactor_app** произведён рефакторинг компонентов, которые отображаются на странице. Тепереь это всё отделные страницы (/pages).
23. **refactor_item-lists** ...
24. На ветке **use_default_and_types_props** подключил библиотеку prop-types. Написал дефолтные значения и сделал типизацию props для компонентов: `<RandomPlanet/>`, `<ItemList/>`, `<Row/>`.