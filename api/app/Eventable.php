<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Eventable extends Model
{
    protected $with = [];
    protected $guarded = [];
}
