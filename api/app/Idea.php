<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Idea extends Model
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
        return $this->morphedByMany('App\User', 'ideable');
    }

    public function getBranches()
    {
        return $this->morphedByMany('App\Branch', 'ideable');
    }

    public function getDepartments()
    {
        return $this->morphedByMany('App\Department', 'ideable');
    }

    public function getTeams()
    {
        return $this->morphedByMany('App\Team', 'ideable');
    }
}
