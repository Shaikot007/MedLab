<!-- START HEADER-->
<header class="header bg-white">
    <div class="page-brand">
        <a class="link" href="{{route('dashboard')}}">
            <span class="brand">
                <img src="{{ asset('/images/logo/medlab_logo.png') }}" alt="logo" style="margin-top: 10px" height="50" width="100"/>
            </span>
            <span class="brand-mini">
                <img src="{{ asset('/images/logo/medlab.png') }}" alt="logo" height="25" width="25"/>
            </span>
        </a>
    </div>
    <div class="flexbox flex-1">
        <!-- START TOP-LEFT TOOLBAR-->
        <ul class="nav navbar-toolbar">
            <li>
                <a class="nav-link sidebar-toggler js-sidebar-toggler"><i class="ti-menu"></i></a>
            </li>
        </ul>
        <!-- END TOP-LEFT TOOLBAR-->
        <!-- START TOP-RIGHT TOOLBAR-->
        <ul class="nav navbar-toolbar">
            <li class="dropdown dropdown-user">
                <a class="nav-link dropdown-toggle link" data-toggle="dropdown">
                    <span></span>Admin<i class="fa fa-angle-down m-l-5"></i></a>
                <ul class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">
                        <i class="fa fa-user"></i> Logout
                    </a>
                </ul>
            </li>
        </ul>
        <!-- END TOP-RIGHT TOOLBAR-->
    </div>
</header>
<!-- END HEADER-->
