// styling import
require('./styles/main.scss');

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(far, fab, fas);
dom.watch();

var btnModal = document.querySelectorAll('[data-toggle="modal"]');

[].forEach.call(btnModal, function(btn){
    btn.addEventListener('click', function(){

        var modal = document.querySelector('#' + this.dataset.target);
        var html = document.querySelector('html');

        console.log(modal);
        console.log(html);

        modal.classList.add('is-active');
        html.classList.add('is-clipped');

        modal.querySelector('.modal-close').addEventListener('click', function(e){
            console.log('button clicked')
            modal.classList.remove('is-active');
            html.classList.remove('is-clipped');
        })
    })
})

