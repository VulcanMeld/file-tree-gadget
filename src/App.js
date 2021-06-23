
function App() {
  return <div>
   <Folder name="Desktop" />
   <Folder name= "Applications" />
   <Folder />
</div>

}

const Folder = (props) => {
  return <h1>{props.name}</h1>
};

export default App;
