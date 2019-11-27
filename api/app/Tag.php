<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $with = [];
    protected $guarded = [];

    public function tagable()
    {
        return $this->morphTo();
    }
    
}
