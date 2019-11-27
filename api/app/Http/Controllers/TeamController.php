<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeamRequest;
use App\Team;

class TeamController extends Controller
{
    public function index()
    {
        $teams = Team::latest()->paginate($this->perPage);

        return response(['data' => $teams ], 200);
    }

    public function store(TeamRequest $request)
    {
        $team = Team::create($request->all());

        return response(['data' => $team ], 201);

    }

    public function show($id)
    {
        $team = Team::findOrFail($id);

        return response(['data', $team ], 200);
    }

    public function update(TeamRequest $request, $id)
    {
        $team = Team::findOrFail($id);
        $team->update($request->all());

        return response(['data' => $team ], 200);
    }

    public function destroy($id)
    {
        Team::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function department($id)
    {
        $team = Team::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $team->department ], 200);
    }
    
    public function users($id)
    {
        $team = Team::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $team->users ], 200);
    }
    
    public function getIdeas($id)
    {
        $team = Team::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $team->getIdeas ], 200);
    }
    
    public function getArticles($id)
    {
        $team = Team::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $team->getArticles ], 200);
    }
    
    public function getEvents($id)
    {
        $team = Team::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $team->getEvents ], 200);
    }
    
    public function getFiles($id)
    {
        $team = Team::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $team->getFiles ], 200);
    }
    
    public function getPhotos($id)
    {
        $team = Team::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $team->getPhotos ], 200);
    }
}
