import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import {Comment} from "./component/Comment";
import {FormExample} from "./bootstrap/FormExample";
//import {AlertDismissable} from "./bootstrap/AlertDismissable";
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
const MyComment = () => <Comment author={value} date={new Date()}/>;
const
    value = {
        avatarUrl: "https://dh.img.tyt.by/552x368c/n/ekonomika/04/1/dengi_pensiya_zarplata_monety_valyuta.jpg",
        name: "sample",
        text: "text"
    };
const Picture = () => <img
    src="https://dh.img.tyt.by/279x186c/p/0e/1/zagl-renault_v_ramkakh_masshtabnoy_rasprodazhi.jpg" width="279"
    height="186" alt="Распродажа в&nbsp;салонах Renault: максимальные скидки на&nbsp;внедорожники, кредит под 4,4%!"
/>;

const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/1">About1</Link>
                    </li>
                    <li>
                        <OldSchoolMenuLink to="/about/3" component={Child} label="About3"/>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                    <li>
                        <Link to="/comment/">Comment</Link>
                    </li>
                    <li>
                        <Link to="/picture/">Picture</Link>
                    </li>
                    <li>
                        <Link to="/old-match">Old Match, to be redirected</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact component={Index}/>
                <Route path="/about/:id(1|2|3)" component={Child}/>
                <Route path="/users/" component={Users}/>
                <Route path="/comment/" component={MyComment}/>
                <Route path="/picture/" component={Picture}/>
                <Redirect from="/old-match" to="/will-match"/>
                <Route component={NoMatch}/>
            </Switch>
        </div>
    </Router>
);

const routes = [
    {
        path: "/",
        exact: {Index},
        sidebar: () => <div>Index!</div>,
        main: () => <h2>Index</h2>
    },
    {
        path: "/about/:id(1|2|3)",
        sidebar: () => <div>About</div>,
        main: Child
    },
    {
        path: "/users/",
        sidebar: () => <div>Users</div>,
        main: Users
    },
    {
        path: "/comment/",
        sidebar: () => <div>Comment</div>,
        main: MyComment
    },
    {
        path: "/picture/",
        sidebar: () => <div>Picture</div>,
        main: Picture
    }
];

function Child({match}) {
    return (
        <div>
            <h3>ID: {match.params.id}</h3>
        </div>
    );
}

function NoMatch({location}) {
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

function OldSchoolMenuLink({label, to, activeOnlyWhenExact}) {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match}) => (
                <div className={match ? "active" : ""}>
                    {match ? "* " : ""}
                    <Link to={to}>{label}</Link>
                </div>
            )}
        />
    );
}

function SidebarExample() {
    return (
        <Router>
            <div style={{display: "flex"}}>
                <div
                    style={{
                        padding: "10px",
                        width: "40%",
                        background: "#f0f0f0"
                    }}
                >
                    <ul style={{listStyleType: "none", padding: 0}}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/1">About1</Link>
                        </li>
                        <li>
                            <OldSchoolMenuLink to="/about/3" component={Child} label="About3"/>
                        </li>
                        <li>
                            <Link to="/users/">Users</Link>
                        </li>
                        <li>
                            <Link to="/comment/">Comment</Link>
                        </li>
                        <li>
                            <Link to="/picture/">Picture</Link>
                        </li>
                        <li>
                            <Link to="/old-match">Old Match, to be redirected</Link>
                        </li>
                    </ul>


                    {routes.map((route, index) => (
                        // You can render a <Route> in as many places
                        // as you want in your app. It will render along
                        // with any other <Route>s that also match the URL.
                        // So, a sidebar or breadcrumbs or anything else
                        // that requires you to render multiple things
                        // in multiple places at the same URL is nothing
                        // more than multiple <Route>s.
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.sidebar}
                        />
                    ))}
                </div>

                <div style={{flex: 1, padding: "10px"}}>
                    {routes.map((route, index) => (
                        // Render more <Route>s with the same paths as
                        // above, but different components this time.
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))}
                </div>
            </div>
        </Router>
    );
}

export default SidebarExample;

ReactDOM
    .render(
        //<Comment author={value} date={new Date()}/>,
        <SidebarExample/>,
        document
            .getElementById(
                'root'
            ))
;
/*ReactDOM.render(<AlertDismissable/>, document
        .getElementById(
            'root'
        ));*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker
    .register();
