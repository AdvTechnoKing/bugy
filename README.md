# Bugy
Модуль, добавляющий дополнительную кнопку под основные.

![](https://sun9-4.userapi.com/c855136/v855136276/244ab2/JOpoBqicWq8.jpg)

Что это даёт, зависит от вашей фантазии. Например вы можете при клике данной кнопки отправить пользователя в личный диалог или же добавить отчёт в ваш продукт.

## Установка
Что бы установить данный модуль, откройте папку с вашим проектом и напишите:

`$ npm install bugy`

## Вызов
После установки надо добавить установленный модуль в код и вызвать его:
```javascript
import {bug, openDialog, bugIconText} from 'bugy';

bug({onclick:()=>openDialog({id:102343170}),text:bugIconText({text:"Bug"})});
```
## Поддерживаемые функции.
- **bug** - создаёт дополнительную кнопку

Параметры:
> onclick: Function - вызывает переданную функцию
> text: HTML элемент | String - содержимое кнопки, может быть как элементом HTML, так и обычным текстом.

```javascript
bug({onclick:()=>bugCreateReport({id:76,title:'[Bugy] '}),text:bugIconText({text:"Bug"})})
```

- **openDialog** - открывает диалог внутри VK

Параметры:
> id: Number - id пользователя или группы

```javascript
openDialog({id:-1}) // отрицательное значение обозначают группу
```

- **bugCreateReport** - перенаправит пользователя на страницу создания отчёта

Параметры:
> id: Number - номер продукта в трекере
> title: String - текст заголовка для отчёта

```javascript
bugCreateReport({id:76,title:'[Bugy] Отчёт'})
```

- **openLink** - открывает любую ссылку

Параметры:
> String - ссылка

```javascript
openLink('https://vk.com/')
```

## Основные элементы

- **secondStyle** - `HTMLStyleElement`, содержит в себе используемые стили. Созданный стиль добавляется в `<head/>`.
- **secondButtonPlace** - `HTMLDivElement`, создающий площадку под кнопку.
- **secondButton** - `HTMLButtonElement`, дополнительная кнопка.

## Дополнительные элементы

- **bugIcon** - `SVGSVGElement`, иконка жука.
- **bugIconPath** - `SVGPathElement`, содержимое иконки жука.


- **bugIconText** - функция, возвращающая `HTMLDivElement` с иконкой слева и текстом справа.

Параметры:
> icon: HTML Элемент
> text: String

> Если в bugIconText надо поменять иконку и текст местами, то можно в icon передать текст, а в text саму иконку.

## Занятые стили
Стили ниже нужны для отображения дополнительной кнопки.
Данные стили указываются в `<style/>` в `<head/>`.

```css
.secondButtonPlace{} // Задаёт область для дополнительной кнопки
.secondButton{} // Стиль дополнительной кнопки
.bugIconText{} // Стиль для элемента с иконкой и текстом
```