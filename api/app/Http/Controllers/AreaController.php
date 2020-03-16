<?php

namespace App\Http\Controllers;

use App\Http\Requests\AreaRequest;
use App\Area;

class AreaController extends Controller
{
    public function index()
    {
        $areas = Area::latest()->paginate($this->perPage);

        return response(['data' => $areas ], 200);
    }

    public function store(AreaRequest $request)
    {
        $area = Area::create($request->all());

        return response(['data' => $area ], 201);

    }

    public function show($id)
    {
        $area = Area::findOrFail($id);

        return response(['data', $area ], 200);
    }

    public function update(AreaRequest $request, $id)
    {
        $area = Area::findOrFail($id);
        $area->update($request->all());

        return response(['data' => $area ], 200);
    }

    public function destroy($id)
    {
        Area::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function state($id)
    {
        $area = Area::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $area->state ], 200);
    }
    
    public function branches($id)
    {
        $area = Area::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $area->branches ], 200);
    }
    
}
