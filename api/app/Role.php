<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $with = [];
    protected $guarded = [];
    
    public function users()
    {
        return $this->hasMany('App\User');
    }
}
