<?php

namespace App;

use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    use Searchable;

    
}
