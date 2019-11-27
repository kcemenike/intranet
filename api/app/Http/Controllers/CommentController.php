<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Comment;

class CommentController extends Controller
{
    public function index()
    {
        $comments = Comment::latest()->paginate($this->perPage);

        return response(['data' => $comments ], 200);
    }

    public function store(CommentRequest $request)
    {
        $comment = Comment::create($request->all());

        return response(['data' => $comment ], 201);

    }

    public function show($id)
    {
        $comment = Comment::findOrFail($id);

        return response(['data', $comment ], 200);
    }

    public function update(CommentRequest $request, $id)
    {
        $comment = Comment::findOrFail($id);
        $comment->update($request->all());

        return response(['data' => $comment ], 200);
    }

    public function destroy($id)
    {
        Comment::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function user($id)
    {
        $comment = Comment::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $comment->user ], 200);
    }
    
    public function commentable($id)
    {
        $comment = Comment::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $comment->commentable ], 200);
    }
}
