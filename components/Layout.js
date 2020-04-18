const wrapper = {
  margin: "auto",
  maxWidth: "1280px",
  padding: "0 25px",
};

const Layout = (props) => (
  <div style={wrapper} className='margin-auto '>
    {props.children}
  </div>
);

export default Layout;
