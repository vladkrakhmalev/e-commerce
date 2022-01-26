$(document).ready(function() {



  $('.header__btn._menu').click(function() {
    if ($(this).hasClass('_open')) {
      $(this).removeClass('_open')
      $('.header__menu').removeClass('_open')
    } else {
      $(this).addClass('_open')
      $('.header__menu').addClass('_open')
    }
  })
  
  
  
  $('.product__image-slide').click(function(e) {
    e.preventDefault()
    let src = $(this).attr('href')
    $('.product__image-img').attr('src', src)
    $('.product__image-slide').removeClass('_active')
    $(this).addClass('_active')
  })
  
  
  
  $('.js-minus, .js-plus').click(function() {
    let value = $('.js-input').val()
    let min = $('.js-input').attr('min')
    let max = $('.js-input').attr('max')
    if ($(this).hasClass('js-plus')) {
      if (value > max || value == 1) {
        $('.js-input').val(++value)
      }
    }
    if ($(this).hasClass('js-minus')) {
      if (value > min) {
        $('.js-input').val(--value)
      }
    } 
  })
  
  
  
  let scrollPrev = 0;
  let header = $('.header')
  let heightHeader = $('.header').outerHeight()
  $("body").attr('style', `margin-top: ${heightHeader + 30}px `)
  $(window).scroll(function() {
    let scrolled = $(window).scrollTop();
    if (scrolled > 100 && scrolled > scrollPrev ) {
      header.addClass('_out');
    } else {
      header.removeClass('_out');
    }
    scrollPrev = scrolled;
  })
  
  
  
  $('.js-add').click(function (e) {
    e.preventDefault()
    let popup = $(this).attr('href')
    let title = $('.product__title').text()
    let count = $('.js-input').val()
    let target = null
    $(this).hasClass('js-add-bag') ? target = 'корзину': target = 'избранное'
    $(popup).find('.js-product-name').text(`"${title}"`)
    $(popup).find('.js-product-count').text(count)
    $(popup).find('.js-product-target').text(target)
    $(popup).addClass('_open')
  })
  
  
  
  $('.popup__btn-close').click(function () {
    $(this).closest('.popup').removeClass('_open')
  })



  function validate(form) {
    let submit = false
    form.find('input').each(function () {
      if ($(this).attr('type') == 'email') {
        if ($(this).val().match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
          $(this).removeClass('_error')
          submit = true
        } else {
          $(this).addClass('_error')
        }
      }
    })
    return submit
  }



  function clearForm(form) {
    form.find('input').each(function () {
      $(this).val('')
    })
  }



  $('.submit').click(function(e) {
    e.preventDefault()
		let form = $(e.target).closest('form')
    let submit = validate(form)
    if (submit === true) {
      $('#popup-send').addClass('_open')
      clearForm(form)
    }
  })



})