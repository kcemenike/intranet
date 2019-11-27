<?php

namespace App\Http\Controllers;

use App\Http\Requests\BranchRequest;
use App\Branch;

class BranchController extends Controller
{
    public function index()
    {
        $branches = Branch::latest()->paginate($this->perPage);

        return response(['data' => $branches ], 200);
    }

    public function store(BranchRequest $request)
    {
        $branch = Branch::create($request->all());

        return response(['data' => $branch ], 201);

    }

    public function show($id)
    {
        $branch = Branch::findOrFail($id);

        return response(['data', $branch ], 200);
    }

    public function update(BranchRequest $request, $id)
    {
        $branch = Branch::findOrFail($id);
        $branch->update($request->all());

        return response(['data' => $branch ], 200);
    }

    public function destroy($id)
    {
        Branch::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function country($id)
    {
        $branch = Branch::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $branch->country ], 200);
    }
    
    public function state($id)
    {
        $branch = Branch::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $branch->state ], 200);
    }
    
    public function area($id)
    {
        $branch = Branch::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $branch->area ], 200);
    }
    
    public function departments($id)
    {
        $branch = Branch::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $branch->departments ], 200);
    }
    
    public function users($id)
    {
        $branch = Branch::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $branch->users ], 200);
    }
    
}
