<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Event;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::latest()->paginate($this->perPage);

        return response(['data' => $events ], 200);
    }

    public function store(EventRequest $request)
    {
        $event = Event::create($request->all());

        return response(['data' => $event ], 201);

    }

    public function show($id)
    {
        $event = Event::findOrFail($id);

        return response(['data', $event ], 200);
    }

    public function update(EventRequest $request, $id)
    {
        $event = Event::findOrFail($id);
        $event->update($request->all());

        return response(['data' => $event ], 200);
    }

    public function destroy($id)
    {
        Event::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function user($id)
    {
        $event = Event::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $event->user ], 200);
    }
    
    public function getTags($id)
    {
        $event = Event::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $event->getTags ], 200);
    }
    
    public function getUsers($id)
    {
        $event = Event::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $event->getUsers ], 200);
    }
    
    public function getBranches($id)
    {
        $event = Event::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $event->getBranches ], 200);
    }
    
    public function getDepartments($id)
    {
        $event = Event::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $event->getDepartments ], 200);
    }
    
    public function getTeams($id)
    {
        $event = Event::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $event->getTeams ], 200);
    }
}
