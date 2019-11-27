<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Forum extends Model
{
    protected $with = ['user'];
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function topics()
    {
        return $this->hasMany('App\Topic');
    }

    public function getUsers()
    {
        return $this->morphedByMany('App\User', 'forumable');
    }

    public function getBranches()
    {
        return $this->morphedByMany('App\Branch', 'forumable');
    }

    public function getDepartments()
    {
        return $this->morphedByMany('App\Department', 'forumable');
    }

    public function getTeams()
    {
        return $this->morphedByMany('App\Team', 'forumable');
    }
}
