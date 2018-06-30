const MenuBar = () => (
    <div className="menu-bar">
        <p>Menu Bar Here</p>
    </div>
)
const HomepageHero = () => (
    <div className="homepage-hero">
    <p>Create Homepage Here</p>
    </div>
)

const WhatIsTickybot = () => (
    <div className="what-is-tickybot">
        <p>About Tickybot</p>
    </div>
)

const HowItWorks = () => (
    <div className="how-it-works">
        <p>How Tickybot works goes here</p>
    </div>
)


const StartUsingTickybot = () => (
    <div className="start-using-tickybot">
        <p>Start Using Tickybot section</p>
    </div>
)


const Footer = () => (
    <div className="homepage-footer">
    <p>Tickybot footer</p>
  </div>

)

class TickybotLandingPage extends React.Component {
    render() {
      return (
        <div className="landing-page">
          <MenuBar />
          <HomepageHero />
          <WhatIsTickybot />
          <HowItWorks />
          <StartUsingTickybot />
          <Footer />
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <TickybotLandingPage />,
    document.getElementById('root')
  );
  