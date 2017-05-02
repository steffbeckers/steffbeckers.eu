@extends('layouts.app')

@section('js')
<script src="{{ asset('js/script.js') }}"></script>
@endsection

@section('content')
<!-- Page Content-->
<main class="page-content">
    <!-- Who i Am-->
    <section class="section-98 section-sm-110">
        <div class="shell">
            <h1>Who I Am</h1>
            <hr class="divider bg-mantis">
            <div class="range range-xs-center offset-top-20">
                <div class="cell-sm-9 cell-md-6">
                    <!-- Member Block Type-2-->
                    <div class="center-block"><img class="img-circle" src="{{ asset('images/steff/Steff-1-Crop-Site.png') }}" alt=""></div>
                    <h4>Hello! My name is Steff Beckers, <br/> and I'm in love with web development</h4>
                    <p>Info text</p>
                    <ul class="list-inline list-inline-lg list-inline-dashed list-inline-dashed-wide list-inline-picton-blue">
                        <li class="big"><a class="text-bold text-uppercase fa-linkedin" href="{{ config('app.url-linkedin', 'https://www.linkedin.com/in/steffbeckers') }}"><span class="veil reveal-md-inline-block">LinkedIn</span></a></li>
                        <li class="big"><a class="text-bold text-uppercase fa-twitter" href="{{ config('app.url-twitter', 'https://twitter.com/steffbeckers') }}"><span class="veil reveal-md-inline-block">Twitter</span></a></li>
                        <li class="big"><a class="text-bold text-uppercase fa-github" href="{{ config('app.url-github', 'https://github.com/steffbeckers') }}"><span class="veil reveal-md-inline-block">Github</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- What i Do-->
    <section class="section-98 section-sm-110 context-dark" style="background: #191919 url(images/index-09.png);">
        <div class="shell">
            <h1>What I Do</h1>
            <hr class="divider bg-mantis">
            <div class="range range-xs-center offset-top-0">
                <div class="cell-sm-10">
                    <p>Web design is my expertise. I offer a wide range of services from wireframing to full-cycle web development. No matter what size is your project of – it will be done quickly and on the highest quality level.</p>
                </div>
            </div>
            <div class="range range-sm-center offset-top-66">
                <div class="cell-sm-8 cell-md-12">
                    <div class="range">
                        <div class="cell-sm-6 cell-md-3">
                            <!-- Circle Progress bar-circle-->
                            <div class="progress-bar-circle" data-value="0.87" data-gradient="#5aba67, #78c157" data-empty-fill="rgb(245,245,245)"><span></span></div>
                            <h4 class="text-bold offset-top-20">Photoshop</h4>
                        </div>
                        <div class="offset-top-41 cell-sm-6 offset-sm-top-0 cell-md-3">
                            <!-- Circle Progress bar-circle-->
                            <div class="progress-bar-circle" data-value="0.75" data-gradient="#f5bf2f, #f3a43d" data-empty-fill="rgb(245,245,245)"><span></span></div>
                            <h4 class="text-bold offset-top-20">Sketch 3</h4>
                        </div>
                        <div class="offset-top-41 cell-sm-6 cell-md-3 offset-md-top-0">
                            <!-- Circle Progress bar-circle-->
                            <div class="progress-bar-circle" data-value="0.42" data-gradient="#64aae1, #79ccf2" data-empty-fill="rgb(245,245,245)"><span></span></div>
                            <h4 class="text-bold offset-top-20">Coding</h4>
                        </div>
                        <div class="offset-top-41 cell-sm-6 cell-md-3 offset-md-top-0">
                            <!-- Circle Progress bar-circle-->
                            <div class="progress-bar-circle" data-value="0.65" data-gradient="#f54b0f, #e50a0a" data-empty-fill="rgb(245,245,245)"><span></span></div>
                            <h4 class="text-bold offset-top-20">Development</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
@endsection