<!DOCTYPE html>
<html class="wide wow-animation smoothscroll scrollTo" lang="{{ config('app.locale') }}">
<head>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Site Title-->
    <title>{{ config('app.name', 'Steff Beckers') }}</title>
    <meta charset="utf-8">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="keywords" content="Steff Beckers, Blog, CV, Portfolio">
    <link rel="icon" href="{{ asset('images/favicon.png') }}" type="image/png">
    <!-- Stylesheets-->
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Montserrat:400,700%7CLato:300,300italic,400,700,900%7CYesteryear">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
    <!--[if lt IE 10]>
    <div style="background: #212121; padding: 10px 0; box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3); clear: both; text-align:center; position: relative; z-index:1;"><a href="http://windows.microsoft.com/en-US/internet-explorer/"><img src="images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."></a></div>
    <script src="js/html5shiv.min.js"></script>
    <![endif]-->
</head>
<body>
    <!-- Page-->
    <div class="page text-center">
      <div id="page">
        <canvas id="bg-animation">
          <!-- Page Content-->
        </canvas>
        <main class="page-content context-dark" style="background: url(images/backgrounds/background-44-1920x1024.jpg) 0/cover no-repeat;">
          <div class="one-page">
            <div class="one-page-header">
              <!--Navbar Brand-->
              <div class="rd-navbar-brand"><a href="index.html"><img style='margin-top: -5px; margin-left: -15px;' width='200' src='images/steff/Logo_SteffBeckers_LongName_White.png' alt='Steff Beckers'/></a></div>
            </div>
            <section>
              <div class="shell">
                <div class="range">
                  <div class="range range-xs-center range-xs-middle section-110 section-cover">
                    <div class="cell-xs-12">
                      <h3 class="text-center">Under Construction</h3>
                      <p class="offset-top-30 offset-sm-top-66">My website is under construction, I am working very hard to give you the best <br class="veil reveal-sm-inline-block"> experience on my new web site.</p>
					            <p>You can contact me by mail on <a href="mailto:steff@steffbeckers.eu">steff@steffbeckers.eu</a><br class="veil reveal-sm-inline-block"> or get a quick glance at <a href="https://www.linkedin.com/in/steffbeckers/">my profile on LinkedIn</a>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="one-page-footer">
                <p class="small">&copy; <span id="copyright-year"></span> – <img class="sb-footer-icon" src="{{ asset('images/steff/icon_16px_w.png') }}" alt="SB" />Steff Beckers</p>
            </div>
          </div>
        </main>
      </div>
    </div>
    <!-- Global RD Mailform Output-->
    <div class="snackbars" id="form-output-global"></div>
    <!-- PhotoSwipe Gallery-->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
            <button class="pswp__button pswp__button--share" title="Share"></button>
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- JavaScript-->
    <script src="{{ asset('js/core.min.js') }}"></script>
    <script src="{{ asset('js/script.js') }}"></script>
  </body>
</html>