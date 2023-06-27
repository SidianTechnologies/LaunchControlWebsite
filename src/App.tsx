function App() {

  const arr = [];
  for (let i = 0; i < 2; i++) {
    arr.push(i);
  }

  return(
    <div className="fixed w-full h-screen overflow-auto">
      {arr.map((e) => (
        <div key={e} className="w-full h-full border-2 transition-all duration-300">
          <img className="w-full h-full object-fit" src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/10-porsche-718-cayman-gt4-rs-top-10.jpg?itok=BacF-43A"/>
        </div>
      ))}
    </div>
  )
}

export default App
