<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
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
     
    public function getComments()
    {
        return $this->morphMany('App\Comment', 'commentable');
    }

    public function getUsers()
    {
        return $this->morphedByMany('App\User', 'articleable');
    }

    public function getBranches()
    {
        return $this->morphedByMany('App\Branch', 'articleable');
    }

    public function getDepartments()
    {
        return $this->morphedByMany('App\Department', 'articleable');
    }

    public function getTeams()
    {
        return $this->morphedByMany('App\Team', 'articleable');
    }
}
