window.addEventListener('DOMContentLoaded', function () {

  'use strict';

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent'),
    btn = document.querySelectorAll('.description-btn');

  console.log(tab);
  console.log(info);
  console.log(tabContent);
  console.log(btn);


  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  //timer;

  let deadLine = '2018-12-02';

  function getTimeRemeining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()), //разница между датами. кол-во миллисекун,
      s = Math.floor((t / 1000) % 60).toString(),
      m = Math.floor((t / 1000 / 60) % 60).toString(),
      // h = Math.floor((t / (1000 * 60 * 60)));
      h = Math.floor((t / 1000 / 60 / 60) % 24).toString();
    // d = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      'total': t,
      'h': h,
      'm': m,
      's': s,
      // 'd': d
    };

  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      // days = timer.querySelector('.days'),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemeining(endtime);
      // days.textContent = t.d;
      console.log(t.h);
      if (t.h.length < 2) {
        hours.textContent = '0' + t.h;
      } else {
        hours.textContent = t.h;
      }
      if (t.m.length < 2) {
        minutes.textContent = '0' + t.m;
      } else {
        minutes.textContent = t.m;
      }
      if (t.s.length < 2) {
        seconds.textContent = '0' + t.s;
      } else {
        seconds.textContent = t.s;
      }

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

      }
    }
  }
  setClock('timer', deadLine);



  //вызываем поп ап
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });
  
  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';

  });

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
  }




});