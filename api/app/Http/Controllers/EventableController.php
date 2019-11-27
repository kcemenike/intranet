<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventableRequest;
use App\Eventable;

class EventableController extends Controller
{
    public function index()
    {
        $eventables = Eventable::latest()->paginate($this->perPage);

        return response(['data' => $eventables ], 200);
    }

    public function store(EventableRequest $request)
    {
        $eventable = Eventable::create($request->all());

        return response(['data' => $eventable ], 201);

    }

    public function show($id)
    {
        $eventable = Eventable::findOrFail($id);

        return response(['data', $eventable ], 200);
    }

    public function update(EventableRequest $request, $id)
    {
        $eventable = Eventable::findOrFail($id);
        $eventable->update($request->all());

        return response(['data' => $eventable ], 200);
    }

    public function destroy($id)
    {
        Eventable::destroy($id);

        return response(['data' => true ], 204);
    }
    
}
