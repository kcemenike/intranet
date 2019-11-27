<?php

namespace App\Http\Controllers;

use App\Http\Requests\FileableRequest;
use App\Fileable;

class FileableController extends Controller
{
    public function index()
    {
        $fileables = Fileable::latest()->paginate($this->perPage);

        return response(['data' => $fileables ], 200);
    }

    public function store(FileableRequest $request)
    {
        $fileable = Fileable::create($request->all());

        return response(['data' => $fileable ], 201);

    }

    public function show($id)
    {
        $fileable = Fileable::findOrFail($id);

        return response(['data', $fileable ], 200);
    }

    public function update(FileableRequest $request, $id)
    {
        $fileable = Fileable::findOrFail($id);
        $fileable->update($request->all());

        return response(['data' => $fileable ], 200);
    }

    public function destroy($id)
    {
        Fileable::destroy($id);

        return response(['data' => true ], 204);
    }
    
}
