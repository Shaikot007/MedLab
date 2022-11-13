@extends('admin.master')

@section('title')
    Manage test
@endsection

@section('body')
    <div class="row">
        <div class="col-md-12">
            <div class="ibox">
                <div class="ibox-head">
                    <div class="ibox-title">All test info goes here</div>
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
                    <table class="table table-striped table-bordered table-hover text-center" id="example-table" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Laboratory name</th>
                                <th class="text-center">Unit name</th>
                                <th class="text-center">Test name</th>
                                <th class="text-center">Test code</th>
                                <th class="text-center">Test image</th>
                                <th class="text-center">Status</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($tests as $test)
                                <tr>
                                    <td>{{$loop->iteration}}</td>
                                    <td>{{$test->laboratory->name}}</td>
                                    <td>{{$test->unit->name}}</td>
                                    <td>{{$test->name}}</td>
                                    <td>{{$test->code}}</td>
                                    <td>
                                        <img src="{{asset($test->image)}}" alt="" height="70" width="100"/>
                                    </td>
                                    <td>{{$test->status == 1 ? 'Published' : 'Unpublished'}}</td>
                                    <td>
                                        <a href="{{url('/tests/'.$test->id.'/edit')}}" class="btn btn-success btn-xs" title="Edit">
                                            <i class="fa fa-edit"></i>
                                        </a>
                                        <a href="" class="btn btn-danger btn-xs" onclick="event.preventDefault(); document.getElementById('testDeleteForm{{$test->id}}').submit();" title="Delete">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                        <form action="{{url('/tests/'.$test->id.'')}}" method="post" id="testDeleteForm{{$test->id}}">
                                            @csrf
                                            @method('delete')
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection
