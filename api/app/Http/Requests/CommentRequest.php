<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentRequest extends FormRequest
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
                    'user_id' => 'required|exists:users,id',
                    'topic_id' => 'required|exists:topics,id',
                    'commentable_id' => 'required',
                    'commentable_type' => 'required|in:articles,photos',
                    'desc' => 'required|string|max:255',
                    'files' => 'nullable|string',
                    'status' => 'nullable|string|max:52',
                ];
                break;
            case 'PATCH':
            case 'PUT':
                return [
                    'user_id' => 'required|exists:users,id',
                    'topic_id' => 'required|exists:topics,id',
                    'commentable_id' => 'required',
                    'commentable_type' => 'required|in:articles,photos',
                    'desc' => 'required|string|max:255',
                    'files' => 'nullable|string',
                    'status' => 'nullable|string|max:52',
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
