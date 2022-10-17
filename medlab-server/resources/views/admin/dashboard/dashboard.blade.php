@extends('admin.master')

@section('title')
    Dashboard
@endsection

@section('body')
    {{--START PAGE CONTENT--}}
    <div class="page-content fade-in-up">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="ibox bg-warning color-white widget-stat">
                    <div class="ibox-body">
                        <img src="{{ asset('/images/logo/medlab_logo.png') }}" alt="logo" style="margin-top: 10px" height="500" width="100%"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{--END PAGE CONTENT--}}
@endsection
