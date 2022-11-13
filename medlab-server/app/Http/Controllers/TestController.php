<?php

namespace App\Http\Controllers;

use App\Models\Laboratory;
use App\Models\Test;
use App\Models\Unit;
use Illuminate\Http\Request;

class TestController extends Controller
{
    private $laboratories;
    private $units;
    private $tests;
    private $test;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->laboratories = Laboratory::all();
        $this->units        = Unit::all();

        return view('admin.test.add', [
            'laboratories'  => $this->laboratories,
            'units'         => $this->units
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->tests = Test::orderBy('id', 'desc')->get();
        return view('admin.test.manage', ['tests' => $this->tests]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Test::newTest($request);
        return redirect()->back()->with('message', 'Test info store successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $this->laboratories = Laboratory::all();
        $this->units        = Unit::all();
        $this->test         = Test::find($id);

        return view('admin.test.edit', [
            'laboratories'  => $this->laboratories,
            'units'         => $this->units,
            'test'          => $this->test
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Test::updateTest($request, $id);
        return redirect('/tests/create')->with('message', 'Test info update successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Test::deleteTest($id);
        return redirect('/tests/create')->with('message', 'Test info delete successfully');
    }
}
