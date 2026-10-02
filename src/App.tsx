export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <header style={{ background: '#2c3e50', color: '#fff', padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 0.5rem', fontSize: '2rem' }}>📁 web-foundations-days</h1>
        <p style={{ margin: 0, opacity: 0.8 }}>Day 2 Assignment — CSS Styling & Layout</p>
      </header>
      <main style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ background: '#fff', borderRadius: 8, padding: '1.5rem 2rem', marginBottom: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '0.5rem' }}>Assignment Complete ✅</h2>
          <p>The following files have been created for Day 2:</p>
          <ul style={{ lineHeight: 2 }}>
            <li><code style={{ background: '#ecf0f1', padding: '2px 6px', borderRadius: 4 }}>day2/index.html</code> — Home page with stylesheet link</li>
            <li><code style={{ background: '#ecf0f1', padding: '2px 6px', borderRadius: 4 }}>day2/about.html</code> — About page with stylesheet link &amp; <code>class="features"</code></li>
            <li><code style={{ background: '#ecf0f1', padding: '2px 6px', borderRadius: 4 }}>day2/style.css</code> — Shared stylesheet</li>
          </ul>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: '1.5rem 2rem', marginBottom: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '0.5rem' }}>CSS Features Implemented</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { title: '🔄 Reset', desc: 'box-sizing: border-box on all elements' },
              { title: '🎨 Header', desc: 'Dark background with centered title' },
              { title: '🧭 Nav Flexbox', desc: 'Centered row, 16px gap, white text, hover effect' },
              { title: '📐 Main Layout', desc: 'Max-width 960px, auto margins' },
              { title: '🃏 Section Cards', desc: 'White background, rounded, shadow' },
              { title: '📊 Features Grid', desc: 'CSS Grid with repeat(auto-fit, minmax(180px, 1fr))' },
              { title: '📋 Table Styles', desc: 'Borders and padding on all cells' },
              { title: '📝 Form Styles', desc: 'Stacked vertically, full-width fields' },
              { title: '✨ Transitions', desc: 'Smooth hover effects on buttons & links' },
              { title: '📱 Responsive', desc: '@media (max-width: 600px) adjustments' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#ecf0f1', borderRadius: 8, padding: '1rem', borderLeft: '4px solid #3498db' }}>
                <h3 style={{ margin: '0 0 0.3rem', color: '#2c3e50', fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: '1.5rem 2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '0.5rem' }}>File Structure</h2>
          <pre style={{ background: '#2c3e50', color: '#ecf0f1', padding: '1rem', borderRadius: 8, overflow: 'auto', fontSize: '0.9rem' }}>
{`web-foundations-days/
├── day1/
│   ├── index.html
│   └── about.html
└── day2/
    ├── index.html    ← links style.css
    ├── about.html    ← links style.css, class="features" on <ul>
    └── style.css     ← shared stylesheet`}
          </pre>
        </div>
      </main>
      <footer style={{ textAlign: 'center', padding: '1.5rem', background: '#2c3e50', color: '#fff' }}>
        <p style={{ margin: 0 }}>&copy; 2026 Web Foundations — Day 2 Assignment</p>
      </footer>
    </div>
  );
}
