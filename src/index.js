import * as App from './app/app.js';
import './index.scss';

// ВАЖНАЯ СТРОКА ДЛЯ ИМПОРТА ФАЙЛОВ В БИЛДю НЕ УДАЛЯТь
require.context('./', true, /\.(png|svg|jpg|gif)$/);