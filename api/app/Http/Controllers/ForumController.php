<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForumRequest;
use App\Forum;

class ForumController extends Controller
{
    public function index()
    {
        $forums = Forum::latest()->paginate($this->perPage);

        return response(['data' => $forums ], 200);
    }

    public function store(ForumRequest $request)
    {
        $forum = Forum::create($request->all());

        return response(['data' => $forum ], 201);

    }

    public function show($id)
    {
        $forum = Forum::findOrFail($id);

        return response(['data', $forum ], 200);
    }

    public function update(ForumRequest $request, $id)
    {
        $forum = Forum::findOrFail($id);
        $forum->update($request->all());

        return response(['data' => $forum ], 200);
    }

    public function destroy($id)
    {
        Forum::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function topics($id)
    {
        $forum = Forum::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $forum->topics ], 200);
    }
    
    public function user($id)
    {
        $forum = Forum::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $forum->user ], 200);
    }

    public function getUsers($id)
    {
        $forum = Forum::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $forum->getUsers ], 200);
    }
    
    public function getBranches($id)
    {
        $forum = Forum::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $forum->getBranches ], 200);
    }
    
    public function getDepartments($id)
    {
        $forum = Forum::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $forum->getDepartments ], 200);
    }
    
    public function getTeams($id)
    {
        $forum = Forum::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $forum->getTeams ], 200);
    }
}
