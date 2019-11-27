<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $with = ['user'];
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo('App\User');
    } 

    public function getTags()
    {
        return $this->morphMany('App\Tag', 'tagable');
    }
    
    public function getUsers()
    {
        return $this->morphedByMany('App\User', 'fileable');
    }

    public function getBranches()
    {
        return $this->morphedByMany('App\Branch', 'fileable');
    }

    public function getDepartments()
    {
        return $this->morphedByMany('App\Department', 'fileable');
    }

    public function getTeams()
    {
        return $this->morphedByMany('App\Team', 'fileable');
    }
}
