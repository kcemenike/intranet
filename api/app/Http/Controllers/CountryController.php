<?php

namespace App\Http\Controllers;

use App\Http\Requests\CountryRequest;
use App\Country;

class CountryController extends Controller
{
    public function index()
    {
        $countries = Country::latest()->paginate($this->perPage);

        return response(['data' => $countries ], 200);
    }

    public function store(CountryRequest $request)
    {
        $country = Country::create($request->all());

        return response(['data' => $country ], 201);

    }

    public function show($id)
    {
        $country = Country::findOrFail($id);

        return response(['data', $country ], 200);
    }

    public function update(CountryRequest $request, $id)
    {
        $country = Country::findOrFail($id);
        $country->update($request->all());

        return response(['data' => $country ], 200);
    }

    public function destroy($id)
    {
        Country::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function states($id)
    {
        $country = Country::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $country->states ], 200);
    }
    
    public function branches($id)
    {
        $country = Country::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $country->branches ], 200);
    }
    
    public function teams($id)
    {
        $country = Country::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $country->teams ], 200);
    }
}
