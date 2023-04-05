import './App.css';
import Productlist from './Productlist';

function App() {

  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"Phone", price:"25000", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyKLVizvDaudSyRr7s3vjcuiSAgON2-NajIg&usqp=CAU"},{no:"2",name:"Car", price:"1500000", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyKLVizvDaudSyRr7s3vjcuiSAgON2-NajIg&usqp=CAU"}]}/>
    </div>
  );
}

export default App;
