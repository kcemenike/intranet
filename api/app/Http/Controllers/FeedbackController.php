<?php

namespace App\Http\Controllers;

use App\Http\Requests\FeedbackRequest;
use App\Feedback;

class FeedbackController extends Controller
{
    public function index()
    {
        $feedback = Feedback::latest()->paginate($perPage);

        return response(['data' => $feedback ], 200);
    }

    public function store(FeedbackRequest $request)
    {
        $feedback = Feedback::create($request->all());

        return response(['data' => $feedback ], 201);

    }

    public function show($id)
    {
        $feedback = Feedback::findOrFail($id);

        return response(['data', $feedback ], 200);
    }

    public function update(FeedbackRequest $request, $id)
    {
        $feedback = Feedback::findOrFail($id);
        $feedback->update($request->all());

        return response(['data' => $feedback ], 200);
    }

    public function destroy($id)
    {
        Feedback::destroy($id);

        return response(['data' => true ], 204);
    }
        
    public function user($id)
    {
        $feedback = Feedback::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $feedback->user ], 200);
    }
}
