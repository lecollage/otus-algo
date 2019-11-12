# ИНСТРУКЦИЯ.
Данное приложение представляет npm-библиотеку классов, покрытых тестами.

## ПРЕДПОЛОЖЕНИЯ ПЕРЕД ЗАПУСКОМ ТЕСТОВ.
На локали установлены утилиты (глобально, не в рамках данного репозитория):
1. node 
2. npm
3. npm-утилита typescript
4. npm-утилита npx
5. npm-утилита rimraf

## ЗАПУСК ТЕСТОВ.
После клонирования репозитория, находясь в репозитории, выполнить:
1. npm install.
2. npm run build:ci
3. npm run test:ci


# Таблица производительности на 100000 операций.
Время указано в мс.

Реализация|Вставка последовательно|Чтение последовательно|Удаление последовательно
---|---:|---:|---:
SingleArray|6.507ms|2.462ms|67521.278ms
VectorArray|2182.925ms|3.151ms|68242.995
FactorArray|21.844|3.979|67459.368
MatrixArray|


SingleArray-add-100000: 6.507ms
SingleArray-get-100000: 2.462ms
SingleArray-remove-100000: 67521.278ms
VectorArray-add-100000: 2182.925ms
VectorArray-get-100000: 3.151ms
VectorArray-remove-100000: 68242.995ms
FactorArray-add-100000: 21.844ms
FactorArray-get-100000: 3.979ms
FactorArray-remove-100000: 67459.368ms
MatrixArray-add-100000: 9.449ms
MatrixArray-get-100000: 2441.898ms
MatrixArray-remove-100000: 343.970ms
