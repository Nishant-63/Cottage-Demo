import './OurStory.css'

export default function OurStory() {
  return (
    <section id="ourstory" aria-labelledby="story-heading">
      <div className="story-inner">
        <div className="section-header reveal" style={{ marginBottom: 48 }}>
          <span className="section-eyebrow">Our Story</span>
          <h2 className="section-title" id="story-heading">
            Born from a Love of the<br />Mediterranean Table
          </h2>
          <div className="gold-divider"></div>
        </div>

        <div className="story-columns">
          <div className="reveal">
            <img
              className="story-img"
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
              alt="Chef at work in the Restaurant kitchen"
              loading="lazy"
            />
          </div>

          <div className="story-text-col reveal" style={{ transitionDelay: '0.15s' }}>
            <p className="story-para">
              Restaurant began with a single, stubborn conviction: that Chandigarh deserved a restaurant built on genuine culinary soul — not a theme, not a franchise, but a place where every dish carries a point of view.
            </p>
            <p className="story-para">
              At the heart of our kitchen is the clay oven — a craft tool as old as the Mediterranean itself. It is not a gimmick. It is the reason our chicken tastes the way it does, why our flatbreads have that char and softness that is almost impossible to achieve any other way. We built this restaurant around it.
            </p>
            <p className="story-para">
              The menu is a personal one. It traces the coastline from Lebanon to Spain, pausing wherever the food is honest, ingredient-forward, and built for sharing. Hummus pulled from the oven beside slow-cooked lamb. Handcrafted cocktails made with the same attention we give the food. A wine list curated by people who actually drink wine.
            </p>
            <p className="story-para">
              We believe that cooking, done well, is storytelling — and that a great meal is simply a memory in the making.
            </p>
            <blockquote className="story-pull-quote">
              “Every dish we serve carries the memory of a meal we never forgot.”
            </blockquote>
          </div>
        </div>

        <div className="chef-card reveal">
          <img
            className="chef-portrait"
            src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=200&q=80"
            alt="Chef Marco Fernandes"
            loading="lazy"
          />
          <div className="chef-info">
            <div className="chef-eyebrow">Meet the Chef</div>
            <div className="chef-name">Chef Marco Fernandes</div>
            <div className="chef-title">Head Chef &amp; Co-Founder</div>
            <p className="chef-bio">
              Trained across kitchens in Lisbon, Beirut, and Barcelona, Marco brings over 15 years of Mediterranean cooking to every plate at Restaurant. His philosophy is simple: use the finest, freshest ingredients, and get out of their way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
