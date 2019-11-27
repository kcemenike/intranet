<?php

namespace App\Http\Controllers;

use App\Http\Requests\DepartmentRequest;
use App\Department;

class DepartmentController extends Controller
{
    public function index()
    {
        $departments = Department::latest()->paginate($this->perPage);

        return response(['data' => $departments ], 200);
    }

    public function store(DepartmentRequest $request)
    {
        $department = Department::create($request->all());

        return response(['data' => $department ], 201);

    }

    public function show($id)
    {
        $department = Department::findOrFail($id);

        return response(['data', $department ], 200);
    }

    public function update(DepartmentRequest $request, $id)
    {
        $department = Department::findOrFail($id);
        $department->update($request->all());

        return response(['data' => $department ], 200);
    }

    public function destroy($id)
    {
        Department::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function branch($id)
    {
        $department = Department::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $department->branch ], 200);
    }
   
    public function teams($id)
    {
        $department = Department::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $department->teams ], 200);
    }
    
    public function users($id)
    {
        $department = Department::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $department->users ], 200);
    }
    
    public function getIdeas($id)
    {
        $department = Department::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $department->getIdeas ], 200);
    }
    
    public function getArticles($id)
    {
        $department = Department::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $department->getArticles ], 200);
    }
    
    public function getEvents($id)
    {
        $department = Department::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $department->getEvents ], 200);
    }
    
    public function getFiles($id)
    {
        $department = Department::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $department->getFiles ], 200);
    }
    
    public function getPhotos($id)
    {
        $department = Department::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $department->getPhotos ], 200);
    }
}
