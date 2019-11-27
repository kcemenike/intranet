<?php

namespace App\Http\Controllers;

use App\Http\Requests\PhotoableRequest;
use App\Photoable;

class PhotoableController extends Controller
{
    public function index()
    {
        $photoables = Photoable::latest()->paginate($perPage);

        return response(['data' => $photoables ], 200);
    }

    public function store(PhotoableRequest $request)
    {
        $photoable = Photoable::create($request->all());

        return response(['data' => $photoable ], 201);

    }

    public function show($id)
    {
        $photoable = Photoable::findOrFail($id);

        return response(['data', $photoable ], 200);
    }

    public function update(PhotoableRequest $request, $id)
    {
        $photoable = Photoable::findOrFail($id);
        $photoable->update($request->all());

        return response(['data' => $photoable ], 200);
    }

    public function destroy($id)
    {
        Photoable::destroy($id);

        return response(['data' => true ], 204);
    }

}
