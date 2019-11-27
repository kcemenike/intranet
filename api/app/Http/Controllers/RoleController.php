<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use App\Role;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::latest()->paginate($this->perPage);

        return response(['data' => $roles ], 200);
    }

    public function store(RoleRequest $request)
    {
        $role = Role::create($request->all());

        return response(['data' => $role ], 201);

    }

    public function show($id)
    {
        $role = Role::findOrFail($id);

        return response(['data', $role ], 200);
    }

    public function update(RoleRequest $request, $id)
    {
        $role = Role::findOrFail($id);
        $role->update($request->all());

        return response(['data' => $role ], 200);
    }

    public function destroy($id)
    {
        Role::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function users($id)
    {
        $role = Role::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $role->users ], 200);
    }
}
