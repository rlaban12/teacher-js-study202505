
// 모든 태그가 그려진 이후에 발생하는 이벤트
// document.addEventListener('DOMContentLoaded', e => {

  const $btn = document.getElementById('btn');
  console.log('btn: ', $btn);

  const clickHandler = e => {
    alert('안뇽!');
  };

  $btn.addEventListener('click', clickHandler);

// });

