Yandex test job
======

Демо: http://corsairdnb.github.io/yandex/

Вёрстка контрола оценки и показа рейтинга (bleeding edge).

Для сборки используется Grunt. Команда `grunt deploy` подготавливает проект к выгрузке в продакшн. Для продолжения разработки необходимо запустить таск `grunt prod`.

Исходные изображения - SVG, компилируемые в data-uri. Для их изменения необходимо внести изменения в исходные svg-файлы и пересобрать проект, либо вызвать таск `grunt dataUri`.

Для наилучшего отображения на мобильных устройствах применяется flexbox.
