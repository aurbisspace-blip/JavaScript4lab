/**
 * Лабораторная работа №4. Продвинутые объекты в JavaScript
 * Автор: [Colesnicenco Nichita]
 * Группа: [I2502ru]
 */

// ==================== ЧАСТЬ 1: КЛАССЫ (ES6) ====================

/**
 * Класс Item - представляет предмет в инвентаре
 * @class
 */
class Item {
    /**
     * Создает экземпляр предмета
     * @param {string} name - Название предмета
     * @param {number} weight - Вес предмета
     * @param {string} rarity - Редкость предмета (common, uncommon, rare, legendary)
     */
    constructor(name, weight, rarity) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
    }

    /**
     * Возвращает информацию о предмете
     * @returns {string} Строка с информацией о предмете
     */
    getInfo() {
        return `Предмет: ${this.name}, Вес: ${this.weight} кг, Редкость: ${this.rarity}`;
    }

    /**
     * Изменяет вес предмета
     * @param {number} newWeight - Новый вес предмета
     */
    setWeight(newWeight) {
        if (typeof newWeight === 'number' && newWeight > 0) {
            this.weight = newWeight;
        } else {
            console.log('Ошибка: вес должен быть положительным числом');
        }
    }
}

/**
 * Класс Weapon - расширяет Item, представляет оружие
 * @class
 * @extends Item
 */
class Weapon extends Item {
    /**
     * Создает экземпляр оружия
     * @param {string} name - Название оружия
     * @param {number} weight - Вес оружия
     * @param {string} rarity - Редкость оружия
     * @param {number} damage - Урон оружия
     * @param {number} durability - Прочность оружия (0-100)
     */
    constructor(name, weight, rarity, damage, durability) {
        super(name, weight, rarity);
        this.damage = damage;
        this.durability = durability;
    }

    /**
     * Возвращает информацию об оружии (переопределение метода)
     * @returns {string} Строка с информацией об оружии
     */
    getInfo() {
        return `Оружие: ${this.name}, Вес: ${this.weight} кг, Редкость: ${this.rarity}, Урон: ${this.damage}, Прочность: ${this.durability}%`;
    }

    /**
     * Использует оружие, уменьшая прочность на 10 (если прочность > 0)
     */
    use() {
        if (this.durability > 0) {
            this.durability = Math.max(0, this.durability - 10);
            console.log(`${this.name} использовано. Осталось прочности: ${this.durability}%`);
        } else {
            console.log(`${this.name} сломано! Невозможно использовать.`);
        }
    }

    /**
     * Восстанавливает прочность оружия до 100%
     */
    repair() {
        this.durability = 100;
        console.log(`${this.name} отремонтировано. Прочность восстановлена до 100%`);
    }
}

// ==================== ЧАСТЬ 2: ФУНКЦИИ-КОНСТРУКТОРЫ ====================

/**
 * Функция-конструктор ItemConstructor
 * @param {string} name - Название предмета
 * @param {number} weight - Вес предмета
 * @param {string} rarity - Редкость предмета
 */
function ItemConstructor(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
    
    this.getInfo = function() {
        return `Предмет: ${this.name}, Вес: ${this.weight} кг, Редкость: ${this.rarity}`;
    };
    
    this.setWeight = function(newWeight) {
        if (typeof newWeight === 'number' && newWeight > 0) {
            this.weight = newWeight;
        } else {
            console.log('Ошибка: вес должен быть положительным числом');
        }
    };
}

/**
 * Функция-конструктор WeaponConstructor
 * @param {string} name - Название оружия
 * @param {number} weight - Вес оружия
 * @param {string} rarity - Редкость оружия
 * @param {number} damage - Урон оружия
 * @param {number} durability - Прочность оружия
 */
function WeaponConstructor(name, weight, rarity, damage, durability) {
    // Наследование свойств ItemConstructor
    ItemConstructor.call(this, name, weight, rarity);
    this.damage = damage;
    this.durability = durability;
    
    this.getInfo = function() {
        return `Оружие: ${this.name}, Вес: ${this.weight} кг, Редкость: ${this.rarity}, Урон: ${this.damage}, Прочность: ${this.durability}%`;
    };
    
    this.use = function() {
        if (this.durability > 0) {
            this.durability = Math.max(0, this.durability - 10);
            console.log(`${this.name} использовано. Осталось прочности: ${this.durability}%`);
        } else {
            console.log(`${this.name} сломано! Невозможно использовать.`);
        }
    };
    
    this.repair = function() {
        this.durability = 100;
        console.log(`${this.name} отремонтировано. Прочность восстановлена до 100%`);
    };
}

// Наследование прототипа
WeaponConstructor.prototype = Object.create(ItemConstructor.prototype);
WeaponConstructor.prototype.constructor = WeaponConstructor;

// ==================== ТЕСТИРОВАНИЕ ====================

