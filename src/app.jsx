import { Container, Header, Footer, Hello, About, Project } from 'content';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const App = () => (
    <Container>
        <BrowserRouter basename='/portfolio'>
            <Header />
            <Switch>
                <Route exact path={['', '/']} component={Hello} />
                <Route exact path='/about' component={About} />
                <Route exact path='/project/:project' component={Project} />
                <Redirect to='/' />
            </Switch>
            <Footer />
        </BrowserRouter>
    </Container>
);

export default App;
