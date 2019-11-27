<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticleableRequest;
use App\Articleable;

class ArticleableController extends Controller
{
    public function index()
    {
        $articleables = Articleable::latest()->paginate($this->perPage);

        return response(['data' => $articleables ], 200);
    }

    public function store(ArticleableRequest $request)
    {
        $articleable = Articleable::create($request->all());

        return response(['data' => $articleable ], 201);

    }

    public function show($id)
    {
        $articleable = Articleable::findOrFail($id);

        return response(['data', $articleable ], 200);
    }

    public function update(ArticleableRequest $request, $id)
    {
        $articleable = Articleable::findOrFail($id);
        $articleable->update($request->all());

        return response(['data' => $articleable ], 200);
    }

    public function destroy($id)
    {
        Articleable::destroy($id);

        return response(['data' => true ], 204);
    }
    
}
