@extends('admin.master')

@section('title')
    Manage laboratory
@endsection

@section('body')
    <div class="row">
        <div class="col-md-12">
            <div class="ibox">
                <div class="ibox-head">
                    <div class="ibox-title">All laboratory info goes here</div>
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
                    <table class="table table-striped table-bordered table-hover text-justify" id="example-table" cellspacing="0" width="100%">
                        <thead>
                        <tr>
                            <th class="text-center">#</th>
                            <th class="text-center">User name</th>
                            <th class="text-center">Laboratory title</th>
                            <th class="text-center">Laboratory description</th>
                            <th class="text-center">Laboratory image</th>
                            <th class="text-center">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($laboratories as $laboratory)
                            <tr>
                                <td>{{$loop->iteration}}</td>
                                <td>{{$laboratory->name}}</td>
                                <td>{{$laboratory->title}}</td>
                                <td>{{$laboratory->description}}</td>
                                <td>
                                    <img src="{{asset($laboratory->thumbnail)}}" alt="Image" height="70" width="100"/>
                                </td>
                                <td>
                                    <a href="{{url('laboratories/'.$laboratory->id.'/edit')}}" class="btn btn-success btn-xs" title="Edit">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <a href="" class="btn btn-danger btn-xs" onclick="event.preventDefault(); document.getElementById('laboratoryDeleteForm{{$laboratory->id}}').submit();" title="Delete">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                    <form action="{{url('/laboratories/'.$laboratory->id.'')}}" method="post" id="laboratoryDeleteForm{{$laboratory->id}}">
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
