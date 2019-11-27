<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $with = [];
    protected $guarded = [];
    
    public function states()
    {
        return $this->hasMany('App\States');
    }
    
    public function branches()
    {
        return $this->hasMany('App\Branch');
    }
    
    public function teams()
    {
        return $this->hasMany('App\Team');
    }

}
