# Лабораторная работа №3
## Основы работы с массивами, функциями и объектами в JavaScript

### Цель работы
Изучить основы работы с массивами и функциями в JavaScript, применяя их для обработки и анализа транзакций.

### Выполненные задачи

#### Шаг 1. Создание массива транзакций
Создан массив объектов `testTransactions`, содержащий 6 транзакций со всеми необходимыми полями:
- `transaction_id` - уникальный идентификатор
- `transaction_date` - дата транзакции (формат YYYY-MM-DD)
- `transaction_amount` - сумма транзакции
- `transaction_type` - тип (debit/credit)
- `transaction_description` - описание
- `merchant_name` - название магазина
- `card_type` - тип карты

#### Шаг 2. Реализованные функции

| Функция | Описание |
|---------|----------|
| `getUniqueTransactionTypes()` | Возвращает уникальные типы транзакций с использованием Set |
| `calculateTotalAmount()` | Вычисляет сумму всех транзакций |
| `calculateTotalAmountByDate()` [extra] | Сумма транзакций за год/месяц/день (гибкие параметры) |
| `getTransactionByType()` | Фильтрация по типу (debit/credit) |
| `getTransactionsInDateRange()` | Транзакции в диапазоне дат |
| `getTransactionsByMerchant()` | Транзакции по названию магазина |
| `calculateAverageTransactionAmount()` | Среднее значение транзакций |
| `getTransactionsByAmountRange()` | Транзакции в диапазоне сумм |
| `calculateTotalDebitAmount()` | Сумма дебетовых транзакций |
| `findMostTransactionsMonth()` | Месяц с наибольшим числом транзакций |
| `findMostDebitTransactionMonth()` | Месяц с наибольшим числом дебетовых транзакций |
| `mostTransactionTypes()` | Определение преобладающего типа |
| `getTransactionsBeforeDate()` | Транзакции до указанной даты |
| `findTransactionById()` | Поиск транзакции по ID |
| `mapTransactionDescriptions()` | Массив описаний транзакций |

#### Шаг 3. Тестирование
- Все функции протестированы на массиве из 6 транзакций
- [extra] Выполнено тестирование на пустом массиве
- [extra] Выполнено тестирование на массиве с одной транзакцией

### Документация кода
Весь код документирован в стандарте **JSDoc**:
- Каждая функция содержит описание параметров с типами
- Указаны возвращаемые значения
- Добавлены комментарии для сложных участков кода

### Контрольные вопросы

#### 1. Какие методы массивов можно использовать для обработки объектов в JavaScript?

| Метод | Назначение | Пример использования |
|-------|------------|---------------------|
| `filter()` | Фильтрация элементов по условию | `transactions.filter(t => t.amount > 1000)` |
| `map()` | Преобразование каждого элемента | `transactions.map(t => t.description)` |
| `reduce()` | Агрегация данных (сумма, среднее) | `transactions.reduce((sum, t) => sum + t.amount, 0)` |
| `forEach()` | Выполнение действия для каждого элемента | `transactions.forEach(t => console.log(t.id))` |
| `find()` | Поиск первого подходящего элемента | `transactions.find(t => t.id === 5)` |
| `some()` | Проверка наличия хотя бы одного | `transactions.some(t => t.amount > 10000)` |
| `every()` | Проверка всех элементов | `transactions.every(t => t.amount > 0)` |
| `sort()` | Сортировка массива | `transactions.sort((a,b) => a.amount - b.amount)` |

#### 2. Как сравнивать даты в строковом формате в JavaScript?

При использовании формата `YYYY-MM-DD` строки можно сравнивать **лексикографически**:

```javascript
// Самый простой способ (рекомендуется для формата YYYY-MM-DD)
const isAfter = date1 > date2;

// С преобразованием в объекты Date
const date1Obj = new Date(date1);
const date2Obj = new Date(date2);
const isEqual = date1Obj.getTime() === date2Obj.getTime();

// Пример из лабораторной
function getTransactionsInDateRange(transactions, startDate, endDate) {
    return transactions.filter(t => 
        t.transaction_date >= startDate && 
        t.transaction_date <= endDate
    );
}