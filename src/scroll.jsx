import './App.css'

export default function App() {
  return (
    <main className='scroll' onClick={scroll}>
        <button className="sb" id="scroll">
        Contact
        </button>
    </main>
  )
}

function scroll(){
    // alert('clicked')
    // scroll to .contact
    var element = document.getElementById('contact');
    element.scrollIntoView({behavior: 'smooth'});
    // window.scrollBy(0, -100);
    document.getElementById('scroll').style.opacity = '0';
    // x.style.opacity = '0';
}