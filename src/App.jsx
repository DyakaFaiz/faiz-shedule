import Table from './assets/Table'
import Footer from './assets/Footer'
import Quotes from './assets/Quotes'

function App() {
  return (
    <>
    <div className="wrapper">
      <div className="content">
        <div className="table">
          <Table />
          <Quotes />
          <Footer />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
