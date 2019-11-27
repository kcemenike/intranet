<?php

namespace App\Http\Controllers;

use App\Http\Requests\TagRequest;
use App\Tag;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::latest()->paginate($perPage);

        return response(['data' => $tags ], 200);
    }

    public function store(TagRequest $request)
    {
        $tag = Tag::create($request->all());

        return response(['data' => $tag ], 201);

    }

    public function show($id)
    {
        $tag = Tag::findOrFail($id);

        return response(['data', $tag ], 200);
    }

    public function update(TagRequest $request, $id)
    {
        $tag = Tag::findOrFail($id);
        $tag->update($request->all());

        return response(['data' => $tag ], 200);
    }

    public function destroy($id)
    {
        Tag::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function tagable($id)
    {
        $tag = Tag::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $tag->tagable ], 200);
    }
}
