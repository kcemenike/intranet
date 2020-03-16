<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForumableRequest;
use App\Forumable;

class ForumableController extends Controller
{
    public function index()
    {
        $forumables = Forumable::latest()->paginate($this->perPage);

        return response(['data' => $forumables ], 200);
    }

    public function store(ForumableRequest $request)
    {
        $forumable = Forumable::create($request->all());

        return response(['data' => $forumable ], 201);

    }

    public function show($id)
    {
        $forumable = Forumable::findOrFail($id);

        return response(['data', $forumable ], 200);
    }

    public function update(ForumableRequest $request, $id)
    {
        $forumable = Forumable::findOrFail($id);
        $forumable->update($request->all());

        return response(['data' => $forumable ], 200);
    }

    public function destroy($id)
    {
        Forumable::destroy($id);

        return response(['data' => null ], 204);
    }
}
