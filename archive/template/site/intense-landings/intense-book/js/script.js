/**
 * Global variables
 */
"use strict";

var userAgent = navigator.userAgent.toLowerCase(),
    initialDate = new Date(),

    $document = $(document),
    $window = $(window),
    $html = $("html"),

    isDesktop = $html.hasClass("desktop"),
    isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1]) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isTouch = "ontouchstart" in window,
    c3ChartsArray = [],
    onloadCaptchaCallback,

    plugins = {
      pointerEvents: isIE < 11 ? "js/pointer-events.min.js" : false,
      smoothScroll: $html.hasClass("use--smoothscroll") ? "js/smoothscroll.min.js" : false,
      bootstrapTooltip: $("[data-toggle='tooltip']"),
      rdParallax: $(".rd-parallax"),
      responsiveTabs: $(".responsive-tabs"),
      rdGoogleMaps: $("#rd-google-map"),
      regula: $("[data-constraints]"),
      counter: $(".counter"),
      rdInputLabel: $(".form-label"),
      photoSwipeGallery: $("[data-photo-swipe-item]"),
      countDown: $(".countdown"),
      customToggle: $("[data-custom-toggle]"),
      customWaypoints: $('[data-custom-scroll-to]'),
      resizable: $(".resizable"),
      rdMailForm: $(".rd-mailform")
    };

/**
 * Initialize All Scripts
 */
