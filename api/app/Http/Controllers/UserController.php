<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::latest()->paginate($this->perPage);

        return response(['data' => $users ], 200);
    }

    public function store(UserRequest $request)
    {
        $user = User::create($request->all());

        return response(['data' => $user ], 201);

    }

    public function show($id)
    {
        $user = User::findOrFail($id);

        return response(['data', $user ], 200);
    }

    public function update(UserRequest $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());

        return response(['data' => $user ], 200);
    }

    public function destroy($id)
    {
        User::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function role($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->role ], 200);
    }
    
    public function branch($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->branch ], 200);
    }
    
    public function department($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->department ], 200);
    }
    
    public function team($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->team ], 200);
    }
    
    public function files($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->files ], 200);
    }
    
    public function events($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->events ], 200);
    }
    
    public function articles($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->articles ], 200);
    }
    
    public function ideas($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->ideas ], 200);
    }
    
    public function feedbacks($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->feedbacks ], 200);
    }
    
    public function photos($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->photos ], 200);
    }
    
    public function forums($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->forums ], 200);
    }
    
    public function topics($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->topics ], 200);
    }
    
    public function comments($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->comments ], 200);
    }
    
    public function getIdeas($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->getIdeas ], 200);
    }
    
    public function getArticles($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->getArticles ], 200);
    }
    
    public function getEvents($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->getEvents ], 200);
    }
    
    public function getFiles($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->getFiles ], 200);
    }
    
    public function getPhotos($id)
    {
        $user = User::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $user->getPhotos ], 200);
    }
}
