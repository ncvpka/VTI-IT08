import InputFC from './InputFunction';

function FormFC() {
return(
    <div className="container">
       <h1>Email</h1>
       <InputFC type="email"></InputFC>
       <h1>Password</h1>
       <InputFC type="password"></InputFC>
       <InputFC type="submit" ></InputFC>
    </div>
   );
}
    
export default FormFC ;
