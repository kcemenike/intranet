<?php

namespace App\Http\Controllers;

use App\Http\Requests\PhotoRequest;
use App\Photo;

class PhotoController extends Controller
{
    public function index()
    {
        $photos = Photo::latest()->paginate($this->perPage);

        return response(['data' => $photos ], 200);
    }

    public function store(PhotoRequest $request)
    {
        $photo = Photo::create($request->all());

        return response(['data' => $photo ], 201);

    }

    public function show($id)
    {
        $photo = Photo::findOrFail($id);

        return response(['data', $photo ], 200);
    }

    public function update(PhotoRequest $request, $id)
    {
        $photo = Photo::findOrFail($id);
        $photo->update($request->all());

        return response(['data' => $photo ], 200);
    }

    public function destroy($id)
    {
        Photo::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function user($id)
    {
        $photo = Photo::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $photo->user ], 200);
    }
    
    public function getTags($id)
    {
        $photo = Photo::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $photo->getTags ], 200);
    }
    
    public function getUsers($id)
    {
        $photo = Photo::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $photo->getUsers ], 200);
    }
    
    public function getBranches($id)
    {
        $photo = Photo::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $photo->getBranches ], 200);
    }
    
    public function getDepartments($id)
    {
        $photo = Photo::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $photo->getDepartments ], 200);
    }
    
    public function getTeams($id)
    {
        $photo = Photo::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $photo->getTeams ], 200);
    }
}
