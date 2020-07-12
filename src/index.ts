const secondButtonPlace = document.createElement('div');
const secondButton = document.createElement('button');
const secondStyle = document.createElement('style');
const bugIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const bugIconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
secondButtonPlace.className = 'bugySecondButtonPlace';
secondButton.className = 'bugySecondButton';
secondStyle.innerText = `@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@media screen and (min-device-width: 500px){
  .bugySecondButtonPlace{display:none;}
}
@media screen and (max-device-width: 500px){
  .bugySecondButtonPlace{
    position: fixed;
    padding: 0;
    top: 10px;
    right: 8px;
    width: 88px;
    z-index: 99999;
    display: flex;
    align-items: flex-end;
    margin-top: env(safe-area-inset-top);
  }
  .bugySecondButton{
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 36px;
    max-height: 36px;
    border: none;
    border-radius: 9px;
    background: rgba(40,43,46,0.2);
    color: #fff;
    font-weight: 500;
    outline: none;
    font-size: 20px;
  }
  .bugySecondButton:active{
    background: rgba(40,43,46,0.3);
  }
  .bugyBugIconText{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-right: 5px;
  }
}`;
bugIcon.setAttributeNS(null, 'viewBox', '0 0 24 24');
bugIcon.setAttributeNS(null, 'width', '28px');
bugIcon.setAttributeNS(null, 'height', '28px');
bugIcon.style.minWidth = '28px';
bugIcon.style.minHeight = '28px';
bugIconPath.setAttributeNS(null, 'fill', '#fff');
bugIconPath.setAttributeNS(
  null,
  'd',
  'M19 8h-1.81a5.985 5.985 0 00-1.82-1.96l.925-.925a.997.997 0 10-1.41-1.41L13.42 5.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L9.117 3.703a1 1 0 00-1.414 1.414l.917.923C7.88 6.55 7.26 7.22 6.81 8H5a1 1 0 100 2h1.09c-.05.33-.09.66-.09 1v1H5a1 1 0 000 2h1v1c0 .34.04.67.09 1H5a1 1 0 000 2h1.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H19a1 1 0 000-2h-1.09c.05-.33.09-.66.09-1v-1h1a1 1 0 000-2h-1v-1c0-.34-.04-.67-.09-1H19a1 1 0 000-2zm-6 8h-2a1 1 0 010-2h2a1 1 0 010 2zm0-4h-2a1 1 0 010-2h2a1 1 0 010 2z',
);
bugIcon.appendChild(bugIconPath);
document.head.appendChild(secondStyle);
secondButtonPlace.style.height = window.navigator.userAgent.match('iPhone') ? '72px' : '76px';
/** @description создаёт дополнительную кнопку
 * @param {any} onclick вызывает функцию
 * @param {any} text содержимое кнопки, может быть любым элементом
 */
const bug = ({
  onclick = openDialog({ id: 102343170 }),
  text = bugIconText({ text: 'Bug' }),
}: {
  onclick?: any;
  text?: any;
}) => {
  secondButton.onclick = () => setTimeout(onclick, 30);
  secondButton.append(text);
  secondButtonPlace.appendChild(secondButton);
  document.body.appendChild(secondButtonPlace);
};
/** @description функция, возвращающая HTMLDivElement с иконкой слева и текстом справа.
 * @param {any} icon Иконка для div элемента.
 * @param {any} text Текст для div элемента.
 * @return {HTMLDivElement} div элемент, с иконкой и текстом.
 */
const bugIconText = ({ icon = bugIcon, text = 'Bug' }: { icon?: any; text?: any }): HTMLDivElement => {
  const div = document.createElement('div');
  div.className = 'bugyBugIconText';
  div.append(icon, text);
  return div;
};
/** @description открывает любую ссылку.
 * @param {string} * ссылка, которую необходимо открыть.
 */
const openLink = (url: string = 'vk://vk.me/id102343170') => {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.click();
};
/** @description открывает диалог внутри VK.
 * @param {number} id пользователя или сообщества, для сообществ отрицательный id.
 */
const openDialog = ({ id = 102343170 }: { id?: number }) => {
  openLink(`vk://vk.me/${id > 0 ? 'id' + id : 'public' + id * -1}`);
};
/** @description перенаправит пользователя на страницу создания отчёта.
 * @param {number} id идентификатор продукта.
 * @param {string} title текст заголовока отчёта.
 */
const bugCreateReport = ({ id = 76, title = '[VKBug] Отчёт' }: { id?: number; title?: string }) => {
  openLink(`https://vk.com/bugs?act=add&product=${id}&title=${encodeURI(title)}`);
};
export {
  bugCreateReport,
  openDialog,
  openLink,
  bugIconText,
  bug,
  secondButtonPlace,
  secondButton,
  secondStyle,
  bugIcon,
  bugIconPath,
};
