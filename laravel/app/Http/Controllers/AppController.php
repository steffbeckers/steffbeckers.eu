<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AppController extends Controller
{
    public function __construct()
    {
    }

    public function about()
    {
        return view('about-me');
    }

    public function test1()
    {
        return view('test1');
    }
}
