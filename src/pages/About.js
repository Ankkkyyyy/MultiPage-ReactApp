

const About=()=>
{
    return(
        <div>
    <div className="alert alert-primary" role="alert">
 <h4 className="text-center">ES6 Refresher</h4> 
</div>
<div className="row">
<div className="col-xl" >

<h3 className=" text-center m-5" >let & const </h3>

<p className="ms-5">let: we use for making variable
const:  we can’t define const again, 1 baar jo value dedi vahi rahegi fir, uskebaad change nahi kar sakte value.
</p>

<h3 className=" text-center m-5">Arrow Function</h3>
<p className="ms-5">Normal function 
function say(name){}

In array function the way of writing function has changed
<br></br>
<h4 className="text-center m-5">Import & Export concept of ES6 almost same as python</h4> 
</p>
<h3 className=" text-center m-5">Spread & Rest Operator</h3>

<h5 className=" text-center m-2">Spread Operator</h5>
<p className="ms-5">The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
</p>
<h5 className=" text-center m-2">Rest Operator</h5>
<p className="ms-5">The rest parameter (...) allows a function to treat an indefinite number of arguments as an array.
</p>


</div>

</div>

</div>


);

}

export default About