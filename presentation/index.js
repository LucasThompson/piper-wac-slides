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
const {padding, ...screenListStyles} = theme.screen.components.list;
const bodgeBullets = {
  ...screenListStyles,
  listStylePosition: 'outside'
};
theme.screen.components.list = bodgeBullets
theme.screen.components.link = 'underline';
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
  piperExamples: require("../assets/05-piper-examples.png"),
  svScreen: require("../assets/sv-3.0-win.png"),
  qmLogo: require("../assets/qm.png"), 
  c4dmLogo: require("../assets/c4dm.png"),
  creativeCommons: require("../assets/cc.svg"),
  epsrcLogo: require("../assets/epsrc.png")
};

preloader(images);

const introSlide = (
  <Slide bgColor="white">
    <Image width="25%" src={images.logoPiper} />
    <Text textFont="monospace" margin="auto auto 5em auto">
      Audio Feature Extraction in Browser and Mobile Applications
    </Text>
    <Text>Lucas Thompson, Chris Cannam</Text>
    <Layout>
      <Fill>
        <Image width={'50%'} src={images.qmLogo}/>
      </Fill>
      <Fill>
      <Image width={'50%'} src={images.c4dmLogo}/>
      </Fill>
    </Layout>
  </Slide>
);

const whatIsThisSlide = (
  <Slide bgColor="white">
    <Heading size={3}>What is this?</Heading>
    <Appear>
      <Text fit={true}>
        Motivation: Develop cross-platform audio analysis apps w/ JavaScript
      </Text>
    </Appear>
    <List>
      <Appear>
        <ListItem textSize={36}>
          Tools &amp; opinions for doing audio feature extraction
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textSize={36}>
          Re-uses existing work (especially Vamp plugins)
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textSize={36}>
          Brings it to the browser
        </ListItem>
      </Appear>
    </List>
  </Slide>
);

const backgroundSlide = (
  <Slide bgColor="white">
    <Heading size={3}>Background</Heading>
    <Image width={'100%'} src={images.svScreen}/>
  </Slide>
);

const featureExtractionSlide = (
  <Slide bgColor="white">
    <Heading size={3}>Feature Extraction</Heading>
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
    <Heading size={3}>Feature Extraction</Heading>
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
    <Heading size={3}>Vamp / Existing Extractors</Heading>
    <Image width="75%" src={images.vampOverview}/>
  </Slide>
);

const existingExtractorsSlide = (
  <Slide bgColor="white">
    <Heading size={3}>Existing Extractors</Heading>
    <Text textSize={36}>
    There's a bunch of useful extractors already as native Vamp plugins (C++)
    </Text>
    <List>
      <Appear><ListItem textSize={36}>NNLS Chroma and Chordino</ListItem></Appear>
      <Appear><ListItem textSize={36}>pYIN - Pitch and Note tracking </ListItem></Appear>
      <Appear><ListItem textSize={36}>QM Vamp Plugins (Beat tracker, tempo, segmentation, transcription)</ListItem></Appear>
      <Appear><ListItem textSize={36}>Many more...</ListItem></Appear>
    </List>
  </Slide>
);

