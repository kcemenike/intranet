<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TagRequest extends FormRequest
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
                    'tagable_id' => 'required',
                    'tagable_type' => 'required|in:articles,photos',
                    'list' => 'required|string',
                    'status' => 'nullable|string|max:52',
                ];
                break;
            case 'PATCH':
            case 'PUT':
                return [
                    'tagable_id' => 'required',
                    'tagable_type' => 'required|in:articles,photos',
                    'list' => 'required|string',
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
