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
  Appear,
  CodePane
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
  logoPiper: require("../assets/logo-piper.svg"),
  idealFeatureOne: require("../assets/00-ideal-feature.png"),
  idealFeatureTwo: require("../assets/01-ideal-feature.png"),
  actualFeature: require("../assets/02-actual-feature.png"),
  vampOverview: require("../assets/03-vamp-overview.png"),
  vampZoom: require("../assets/04-vamp-zoom.png"),
  piperExamples: require("../assets/05-piper-examples.png")
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
    <Appear>
      <Text fit={true}>
        Motivation: Develop cross-platform audio analysis apps w/ JavaScript
      </Text>
    </Appear>
    <List>
      <Appear>
        <ListItem textSize={30}>
          Set of tools and opinions for doing audio feature extraction
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textSize={30}>
          Re-uses existing work (especially Vamp plugins)
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textSize={30}>
          Supports various different application architectures
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textSize={30}>
          Already in use in production (Sonic Visualiser 3.0)
        </ListItem>
      </Appear>
    </List>
  </Slide>
);

const featureExtractionSlide = (
  <Slide bgColor="white">
    <Heading size={6}>Feature Extraction</Heading>
    <Appear>
      <Text>What do we mean by "audio feature"?</Text>
    </Appear>
    <Appear>
      <div>
      <Text size={30}><i>Ideal: TRUE MEANING</i> extracted from the audio signal</Text>
      <Layout>
      <Fill>
        <Image width="100%" src={images.idealFeatureOne} />
      </Fill>
      <Fill>
        <Image width="100%" src={images.idealFeatureTwo} /> 
      </Fill>
    </Layout> 
      </div>
    </Appear>
  </Slide>
);

const featureExtractionCont = (
  <Slide bgColor="white" align={"flex-start flex-start"}>
    <Heading size={6}>Feature Extraction</Heading>
    <Text textSize={26}><i>Reality: </i> something we can squint at &amp; interpret a bit</Text>
    <Text textSize={20}>
          Low-level: "mechanically recovered" from the audio
    </Text>
    <Text textSize={20}>
      High-level: usually obtained from low-level features + lots of context (ML etc)
    </Text>
        <Image width="70%" src={images.actualFeature}/>
  </Slide>
);

const vampOverviewSlide = (
  <Slide bgColor="white" >
    <Heading size={6}>Vamp / Existing Extractors</Heading>
    <Image width="75%" src={images.vampOverview}/>
  </Slide>
);

const existingExtractorsSlide = (
  <Slide bgColor="white">
    <Heading size={6}>Vamp / Existing Extractors</Heading>
    <Text textSize={25}>
    There's a bunch of useful methods already available as vamp plugins
    </Text>
    <List>
      <Appear><ListItem textSize={25}>NNLS Chroma and Chordino</ListItem></Appear>
      <Appear><ListItem textSize={25}>pYIN - Pitch and Note tracking </ListItem></Appear>
      <Appear><ListItem textSize={25}>QM Vamp Plugins (Beat tracker, tempo, segmentation, transcription)</ListItem></Appear>
      <Appear><ListItem textSize={25}>Many more...</ListItem></Appear>
    </List>
  </Slide>
);

const piperProtocolSlide = (
  <Slide bgColor="white">
    <Heading size={6}>Piper Protocol</Heading>
    <Text fit={true}>Set of structures and verbs for requesting feature extraction</Text>
    <List>
      <Appear>
        <ListItem textSize={25}><i>list, load, configure, process, finish</i></ListItem>
      </Appear>
      <Appear>  
        <ListItem textSize={25}>Can drive remote feature extraction services</ListItem>
      </Appear>
      <Appear>
      <ListItem textSize={25}>Can cross language and process boundaries in single application</ListItem>
      </Appear>
      <Appear>
      <ListItem textSize={25}>Defined as JSON and Cap’n Proto schemas</ListItem>
      </Appear>
    </List>
  </Slide>
);

const jsonConfigReq = `{
  "handle": 12345,
  "configuration": {
    "framing": {
      "blockSize": 1024,
      "stepSize": 512
    },
    "channelCount": 2,
    "parameterValues": {
      "sensitivity": 40,
      "theshold": 3
    }
  }
}`;

const piperLevels = (
  <Slide bgColor="white">
    <Heading size={6}>Piper Protocol</Heading>
    <Text fit={true}>
      Low-level: configure and drive an extractor block-by-block
    </Text>
    <CodePane 
      lang={'javascript'}
      source={jsonConfigReq}
    />
    <Text fit={true}>
      High-level: "here's the audio, give me the features"
    </Text>
  </Slide>
);

const piperDiagram = (
  <Slide bgColor="white">
    <Heading size={6}>Piper Overview</Heading>
    <Image width={'50%'} src={images.piperExamples}/> 
  </Slide> 
);

const piperOverviewSlide = (
  <Slide bgColor="white">
  <Heading size={6}>Piper Overview</Heading>
  <Text textSize={25}>We've been working on:</Text>
  <List>
    <Appear><ListItem textSize={25}>
      Piper "protocol" – for driving feature extractors
    </ListItem></Appear>
    <Appear><ListItem textSize={25}>
      Piper-Vamp bridge – recompile C++ Vamp plugins to JS
    </ListItem></Appear>
    <Appear><ListItem textSize={25}>
      Piper.js – library for interacting with and building clients and servers
    </ListItem></Appear>
    <Appear><ListItem textSize={25}>
      "Ugly Duckling" proof-of-concept – new web app using Piper
    </ListItem></Appear>
    <Appear><ListItem textSize={25}>
      Sonic Visualiser – venerable desktop app now uses Piper
    </ListItem></Appear>
  </List>
  </Slide>
);

const uglyDucklingSlide = (
  <Slide bgColor="white">
    <Layout>
      <Fill>
        <Heading size={6}>Ugly Duckling</Heading>
        <List>
            <Appear><ListItem textSize={20}>Built with Angular 4 &amp; waves-ui</ListItem></Appear>
            <Appear><ListItem textSize={20}>Bundled with basic extractors</ListItem></Appear>
            <Appear><ListItem textSize={20}>Can dynamically load in new modules</ListItem></Appear>
            <Appear><ListItem textSize={20}>All extraction happens in a web worker</ListItem></Appear>
            <Appear><ListItem textSize={20}>Uses Piper.js Streaming client</ListItem></Appear>
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
  <Slide bgColor="white" align={"flex-start flex-start"}>
    <Heading size={6}>Let's make something</Heading>
    <Iframe url="https://stackblitz.com/edit/melody-transcriber?embed=1&file=Transcriber.tsx&hideExplorer=1&hideNavigation=1"
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
    <List>
      <Appear><ListItem textSize={25}>Building cross-platform audio analysis apps with web technologies</ListItem></Appear>
      <Appear><ListItem textSize={25}>Tools for bringing existing work to the browser</ListItem></Appear>
      <Appear><ListItem textSize={25}>Used in SV 3.0 for out of process extraction, potential JS extractors</ListItem></Appear>
      <Appear><ListItem textSize={25}>A prototype app showcasing possibilities</ListItem></Appear>
      <Appear><ListItem textSize={25}>Quick tour</ListItem></Appear>
    </List>
    <Appear>
      <Text textSize={25}>https://github.com/piper-audio</Text>
    </Appear>
  </Slide>
);

const orderedSlides = [
  introSlide,
  whatIsThisSlide,
  featureExtractionSlide,
  featureExtractionCont,
  vampOverviewSlide,
  existingExtractorsSlide,
  piperOverviewSlide,
  piperProtocolSlide,
  piperLevels,
  piperDiagram,
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
