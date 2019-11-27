<?php

namespace App\Http\Controllers;

use App\Http\Requests\IdeableRequest;
use App\Ideable;

class IdeableController extends Controller
{
    public function index()
    {
        $ideables = Ideable::latest()->paginate($this->perPage);

        return response(['data' => $ideables ], 200);
    }

    public function store(IdeableRequest $request)
    {
        $ideable = Ideable::create($request->all());

        return response(['data' => $ideable ], 201);

    }

    public function show($id)
    {
        $ideable = Ideable::findOrFail($id);

        return response(['data', $ideable ], 200);
    }

    public function update(IdeableRequest $request, $id)
    {
        $ideable = Ideable::findOrFail($id);
        $ideable->update($request->all());

        return response(['data' => $ideable ], 200);
    }

    public function destroy($id)
    {
        Ideable::destroy($id);

        return response(['data' => true ], 204);
    }
    
}
