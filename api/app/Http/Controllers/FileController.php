<?php

namespace App\Http\Controllers;

use App\Http\Requests\FileRequest;
use App\File;

class FileController extends Controller
{
    public function index()
    {
        $files = File::latest()->paginate($this->perPage);

        return response(['data' => $files ], 200);
    }

    public function store(FileRequest $request)
    {
        $file = File::create($request->all());

        return response(['data' => $file ], 201);

    }

    public function show($id)
    {
        $file = File::findOrFail($id);

        return response(['data', $file ], 200);
    }

    public function update(FileRequest $request, $id)
    {
        $file = File::findOrFail($id);
        $file->update($request->all());

        return response(['data' => $file ], 200);
    }

    public function destroy($id)
    {
        File::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function user($id)
    {
        $file = File::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $file->user ], 200);
    }
    
    public function getTags($id)
    {
        $file = File::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $file->getTags ], 200);
    }
    
    public function getUsers($id)
    {
        $file = File::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $file->getUsers ], 200);
    }
    
    public function getBranches($id)
    {
        $file = File::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $file->getBranches ], 200);
    }
    
    public function getDepartments($id)
    {
        $file = File::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $file->getDepartments ], 200);
    }
    
    public function getTeams($id)
    {
        $file = File::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $file->getTeams ], 200);
    }
}
