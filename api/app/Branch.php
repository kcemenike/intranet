<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    protected $with = ['country', 'state', 'area'];
    protected $guarded = [];
    
    public function country()
    {
        return $this->belongsTo('App\Country');
    }
    
    public function state()
    {
        return $this->belongsTo('App\Country');
    }
    
    public function area()
    {
        return $this->belongsTo('App\Country');
    }
    
    public function departments()
    {
        return $this->hasMany('App\Department');
    }
    
    public function users()
    {
        return $this->hasMany('App\User');
    }
    
}
