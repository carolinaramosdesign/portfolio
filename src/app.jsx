import { Container, Header, Footer, Hello, About, Project } from 'content';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';
import { StyledImage, StyledContainer } from 'component';
import rotate from 'content/rotate.png';

const App = () => (
    <DeviceOrientation className='react-orientation'>
        <Orientation orientation='landscape' alwaysRender={false}>
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
        </Orientation>
        <Orientation orientation='portrait' alwaysRender={false}>
            <StyledContainer fill alignment='center'>
                <StyledImage src={rotate} alt='Rotate' />
            </StyledContainer>
        </Orientation>
    </DeviceOrientation>
);

export default App;
