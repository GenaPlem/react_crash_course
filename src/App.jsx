import './App.css'
import Post from './components/Post';

function App() {

  return (
    <main>
      <Post author='Maxim' body='React is awesome!'/>
      <Post author='David' body='Check it, it is awesome!'/>
    </main>
  )
}

export default App;
