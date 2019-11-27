<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    protected $with = ['user'];
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function forum()
    {
        return $this->belongsTo('App\Forum');
    }

    public function getComments()
    {
        return $this->morphMany('App\Comment', 'commentable');
    }
}
