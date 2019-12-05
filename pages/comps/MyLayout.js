import Header from '../comps/Header';
const layoutStyle = {
    margin:20,
    padding:20,
    border:'1px solid #DDD'
};

const Layout = props =>(
    <div style={layoutStyle}>
        <Header />
        {props.children}
        {/* {props.content} */}
    </div>
);
export default Layout;