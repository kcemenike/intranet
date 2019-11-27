<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $with = ['branch'];
    protected $guarded = [];
    
    public function branch()
    {
        return $this->belongsTo('App\Branch');
    }
    
    public function teams()
    {
        return $this->hasMany('App\Team');
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
