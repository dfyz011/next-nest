## Инсртрукция по запуску

```sh
# Скопирует конфиги
./copyConfigs.sh
```

```sh
# запустим бд
docker compose -f docker-compose.common.yml up -d
# если локальный порт mysql занят (3306) - конфигируруем в корневом .env + меняем в env backend
```

```sh
# запустим бэк
cd backend
# Установим пакеты
pnpm install
# запускаем дев сервер
pnpm start:dev
# запускаем миграции, чтобы заполнить бд, но можно без них
pnpm migration:run

```

```sh
# запустим фронт
cd frontend
# Установим пакеты
pnpm install
# запускаем дев сервер
pnpm dev
```

## Техническое задание full stack

- Реализовать функционал для создания и редактирования орг. структуры.
- У каждого пользователя может быть 1 руководитель.
- Используя NestJs, написать api для:
  - Создания пользователя
  - Назначение руководителя пользователю
  - Удаление пользователя
- С помощью NextJs создать страницу, на которой вывести орг структуру в виде дерева.
- На странице должна быть возможность создать нового пользователя, а так же возможность удалить и изменить руководителя через контекстное меню в орг структуре.
- Для хранения данных необходимо использовать реляционную БД (mysql, mariadb, postgres) и typeorm.
- Дизайн дерева на фронте на свое усмотрение.

<details>
  <summary>Затраченное время</summary>
| Task                                           | Time       |
|------------------------------------------------|------------|
| Инициализация бэка и бд                        | 50 минут   |
| Создание первой сущности на бэке (юзера) + CRUD| 30 минут   |
| Инициализация фронта + что-то базовое для юзера| 30 минут   |
| Конфигурация TypeORM + соединить фронт с бэком | 1 час      |
| Логика с созданием и закреплением              | 45 минут   |
| Логика с откреплением                          | 20 минут   |
| Стили                                          | 40 минут   |
| Модалка                                        | 20 минут   |
| Контекстное меню                               | 20 минут   |
| Селект с пользователями                        | 35 минут   |
| Что-то еще                                     | 40 минут   |
| Улучшения UX                                   | 50 минут   |
| **Итого**                                      | **460 минут / 7.3 часа** |

</details>

TODO:

- бизнес ошибки на бэке
- скрипт для envвов
- ридми по запуску
- тесты
