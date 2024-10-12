import ShowItems from "../ShowItems/ShowItems";

const HomeComponent = () => {
  const folders = ["New folder", "new folder 2"];
  const files = ["New file", "new file 2"]; 

  return (
    <div className="col-md-12 w-100">
      <ShowItems title={"Created Folders"} items={folders}  />
      <ShowItems title={"Created Files"} items={files} />
      {/* <ShowItems /> */}
    </div>
  )

}
export default HomeComponent


