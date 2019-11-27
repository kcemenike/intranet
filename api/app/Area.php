<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    protected $with = ['state'];
    protected $guarded = [];

    public function state()
    {
        return $this->belongsTo('App\State');
    }

    public function branches()
    {
        return $this->hasMany('App\Branch');
    }
    
}
