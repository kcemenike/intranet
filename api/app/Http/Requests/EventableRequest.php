<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventableRequest extends FormRequest
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
                    'event_id' => 'required|exists:events,id',
                    'eventable_id' => 'required',
                    'eventable_type' => 'required|in:users,branches,departments,teams',
                ];
                break;
            case 'PATCH':
            case 'PUT':
                return [
                    'event_id' => 'required|exists:events,id',
                    'eventable_id' => 'required',
                    'eventable_type' => 'required|in:users,branches,departments,teams',
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
