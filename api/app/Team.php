<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $with = ['department'];
    protected $guarded = [];
    
    public function department()
    {
        return $this->belongsTo('App\Department');
    }

    public function users()
    {
        return $this->hasMany('App\User');
    }
    
    public function getIdeas()
    {
        return $this->morphToMany('App\Idea', 'ideable');
    }

    public function getArticles()
    {
        return $this->morphToMany('App\Article', 'articleable');
    }

    public function getEvents()
    {
        return $this->morphToMany('App\Event', 'eventable');
    }

    public function getFiles()
    {
        return $this->morphToMany('App\File', 'fileable');
    }

    public function getPhotos()
    {
        return $this->morphToMany('App\Photo', 'photoable');
    }
    
}
