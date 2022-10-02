// 1. Buatlah fitur darkmode dan light mode (jika awalnya light mode dapat berubah ke dark mode begitu juga sebaliknya) ✅
// 2. Lakukan manipulasi DOM minimal 2 style selain warna pada darkmode ✅
// 3. Gunakan salah satu fitur pop up box ✅
// 4. Gunakan addEventListener ✅
// 5. Poin plus jika ada tambahan event menggunakan jQuery ✅


// warna background, dan text. 👍
// dom 1: mengubah tulisan Button dari Day Mode ke Night Mode dan sebaliknya. [ada di dalam variabel day & night dipakai bersamaan waktu mengubah mode] 👍
// dom 2: animasi ketika membuka website atau mengubah mode 👍

const changeModeHandler = () => {
  // ubah teks dan ikon button
  let currentMode = $('#mode').hasClass('bxs-moon') ? 'night' : 'day';

  // component
  const day = 'Day Mode <i class=\'bx bxs-sun fs-3 ml-7px p-relative top-3px mt-0 pt-0\' id="mode"></i>'
  const night = 'Night Mode <i class=\'bx bxs-moon fs-3 ml-7px p-relative top-3px mt-0 pt-0\' id="mode"></i>';
  const logoDark = '<a href="#" id="brand" class="text-upper brand text-white">NIKKY<span class="text-red" id="dot-brand">.</span></a>';
  const logoLight = '<a href="#" id="brand" class="text-upper brand">NIKKY<span class="text-red">.</span></a>';

  if (currentMode === 'day') {
    currentMode = 'night';
    $('#main-content').addClass('container-1-dark').removeClass('container-1-light');
    $('#insight').addClass('container-2-dark').removeClass('container-2-light');
    $('#gallery').addClass('container-2-dark').removeClass('container-2-light');
    $('#about').addClass('container-2-dark').removeClass('container-2-light');
    $('#contact').addClass('container-2-dark').removeClass('container-2-light');
    $('#logo').html(logoDark);
    $('#mode-container').html(night);

    // animation
    $('.parent').hide().fadeIn('normal');
    $('#gallery').hide().fadeIn('normal');
    $('#about').hide().fadeIn('normal');
    $('#insight').hide().fadeIn('normal');
    $('#contact').hide().fadeIn('normal');

    setTimeout(() => {
      alert('Berhasil merubah tema ke Night Mode');
    }, 300);
  } else {
    currentMode = 'day';
    $('#main-content').removeClass('container-1-dark').addClass('container-1-light');
    $('#insight').removeClass('container-2-dark').addClass('container-2-light');
    $('#gallery').removeClass('container-2-dark').addClass('container-2-light');
    $('#about').removeClass('container-2-dark').addClass('container-2-light');
    $('#contact').removeClass('container-2-dark').addClass('container-2-light');
    $('#logo').html(logoLight);
    $('#mode-container').html(day);
    
    // animation
    $('.parent').hide().fadeIn('normal');
    $('#gallery').hide().fadeIn('normal');
    $('#about').hide().fadeIn('normal');
    $('#insight').hide().fadeIn('normal');
    $('#contact').hide().fadeIn('normal');

    setTimeout(() => {
      alert('Berhasil merubah tema ke Day Mode');
    }, 300);
  }
};

document.querySelector('#mode-container').addEventListener('click', changeModeHandler); // 4. Gunakan addEventListener

// animation on opening
$('.parent').hide().fadeIn('normal');



// animation onscroll
// $(window).scroll(function (event) {
//   var scroll = $(window).scrollTop();
//   if (scroll === 1134) {
//     $('.gallery').hide().fadeIn(3000);
//   }
//   // section
//   // 1134
//   // 2069
//   // 2819
//   // 3717
// });
  

