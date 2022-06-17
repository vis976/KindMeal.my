function navbar() {
    return `<div id="insidenav">
    <div id="right">
        <a href="index.html"><img  id="logo"src="https://www.kindmeal.my/images/logo-kindmeal.png"></a>
    </div>
    <div id="center">
  
    <div class="tooltip1">
      <a href="widget.html"><img id="fb"src="https://www.kindmeal.my/images/follow_blog_grey.png"></a>
      <span class="tooltiptext">Save Lives with Your Blogs - KindMeal.my Widget</span>
   </div>
        <div class="tooltip2">
        <a href="https://www.facebook.com/KindMeal.my"><img  id="fb"src="https://www.kindmeal.my/images/follow_facebook_grey.png"></a>
        <span class="tooltiptext2">Follow KindMeal.my on Facebook</span>
      </div>
     
      <div class="tooltip2">
       <a href="https://twitter.com/KindMeal"><img  id="twitter"src="https://www.kindmeal.my/images/follow_twitter_grey.png"></a>
        <span class="tooltiptext2">Follow KindMeal.my on Twitter</span>
      </div>
    </div>
    <div id="left">
        <div id="log">Login</div>
        <div id="facebook"><a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=292733157519852&kid_directed_site=0&app_id=292733157519852&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.9%2Fdialog%2Foauth%3Fclient_id%3D292733157519852%26redirect_uri%3Dhttps%253A%252F%252Fwww.kindmeal.my%252Flogin.php%253Faction%253Dfacebook%26state%3D0930d1bd3063a0c73bf1b1aa494722bc%26display%3Dpopup%26scope%3Demail%252Cuser_birthday%252Cuser_location%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D0df811cf-81e5-463f-a6db-25a0e1066052%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.kindmeal.my%2Flogin.php%3Faction%3Dfacebook%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D0930d1bd3063a0c73bf1b1aa494722bc%23_%3D_&display=popup&locale=en_GB&pl_dbl=0">Facebook </a></div>
       <a href="login.html"> <button
        type="button"
        id="email1"
       
    >
       Email
    </button></a>

        <p id="pipe">|</p>
       <a href="signup.html"> <button  id="sign"
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
    >Sign up </button></a>
    </div>
  </div>
 
        </div>
    </div>`
}
function navbar2() {
    return `<div id="insidenav2">
    <div id="selected"><a href="index.html">Home</a></div>
    <div><a href="meal.html">Meal Deals </a></div>
    <div><a href="kindmoment.html">KindMoments</a></div>
    <div><a href="hotpicks.html">Hot Picks</a></div>
    <div><a href="recipes.html">Recipes</a></div>
    <div><a href="directory.html">Directory</a></div>
    <div><a href="artical.html">Articles</a></div>
    <div><a href="general.html">Help</a></div>
  </div>`
}
export { navbar, navbar2 }

// --------navbar export from heare----------