<?php

namespace App\Http\Controllers;

use App\Http\Requests\StateRequest;
use App\State;

class StateController extends Controller
{
    public function index()
    {
        $states = State::latest()->paginate($this->perPage);

        return response(['data' => $states ], 200);
    }

    public function store(StateRequest $request)
    {
        $state = State::create($request->all());

        return response(['data' => $state ], 201);

    }

    public function show($id)
    {
        $state = State::findOrFail($id);

        return response(['data', $state ], 200);
    }

    public function update(StateRequest $request, $id)
    {
        $state = State::findOrFail($id);
        $state->update($request->all());

        return response(['data' => $state ], 200);
    }

    public function destroy($id)
    {
        State::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function country($id)
    {
        $state = State::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $state->country ], 200);
    }
    
    public function branches($id)
    {
        $state = State::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $state->branches ], 200);
    }
}
