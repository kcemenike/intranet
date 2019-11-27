<?php

namespace App\Http\Controllers;

use App\Http\Requests\TopicRequest;
use App\Topic;

class TopicController extends Controller
{
    public function index()
    {
        $topics = Topic::latest()->paginate($this->perPage);

        return response(['data' => $topics ], 200);
    }

    public function store(TopicRequest $request)
    {
        $topic = Topic::create($request->all());

        return response(['data' => $topic ], 201);

    }

    public function show($id)
    {
        $topic = Topic::findOrFail($id);

        return response(['data', $topic ], 200);
    }

    public function update(TopicRequest $request, $id)
    {
        $topic = Topic::findOrFail($id);
        $topic->update($request->all());

        return response(['data' => $topic ], 200);
    }

    public function destroy($id)
    {
        Topic::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function user($id)
    {
        $topic = Topic::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $topic->user ], 200);
    }
    
    public function forum($id)
    {
        $topic = Topic::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $topic->forum ], 200);
    }
    
    
    public function getComments($id)
    {
        $topic = Topic::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $topic->getComments ], 200);
    }
}
