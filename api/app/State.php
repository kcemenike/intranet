<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    protected $with = ['country'];
    protected $guarded = [];
    
    public function country()
    {
        return $this->belongsTo('App\Country');
    }

    public function branches()
    {
        return $this->hasMany('App\Branch');
    }
    
}
