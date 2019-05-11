import headerTemplate from '../../templates/header.hbs';
import header from './headerData';
import prepareHeader from './headerHelpers';

var headerElement = document.getElementById('header');

if (headerElement) {
  headerElement.innerHTML = headerTemplate({ header: prepareHeader(header) });
}