$document.ready(function () {

  /**
   * isScrolledIntoView
   * @description  check the element whas been scrolled into the view
   */
  function isScrolledIntoView(elem) {
    var $window = $(window);
    return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
  }


  /**
   * initOnView
   * @description  calls a function when element has been scrolled into the view
   */
  function lazyInit(element, func) {
    var $win = jQuery(window);
    $win.on('load scroll', function () {
      if ((!element.hasClass('lazy-loaded') && (isScrolledIntoView(element)))) {
        func.call(element);
        element.addClass('lazy-loaded');
      }
    });
  }

  /**
   * resizeOnImageLoad
   * @description  calls a resize event when imageloaded
   */
  function resizeOnImageLoad(image) {
    image.onload = function () {
      $window.trigger("resize");
    }
  }


  /**
   * getSwiperHeight
   * @description  calculate the height of swiper slider basing on data attr
   */
  function getSwiperHeight(object, attr) {
    var val = object.attr("data-" + attr),
        dim;
    if (!val) {
      return undefined;
    }

    dim = val.match(/(px)|(%)|(vh)$/i);

    if (dim.length) {
      switch (dim[0]) {
        case "px":
          return parseFloat(val);
        case "vh":
          return $(window).height() * (parseFloat(val) / 100);
        case "%":
          return object.width() * (parseFloat(val) / 100);
      }
    } else {
      return undefined;
    }
  }


  /**
   * toggleSwiperInnerVideos
   * @description  toggle swiper videos on active slides
   // */
  function toggleSwiperInnerVideos(swiper) {
    var videos;

    $.grep(swiper.slides, function (element, index) {
      var $slide = $(element),
          video;

      if (index === swiper.activeIndex) {
        videos = $slide.find("video");
        if (videos.length) {
          videos.get(0).play();
        }
      } else {
        $slide.find("video").each(function () {
          this.pause();
        });
      }
    });
  }


  /**
   * toggleSwiperCaptionAnimation
   * @description  toggle swiper animations on active slides
   */
  function toggleSwiperCaptionAnimation(swiper) {
    if (isIE && isIE < 10) {
      return;
    }

    var prevSlide = $(swiper.container),
        nextSlide = $(swiper.slides[swiper.activeIndex]);

    prevSlide
        .find("[data-caption-animate]")
        .each(function () {
          var $this = $(this);
          $this
              .removeClass("animated")
              .removeClass($this.attr("data-caption-animate"))
              .addClass("not-animated");
        });

    nextSlide
        .find("[data-caption-animate]")
        .each(function () {
          var $this = $(this),
              delay = $this.attr("data-caption-delay");

          setTimeout(function () {
            $this
                .removeClass("not-animated")
                .addClass($this.attr("data-caption-animate"))
                .addClass("animated");
          }, delay ? parseInt(delay) : 0);
        });
  }

  /**
   * makeParallax
   * @description  create swiper parallax scrolling effect
   */
  function makeParallax(el, speed, wrapper, prevScroll) {
    var scrollY = window.scrollY || window.pageYOffset;

    if (prevScroll != scrollY) {
      prevScroll = scrollY;
      el.addClass('no-transition');
      el[0].style['transform'] = 'translate3d(0,' + -scrollY * (1 - speed) + 'px,0)';
      el.height();
      el.removeClass('no-transition');

      if (el.attr('data-fade') === 'true') {
        var bound = el[0].getBoundingClientRect(),
            offsetTop = bound.top * 2 + scrollY,
            sceneHeight = wrapper.outerHeight(),
            sceneDevider = wrapper.offset().top + sceneHeight / 2.0,
            layerDevider = offsetTop + el.outerHeight() / 2.0,
            pos = sceneHeight / 6.0,
            opacity;
        if (sceneDevider + pos > layerDevider && sceneDevider - pos < layerDevider) {
          el[0].style["opacity"] = 1;
        } else {
          if (sceneDevider - pos < layerDevider) {
            opacity = 1 + ((sceneDevider + pos - layerDevider) / sceneHeight / 3.0 * 5);
          } else {
            opacity = 1 - ((sceneDevider - pos - layerDevider) / sceneHeight / 3.0 * 5);
          }
          el[0].style["opacity"] = opacity < 0 ? 0 : opacity > 1 ? 1 : opacity.toFixed(2);
        }
      }
    }

    requestAnimationFrame(function () {
      makeParallax(el, speed, wrapper, prevScroll);
    });
  }

  /**
   * Live Search
   * @description  create live search results
   */
  function liveSearch(options) {
    $('#' + options.live).removeClass('cleared').html();
    options.current++;
    options.spin.addClass('loading');
    $.get(handler, {
      s: decodeURI(options.term),
      liveSearch: options.live,
      dataType: "html",
      liveCount: options.liveCount,
      filter: options.filter,
      template: options.template
    }, function (data) {
      options.processed++;
      var live = $('#' + options.live);
      if (options.processed == options.current && !live.hasClass('cleared')) {
        live.find('> #search-results').removeClass('active');
        live.html(data);
        setTimeout(function () {
          live.find('> #search-results').addClass('active');
        }, 50);
      }
      options.spin.parents('.rd-search').find('.input-group-addon').removeClass('loading');
    })
  }

  /**
   * attachFormValidator
   * @description  attach form validation to elements
   */
  function attachFormValidator(elements) {
    for (var i = 0; i < elements.length; i++) {
      var o = $(elements[i]), v;
      o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
      v = o.parent().find(".form-validation");
      if (v.is(":last-child")) {
        o.addClass("form-control-last-child");
      }
    }

    elements
        .on('input change propertychange blur', function (e) {
          var $this = $(this), results;

          if (e.type != "blur") {
            if (!$this.parent().hasClass("has-error")) {
              return;
            }
          }

          if ($this.parents('.rd-mailform').hasClass('success')) {
            return;
          }

          if ((results = $this.regula('validate')).length) {
            for (i = 0; i < results.length; i++) {
              $this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error")
            }
          } else {
            $this.siblings(".form-validation").text("").parent().removeClass("has-error")
          }
        })
        .regula('bind');
  }

  /**
   * isValidated
   * @description  check if all elemnts pass validation
   */
  function isValidated(elements, captcha) {
    var results, errors = 0;

    if (elements.length) {
      for (j = 0; j < elements.length; j++) {

        var $input = $(elements[j]);
        if ((results = $input.regula('validate')).length) {
          for (k = 0; k < results.length; k++) {
            errors++;
            $input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
          }
        } else {
          $input.siblings(".form-validation").text("").parent().removeClass("has-error")
        }
      }

      if (captcha) {
        if (captcha.length) {
          return validateReCaptcha(captcha) && errors == 0
        }
      }

      return errors == 0;
    }
    return true;
  }


  /**
   * validateReCaptcha
   * @description  validate google reCaptcha
   */
  function validateReCaptcha(captcha) {
      var $captchaToken = captcha.find('.g-recaptcha-response').val();

      if ($captchaToken == '') {
        captcha
            .siblings('.form-validation')
            .html('Please, prove that you are not robot.')
            .addClass('active');
        captcha
            .closest('.form-group')
            .addClass('has-error');

        captcha.bind('propertychange', function () {
          var $this = $(this),
              $captchaToken = $this.find('.g-recaptcha-response').val();

          if($captchaToken != '') {
            $this
                .closest('.form-group')
                .removeClass('has-error');
            $this
                .siblings('.form-validation')
                .removeClass('active')
                .html('');
            $this.unbind('propertychange');
          }
        });

        return false;
      }

    return true;
  }


  /**
   * onloadCaptchaCallback
   * @description  init google reCaptcha
   */
  onloadCaptchaCallback = function () {
    for (i = 0; i < plugins.captcha.length; i++) {
      var $capthcaItem = $(plugins.captcha[i]);

      grecaptcha.render(
          $capthcaItem.attr('id'),
          {
            sitekey: $capthcaItem.attr('data-sitekey'),
            size: $capthcaItem.attr('data-size') ? $capthcaItem.attr('data-size') : 'normal',
            theme: $capthcaItem.attr('data-theme') ? $capthcaItem.attr('data-theme') : 'light',
            callback: function (e) {
              $('.recaptcha').trigger('propertychange');
            }
          }
      );
      $capthcaItem.after("<span class='form-validation'></span>");
    }
  }

  /**
   * parseJSONObject
   * @description  return JSON object witch methods
   */
  function parseJSONObject(element, attr) {
    return JSON.parse($(element).attr(attr), function (key, value) {
      if ((typeof value) === 'string') {
        if (value.indexOf('function') == 0) {
          return eval('(' + value + ')');
        }
      }
      return value;
    });
  }

  /**
   * makeUniqueRandom
   * @description  make random for gallery tabs
   */
  function makeUniqueRandom(count) {
    if (!uniqueRandoms.length) {
      for (var i = 0; i < count; i++) {
        uniqueRandoms.push(i);
      }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];
    uniqueRandoms.splice(index, 1);
    return val;
  }

  /**
   * makeVisible
   * @description  set class to gallery tabs to make it visible
   */
  function makeVisible(el) {
    var count = el.length,
        k = 0,
        step = 2.5;
    for (var i = 0; i < count; i++) {
      timer = setTimeout(function () {
        var rand = makeUniqueRandom(count);
        el.eq(rand).addClass('visible');
      }, k * 35);
      k += step;
    }
    timer2 = setTimeout(function () {
      el.not('.visible').addClass('visible');
    }, count * step * 35)
  }

  /**
   * makeInVisible
   * @description  set class to gallery tabs to make it invisible
   */
  function makeInvisible() {
    var el = $('.image.visible');
    el.removeClass('visible');
    uniqueRandoms = [];
    clearTimeout(timer);
    clearTimeout(timer2);
  }

  /**
   * IE Polyfills
   * @description  Adds some loosing functionality to IE browsers
   */
  if (isIE) {
    if (isIE < 10) {
      $html.addClass("lt-ie-10");
    }

    if (isIE < 11) {
      if (plugins.pointerEvents) {
        $.getScript(plugins.pointerEvents)
            .done(function () {
              $html.addClass("ie-10");
              PointerEventsPolyfill.initialize({});
            });
      }
    }

    if (isIE === 11) {
      $("html").addClass("ie-11");
    }

    if (isIE === 12) {
      $("html").addClass("ie-edge");
    }
  }
  
  /**
   * Copyright Year
   * @description  Evaluates correct copyright year
   */
  var o = $("#copyright-year");
  if (o.length) {
    o.text(initialDate.getFullYear());
  }

  /**
   * jQuery Countdown
   * @description  Enable countdown plugin
   */
  if (plugins.countDown.length) {
    var i, j;
    for (i = 0; i < plugins.countDown.length; i++) {
      var countDownItem = plugins.countDown[i],
          $countDownItem = $(countDownItem),
          d = new Date(),
          type = countDownItem.getAttribute('data-type'),
          time = countDownItem.getAttribute('data-time'),
          format = countDownItem.getAttribute('data-format'),
          settings = [];

      d.setTime(Date.parse(time)).toLocaleString();
      settings[type] = d;
      settings['format'] = format;

      if ($countDownItem.parents('.countdown-modern').length) {
        settings['onTick'] = function () {
          var section = $(this).find(".countdown-section");
          for (j = 0; j < section.length; j++) {
            $(section[section.length - j - 1]).append('<span class="countdown-letter">' + format[format.length - j - 1] + '</span>')
          }
        }
      }

      $countDownItem.countdown(settings);
    }
  }

  /**
   * Smooth scrolling
   * @description  Enables a smooth scrolling for Google Chrome (Windows)
   */
  if (plugins.smoothScroll) {
    $.getScript(plugins.smoothScroll);
  }

  /**
   * Bootstrap Tooltips
   * @description Activate Bootstrap Tooltips
   */
  if (plugins.bootstrapTooltip.length) {
    plugins.bootstrapTooltip.tooltip();
  }

  /**
   * RD Input Label
   * @description Enables RD Input Label Plugin
   */
  if (plugins.rdInputLabel.length) {
    plugins.rdInputLabel.RDInputLabel();
  }

  /**
   * Regula
   * @description Enables Regula plugin
   */
  if (plugins.regula.length) {
    attachFormValidator(plugins.regula);
  }


  /**
   * WOW
   * @description Enables Wow animation plugin
   */
  if ($html.hasClass('desktop') && $html.hasClass("wow-animation") && $(".wow").length) {
    new WOW().init();
  }



  /**
   * jQuery Count To
   * @description Enables Count To plugin
   */
  if (plugins.counter.length) {
    var i;
    for (i = 0; i < plugins.counter.length; i++) {
      var counterItem = $(plugins.counter[i]);

      $window.on("scroll load", $.proxy(function () {
        var counter = $(this);
        if ((!counter.hasClass("animated-first")) && (isScrolledIntoView(counter))) {
          counter.countTo({
            refreshInterval: 40,
            speed: counter.attr("data-speed") || 1000
          });
          counter.addClass('animated-first');
        }
      }, counterItem))
    }
  }
  

  /**
   * UI To Top
   * @description Enables ToTop Button
   */
  if (isDesktop) {
    $().UItoTop({
      easingType: 'easeOutQuart',
      containerClass: 'ui-to-top icon icon-xs icon-circle icon-darker-filled mdi mdi-chevron-up'
    });
  }
  

  /**
   * RD Mailform
   */
  if (plugins.rdMailForm.length) {
    var i, j, k,
        msg = {
          'MF000': 'Successfully sent!',
          'MF001': 'Recipients are not set!',
          'MF002': 'Form will not work locally!',
          'MF003': 'Please, define email field in your form!',
          'MF004': 'Please, define type of your form!',
          'MF254': 'Something went wrong with PHPMailer!',
          'MF255': 'Aw, snap! Something went wrong.'
        };

    for (i = 0; i < plugins.rdMailForm.length; i++) {
      var $form = $(plugins.rdMailForm[i]),
          formHasCaptcha = false;

      $form.attr('novalidate', 'novalidate').ajaxForm({
        data: {
          "form-type": $form.attr("data-form-type") || "contact",
          "counter": i
        },
        beforeSubmit: function () {
          var form = $(plugins.rdMailForm[this.extraData.counter]),
              inputs = form.find("[data-constraints]"),
              output = $("#" + form.attr("data-form-output")),
              captcha = form.find('.recaptcha'),
              captchaFlag = true;

          output.removeClass("active error success");

          if (isValidated(inputs, captcha)) {

            // veify reCaptcha
            if(captcha.length) {
              var captchaToken = captcha.find('.g-recaptcha-response').val(),
                  captchaMsg = {
                    'CPT001': 'Please, setup you "site key" and "secret key" of reCaptcha',
                    'CPT002': 'Something wrong with google reCaptcha'
                  }

              formHasCaptcha = true;

              $.ajax({
                method: "POST",
                url: "bat/reCaptcha.php",
                data: {'g-recaptcha-response': captchaToken},
                async: false
              })
                .done(function (responceCode) {
                  if (responceCode != 'CPT000') {
                    if (output.hasClass("snackbars")) {
                      output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + captchaMsg[responceCode] + '</span></p>')

                      setTimeout(function () {
                        output.removeClass("active");
                      }, 3500);

                      captchaFlag = false;
                    } else {
                      output.html(captchaMsg[responceCode]);
                    }

                    output.addClass("active");
                  }
                });
            }

            if(!captchaFlag) {
              return false;
            }

            form.addClass('form-in-process');

            if (output.hasClass("snackbars")) {
              output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');
              output.addClass("active");
            }
          } else {
            return false;
          }
        },
        error: function (result) {
          var output = $("#" + $(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output"));
          output.text(msg[result]);
          form.removeClass('form-in-process');

          if(formHasCaptcha) {
            grecaptcha.reset();
          }
        },
        success: function (result) {
          var form = $(plugins.rdMailForm[this.extraData.counter]),
              output = $("#" + form.attr("data-form-output"));

          form
              .addClass('success')
              .removeClass('form-in-process');

          if(formHasCaptcha) {
            grecaptcha.reset();
          }

          result = result.length == 5 ? result : 'MF255';
          output.text(msg[result]);

          if (result === "MF000") {
            if (output.hasClass("snackbars")) {
              output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + msg[result] + '</span></p>');
            } else {
              output.addClass("active success");
            }
          } else {
            if (output.hasClass("snackbars")) {
              output.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + msg[result] + '</span></p>');
            } else {
              output.addClass("active error");
            }
          }

          form.clearForm();
          form.find('input, textarea').blur();

          setTimeout(function () {
            output.removeClass("active error success");
            form.removeClass('success');
          }, 3500);
        }
      });
    }
  }
  

  /**
   * Custom Waypoints
   */
  if (plugins.customWaypoints.length) {
    var i;
    $document.delegate("[data-custom-scroll-to]", "click", function (e) {
      e.preventDefault();
      $("body, html").stop().animate({
        scrollTop: $("#" + $(this).attr('data-custom-scroll-to')).offset().top
      }, 1000, function () {
        $(window).trigger("resize");
      });
    });
  }

  
  /**
   * RD Parallax
   * @description Enables RD Parallax plugin
   */
  if (plugins.rdParallax.length) {
    var i;
    $.RDParallax();

    if (!isIE && !isMobile) {
      $(window).on("scroll", function () {
        for (i = 0; i < plugins.rdParallax.length; i++) {
          var parallax = $(plugins.rdParallax[i]);
          if (isScrolledIntoView(parallax)) {
            parallax.find(".rd-parallax-inner").css("position", "fixed");
          } else {
            parallax.find(".rd-parallax-inner").css("position", "absolute");
          }
        }
      });
    }

    $("a[href='#']").on("click", function (e) {
      setTimeout(function () {
        $(window).trigger("resize");
      }, 300);
    });
  }

  /**
   * Custom Toggles
   */
  if (plugins.customToggle.length) {
    var i;
    for (i = 0; i < plugins.customToggle.length; i++) {
      var $this = $(plugins.customToggle[i]);
      $this.on('click', function (e) {
        e.preventDefault();
        $("#" + $(this).attr('data-custom-toggle')).add(this).toggleClass('active');
      });

      if ($this.attr("data-custom-toggle-disable-on-blur") === "true") {
        $("body").on("click", $this, function (e) {
          if (e.target !== e.data[0] && $("#" + e.data.attr('data-custom-toggle')).find($(e.target)).length == 0 && e.data.find($(e.target)).length == 0) {
            $("#" + e.data.attr('data-custom-toggle')).add(e.data[0]).removeClass('active');
          }
        })
      }
    }
  }

});





