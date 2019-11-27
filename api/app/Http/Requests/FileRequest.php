<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FileRequest extends FormRequest
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
                    'name' => 'required|string|max:104|unique:files,name',
                    'desc' => 'required|string|max:255',
                    'url' => 'required|string|max:255|unique:files,url',
                    'status' => 'nullable|string|max:52',
                ];
                break;
            case 'PATCH':
            case 'PUT':
                return [
                    'user_id' => 'required|exists:users,id',
                    'name' => 'required|string|max:104|unique:files,name,'.$this->segment(3),
                    'desc' => 'required|string|max:255',
                    'url' => 'required|string|max:255|unique:files,url,'.$this->segment(3),
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
