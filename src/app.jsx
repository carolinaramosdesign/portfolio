import { Container, Header, Footer, Hello, About } from 'content';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
    <Container>
        <BrowserRouter basename="/portfolio">
            <Header />
            <Switch>
                <Route exact path={['', '/']}>
                    <Hello />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    </Container>
);

export default App;
