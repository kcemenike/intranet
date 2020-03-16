<?php

namespace App\Http\Controllers;

use App\Http\Requests\SettingRequest;
use App\Setting;

class SettingController extends Controller
{
    public function index()
    {
        $settings = Setting::latest()->paginate($perPage);

        return response(['data' => $settings ], 200);
    }

    public function store(SettingRequest $request)
    {
        $setting = Setting::create($request->all());

        return response(['data' => $setting ], 201);

    }

    public function show($id)
    {
        $setting = Setting::findOrFail($id);

        return response(['data', $setting ], 200);
    }

    public function update(SettingRequest $request, $id)
    {
        $setting = Setting::findOrFail($id);
        $setting->update($request->all());

        return response(['data' => $setting ], 200);
    }

    public function destroy($id)
    {
        Setting::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function value($key)
    {
        $setting = Setting::where([
            'key' => $key
        ])->firstOrFail();
        
        return response(['data' => $setting->value ], 200);
    }
}
