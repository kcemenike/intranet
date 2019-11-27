<?php

namespace App\Http\Controllers;

use App\Http\Requests\IdeaRequest;
use App\Idea;

class IdeaController extends Controller
{
    public function index()
    {
        $ideas = Idea::latest()->paginate($this->perPage);

        return response(['data' => $ideas ], 200);
    }

    public function store(IdeaRequest $request)
    {
        $idea = Idea::create($request->all());

        return response(['data' => $idea ], 201);

    }

    public function show($id)
    {
        $idea = Idea::findOrFail($id);

        return response(['data', $idea ], 200);
    }

    public function update(IdeaRequest $request, $id)
    {
        $idea = Idea::findOrFail($id);
        $idea->update($request->all());

        return response(['data' => $idea ], 200);
    }

    public function destroy($id)
    {
        Idea::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function user($id)
    {
        $idea = Idea::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $idea->user ], 200);
    }
    
    public function getUsers($id)
    {
        $idea = Idea::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $idea->getUsers ], 200);
    }
    
    public function getBranches($id)
    {
        $idea = Idea::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $idea->getBranches ], 200);
    }
    
    public function getDepartments($id)
    {
        $idea = Idea::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $idea->getDepartments ], 200);
    }
    
    public function getTeams($id)
    {
        $idea = Idea::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $idea->getTeams ], 200);
    }
}
