<!DOCTYPE html>
<html class="wide wow-animation smoothscroll scrollTo" lang="en">
<head>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Steff Beckers') }} - 404</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="keywords" content="Steff Beckers, Blog, CV, Portfolio">
    <link rel="icon" href="{{ asset('images/favicon.png') }}" type="image/png">
    <!-- Stylesheets-->
    <link rel="stylesheet" type="text/css"
          href="//fonts.googleapis.com/css?family=Montserrat:400,700%7CLato:300,300italic,400,700,900%7CYesteryear">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <!--[if lt IE 10]>
    <div style="background: #212121; padding: 10px 0; box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3); clear: both; text-align:center; position: relative; z-index:1;">
        <a href="http://windows.microsoft.com/en-US/internet-explorer/"><img
                src="images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820"
                alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."></a>
    </div>
    <script src="js/html5shiv.min.js"></script>
    <![endif]-->
    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body>
<!-- Page-->
<div class="page text-center">
    <!-- Page Content-->
    <main class="page-content"
          style="background: #191919 url(images/backgrounds/background-16-1920x955.jpg) 0/cover no-repeat;">
        <div class="one-page">
            <div class="one-page-header">
                <!--Navbar Brand-->
                <div class="rd-navbar-brand"><a href="index.html"><img style='margin-top: -5px; margin-left: -15px;' width='200' src='images/steff/Logo_SteffBeckers_LongName_White.png' alt='Steff Beckers'/></a></div>
            </div>
            <!-- 404-->
            <section class="context-dark">
                <div class="shell">
                    <div class="range">
                        <div class="section-110 section-cover range range-xs-center range-xs-middle">
                            <div class="cell-lg-6">
                                <h3>Sorry, but this page was not found</h3>
                                <hr class="divider bg-mantis">
                                <div class="text-extra-big text-light">404</div>
                                <p class="offset-top-50">You may have mistyped the address or the page may have moved.</p>
                                <div class="group offset-top-30">
                                    <a class="btn btn-icon btn-icon-left btn-primary" href="/">
                                    <span class="icon mdi mdi-arrow-left"></span>back to home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="one-page-footer">
                <p class="small" style="color: #FFF">&copy; <span id="copyright-year"></span> – <img class="sb-footer-icon" src="{{ asset('images/steff/icon_16px_w.png') }}" alt="SB" />Steff Beckers</p>
            </div>
        </div>
    </main>
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
<script src="js/core.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>