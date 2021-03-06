import { clickKeyHandler } from '../../app.js';
import { createElementHtml } from '../../utils/utils.js';
import './keypad.css';

function createKeypadKey(key, row) {
  // Create column
  const keypadCol = createElementHtml('div', [
    'col-3',
    'd-flex',
    'justify-content-center',
    'align-items-center',
  ]);
  // Create key
  let numberKey;
  if (isNaN(key) && key !== '.' && key !== '=') {
    numberKey = createElementHtml(
      'button',
      ['keypad-key', 'keypad-key--operation'],
      key,
      [
        { name: 'data-type', value: 'operation' },
        { name: 'name', value: 'operation' },
      ]
    );
  } else if (isNaN(key) && key === '=') {
    numberKey = createElementHtml(
      'button',
      ['keypad-key', 'keypad-key--equal'],
      key,
      [{ name: 'data-type', value: 'equal' }]
    );
  } else {
    numberKey = createElementHtml(
      'button',
      ['keypad-key', 'keypad-key--number'],
      key,
      [{ name: 'data-type', value: 'number' }]
    );
  }
  // Append child to row
  keypadCol.appendChild(numberKey);
  row.appendChild(keypadCol);

  numberKey.addEventListener('click', clickKeyHandler);
}

function keypad() {
  const row1 = [7, 8, 9, '+'];
  const row2 = [4, 5, 6, '-'];
  const row3 = [1, 2, 3, '*'];
  const row4 = ['.', 0, '=', '/'];

  const keypadCol = createElementHtml('div', [
    'col-12',
    'col-md-6',
    'keypad',
    'px-md-4',
    'px-lg-5',
    'px-xl-5',
  ]);
  const keypadRowKeys = createElementHtml('div', ['row', 'keypad-keys']);

  const colC = createElementHtml('div', [
    'col-3',
    'd-flex',
    'justify-content-end',
    'align-items-center',
  ]);
  const c = createElementHtml(
    'button',
    ['keypad-key', 'keypad-key--clear'],
    'C',
    [{ name: 'data-type', value: 'clean' }]
  );
  const colAc = createElementHtml('div', [
    'col-3',
    'd-flex',
    'justify-content-end',
    'align-items-center',
  ]);
  const ac = createElementHtml(
    'button',
    ['keypad-key', 'keypad-key--clear'],
    'AC',
    [{ name: 'data-type', value: 'cleanLog' }]
  );
  const colShowLog = createElementHtml('div', [
    'col-6',
    'd-flex',
    'justify-content-end',
    'align-items-center',
  ]);
  const showLog = createElementHtml(
    'button',
    ['keypad-key', 'keypad-key--equal', 'd-md-none'],
    'Show log',
    [{ name: 'data-type', value: 'showLog' }]
  );

  row1.map((el) => createKeypadKey(el, keypadRowKeys));
  row2.map((el) => createKeypadKey(el, keypadRowKeys));
  row3.map((el) => createKeypadKey(el, keypadRowKeys));
  row4.map((el) => createKeypadKey(el, keypadRowKeys));
  colShowLog.appendChild(showLog);
  colC.appendChild(c);
  colAc.appendChild(ac);
  keypadRowKeys.insertAdjacentElement('afterbegin', colShowLog);
  colShowLog.insertAdjacentElement('afterend', colC);
  colC.insertAdjacentElement('afterend', colAc);
  showLog.addEventListener('click', clickKeyHandler);
  c.addEventListener('click', clickKeyHandler);
  ac.addEventListener('click', clickKeyHandler);

  keypadCol.appendChild(keypadRowKeys);

  return keypadCol;
}

export default keypad;
