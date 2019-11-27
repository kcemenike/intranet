<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{    
    use Notifiable;
    
    protected $with = ['role', 'branch', 'department', 'team'];
    protected $guarded = [];
    protected $hidden = ['password'];

    
    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function role()
    {
        return $this->belongsTo('App\Role');
    }

    public function branch()
    {
        return $this->belongsTo('App\Branch');
    }

    public function department()
    {
        return $this->belongsTo('App\Department');
    }

    public function team()
    {
        return $this->belongsTo('App\Team');
    }

    public function files()
    {
        return $this->hasMany('App\File');
    }

    public function events()
    {
        return $this->hasMany('App\Event');
    }

    public function articles()
    {
        return $this->hasMany('App\Article');
    }

    public function ideas()
    {
        return $this->hasMany('App\Idea');
    }

    public function feedbacks()
    {
        return $this->hasMany('App\Idea');
    }

    public function photos()
    {
        return $this->hasMany('App\Photo');
    }

    public function forums()
    {
        return $this->hasMany('App\Forum');
    }

    public function topics()
    {
        return $this->hasMany('App\Topic');
    }

    public function comments()
    {
        return $this->hasMany('App\Comment');
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
