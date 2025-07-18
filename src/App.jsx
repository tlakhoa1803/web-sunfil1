import ProductCategoryPage from './pages/ProductCategoryPage';
import Headerbar from './components/header/headbar';
import FooterBar from './components/footer/footerbar';
function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Headerbar/>
      <ProductCategoryPage />
      <FooterBar/>
    </div>
  );
}

export default App;
