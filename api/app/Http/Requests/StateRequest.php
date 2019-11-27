<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StateRequest extends FormRequest
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
                    'country_id' => 'required|exists:countries,id',
                    'name' => 'required|string|max:255',
                    'short_name' => 'required|string|max:26',
                    'status' => 'nullable|string|max:52',
                ];
                break;
            case 'PATCH':
            case 'PUT':
                return [
                    'country_id' => 'required|exists:countries,id',
                    'name' => 'required|string|max:255',
                    'short_name' => 'required|string|max:26',
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
