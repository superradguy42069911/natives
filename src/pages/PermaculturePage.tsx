import { techniques } from "../data/permacultureTechniques";
import { TechniqueModule } from "../components/permaculture/TechniqueModule";
import { BeforeAfterIllustration } from "../components/permaculture/BeforeAfterIllustration";
import "../styles/strong-cities-tokens.css";
import "../styles/permaculture.css";

export function PermaculturePage() {
  return (
    <div className="permaculture-page">
      <header className="permaculture-page__header">
        <div>
          <span className="permaculture-page__wordmark">Strong Cities LA</span>
          <span className="permaculture-page__tagline">Permaculture Guide</span>
        </div>
      </header>

      <main className="permaculture-page__body">
        <section className="permaculture-intro">
          <h1 className="display">Permaculture, for a single LA lot</h1>
          <p>
            Permaculture usually gets talked about at farm scale - crop rotation, food
            forests, whole-property design. None of that is the point here. For a home
            in Los Angeles, it comes down to three ideas: <strong>slow the rain down,
            spread it out, and let it sink in</strong> - instead of routing it off your
            property as fast as possible.
          </p>
          <p>
            A typical LA yard is built to do the opposite. A flat lawn, a smooth
            driveway, a downspout aimed at the street - all of it is designed to move
            water off the lot and into a storm drain within minutes. That water carries
            oil, fertilizer, and debris straight to the ocean, while the yard itself
            dries out and needs tap water to stay green.
          </p>
          <p>
            The fix isn't a farm - it's a handful of small, mostly DIY changes that work
            with your lot's own water and climate instead of against them. Below are
            the six most common ones, and what each does.
          </p>
        </section>

        <section className="permaculture-visual">
          <BeforeAfterIllustration />
        </section>

        <section className="permaculture-modules">
          <h2 className="display">Six ways to start</h2>
          <div className="permaculture-modules__grid">
            {techniques.map((t) => (
              <TechniqueModule key={t.id} technique={t} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
