<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticleRequest;
use App\Article;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::latest()->paginate($this->perPage);

        return response(['data' => $articles ], 200);
    }

    public function store(ArticleRequest $request)
    {
        $article = Article::create($request->all());

        return response(['data' => $article ], 201);

    }

    public function show($id)
    {
        $article = Article::findOrFail($id);

        return response(['data', $article ], 200);
    }

    public function update(ArticleRequest $request, $id)
    {
        $article = Article::findOrFail($id);
        $article->update($request->all());

        return response(['data' => $article ], 200);
    }

    public function destroy($id)
    {
        Article::destroy($id);

        return response(['data' => true ], 204);
    }
    
    public function user($id)
    {
        $article = Article::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $article->user ], 200);
    }
    
    public function getTags($id)
    {
        $article = Article::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $article->getTags ], 200);
    }
    
    public function getComments($id)
    {
        $article = Article::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $article->getComments ], 200);
    }
    
    public function getUsers($id)
    {
        $article = Article::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $article->getUsers ], 200);
    }
    
    public function getBranches($id)
    {
        $article = Article::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $article->getBranches ], 200);
    }
    
    public function getDepartments($id)
    {
        $article = Article::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $article->getDepartments ], 200);
    }
    
    public function getTeams($id)
    {
        $article = Article::where([
            'id' => $id
        ])->firstOrFail();
        return response(['data' => $article->getTeams ], 200);
    }
}