console.log("=".repeat(70));
console.log("Лабораторная работа №4. Система инвентаря");
console.log("=".repeat(70));

// Тестирование класса Item
console.log("\n" + "▶".repeat(35) + " ТЕСТИРОВАНИЕ КЛАССА ITEM " + "◀".repeat(35));
console.log("\nСоздание предмета 'Steel Sword':");
const sword = new Item("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());

console.log("\nИзменение веса предмета:");
sword.setWeight(4.0);
console.log(sword.getInfo());

// Тестирование класса Weapon
console.log("\n" + "▶".repeat(35) + " ТЕСТИРОВАНИЕ КЛАССА WEAPON " + "◀".repeat(35));
console.log("\nСоздание оружия 'Longbow':");
const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());

console.log("\nИспользование оружия (use):");
bow.use();
console.log(`Текущая прочность: ${bow.durability}%`);

console.log("\nПовторное использование:");
bow.use();
console.log(`Текущая прочность: ${bow.durability}%`);

console.log("\nРемонт оружия (repair):");
bow.repair();
console.log(`Текущая прочность после ремонта: ${bow.durability}%`);

// Создание дополнительных объектов
console.log("\n" + "▶".repeat(35) + " ДОПОЛНИТЕЛЬНЫЕ ОБЪЕКТЫ " + "◀".repeat(35));

const healingPotion = new Item("Healing Potion", 0.5, "common");
console.log("\n", healingPotion.getInfo());

const legendarySword = new Weapon("Excalibur", 5.0, "legendary", 50, 100);
console.log(legendarySword.getInfo());

console.log("\nИспытание легендарного меча:");
for (let i = 0; i < 5; i++) {
    legendarySword.use();
}

// Тестирование функции-конструктора
console.log("\n" + "▶".repeat(35) + " ТЕСТИРОВАНИЕ ФУНКЦИИ-КОНСТРУКТОРА " + "◀".repeat(35));

console.log("\nСоздание предмета через функцию-конструктор:");
const itemConstruct = new ItemConstructor("Shield", 4.2, "uncommon");
console.log(itemConstruct.getInfo());

console.log("\nСоздание оружия через функцию-конструктор:");
const axeConstruct = new WeaponConstructor("Battle Axe", 6.0, "rare", 30, 100);
console.log(axeConstruct.getInfo());

console.log("\nИспользование оружия из конструктора:");
axeConstruct.use();
axeConstruct.use();
console.log(axeConstruct.getInfo());

axeConstruct.repair();
console.log(axeConstruct.getInfo());

// ==================== ДЕМОНСТРАЦИЯ ОПЦИОНАЛЬНОЙ ЦЕПОЧКИ (?.) ====================

console.log("\n" + "▶".repeat(35) + " ОПЦИОНАЛЬНАЯ ЦЕПОЧКА (?.) " + "◀".repeat(35));

/**
 * Функция для демонстрации опциональной цепочки
 * @param {Object} item - Объект предмета
 */
function safeGetItemInfo(item) {
    // Использование опциональной цепочки для безопасного доступа к свойствам
    const name = item?.name ?? "Неизвестно";
    const weight = item?.weight ?? "Неизвестно";
    const rarity = item?.rarity ?? "Неизвестно";
    const damage = item?.damage ?? "Нет урона";
    
    console.log(`Название: ${name}, Вес: ${weight}, Редкость: ${rarity}, Урон: ${damage}`);
}

console.log("\nБезопасный доступ к существующему объекту:");
safeGetItemInfo(legendarySword);

console.log("\nБезопасный доступ к null/undefined объекту:");
safeGetItemInfo(null);
safeGetItemInfo(undefined);

console.log("\nБезопасный доступ к несуществующему свойству:");
const partialItem = { name: "Test", weight: 1.0 };
console.log(`Редкость: ${partialItem?.rarity ?? "не указана"}`);

// ==================== ДОПОЛНИТЕЛЬНЫЕ ТЕСТЫ ====================

console.log("\n" + "▶".repeat(35) + " ДОПОЛНИТЕЛЬНЫЕ ТЕСТЫ " + "◀".repeat(35));

console.log("\nТестирование граничных случаев:");
const brokenSword = new Weapon("Broken Sword", 1.0, "common", 5, 0);
console.log(brokenSword.getInfo());
brokenSword.use(); // Попытка использовать сломанное оружие
brokenSword.repair();
brokenSword.use(); // После ремонта работает

console.log("\nТестирование некорректного веса:");
const testItem = new Item("Test", 1.0, "common");
testItem.setWeight(-5); // Некорректный вес
testItem.setWeight(2.5); // Корректный вес
console.log(testItem.getInfo());

console.log("\n" + "=".repeat(70));
console.log("Лабораторная работа №4 завершена успешно!");
console.log("=".repeat(70));