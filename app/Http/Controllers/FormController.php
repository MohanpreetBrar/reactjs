<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
 
use App\Models\Form;

class FormController extends Controller
{
    public function index()
    {
        
        $forms = Form::all(); // Retrieve all form data
        
        return response()->json($forms); // return response data
    }
    
    public function store(Request $request)
    {
        // Validation
        $validatedData = $request->validate([
            'form_name' => 'required|string',
            'labels' => 'required|array',
            'form_data' => 'required|array',
        ]);

        // Create new form
        $form = Form::create([
            'form_name' => $validatedData['form_name'],
            'labels' => $validatedData['labels'],
            'form_data' => $validatedData['form_data'],
        ]);
 
        return response()->json(['message' => 'Form saved successfully', 'form' => $form], 201);
    }

   

    public function show($id)
    {
        // retrieving data
        $form = Form::findOrFail($id);
        
        return response()->json($form); // Return response with form data
    }
}
