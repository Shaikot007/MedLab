<?php

namespace App\Http\Controllers;

use App\Models\Laboratory;
use Illuminate\Http\Request;

class LaboratoryController extends Controller
{
    private $laboratories;
    private $laboratory;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.laboratory.add');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->laboratories = Laboratory::orderBy('id', 'desc')->get();
        return view('admin.laboratory.manage', ['laboratories' => $this->laboratories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Laboratory::newLaboratory($request);
        return redirect()->back()->with('message', 'Laboratory info store successfully');
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
        $this->laboratory = Laboratory::find($id);
        return view('admin.laboratory.edit', ['laboratory' => $this->laboratory]);
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
        Laboratory::updateLaboratory($request, $id);
        return redirect('/laboratories/create')->with('message', 'Laboratory info update successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Laboratory::deleteLaboratory($id);
        return redirect('/laboratories/create')->with('message', 'Laboratory info delete successfully');
    }
}
