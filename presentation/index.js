// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import theme from "../themes/seattlejs/index.js";
theme.screen.global.body.backgroundImage = null; // get rid of the gradient
import Iframe from "react-iframe";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../themes/seattlejs/index.css");
// Best way to include fonts rite
require("../fonts/worksans.css");
require("../fonts/biorhyme.css");
require("../fonts/silkscreen.css");

const images = {
  bg: require("../assets/bg_skyline.svg"),
  logo: require("../assets/logo-seattlejsconference.svg"),
  logoAlexa: require("../assets/logo-alexa.svg"),
  logoImdb: require("../assets/logo-IMDb.svg"),
  logoFormidable: require("../assets/logo-formidable.svg"),
  logoMicrosoft: require("../assets/logo-microsoft.svg"),
  logoZillow: require("../assets/logo-zillow.svg"),
  logoGalvanize: require("../assets/logo-galvanize.svg"),
  logoAppSheet: require("../assets/logo-appsheet.svg"),
  logoGoDaddy: require("../assets/logo-godaddy.svg"),
  logoNpm: require("../assets/logo-npm.svg"),
  logoSitepen: require("../assets/logo-sitepen.svg"),
  logoIndeed: require("../assets/logo-indeed.png"),
  logoOpenDoor: require("../assets/logo-opendoor.svg"),
  logoSheCodesNow: require("../assets/logo-shecodesnow.png"),
  logoSendGrid: require("../assets/logo-sendgrid.svg"),
  logoTwitter: require("../assets/logo-twitter.svg"),
  logoUnbounce: require("../assets/logo-unbounce.png"),
  logoPiper: require("../assets/logo-piper.svg")
};

preloader(images);

const introSlide = (
  <Slide bgColor="white">
    <Image width="25%" src={images.logoPiper} />
    <Text textFont="monospace" margin="auto auto 5em auto">
      Audio Feature Extraction in Browser and Mobile Applications
    </Text>
    <Text>Lucas Thompson, Chris Cannam</Text>
  </Slide>
);

const whatIsThisSlide = (
  <Slide bgColor="white">
    <Heading size={6}>What is this?</Heading>
  </Slide>
);

const featureExtractionSlide = (
  <Slide bgColor="white">
    <Heading size={6}>Feature Extraction</Heading>
  </Slide>
);

const existingExtractorsSlide = (
  <Slide bgColor="white">
    <Heading size={6}>Existing Extractors</Heading>
  </Slide>
);

const piperOverviewSlide = (
  <Slide bgColor="white"><Heading size={6}>Piper Overview</Heading></Slide>
);

const uglyDucklingSlide = (
  <Slide bgColor="white">
    <Layout>
      <Fill>
        <Heading size={6}>Ugly Duckling</Heading>
        <List>
            <Appear><ListItem>Item 1</ListItem></Appear>
            <Appear><ListItem>Item 2</ListItem></Appear>
            <Appear><ListItem>Item 3</ListItem></Appear>
            <Appear><ListItem>Item 4</ListItem></Appear>
        </List>
      </Fill>
      <Fill>
        <Iframe url="https://lucasthompson.github.io/ugly-duckling"
          width="375px"
          height="667px"
          display="block"
          position="relative"
          allowFullScreen
          styles={{background: "#fff"}}
        />
      </Fill>
    </Layout>
  </Slide>
);

const liveCodingSlide = (
  <Slide bgColor="white">
    <Heading size={6}>Let's make something</Heading>
    <Iframe url="https://stackblitz.com/edit/melody-transcriber?embed=1&file=Transcriber.ts&hideExplorer=1&hideNavigation=1"
      display="block"
      position="relative"
      height="600px"
      allowFullScreen
      styles={{background: "#fff"}}
    />
  </Slide>
);

const wrapUpSlide = (
  <Slide bgColor="white">
    <Heading size={6}>What was this?</Heading>
  </Slide>
);

const orderedSlides = [
  introSlide,
  whatIsThisSlide,
  featureExtractionSlide,
  existingExtractorsSlide,
  piperOverviewSlide,
  uglyDucklingSlide,
  liveCodingSlide,
  wrapUpSlide
];


export default class Presentation extends React.Component {
  renderSponsorHeading(text) {
    return (
      <Heading
        caps
        size={6}
        style={{ letterSpacing: "0.05em" }}
      >
        {text}
      </Heading>
    );
  }

  render() {
    const skylineBg = {
      backgroundImage: `url(${images.bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "105% auto"
    };

    const sponsor = {
      display: "block",
      marginBottom: "1.5em"
    };

    return (
      <Deck
        progress="none"
        theme={theme}
        transition={["fade"]}
        transitionDuration={500}
        style={{
          background: 'black',
          backgroundImage: null
        }}
      >
        {
          orderedSlides.map((Slide, i) => React.cloneElement(
            Slide,
            {key: i}
          ))
        }
      </Deck>
    );
  }
}
