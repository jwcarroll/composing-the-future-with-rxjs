// Import React
import React from "react";
import Color from "color";

// Import Spectacle Core tags
import {
  BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide,
  Text, Layout, Fill, Fit, Image, Code, Appear, Link, CodePane, Table,
  TableHeader, TableHeaderItem, TableItem, TableRow, TableBody, S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import CodeSlide from 'spectacle-code-slide';
import CodeRunner from '../assets/components/code-runner';
import RawHtml from '../assets/components/raw-html';

// Require CSS
require("normalize.css");
require("../assets/styles/nice-scrollbar.css");
require("animate.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  rxjsLogo: require("../assets/rxjs-logo.png"),
  resultStackLogo: require("../assets/rs-banner-transparent.png"),
  rxjsSnakeOil: require("../assets/rxjs-oil.png"),
  confused: require("file-loader!../assets/confused.mp4"),
  eventsOverTimeRed: require("../assets/events-over-time-red.png"),
  eventsOverTimeYellow: require("../assets/events-over-time-yellow.png"),
  eventsOverTimeBlue: require("../assets/events-over-time-blue.png")
};

const data = {
  users: require("../assets/snippets/sample-data.json")
};

preloader(images);

const colors = {
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  codebg: "#2d2d2d",
  red: "#CC0D0A",
  yellow: '#F5B700'
};

const darkenBy = 0.5;

colors.primaryDark = Color(colors.primary).darken(darkenBy);
colors.secondaryDark = Color(colors.secondary).darken(darkenBy);
colors.tertiaryDark = Color(colors.tertiary).darken(darkenBy);
colors.quartenaryDark = Color(colors.quartenary).darken(darkenBy);

const styles = {
  strikethrough: {textDecoration:'line-through', opacity:'0.5'},
  keyword: {
    textShadow: '1px 1px 1px #000',
    color:colors.yellow,
    textTransform: 'uppercase'
  }
};

const theme = createTheme(colors, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.rxjsLogo.replace("/", "")} margin="0px auto 40px" />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Composing The Future With RxJS
          </Heading>
          <Layout>
            <Fill>
              <Text margin="40px 0 0" textColor="tertiary" size={1} bold>
                Josh Carroll
              </Text>
            </Fill>
            <Fill>
              <Text margin="40px 0 0" textColor="tertiary" size={1} bold>
                @jwcarroll
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.resultStackLogo.replace("/", "")} margin="0px auto 40px" />
          <Appear>
            <div style={{ marginBottom: "40px" }}>
              <RawHtml html={require("raw-loader!../assets/snippets/rs-capabilities.html")}></RawHtml>
            </div>
          </Appear>
          <Appear>
            <div>
              <Layout>
                <Fill>
                  <Text margin="40px 0 0" textColor="quartenary" size={1} bold>
                    Josh Carroll
                </Text>
                </Fill>
                <Fill>
                  <Text margin="40px 0 0" textColor="quartenary" size={1} bold>
                    Director of Consulting
                </Text>
                </Fill>
              </Layout>
            </div>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            What is RxJS?
          </Heading>
          <Appear>
            <Text margin="40px 0 0" size={1} bold>
              Let's check the website...
            </Text>
          </Appear>
          <Appear>
            <Text margin="40px 0 0" size={1} bold>
              <Link href="http://reactivex.io/">http://reactivex.io/</Link>
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>An API for asynchronous programming</Quote>
            <Quote>with observable streams</Quote>
            <Cite>reactivex.io</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>ReactiveX is a combination of the best ideas from</Quote>
            <Appear><Quote>the Observer pattern,</Quote></Appear>
            <Appear><Quote>the Iterator pattern,</Quote></Appear>
            <Appear><Quote>and functional programming</Quote></Appear>
            <Cite>reactivex.lolol</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>ReactiveX is everywhere, and it's meant for everything.</Quote>
            <Cite>reactivex.trollface</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Layout>
            <Fit><Image src={images.rxjsSnakeOil.replace("/", "")} /></Fit>
            <Fit>
              <Appear>
                <Heading size={4} textColor="primary">RxJS Oil...</Heading>
              </Appear>
              <Appear>
                <Heading size={4} textColor="primary">Cures Programming!</Heading>
              </Appear>
            </Fit>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">Confused?</Heading>
          <video width="900px" autoPlay loop>
            <source src={images.confused.replace("/", "")}></source>
          </video>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="tertiary">The Problem</Heading>
          <Appear>
            <Text margin="40px">Procedural Thinking</Text>
          </Appear>
          <Layout style={{ alignItems: "center" }}>
            <Fill>
              <Appear>
                <CodePane textSize="18px" lang="json" source={require("raw-loader!../assets/snippets/sample-data.json")}></CodePane>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Heading size={3} textColor="tertiary">=></Heading>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHeaderItem padding="10px">Id</TableHeaderItem>
                      <TableHeaderItem padding="10px">Name</TableHeaderItem>
                      <TableHeaderItem padding="10px">Age</TableHeaderItem>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.users.map(u =>
                      <TableRow>
                        <TableItem>{u.id}</TableItem>
                        <TableItem>{u.name}</TableItem>
                        <TableItem>{u.age}</TableItem>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} fit textColor="tertiary">Applications Are Dynamic</Heading>
          <Appear>
            <Heading size={4}>Data Sources</Heading>
          </Appear>
          <Layout style={{ justifyContent: "space-around" }}>
            <Appear>
              <List>
                <ListItem>Server (request)</ListItem>
                <ListItem>Server (push)</ListItem>
                <ListItem>Browser</ListItem>
              </List>
            </Appear>
            <Appear>
              <List>
                <ListItem>User Events</ListItem>
                <ListItem>System Events</ListItem>
                <ListItem>Application Events</ListItem>
              </List>
            </Appear>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} margin="0px auto 20px" textColor="tertiary">Data is...</Heading>
          <Layout>
            <Fill>
              <Appear>
                <Heading size={2} margin="0px 10px 0px"><span style={{color:colors.tertiaryDark}}>Async</span></Heading>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Heading size={2} margin="0px 10px 0px"><span style={{color:colors.tertiaryDark}}>Layered</span></Heading>
              </Appear>
            </Fill>
          </Layout>
          <Appear>
            <Image src={images.eventsOverTimeYellow.replace("/", "")} margin="20px auto 0" />
          </Appear>
          <Image src={images.eventsOverTimeRed.replace("/", "")} margin="20px auto 0" />
          <Appear>
            <Image src={images.eventsOverTimeBlue.replace("/", "")} margin="20px auto 0" />
          </Appear>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} fit margin="0px auto 20px" textColor="tertiary">Strategies</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" textColor="primary">Callbacks</Heading>
          <Layout style={{ justifyContent: "center" }}>
            <CodePane style={{minWidth: "0px"}} textSize="32px" lang="javascript" source={require("raw-loader!../assets/snippets/the-callback.es6")}></CodePane>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" textColor="primary">Callback Hell</Heading>
          <Layout style={{ justifyContent: "center" }}>
            <CodePane style={{minWidth: "0px"}} textSize="24px" lang="javascript" source={require("raw-loader!../assets/snippets/callback-hell.es6")}></CodePane>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" textColor="primary">Promises</Heading>
          <Layout style={{ justifyContent: "center" }}>
            <CodePane style={{minWidth: "0px"}} textSize="32px" lang="javascript" source={require("raw-loader!../assets/snippets/promises.es6")}></CodePane>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} fit margin="0px auto 20px" textColor="tertiary">Promise Limitations</Heading>
          <Layout>
            <Appear>
              <Heading size={4} margin="0px auto 10px" textColor="secondary">Immediate</Heading>
            </Appear>
            <Appear>
              <Heading size={4} margin="0px auto 10px" textColor="secondary">Single Value</Heading>          
            </Appear>
          </Layout>
          <Layout style={{ justifyContent: "space-around" }}>
            <Appear>
              <List>
                <ListItem>Server (request)</ListItem>
                <ListItem>Server (push)</ListItem>
                <ListItem>Browser</ListItem>
                <ListItem>User Events</ListItem>
                <ListItem>System Events</ListItem>
                <ListItem>App Events</ListItem>
              </List>
            </Appear>
            <Appear>
              <List>
                <ListItem textColor="red">Server (request)</ListItem>
                <ListItem style={styles.strikethrough}>Server (push)</ListItem>
                <ListItem textColor="red">Browser*</ListItem>
                <ListItem style={styles.strikethrough}>User Events</ListItem>
                <ListItem style={styles.strikethrough}>System Events</ListItem>
                <ListItem style={styles.strikethrough}>App Events</ListItem>
              </List>
            </Appear>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} margin="0px 0 40px" fit caps lineHeight={1} textColor="primary">
            If only we could...
          </Heading>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>Compose those <span style={styles.keyword}>streams</span> of data</Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold><span style={styles.keyword}>observe</span> the results over time</Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>and <span style={styles.keyword}>react</span> to the changes</Text>
          </Appear>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/simple-observable.es6")}
          ranges={[
            { loc: [0, 8], title: "Enter The Observable" },
            { loc: [0, 1], note: "Import Observable from rxjs to avoid bringing in entire library" },
            { loc: [2, 4], note: "Create an observable from a DOM event" },
            { loc: [5, 6], note: "Observables are lazy" },
            { loc: [6, 7], note: "Callbck with each result" },
            { loc: [0, 8], note: <CodeRunner code={require("raw-loader!../assets/snippets/simple-observable.es6")}></CodeRunner> }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/simple-observable-with-filter.es6")}
          ranges={[
            { loc: [0, 13], title: "Chaining and Operators" },
            { loc: [6, 13] },
            { loc: [7, 8], note: "Transform values with map" },
            { loc: [9, 10], note: "Capture only the vowels" },
            { loc: [10, 13] },
            { loc: [0, 13], note: <CodeRunner code={require("raw-loader!../assets/snippets/simple-observable-with-filter.es6")}></CodeRunner> },
            { loc: [8, 9], title: "A Note About .let()", note: "Takes an Observable. Returns an Observable." }
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} margin="0px 0 40px" fit caps lineHeight={1} textColor="primary">
            What <i>is</i> an Observable anyway?
          </Heading>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>Observables are just <span style={styles.keyword}>functions</span></Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>That take an <span style={styles.keyword}>observer</span></Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>And return a <span style={styles.keyword}>function</span></Text>
          </Appear>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/basic-observable-pattern.es6")}
          ranges={[
            { loc: [0, 12], title: "Basic Observable Pattern" },
            { loc: [0, 8], note: "Simple callback pattern" },
            { loc: [1, 4], note: "Synchronous Values" },
            { loc: [5, 7] },
            { loc: [9, 12], title: "Simple Observer", note: "Object implements 'next' callback" },
            { loc: [9, 12], note: <CodeRunner code={require("raw-loader!../assets/snippets/basic-observable-pattern.es6")}></CodeRunner> }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/basic-observable-pattern-async.es6")}
          ranges={[
            { loc: [0, 21], title: "Async Observable" },
            { loc: [0, 12] },
            { loc: [4, 5], note: "Calback pattern is identical" },
            { loc: [3, 6], note: "Asynchronous Values" },
            { loc: [7, 11], note: "Unsubscribe is for cleaning up resources" },
            { loc: [13, 16], note: "Keep track of our unsubscribe function" },
            { loc: [17, 21], note: "Unsubscribe to avoid memory leaks!" },
            { loc: [17, 21], note: <CodeRunner code={require("raw-loader!../assets/snippets/basic-observable-pattern-async.es6")}></CodeRunner> }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/basic-observable-operator-pattern.es6")}
          ranges={[
            { loc: [0, 42], title: "Observable Operators" },
            { loc: [0, 7], note: "Basic observable pattern" },
            { loc: [8, 8], title: "What is an Operator?" },
            { loc: [8, 9], note: "Accepts a source Observable" },
            { loc: [9, 10], note: "Returns a new Observable" },
            { loc: [18, 19], note: "That calls the source Observable" },
            { loc: [10, 17], note: "Create an Observer that filters the source values" },
            { loc: [11, 16], note: "Same Observer pattern 'next'" },
            { loc: [12, 15], note: "Execute predicate to determine when to execute 'next'" },
            { loc: [22, 27], note: "Create a new filtered Observable" },
            { loc: [28, 31], note: "Call our new Observable to begin execution" },
            { loc: [28, 31], note: <CodeRunner code={require("raw-loader!../assets/snippets/basic-observable-operator-pattern.run.1.es6")}></CodeRunner>},
            { loc: [28, 28], title: "But Wait!", note: "There's more..." },
            { loc: [32, 38], note: "Compose Observables to create new Observables" },
            { loc: [39, 42], note: "Execute the composed Observable" },
            { loc: [39, 42], note: <CodeRunner code={require("raw-loader!../assets/snippets/basic-observable-operator-pattern.run.2.es6")}></CodeRunner> }
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} margin="0px 0 40px" fit caps lineHeight={1} textColor="primary">
            So an Observable is really just...
          </Heading>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>A pattern for setting up a <span style={styles.keyword}>contract</span></Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>Between a <span style={styles.keyword}>producer</span></Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>And a <span style={styles.keyword}>consumer</span></Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" textColor="primary">The Observer Contract</Heading>
          <Layout style={{ justifyContent: "center" }}>
            <CodePane style={{minWidth: "0px"}} textSize="32px" lang="typescript" source={require("raw-loader!../assets/snippets/rxjs/observer-interface.ts")}></CodePane>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} fit margin="0px auto 20px" textColor="tertiary">Using RxJS</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/rxjs/simple-sync.es6")}
          ranges={[
            { loc: [0, 11], title: "Creating Observables" },
            { loc: [3, 4], note: "Class instead of function" },
            { loc: [4, 7], note: "Same Observer contract" },
            { loc: [7, 8], note: "Signal that no more values are coming" },
            { loc: [10, 11], note: "Subscribe is more flexible" },
            { loc: [10, 11], note: <CodeRunner code={require("raw-loader!../assets/snippets/rxjs/simple-sync.es6")}></CodeRunner>}
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/rxjs/simple-sync-lifecycle.es6")}
          ranges={[
            { loc: [0, 13], title: "Lifecycle Methods" },
            { loc: [4, 6] },
            { loc: [9, 12], note: "Callbacks for each message type" },
            { loc: [9, 10], note: ".next()" },
            { loc: [10, 11], note: ".error()" },
            { loc: [11, 12], note: ".complete()" },
            { loc: [8, 13], note: "Error will not be called" },
            { loc: [8, 13], note: <CodeRunner code={require("raw-loader!../assets/snippets/rxjs/simple-sync-lifecycle.es6")}></CodeRunner>}
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/rxjs/simple-sync-lifecycle-error.es6")}
          ranges={[
            { loc: [0, 13], title: "Errors" },
            { loc: [2, 7] },
            { loc: [5, 6], note: "Signal to observer some error condition" },
            { loc: [10, 11], note: ".error()" },
            { loc: [8, 13], note: "Complete will not be called" },
            { loc: [8, 13], note: <CodeRunner code={require("raw-loader!../assets/snippets/rxjs/simple-sync-lifecycle-error.es6")}></CodeRunner>}
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/rxjs/map-filter-do.es6")}
          ranges={[
            { loc: [0, 19], title: "Basic Operators" },
            { loc: [1, 4], note: "Import only the operators you care about!" },
            { loc: [5, 6], note: "Generate some asynchronous numbers" },
            { loc: [7, 15], note: "Class enables operator chaining" },
            { loc: [7, 8], note: "Save our subscription for later" },
            { loc: [16, 19], note: "Avoid memory leaks by cleaning up" },
            { loc: [8, 9], title: "Do Operator", note: "Pass through method. Great for logging." },
            { loc: [9, 10], title: "Filter Operator", note: "Allow only values that match predicate" },
            { loc: [11, 12], title: "Map Operator", note: "Transform values" },
            { loc: [12, 15] },
            { loc: [7, 15], note: <CodeRunner code={require("raw-loader!../assets/snippets/rxjs/map-filter-do.es6")}></CodeRunner>}
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/rxjs/let.es6")}
          ranges={[
            { loc: [0, 26], title: "More About Let" },
            { loc: [3, 4], note: "Import Operators" },
            { loc: [7, 10], note: "Logic is hard to read. Not reusable." },
            { loc: [11, 16], note: "Encapsulate logic into reusable method" },
            { loc: [18, 19], note: "Let me have the WHOLE Observable" },
            { loc: [17, 22], note: "Nice. Clean. Readable." },
            { loc: [17, 22], note: <CodeRunner code={require("raw-loader!../assets/snippets/rxjs/let.es6")}></CodeRunner>}
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/rxjs/skip-take.es6")}
          ranges={[
            { loc: [0, 17], title: "Skip and Take" },
            { loc: [1, 3], note: "Import Operators" },
            { loc: [7, 8], note: "Using .let() to encapsulate logging" },
            { loc: [8, 10], note: "Skip the first (N). Take only (N) values." },
            { loc: [7, 17], title:"Unsubscribe?" },
            { loc: [14, 17], note:".take() will automatically unsubscribe" },
            { loc: [7, 17], note: <CodeRunner code={require("raw-loader!../assets/snippets/rxjs/skip-take.es6")}></CodeRunner>}
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/rxjs/scan.es6")}
          ranges={[
            { loc: [0, 16], title: "Scan", note: "AKA Reduce" },
            { loc: [1, 2], note: "Import Operators" },
            { loc: [4, 7] },
            { loc: [9, 17], note: "Accumulate values and emit each result" },
            { loc: [10, 15], note: "Accumulator callback" },
            { loc: [13, 14], note: "Keep a running total" },
            { loc: [15, 16], note: "Optional seed value" },
            { loc: [8, 22] },
            { loc: [17, 22], note: <CodeRunner code={require("raw-loader!../assets/snippets/rxjs/scan.es6")}></CodeRunner>}
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/rxjs/switchMap.es6")}
          ranges={[
            { loc: [0, 0], title: "Switch Map" },
            { loc: [2, 3], note: "Star Wars API" },
            { loc: [4, 7], note: "User input" },
            { loc: [8, 19] },
            { loc: [10, 12], note: "Get only numbers" },
            { loc: [12, 13], note: "Switch the stream to a new Observable" },
            { loc: [13, 19], note: "Stream of movies now instead of keypress events" },
            { loc: [8, 19] },
            { loc: [8, 19], note: <CodeRunner code={require("raw-loader!../assets/snippets/rxjs/switchMap.es6")}></CodeRunner>}
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/rxjs/mergeMap.es6")}
          ranges={[
            { loc: [0, 0], title: "Merge Map", note: "AKA Flat Map" },
            { loc: [2, 3], note: "Star Wars API" },
            { loc: [4, 7], note: "1 - 7 Asynchronously" },
            { loc: [8, 18] },
            { loc: [10, 11], note: "Use .let() to execute custom logic" },
            { loc: [19, 23], note: "We all know..." },
            { loc: [12, 13], note: "Switch to stream of episodes" },
            { loc: [13, 15], note: "Observables of Observables" },
            { loc: [15, 18], note: "Merge all streams together" },
            { loc: [8, 18] },
            { loc: [8, 18], note: <CodeRunner code={require("raw-loader!../assets/snippets/rxjs/mergeMap.es6")}></CodeRunner>}
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} margin="0px 0 40px" fit caps lineHeight={1} textColor="primary">
            That's cool!
          </Heading>
          <Appear>
            <Heading size={1} caps lineHeight={1} textColor="primary">
              But...
            </Heading>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>Why does this <span style={styles.keyword}>matter</span>?</Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>How is this <span style={styles.keyword}>useful</span>?</Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} margin="0px 0 40px" fit caps lineHeight={1} textColor="primary">
            Why does it matter?
          </Heading>
          <Appear>
            <Text size={1} margin="20px 0px" bold>
              Because applications are <span style={styles.keyword}>dynamic</span> compositions of both <span style={styles.keyword}>data</span> and <span style={styles.keyword}>events</span>
            </Text>
          </Appear>
          <Appear>
            <Heading size={1} margin="0px 0 40px" fit caps lineHeight={1} textColor="primary">
            And RxJS
            </Heading>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>
              <span style={styles.keyword}>normalizes</span> both <span style={styles.keyword}>data</span> and <span style={styles.keyword}>events</span>
            </Text>
          </Appear>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/snippets/rxjs/mergeMap.complex.es6")}
          ranges={[
            { loc: [0, 19], title: "Merge Map" },
            { loc: [6, 15] },
            { loc: [6, 15], note: <CodeRunner code={require("raw-loader!../assets/snippets/rxjs/mergeMap.complex.es6")}></CodeRunner>}
          ]}>
        </CodeSlide>
      </Deck>
    );
  }
}