import React from 'react';  


const Navbar = () => {
    return (
        <>
           <div class="navbar-custom">
                <ul class="list-unstyled topnav-menu float-right mb-0">

                    <li class="dropdown d-none d-lg-block">
                        <a class="nav-link dropdown-toggle mr-0 waves-effect" data-toggle="dropdown" href="index.html#" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src="../images/flags/us.jpg" alt="user-image" class="mr-2" height="12"/> <span class="align-middle">English <i class="mdi mdi-chevron-down"></i> </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            
                            <a class="dropdown-item notify-item">
                                <img src="../images/flags/germany.jpg" alt="user-image" class="mr-2" /> <span class="align-middle">German</span>
                            </a>

                            
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <img src="../images/flags/italy.jpg" alt="user-image" class="mr-2" height="12" /> <span class="align-middle">Italian</span>
                            </a>

                            
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <img src="../images/flags/spain.jpg" alt="user-image" class="mr-2" height="12" /> <span class="align-middle">Spanish</span>
                            </a>

                            
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <img src="../images/flags/russia.jpg" alt="user-image" class="mr-2" height="12"/> <span class="align-middle">Russian</span>
                            </a>
                        </div>
                    </li>

                    <li class="dropdown notification-list">
                        <a class="nav-link dropdown-toggle  waves-effect" data-toggle="dropdown" href="index.html#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i class="mdi mdi-email-outline noti-icon"></i>
                            <span class="badge badge-purple rounded-circle noti-icon-badge">3</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-lg">

                            
                            <div class="dropdown-item noti-title">
                                <h5 class="font-16 m-0">
                                    <span class="float-right">
                                        <a href="index.html" class="text-dark">
                                            <small>Clear All</small>
                                        </a>
                                    </span>Chat
                                </h5>
                            </div>

                            <div class="slimscroll noti-scroll">

                                <div class="inbox-widget">
                                    <a href="index.html#">
                                        <div class="inbox-item">
                                            <div class="inbox-item-img"><img src="../images/users/avatar-1.jpg" class="rounded-circle" alt=""/></div>
                                            <p class="inbox-item-author">Cristina Pride</p>
                                            <p class="inbox-item-text text-truncate">Hi, How are you? What about our next meeting</p>
                                        </div>
                                    </a>
                                    <a href="index.html#">
                                        <div class="inbox-item">
                                            <div class="inbox-item-img"><img src="../images/users/avatar-2.jpg" class="rounded-circle" alt="" /></div>
                                            <p class="inbox-item-author">Sam Garret</p>
                                            <p class="inbox-item-text text-truncate">Yeah everything is fine</p>
                                        </div>
                                    </a>
                                    <a href="index.html#">
                                        <div class="inbox-item">
                                            <div class="inbox-item-img"><img src="../images/users/avatar-3.jpg" class="rounded-circle" alt="" /></div>
                                            <p class="inbox-item-author">Karen Robinson</p>
                                            <p class="inbox-item-text text-truncate">Wow that's great</p>
                                        </div>
                                    </a>
                                    <a href="index.html#">
                                        <div class="inbox-item">
                                            <div class="inbox-item-img"><img src="../images/users/avatar-4.jpg" class="rounded-circle" alt="" /></div>
                                            <p class="inbox-item-author">Sherry Marshall</p>
                                            <p class="inbox-item-text text-truncate">Hi, How are you? What about our next meeting</p>
                                        </div>
                                    </a>
                                    <a href="index.html#">
                                        <div class="inbox-item">
                                            <div class="inbox-item-img"><img src="../images/users/avatar-5.jpg" class="rounded-circle" alt="" /></div>
                                            <p class="inbox-item-author">Shawn Millard</p>
                                            <p class="inbox-item-text text-truncate">Yeah everything is fine</p>

                                        </div>
                                    </a>
                                </div> end inbox-widget 

                            </div>
                            
                            <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
                                View all
                                <i class="fi-arrow-right"></i>
                            </a>

                        </div>
                    </li>

                    <li class="dropdown notification-list">
                        <a class="nav-link dropdown-toggle  waves-effect" data-toggle="dropdown" href="index.html#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i class="mdi mdi-bell-outline noti-icon"></i>
                            <span class="badge badge-pink rounded-circle noti-icon-badge">4</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-lg">

                            
                            <div class="dropdown-item noti-title">
                                <h5 class="font-16 m-0">
                                    <span class="float-right">
                                        <a href="index.html" class="text-dark">
                                            <small>Clear All</small>
                                        </a>
                                    </span>Notification
                                </h5>
                            </div>

                            <div class="slimscroll noti-scroll">
                    
                                
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon">
                                        <i class="mdi mdi-comment-account-outline text-info"></i>
                                    </div>
                                    <p class="notify-details">Caleb Flakelar commented on Admin
                                        <small class="noti-time">1 min ago</small>
                                    </p>
                                </a>

                                
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon text-success">
                                        <i class="mdi mdi-account-plus text-primary"></i>
                                    </div>
                                    <p class="notify-details">New user registered.
                                        <small class="noti-time">5 hours ago</small>
                                    </p>
                                </a>

                                
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon text-danger">
                                        <i class="mdi mdi-heart text-danger"></i>
                                    </div>
                                    <p class="notify-details">Carlos Crouch liked 
                                        <small class="noti-time">3 days ago</small>
                                    </p>
                                </a>

                                
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon text-warning">
                                        <i class="mdi mdi-comment-account-outline text-primary"></i>
                                    </div>
                                    <p class="notify-details">Caleb Flakelar commented on Admi
                                        <small class="noti-time">4 days ago</small>
                                    </p>
                                </a>

                                
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon text-purple">
                                        <i class="mdi mdi-account-plus text-danger"></i>
                                    </div>
                                    <p class="notify-details">New user registered.
                                        <small class="noti-time">7 days ago</small>
                                    </p>
                                </a>

                                 
                                 <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon text-danger">
                                        <i class="mdi mdi-heart text-danger"></i>
                                    </div>
                                    <p class="notify-details">Carlos Crouch liked <b>Admin</b>.
                                        <small class="noti-time">Carlos Crouch liked</small>
                                    </p>
                                </a>
                            </div>

                            <a href="javascript:void(0);" class="dropdown-item text-center notify-item notify-all">
                                    See all notifications
                            </a>

                        </div>
                    </li>

                    <li class="dropdown notification-list">
                        <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect" data-toggle="dropdown" href="index.html#" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src="../images/users/avatar-1.jpg" alt="user-image" class="rounded-circle" />
                            <span class="pro-user-name ml-1">
                                Thompson   <i class="mdi mdi-chevron-down"></i> 
                            </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                        
                            <div class="dropdown-header noti-title">
                                <h6 class="text-overflow m-0">Welcome !</h6>
                            </div>

                  
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="mdi mdi-account-outline"></i>
                                <span>Profile</span>
                            </a>

                           
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="mdi mdi-settings-outline"></i>
                                <span>Settings</span>
                            </a>

                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="mdi mdi-lock-outline"></i>
                                <span>Lock Screen</span>
                            </a>

                            <div class="dropdown-divider"></div>

                           
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="mdi mdi-logout-variant"></i>
                                <span>Logout</span>
                            </a>

                        </div>
                    </li>

                    <li class="dropdown notification-list">
                        <a href="javascript:void(0);" class="nav-link right-bar-toggle waves-effect">
                            <i class="mdi mdi-settings-outline noti-icon"></i>
                        </a>
                    </li>


                </ul>


                <div class="logo-box">
                    <a href="index.html" class="logo text-center logo-dark">
                        <span class="logo-lg">
                            <img src="../images/logo-dark.png" alt="" height="18" />
                            <span class="logo-lg-text-dark">Velonic</span> 
                        </span>
                        <span class="logo-sm">
                            <span class="logo-lg-text-dark">V</span> 
                            <img src="../images/logo-sm.png" alt="" height="22" />
                        </span>
                    </a>

                    <a href="index.html" class="logo text-center logo-light">
                        <span class="logo-lg">
                            <img src="../images/logo-light.png" alt="" height="18" />
                            <span class="logo-lg-text-dark">Velonic</span> 
                        </span>
                        <span class="logo-sm">
                            <span class="logo-lg-text-dark">V</span> 
                            <img src="../images/logo-sm.png" alt="" height="22" />
                        </span>
                    </a>
                </div>

           
  

                <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
                    <li>
                        <button class="button-menu-mobile waves-effect">
                            <i class="mdi mdi-menu"></i>
                        </button>
                    </li>
        
                    <li class="d-none d-lg-block">
                        <form class="app-search">
                            <div class="app-search-box">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search..." />
                                    <div class="input-group-append">
                                        <button class="btn" type="submit">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        </>
      );
}
 
export default Navbar;