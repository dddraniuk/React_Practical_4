
import LoginForm from './components/LoginForm'

function App() {
  return (
    <main className="page-shell">
      <section className="intro-panel">
        <div className="intro-content">
          <h1>
            Ласкаво
            <br />
            просимо!
          </h1>

          <p className="intro-description">
            Увійдіть до свого облікового запису,
            щоб продовжити роботу.
          </p>
        </div>
      </section>

      <LoginForm />
    </main>
  )
}

export default App
