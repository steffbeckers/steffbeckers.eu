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
    <div id="app">
        <!-- Page-->
        <div class="page text-center">
            <!-- Page Header-->
            <header class="page-head">
                <!-- RD Navbar Transparent-->
                <div class="rd-navbar-wrap">
                    <nav class="rd-navbar rd-navbar-default rd-navbar-light" data-md-device-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-static" data-lg-auto-height="false" data-md-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-stick-up="true">
                        <div class="rd-navbar-inner">
                            <!-- RD Navbar Panel-->
                            <div class="rd-navbar-panel">
                                <!-- RD Navbar Toggle-->
                                <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar, .rd-navbar-nav-wrap"><span></span></button>
                                <!--Navbar Brand-->
                                <div class="rd-navbar-brand"><a href="index.html"><img style='margin-top: -5px;margin-left: -15px;' width='138' height='31' src='images/intense/logo-dark.png' alt=''/></a></div>
                            </div>
                            <div class="rd-navbar-menu-wrap">
                                <div class="rd-navbar-nav-wrap">
                                    <div class="rd-navbar-mobile-scroll">
                                        <!--Navbar Brand Mobile-->
                                        <div class="rd-navbar-mobile-brand"><a href="index.html"><img style='margin-top: -5px;margin-left: -15px;' width='138' height='31' src='images/intense/logo-dark.png' alt=''/></a></div>
                                        <div class="form-search-wrap">
                                            <!-- RD Search Form-->
                                            <form class="form-search rd-search" action="search-results.html" method="GET">
                                                <div class="form-group">
                                                    <label class="form-label form-search-label form-label-sm" for="rd-navbar-form-search-widget">Search</label>
                                                    <input class="form-search-input input-sm form-control #{inputClass}" id="rd-navbar-form-search-widget" type="text" name="s" autocomplete="off"/>
                                                </div>
                                                <button class="form-search-submit" type="submit"><span class="mdi mdi-magnify"></span></button>
                                            </form>
                                        </div>
                                        <!-- RD Navbar Nav-->
                                        <ul class="rd-navbar-nav">
                                            <li><a href="{{ url('blog') }}"><span>Blog</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <!--RD Navbar Search-->
                                <div class="rd-navbar-search"><a class="rd-navbar-search-toggle mdi" data-rd-navbar-toggle=".rd-navbar-inner,.rd-navbar-search" href="#"><span></span></a>
                                    <form class="rd-navbar-search-form search-form-icon-right rd-search" action="search-results.html" method="GET">
                                        <div class="form-group">
                                            <label class="form-label" for="rd-navbar-search-form-input">Type and hit enter...</label>
                                            <input class="rd-navbar-search-form-input form-control form-control-gray-lightest" id="rd-navbar-search-form-input" type="text" name="s" autocomplete="off"/>
                                        </div>
                                        <!--button(type="submit").rd-navbar-search-form-submit.mdi.mdi-magnify-->
                                    </form>
                                    <!--div.rd-navbar-live-search-results-->
                                    <!--button(data-rd-navbar-toggle=".rd-navbar-search, .rd-navbar-inner, .rd-navbar-live-search-results").rd-navbar-search-toggle-->
                                    <!--  span-->
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <!-- Classic Breadcrumbs-->
            <section class="breadcrumb-classic">
                <div class="shell section-34 section-sm-50">
                    <div class="range range-lg-middle">
                        <div class="cell-lg-2 veil reveal-sm-block cell-lg-push-2"><span class="mdi mdi-account-convert icon icon-white"></span></div>
                        <div class="cell-lg-5 veil reveal-lg-block cell-lg-push-1 text-lg-left">
                            <h2><span class="big">About Me</span></h2>
                        </div>
                    </div>
                </div>
                <svg class="svg-triangle-bottom" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <lineargradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#{startColor};stop-opacity:1;"></stop>
                            <stop offset="100%" style="stop-color:#{endColor};stop-opacity:1;"></stop>
                        </lineargradient>
                    </defs>
                    <polyline points="0,0 60,0 29,29" fill="url(##{id})"></polyline>
                </svg>
            </section>
            @yield('content')
            <!-- Page Footers-->
            <!-- Default footer-->
            <footer class="section-relative section-top-66 section-bottom-34 page-footer bg-gray-base context-dark">
                <div class="shell">
                    <div class="range range-sm-center text-lg-left">
                        <div class="cell-sm-8 cell-md-12">
                            <div class="range range-xs-center">
                                <div class="cell-xs-7 text-xs-left cell-md-4 cell-lg-3 cell-lg-push-4">
                                    <h6 class="text-uppercase text-spacing-60">Latest news</h6>
                                    <!-- Post Widget-->
                                    <article class="post widget-post text-left text-picton-blue"><a href="blog-classic-single-post.html">
                                            <div class="unit unit-horizontal unit-spacing-xs unit-middle">
                                                <div class="unit-body">
                                                    <div class="post-meta"><span class="icon-xxs mdi mdi-arrow-right"></span>
                                                        <time class="text-dark" datetime="2016-01-01">05/14/2015</time>
                                                    </div>
                                                    <div class="post-title">
                                                        <h6 class="text-regular">Let’s Change the world</h6>
                                                    </div>
                                                </div>
                                            </div></a></article>
                                    <!-- Post Widget-->
                                    <article class="post widget-post text-left text-picton-blue"><a href="blog-classic-single-post.html">
                                            <div class="unit unit-horizontal unit-spacing-xs unit-middle">
                                                <div class="unit-body">
                                                    <div class="post-meta"><span class="icon-xxs mdi mdi-arrow-right"></span>
                                                        <time class="text-dark" datetime="2016-01-01">05/14/2015</time>
                                                    </div>
                                                    <div class="post-title">
                                                        <h6 class="text-regular">The meaning of Web Design</h6>
                                                    </div>
                                                </div>
                                            </div></a></article>
                                    <!-- Post Widget-->
                                    <article class="post widget-post text-left text-picton-blue"><a href="blog-classic-single-post.html">
                                            <div class="unit unit-horizontal unit-spacing-xs unit-middle">
                                                <div class="unit-body">
                                                    <div class="post-meta"><span class="icon-xxs mdi mdi-arrow-right"></span>
                                                        <time class="text-dark" datetime="2016-01-01">05/14/2015</time>
                                                    </div>
                                                    <div class="post-title">
                                                        <h6 class="text-regular">Get Started with TemplateMonster</h6>
                                                    </div>
                                                </div>
                                            </div></a></article>
                                </div>
                                <div class="cell-xs-5 offset-top-41 offset-xs-top-0 text-xs-left cell-md-3 cell-lg-2 cell-lg-push-3">
                                    <h6 class="text-uppercase text-spacing-60">Useful Links</h6>
                                    <div class="reveal-block">
                                        <div class="reveal-inline-block">
                                            <ul class="list list-marked">
                                                <li><a href="about-us.html">About Us</a></li>
                                                <li><a href="contact-us.html">Contact Us</a></li>
                                                <li><a href="services.html">Services</a></li>
                                                <li><a href="pricing.html">Pricing</a></li>
                                                <li><a href="clients.html">Clients</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="cell-xs-12 offset-top-41 cell-md-5 offset-md-top-0 text-md-left cell-lg-4 cell-lg-push-2">
                                    <h6 class="text-uppercase text-spacing-60">Newsletter</h6>
                                    <p>Keep up with our always upcoming  product features  and technologies. Enter your e-mail and subscribe to  our newsletter.</p>
                                    <div class="offset-top-30">
                                        <form class="rd-mailform" data-form-output="form-subscribe-footer" data-form-type="subscribe" method="post" action="bat/rd-mailform.php">
                                            <div class="form-group">
                                                <div class="input-group input-group-sm"><span class="input-group-addon"><span class="input-group-icon mdi mdi-email"></span></span>
                                                    <input class="form-control" placeholder="Type your e-mail" type="email" name="email" data-constraints="@Required @Email"><span class="input-group-btn">
                              <button class="btn btn-sm btn-primary" type="submit">Subscribe</button></span>
                                                </div>
                                            </div>
                                            <div class="form-output" id="form-subscribe-footer"></div>
                                        </form>
                                    </div>
                                </div>
                                <div class="cell-xs-12 offset-top-66 cell-lg-3 cell-lg-push-1 offset-lg-top-0">
                                    <!-- Footer brand-->
                                    <div class="footer-brand"><a href="index.html"><img style='margin-top: -5px;margin-left: -15px;' width='138' height='31' src='images/intense/logo-light.png' alt=''/></a></div>
                                    <p class="text-darker offset-top-4">Feel the power of future</p>
                                    <ul class="list-inline">
                                        <li><a class="icon fa fa-facebook icon-xxs icon-circle icon-darkest-filled" href="#"></a></li>
                                        <li><a class="icon fa fa-twitter icon-xxs icon-circle icon-darkest-filled" href="#"></a></li>
                                        <li><a class="icon fa fa-google-plus icon-xxs icon-circle icon-darkest-filled" href="#"></a></li>
                                        <li><a class="icon fa fa-linkedin icon-xxs icon-circle icon-darkest-filled" href="#"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shell offset-top-50">
                    <p class="small text-darker">&copy; <span id="copyright-year"></span> - Steff Beckers
                        <!-- {%FOOTER_LINK}-->
                    </p>
                </div>
            </footer>
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
    </div>
    <!-- JavaScript-->
    <script src="{{ asset('js/core.min.js') }}"></script>
	@yield('js')
</body>
</html>
