Рефакторинг системи повідомлень відповідно до принципів SOLID.

## Опис завдання

Проведено архітектурний рефакторинг системи повідомлень, яка спочатку порушувала всі принципи SOLID. Метою було створити гнучку, масштабовану та легко підтримувану архітектуру.

## Виконані зміни

### До рефакторингу (порушення SOLID):
- **SRP**: Клас `User` відповідав за дані користувача ТА надсилання повідомлень
- **OCP**: Додавання нового типу повідомлення вимагало зміни `NotificationService`
- **LSP**: Відсутні спільні інтерфейси для взаємозамінності сервісів
- **ISP**: Всі методи надсилання в одному класі
- **DIP**: Жорсткі залежності через `new Logger()`, `new NotificationService()`

### Після рефакторингу (дотримання SOLID):

#### ✅ Single Responsibility Principle (SRP)
- `User` - зберігає лише дані користувача
- `NotificationService` - координує канали повідомлень
- `EmailNotification`, `SMSNotification`, `PushNotification` - відповідають за свій тип повідомлень
- `Logger` - відповідає лише за логування

#### ✅ Open-Closed Principle (OCP)
- Додавання нового каналу (наприклад, Telegram) не потребує зміни існуючих класів
- Розширення через реалізацію інтерфейсу `INotificationChannel`

#### ✅ Liskov Substitution Principle (LSP)
- Всі канали повідомлень реалізують `INotificationChannel`
- Будь-який канал можна замінити іншим без порушення функціональності

#### ✅ Interface Segregation Principle (ISP)
- `INotificationChannel` - для каналів повідомлень
- `ILogger` - для логування
- `INotificationService` - для сервісу повідомлень
- `IUser` - для даних користувача

#### ✅ Dependency Inversion Principle (DIP)
- Класи залежать від абстракцій (`ILogger`, `INotificationChannel`)
- Залежності передаються через конструктор (Dependency Injection)

## Структура проєкту

```
src/
├── core/
│   └── interfaces.ts          # Всі інтерфейси системи
├── models/
│   └── User.ts               # Модель користувача (тільки дані)
├── services/
│   ├── Logger.ts             # Сервіс логування
│   ├── EmailNotification.ts   # Email канал повідомлень
│   ├── SMSNotification.ts     # SMS канал повідомлень
│   ├── PushNotification.ts    # Push канал повідомлень
│   └── NotificationService.ts # Координатор каналів
└── main.ts                   # Демонстрація роботи системи
```

## Переваги нової архітектури

1. **Масштабованість** - легко додавати нові канали повідомлень
2. **Тестованість** - можна використовувати мок об'єкти
3. **Гнучкість** - різні комбінації каналів для різних сценаріїв
4. **Підтримуваність** - зміни в одному компоненті не впливають на інші
5. **Читабельність** - чітке розділення відповідальностей

## Запуск проєкту

### Встановлення залежностей
```bash
npm install
```

### Запуск
```bash
npm start
# або
npx ts-node src/main.ts
```

### Компіляція
```bash
npm run build
```

## Очікуване виведення

```
[LOG]: Sending EMAIL to user@example.com
Email sent to user@example.com: Ваш платіж оброблено успішно!
[LOG]: Sending SMS to +1234567890
SMS sent to +1234567890: Ваш платіж оброблено успішно!
[LOG]: Sending PUSH to device-token-123
Push sent to device-token-123: Ваш платіж оброблено успішно!
```


## Автор
Yana Shapka <yana.shapka.test@gmail.com>