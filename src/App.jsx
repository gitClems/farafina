import { Route, Routes } from 'react-router-dom';
import './App.scss';
import AppBar from './components/appBar';
import Home from './pages/index/home';
import Detail from './pages/index/detail';
import Page404 from './pages/index/page404'

function App() {
  return (
    <html lang="fr" translate="no">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      </head>
      <body>

        <div id="app">
          <AppBar />
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/produit/:id' element={<Detail />} />
            <Route path='/*' element={<Page404 />} />
          </Routes>
        </div>
      </body>
    </html>
  );
}

export default App;
