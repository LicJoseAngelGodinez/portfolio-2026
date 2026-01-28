import { useState, useEffect } from 'react'

interface ApiResponse {
  message: string
  status: string
}

export function About() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      // Example API call - replace with your actual API
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const json = await response.json()
      setData(json)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="page">
      <h1>About</h1>
      <p>This page demonstrates fetching data from an external API.</p>

      <div className="api-demo">
        <h2>API Demo</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="error">Error: {error}</p>}
        {data && (
          <div>
            <p>Status: {data.status}</p>
            {data.message && (
              <img
                src={data.message}
                alt="Random dog"
                style={{ maxWidth: '300px', borderRadius: '8px' }}
              />
            )}
          </div>
        )}
        <button onClick={fetchData} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch New Image'}
        </button>
      </div>
    </section>
  )
}
