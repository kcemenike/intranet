<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    public function index()
    {
        $areas = Area::latest()->paginate($this->perPage);

        return response(['data' => $areas ], 200);
    }
}
