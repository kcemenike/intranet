<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleableRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    
    public function rules()
    {
        switch ($this->method()) {
            case 'GET':
                return true;
                break;
            case 'POST':
                return [
                    'article_id' => 'required|exists:articles,id',
                    'articleable_id' => 'required',
                    'articleable_type' => 'required|in:users,branches,departments,teams',
                ];
                break;
            case 'PATCH':
            case 'PUT':
                return [
                    'article_id' => 'required|exists:articles,id',
                    'articleable_id' => 'required',
                    'articleable_type' => 'required|in:users,branches,departments,teams',
                ];
                break;
            case 'DELETE':
                return true;
                break;
            default:
                return true;
                break;
        }

    }
}
