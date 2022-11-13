@extends('admin.master')

@section('title')
    Edit test
@endsection

@section('body')
    <div class="row">
        <div class="col-md-12">
            <div class="ibox">
                <div class="ibox-head">
                    <div class="ibox-title">Edit test form</div>
                    <div class="ibox-tools">
                        <a class="ibox-collapse"><i class="fa fa-minus"></i></a>
                        <a class="fullscreen-link"><i class="fa fa-expand"></i></a>
                    </div>
                </div>
                <div class="ibox-body">
                    @if($message = Session::get('message'))
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>{{$message}}!</strong>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    @endif
                    <form class="form-horizontal" action="{{route('tests.update', ['test' => $test->id])}}" method="post" enctype="multipart/form-data">
                        @csrf
                        @method('put')
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Laboratory name</label>
                            <div class="col-sm-10">
                                <select class="form-control" name="laboratory_id" id="laboratoryId">
                                    <option value="" disabled selected> -- Select laboratory name -- </option>
                                    @foreach($laboratories as $laboratory)
                                        <option value="{{$laboratory->id}}"
                                            {{$laboratory->id == $test->laboratory->id ? 'selected' : ''}}>{{$laboratory->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Unit name</label>
                            <div class="col-sm-10">
                                <select class="form-control" name="unit_id">
                                    <option value="" disabled selected> -- Select unit name -- </option>
                                    @foreach($units as $unit)
                                        <option value="{{$unit->id}}"
                                            {{$unit->id == $test->unit->id ? 'selected' : ''}}>{{$unit->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Test name</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text" name="name" value="{{$test->name}}" placeholder="Enter test name" required/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Test code</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text" name="code" value="{{$test->code}}" placeholder="Enter test code" required/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Regular price</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="number" name="regular_price" value="{{$test->regular_price}}" placeholder="Enter regular price" required/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Selling price</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="number" name="selling_price" value="{{$test->selling_price}}" placeholder="Enter selling price" required/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Short description</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" name="short_description" placeholder="Enter short description" required>{{$test->short_description}}</textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Long description</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" id="summernote" name="long_description" placeholder="Enter long description" required>{{$test->long_description}}</textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Test image</label>
                            <div class="col-sm-10">
                                <img src="{{asset($test->image)}}" alt="Image" height="100" width="100" />
                                <input class="form-control-file" type="file" name="image" accept="image/*"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Publication status</label>
                            <div class="col-sm-10">
                                <label><input type="radio" {{$test->status == 1 ? 'checked' : ''}} name="status" value="1"/> Published</label>
                                <label><input type="radio" {{$test->status == 0 ? 'checked' : ''}} name="status" value="0"/> Unpublished</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-10 ml-sm-auto">
                                <button class="btn btn-info btn-block" type="submit">Update test info</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
