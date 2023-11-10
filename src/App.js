import Link from './components/Link';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';

const App = () => {
   return (
      <div>
         <Link to='/accordion'>to accordion</Link>
         <Link to='/dropdown'>to dropdown</Link>
         <div>
            <Route path='/accordion'>
               <AccordionPage />
            </Route>
            <Route path='/dropdown'>
               <DropdownPage />
            </Route>
         </div>
      </div>
   );
}

export default App;