const piperProtocolSlide = (
  <Slide bgColor="white">
    <Heading size={3}>Piper Protocol</Heading>
    <Text fit={true}>Set of structures and verbs for requesting feature extraction</Text>
    <List>
      <Appear>
        <ListItem textSize={36}><i>list, load, configure, process, finish</i></ListItem>
      </Appear>
      <Appear>
        <ListItem textSize={36}>
          Client-server model - a useful abstraction
        </ListItem>
      </Appear>
      <Appear>  
        <ListItem textSize={36}>Can drive remote feature extraction services</ListItem>
      </Appear>
      <Appear>
      <ListItem textSize={36}>Can cross language &amp; process boundaries in single application</ListItem>
      </Appear>
      <Appear>
      <ListItem textSize={36}>Defined as JSON and Cap’n Proto schemas</ListItem>
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

const serviceInterface = `
interface Service {
  list(r: ListRequest): Promise<ListResponse>;
  load(r: LoadRequest): Promise<LoadResponse>;
  configure(r: ConfigRequest): Promise<ConfigResponse>;
  process(r: ProcessRequest): Promise<ProcessResponse>;
  finish(r: FinishRequest): Promise<FinishResponse>;
}
`

const piperLevels = (
  <Slide bgColor="white">
    <Heading size={3}>Piper Protocol</Heading>
    <Text fit={true}>
      Low-level / Stateful: configure and drive an extractor block-by-block
    </Text>
    <Layout style={{background: '#2d2d2d'}}>
      <Fill>
        <CodePane 
          textSize={18}
          lang={'javascript'}
          source={jsonConfigReq}
        />
      </Fill>
      <Fill style={{marginTop: '5%'}}>
        <CodePane 
          textSize={18}
          lang={'javascript'}
          source={serviceInterface}
        />
      </Fill>
    </Layout>
    <Text fit={true}>
      High-level / Stateless: "here's the audio, give me the features"
    </Text>
  </Slide>
);

const piperDiagram = (
  <Slide bgColor="white">
    <Heading size={3}>Piper Overview</Heading>
    <Image width={'50%'} src={images.piperExamples}/> 
  </Slide> 
);

const piperOverviewSlide = (
  <Slide bgColor="white">
  <Heading size={3}>Piper Overview</Heading>
  <Text textSize={36}>We've been working on:</Text>
  <List>
    <Appear><ListItem textSize={36}>
      Piper "protocol" – for driving feature extractors
    </ListItem></Appear>
    <Appear>
      <ListItem textSize={36}>
         Sonic Visualiser 3.0 - A shipped Piper client
      </ListItem>
    </Appear>
    <Appear><ListItem textSize={36}>
      Piper-Vamp bridge – recompile C++ Vamp plugins to JS
    </ListItem></Appear>
    <Appear><ListItem textSize={36}>
      Piper.js – library for building / using clients &amp; servers
    </ListItem></Appear>
    <Appear><ListItem textSize={36}>
      "Ugly Duckling" - tech demo web app using Piper.js
    </ListItem></Appear>
  </List>
  </Slide>
);

const uglyDucklingSlide = (
  <Slide bgColor="white">
    <Layout>
      <Fill>
        <Heading size={3}>Ugly Duckling</Heading>
        <List>
            <Appear><ListItem textSize={32}>Built with Angular 4 &amp; waves-ui</ListItem></Appear>
            <Appear><ListItem textSize={32}>Bundled with basic extractors</ListItem></Appear>
            <Appear><ListItem textSize={32}>Can dynamically load modules</ListItem></Appear>
            <Appear><ListItem textSize={32}>Extraction happens in a Worker</ListItem></Appear>
            <Appear><ListItem textSize={32}>Uses Piper.js Streaming client</ListItem></Appear>
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
    <Heading size={3}>Let's make something</Heading>
    <Iframe url="https://stackblitz.com/edit/melody-transcriber?embed=1&file=Transcriber.tsx&hideExplorer=1"
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
    <Heading size={3}>What was this?</Heading>
    <List>
      <Appear><ListItem textSize={36}>Building cross-platform audio analysis apps with web technologies</ListItem></Appear>
      <Appear><ListItem textSize={36}>Tools for bringing existing work to the browser</ListItem></Appear>
      <Appear><ListItem textSize={36}>Used in SV 3.0 for out of process extraction, potential JS extractors</ListItem></Appear>
      <Appear><ListItem textSize={36}>A prototype app showcasing possibilities</ListItem></Appear>
      <Appear><ListItem textSize={36}>Quick tour</ListItem></Appear>
    </List>
    <Appear>
      <Link
        textSize={42}
        href={'https://github.com/piper-audio'}
      >
        https://github.com/piper-audio
      </Link>
    </Appear>
   <Appear>
    <div>
    <Layout>
      <Fill>
      <Image width={'10%'} src={images.creativeCommons}/>
      <span>  </span>
      <Image width={'25%'} src={images.epsrcLogo}/>
      <Text textSize={16}>Supported by EPSRC Platform Grant EP/K009559/1</Text>
      </Fill>
    </Layout>
    </div>
   </Appear>
  </Slide>
);

const orderedSlides = [
  introSlide,
  backgroundSlide,
  existingExtractorsSlide,
  whatIsThisSlide,
  piperOverviewSlide,
  piperProtocolSlide,
  piperLevels,
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
